// app/schools/SchoolTable.tsx
'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { School } from '@/interfaces/school';
import { Search, ChevronLeft, ChevronRight, Rows3 } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  schools: School[];
}

export default function SchoolTable({ schools }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  // debounce search (300 ms)
  const debounceSearch = useDebouncedCallback((val: string) => {
    setSearch(val);
    setPage(1);
  }, 300);

  // filtering
  const filtered = useMemo(() => {
    if (!search.trim()) return schools;
    const lower = search.toLowerCase();
    return schools.filter(
      (s) =>
        s.school_name.toLowerCase().includes(lower) ||
        String(s.smis_code).toLowerCase().includes(lower)
    );
  }, [search, schools]);

  // pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  const goPage = (p: number) => setPage(Math.max(1, Math.min(totalPages, p)));

  return (
    <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600">
        หน้าแรก &gt; รายชื่อโรงเรียน
      </nav>

      <h1 className="text-3xl font-bold text-slate-800">รายชื่อโรงเรียน</h1>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหาด้วย ชื่อโรงเรียน / รหัส SMIS"
            onChange={(e) => debounceSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Per page */}
        <div className="flex items-center gap-2">
          <Rows3 className="w-4 h-4 text-slate-500" />
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="border border-slate-300 rounded-lg px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-sm text-slate-600">แถว/หน้า</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-200">
            <tr>
              {['ที่','รหัส SMIS', 'ชื่อโรงเรียน', 'ศูนย์พัฒนาวิชาการ', 'อำเภอ'].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-1xl font-semibold text-slate-600 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">
            {paginated.length ? (
              paginated.map((s) => (
                <tr
                  key={s.id}
                  className="hover:bg-slate-50 cursor-pointer transition"
                  onClick={() => router.push(`/schools/${s.id}`)}
                >
                  <td className="px-4 py-3 text-sm text-slate-800">{s.id}</td>
                  <td className="px-4 py-3 text-sm text-slate-800">{s.smis_code}</td>
                  <td className="px-4 py-3 text-sm text-slate-800">
                    {s.school_name} 
                      <span
                          className={`p-1 m-2 rounded-2xl ${
                            s.type_education === "อนุบาล-ประถมศึกษา"
                              ? "bg-yellow-400"
                              : s.type_education === "อนุบาล-มัธยมศึกษาตอนต้น"
                              ? "bg-orange-400"
                              : "bg-green-400"
                          }`}
                        >
                          {s.type_education}
                      </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">{s.school_group}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{s.district}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-10 text-slate-500">
                  ไม่พบข้อมูล
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
 
        {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm mt-6">
            <button
            onClick={() => goPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <ChevronLeft className="w-4 h-4" />
            </button>

            {/* สร้างหมายเลขเพจ */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
                key={n}
                onClick={() => goPage(n)}
                className={`px-3 py-1 border rounded-md transition ${
                n === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'hover:bg-slate-100'
                }`}
            >
                {n}
            </button>
            ))}

            <button
            onClick={() => goPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
            <ChevronRight className="w-4 h-4" />
            </button>
        </div>
        )}
    </main>
  );
}
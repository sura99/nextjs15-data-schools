"use client";

import { useState, useMemo } from "react";
import { Cct } from "@/interfaces/cct";

interface Props {
  ccts: Cct[];
}

export default function CctTable({ ccts }: Props) {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // ดึงปีและเทอมจาก data
  const years = useMemo(
    () => Array.from(new Set(ccts.map(c => c.year_data))).sort((a, b) => Number(b) - Number(a)), // ปีล่าสุดอยู่บนสุด
    [ccts]
  );
  const terms = useMemo(
    () => Array.from(new Set(ccts.map(c => c.term_data))).sort(),
    [ccts]
  );

  // กำหนดค่า default เป็นปีล่าสุดและเทอม 1
  const [selectedYear, setSelectedYear] = useState(years[0] || "");
  const [selectedTerm, setSelectedTerm] = useState("1");

  // Filtered Data
  const filtered = useMemo(() => {
    return ccts.filter(item => {
      const matchSchool = item.school_name.toLowerCase().includes(search.toLowerCase());
      const matchYear = selectedYear ? item.year_data === selectedYear : true;
      const matchTerm = selectedTerm ? item.term_data === selectedTerm : true;
      return matchSchool && matchYear && matchTerm;
    });
  }, [ccts, search, selectedYear, selectedTerm]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginated = filtered.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="space-y-4">
      {/* Filter */}
      <div className="flex flex-wrap gap-3 items-center mb-2">
        <input
          type="text"
          placeholder="ค้นหาชื่อโรงเรียน"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          className="border rounded p-2 flex-1 min-w-[200px]"
        />

        <select value={selectedYear} onChange={(e) => { setSelectedYear(e.target.value); setCurrentPage(1); }} className="border rounded p-2">
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>

        <select value={selectedTerm} onChange={(e) => { setSelectedTerm(e.target.value); setCurrentPage(1); }} className="border rounded p-2">
          {terms.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <select value={rowsPerPage} onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }} className="border rounded p-2">
          {[10, 20, 50, 100].map(num => <option key={num} value={num}>{num} แถว/หน้า</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full text-sm bg-white border-collapse">
          <thead>
            <tr className="bg-blue-100"> 
                <th rowSpan={3} className="p-2 border">ที่</th>
                <th rowSpan={3} className="p-2 border">รหัส 10 หลัก (กระทรวง)</th>
                <th rowSpan={3} className="p-2 border">ชื่อโรงเรียน</th>
                <th colSpan={7} className="p-2 border text-center bg-yellow-100">ระดับประถมศึกษา * 500 บาท</th>
                <th colSpan={7} className="p-2 border text-center bg-green-100">ระดับมัธยมศึกษาตอนต้น * 1,500 บาท</th> 
                <th rowSpan={3} className="p-2 border">รวมทั้งสิ้น</th> 
            </tr> 
            <tr className="bg-blue-50">
                <th colSpan={4} className="p-2 border bg-yellow-50">จำนวนนักเรียนยากจน</th>
                <th colSpan={2} className="p-2 border bg-yellow-50">จ.น.นร.ตามระดับความยากจน</th>
                <th rowSpan={2} className="p-2 border bg-yellow-50">งบประมาณ</th>
                <th colSpan={4} className="p-2 border bg-green-50">จำนวนนักเรียนยากจน</th>
                <th colSpan={2} className="p-2 border bg-green-50">จ.น.นร.ตามระดับความยากจน</th>
                <th rowSpan={2} className="p-2 border bg-green-50">งบประมาณ</th> 
            </tr> 
            <tr className="bg-blue-50"> 
                <th className="p-2 border">สมัครผ่าน DMC</th> 
                <th className="p-2 border">สมัครผ่าน CCT</th> 
                <th className="p-2 border">ทำการคัดกรอง</th> 
                <th className="p-2 border">ได้รับจัดสรร</th> 
                <th className="p-2 border">ยากจน</th>
                <th className="p-2 border">ยากจนพิเศษ</th>
                <th className="p-2 border">สมัครผ่าน DMC</th>
                <th className="p-2 border">สมัครผ่าน CCT</th>
                <th className="p-2 border">ทำการคัดกรอง</th> 
                <th className="p-2 border">ได้รับจัดสรร</th>
                <th className="p-2 border">ยากจน</th> 
                <th className="p-2 border">ยากจนพิเศษ</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((item, idx) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-2 border text-center">{(currentPage - 1) * rowsPerPage + idx + 1}</td>
                <td className="p-2 border">{item.moe_code}</td>
                <td className="p-2 border">{item.school_name}</td>

                {/* ประถมศึกษา */}
                <td className="p-2 border text-center">{item.p_register_dmc || "-"}</td>
                <td className="p-2 border text-center">{item.p_register_cct || "-"}</td>
                <td className="p-2 border text-center">{item.p_screen || "-"}</td>
                <td className="p-2 border text-center">{item.p_receive || "-"}</td>
                <td className="p-2 border text-center">{item.p_poor || "-"}</td>
                <td className="p-2 border text-center">{item.p_ex_poor || "-"}</td>
                <td className="p-2 border text-right">{item.p_budget}</td>

                {/* มัธยมต้น */}
                <td className="p-2 border text-center">{item.m_register_dmc || "-"}</td>
                <td className="p-2 border text-center">{item.m_register_cct || "-"}</td>
                <td className="p-2 border text-center">{item.m_screen || "-"}</td>
                <td className="p-2 border text-center">{item.m_receive || "-"}</td>
                <td className="p-2 border text-center">{item.m_poor || "-"}</td>
                <td className="p-2 border text-center">{item.m_ex_poor || "-"}</td>
                <td className="p-2 border text-right">{item.m_budget}</td>

                <td className="p-2 border text-right text-red-600">{item.budget_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination แบบตัวเลข modern */}
      <div className="flex justify-center gap-2 flex-wrap mt-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ก่อนหน้า
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 border rounded ${currentPage === num ? "bg-blue-500 text-white" : ""}`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          ถัดไป
        </button>
      </div>
    </div>
  );
}

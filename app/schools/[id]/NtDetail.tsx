'use client';
import { School } from '@/interfaces/school';
import { useMemo, useState } from 'react';

interface Props { school: School }

export default function NtFullTable({ school }: Props) {
  const years = [...new Set((school.nts ?? []).map(m => m.year_exam))].sort(
    (a, b) => Number(b) - Number(a)
  );
  const [selectedYear, setSelectedYear] = useState('');

  const rows = useMemo(() => {
    if (!selectedYear) return school.nts ?? [];
    return (school.nts ?? []).filter(m => m.year_exam === selectedYear);
  }, [selectedYear, school.nts]);

  if (!rows.length) {
    return <p className="text-slate-500 mt-4">ไม่มีข้อมูลคะแนน NT</p>;
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">คะแนนสอบ NT ทุกปี</h2>

        {/* Dropdown เลือกปี */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-slate-300 rounded-md px-3 py-1 text-sm"
        >
          <option value="">ทุกปี</option>
          {years.map((y) => (
            <option key={y} value={y}>
              ปี {y}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-100 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">
            <tr className="text-center">
              <th className="px-4 py-3 border-r border-slate-200">ปีสอบ</th>
              <th className="px-4 py-3 border-r border-slate-200" colSpan={2}>
                คณิตศาสตร์
              </th>
              <th className="px-4 py-3 border-r border-slate-200" colSpan={2}>
                ภาษาไทย
              </th>
              <th className="px-4 py-3" colSpan={2}>
                เฉลี่ยรวม
              </th>
            </tr>
            <tr className="text-center">
              <th className="px-4 py-2 border-r border-slate-200"></th>
              <th className="px-4 py-2 border-r border-slate-200">เฉลี่ย</th>
              <th className="px-4 py-2 border-r border-slate-200">SD</th>
              <th className="px-4 py-2 border-r border-slate-200">เฉลี่ย</th>
              <th className="px-4 py-2 border-r border-slate-200">SD</th>
              <th className="px-4 py-2 border-r border-slate-200">เฉลี่ย</th>
              <th className="px-4 py-2">SD</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-sm">
            {rows.map((m) => (
              <tr key={m.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-center">{m.year_exam}</td>
                <td className="px-4 py-3 text-right">{Number(m.math_avg).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.math_sd).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.th_avg).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.th_sd).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.total_avg).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.total_sd).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
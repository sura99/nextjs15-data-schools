'use client';
import { School } from '@/interfaces/school';
import { useState } from 'react';

interface Props { school: School }

export default function NtDetail({ school }: Props) {
    // ปีทั้งหมด
  const years = [...new Set((school.nts ?? []).map((m) => m.year_exam))].sort(
  (a, b) => Number(b) - Number(a)
);
  // state ปีที่เลือก
  const [selectedYear, setSelectedYear] = useState<string>(
    years[0] ?? ''
  );

  const mis = (school.nts ?? []).find((m) => m.year_exam === selectedYear);

  console.log('>>> nts:', school.nts);

  return (
    <section className="mt-8">
      {/* เลือกปี */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-slate-800">คะแนนสอบ NT</h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-slate-300 rounded-md px-3 py-1 text-sm"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              ปี {y}
            </option>
          ))}
        </select>
      </div>

      {mis ? (
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-100 text-sm font-semibold text-slate-800 border-b-2 border-slate-300">
                <tr className="text-center">
                    <th className="px-4 py-3 border-r border-slate-200" rowSpan={2}>วิชา</th>
                    <th className="px-4 py-3 border-r border-slate-200" colSpan={2}>คณิตศาสตร์</th>
                    <th className="px-4 py-3 border-r border-slate-200" colSpan={2}>ภาษาไทย</th>
                    <th className="px-4 py-3" colSpan={2}>เฉลี่ยรวม</th>
                </tr>
                <tr className="text-center">
                    <th className="px-4 py-2 border-r border-slate-200">เฉลี่ย</th>
                    <th className="px-4 py-2 border-r border-slate-200">SD</th>
                    <th className="px-4 py-2 border-r border-slate-200">เฉลี่ย</th>
                    <th className="px-4 py-2 border-r border-slate-200">SD</th>
                    <th className="px-4 py-2 border-r border-slate-200">เฉลี่ย</th>
                    <th className="px-4 py-2">SD</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-sm">
              <tr>
                <td className="px-4 py-3 text-center">คะแนน</td>
                <td className="px-4 py-3 text-right">{Number(mis.math_avg).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(mis.math_sd).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(mis.th_avg).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(mis.th_sd).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(mis.total_avg).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(mis.total_sd).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-slate-500">ไม่มีข้อมูลในปีที่เลือก</p>
      )}
    </section>
  );
}
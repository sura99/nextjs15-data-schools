'use client';

import { School } from '@/interfaces/school';
import { useState } from 'react';

interface Props {
  school: School;
}

export default function OnetDetail({ school }: Props) {

  // ปีทั้งหมด
  const years = [...new Set(school.onets.map((m) => m.year_exam))].sort(
    (a, b) => Number(b) - Number(a)
  );
  // state ปีที่เลือก
  const [selectedYear, setSelectedYear] = useState<string>(
    years[0] ?? ''
  );

  const mis = school.onets.find((m) => m.year_exam === selectedYear);

  return (
    <main className="mt-8">

      {/* เลือกปี */}
      {years.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-slate-800">
              คะแนนสอบ ONET
            </h2>
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
                <thead className="bg-slate-50 text-sm font-semibold text-slate-700">
                  <tr>
                    <th className="px-4 py-3">วิชา</th>
                    <th className="px-4 py-3 text-right">ภาษาไทย</th>
                    <th className="px-4 py-3 text-right">วิทยาศาสตร์</th>
                    <th className="px-4 py-3 text-right">คณิตศาสตร์</th>
                    <th className="px-4 py-3 text-right">ภาษาอังกฤษ</th>
                    <th className="px-4 py-3 text-right">ค่าเฉลี่ย</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-sm">
                  <tr>

                    <td className="px-4 py-3 text-right">คะแนน</td>
                    <td className="px-4 py-3 text-right">{Number(mis.score_th).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">{Number(mis.score_sci).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">{Number(mis.score_math).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">{Number(mis.score_eng).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">{Number(mis.score_average).toFixed(2)}</td>
                  </tr>
                  {/* เพิ่มแถวอื่น ๆ ตามฟิลด์ */}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-slate-500">ไม่มีข้อมูลนักเรียนในปีที่เลือก</p>
          )}
        </section>
      )}
    </main>
  );
}
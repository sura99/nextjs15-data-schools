'use client';
import { School } from '@/interfaces/school';
import { useMemo, useState } from 'react';

interface Props { school: School }

export default function OnetFullTable({ school }: Props) {
  const years = [...new Set(school.onets.map(m => m.year_exam))].sort(
    (a, b) => Number(b) - Number(a)
  );
  const [search, setSearch] = useState('');

  const rows = useMemo(() => {
    if (!search) return school.onets;
    return school.onets.filter(m => m.year_exam === search);
  }, [search, school.onets]);

  if (!school.onets?.length) {
    return <p className="text-slate-500">ไม่มีข้อมูล ONET</p>;
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">คะแนนสอบ ONET ทุกปี</h2>
        <select
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          <thead className="bg-slate-50 text-sm font-semibold text-slate-700">
            <tr>
              <th className="px-4 py-3 text-center">ปีสอบ</th>
              <th className="px-4 py-3 text-right">ภาษาไทย</th>
              <th className="px-4 py-3 text-right">วิทยาศาสตร์</th>
              <th className="px-4 py-3 text-right">คณิตศาสตร์</th>
              <th className="px-4 py-3 text-right">ภาษาอังกฤษ</th>
              <th className="px-4 py-3 text-right">ค่าเฉลี่ย</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-sm">
            {rows.map((m) => (
              <tr key={m.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-center">{m.year_exam}</td>
                <td className="px-4 py-3 text-right">{Number(m.score_th).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.score_sci).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.score_math).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.score_eng).toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{Number(m.score_average).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
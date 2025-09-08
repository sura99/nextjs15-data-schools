'use client';
import { School } from '@/interfaces/school';
import { useMemo, useState } from 'react';

interface Props { school: School }

export default function OnetM3FullTable({ school }: Props) {
  const years = [...new Set(school.onetm3s.map(m => m.year_exam))].sort(
    (a, b) => Number(b) - Number(a)
  );
  const [search, setSearch] = useState('');

  const rows = useMemo(() => {
    if (!search) return school.onetm3s;
    return school.onetm3s.filter(m => m.year_exam === search);
  }, [search, school.onetm3s]);

  if (!school.onetm3s?.length) {
    return <p className="text-slate-500">แสดงข้อมูล ONET ม.3 เฉพาะโรงเรียนขยายโอกาส</p>;
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800">คะแนนสอบ ONET ม.3</h2>
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
  {rows.map((cur, idx) => {
    const isLastYear = idx === rows.length - 1;
    const prev = rows.find(r => Number(r.year_exam) === Number(cur.year_exam) - 1);
    const thPrev   = prev ? Number(prev.score_th)   : 0;
    const sciPrev  = prev ? Number(prev.score_sci)  : 0;
    const mathPrev = prev ? Number(prev.score_math) : 0;
    const engPrev  = prev ? Number(prev.score_eng)  : 0;
    const avgPrev  = prev ? Number(prev.score_average) : 0;

    const getSignAndColor = (val: number, prevVal: number) => {
      if (isLastYear) return { sign: '', className: '' };
      
      const diff = val - prevVal;
      if (diff === 0) return { sign: '', className: '' };
      if (diff > 0) return { sign: '+', className: 'text-green-600 text-2xl' };
      return { sign: '-', className: 'text-red-600 text-2xl' };
    };

    const thSign = getSignAndColor(Number(cur.score_th), thPrev);
    const sciSign = getSignAndColor(Number(cur.score_sci), sciPrev);
    const mathSign = getSignAndColor(Number(cur.score_math), mathPrev);
    const engSign = getSignAndColor(Number(cur.score_eng), engPrev);
    const avgSign = getSignAndColor(Number(cur.score_average), avgPrev);

    return (
      <tr key={cur.id} className="hover:bg-slate-50">
        <td className="px-4 py-3 text-center">{cur.year_exam}</td>
        <td className="px-4 py-3 text-right">
          <span className={thSign.className}>{thSign.sign}</span>
          {Number(cur.score_th).toFixed(2)}
        </td>
        <td className="px-4 py-3 text-right">
          <span className={sciSign.className}>{sciSign.sign}</span>
          {Number(cur.score_sci).toFixed(2)}
        </td>
        <td className="px-4 py-3 text-right">
          <span className={mathSign.className}>{mathSign.sign}</span>
          {Number(cur.score_math).toFixed(2)}
        </td>
        <td className="px-4 py-3 text-right">
          <span className={engSign.className}>{engSign.sign}</span>
          {Number(cur.score_eng).toFixed(2)}
        </td>
        <td className="px-4 py-3 text-right">
          <span className={avgSign.className}>{avgSign.sign}</span>
          {Number(cur.score_average).toFixed(2)}
        </td>
      </tr>
    );
  })}
</tbody>
        </table>
      </div>
    </section>
  );
}
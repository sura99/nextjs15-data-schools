'use client';

import { useState } from 'react';
import { School } from '@/interfaces/school';

interface Props {
  schools: School[];
}

export default function SchoolmisSummary({ schools }: Props) {
  // รวมข้อมูล schoolmis ของทุกโรงเรียน
  const allSchoolmis = (schools ?? []).flatMap((s) => s.schoolmis ?? []);

  // ปีทั้งหมด
  const years = [...new Set(allSchoolmis.map((s) => s.year_data))].sort(
    (a, b) => Number(b) - Number(a)
  );

  const [selectedYear, setSelectedYear] = useState<string>(years[0] ?? '');

  const filtered = allSchoolmis.filter((s) => s.year_data === selectedYear);

  // function รวมค่าตาม field ของ SchoolMis
  const sum = filtered.reduce((acc, cur) => {
    const add = (field: keyof typeof cur) => Number(cur[field] ?? 0);

    // อนุบาล
    for (let i = 1; i <= 3; i++) {
      const key = `nursery${i}` as const;
      acc[key] = {
        male: (acc[key]?.male || 0) + add(`nursery${i}_male` as keyof typeof cur),
        female: (acc[key]?.female || 0) + add(`nursery${i}_female` as keyof typeof cur),
        total: (acc[key]?.total || 0) + add(`nursery${i}_total` as keyof typeof cur),
        room: (acc[key]?.room || 0) + add(`nursery${i}_room` as keyof typeof cur),
      };
    }
    acc.nurseryTotal = {
      male: (acc.nurseryTotal?.male || 0) + add('nursery_male_total' as keyof typeof cur),
      female: (acc.nurseryTotal?.female || 0) + add('nursery_female_total' as keyof typeof cur),
      total: (acc.nurseryTotal?.total || 0) + add('nursery_total' as keyof typeof cur),
      room: (acc.nurseryTotal?.room || 0) + add('nursery_room_total' as keyof typeof cur),
    };

    // ประถม
    for (let i = 1; i <= 6; i++) {
      const key = `primary${i}` as const;
      acc[key] = {
        male: (acc[key]?.male || 0) + add(`primary${i}_male` as keyof typeof cur),
        female: (acc[key]?.female || 0) + add(`primary${i}_female` as keyof typeof cur),
        total: (acc[key]?.total || 0) + add(`primary${i}_total` as keyof typeof cur),
        room: (acc[key]?.room || 0) + add(`primary${i}_room` as keyof typeof cur),
      };
    }
    acc.primaryTotal = {
      male: (acc.primaryTotal?.male || 0) + add('primary_male_total' as keyof typeof cur),
      female: (acc.primaryTotal?.female || 0) + add('primary_female_total' as keyof typeof cur),
      total: (acc.primaryTotal?.total || 0) + add('primary_total' as keyof typeof cur),
      room: (acc.primaryTotal?.room || 0) + add('primary_room_total' as keyof typeof cur),
    };

    // ม.ต้น
    for (let i = 1; i <= 3; i++) {
      const key = `secondary${i}` as const;
      acc[key] = {
        male: (acc[key]?.male || 0) + add(`secondary${i}_male` as keyof typeof cur),
        female: (acc[key]?.female || 0) + add(`secondary${i}_female` as keyof typeof cur),
        total: (acc[key]?.total || 0) + add(`secondary${i}_total` as keyof typeof cur),
        room: (acc[key]?.room || 0) + add(`secondary${i}_room` as keyof typeof cur),
      };
    }
    acc.lowerSecondaryTotal = {
      male: (acc.lowerSecondaryTotal?.male || 0) + add('lower_secondary_male_total' as keyof typeof cur),
      female: (acc.lowerSecondaryTotal?.female || 0) + add('lower_secondary_female_total' as keyof typeof cur),
      total: (acc.lowerSecondaryTotal?.total || 0) + add('lower_secondary_total' as keyof typeof cur),
      room: (acc.lowerSecondaryTotal?.room || 0) + add('lower_secondary_room_total' as keyof typeof cur),
    };

    // ม.ปลาย
    for (let i = 4; i <= 6; i++) {
      const key = `secondary${i}` as const;
      acc[key] = {
        male: (acc[key]?.male || 0) + add(`secondary${i}_male` as keyof typeof cur),
        female: (acc[key]?.female || 0) + add(`secondary${i}_female` as keyof typeof cur),
        total: (acc[key]?.total || 0) + add(`secondary${i}_total` as keyof typeof cur),
        room: (acc[key]?.room || 0) + add(`secondary${i}_room` as keyof typeof cur),
      };
    }
    acc.upperSecondaryTotal = {
      male: (acc.upperSecondaryTotal?.male || 0) + add('upper_secondary_male_total' as keyof typeof cur),
      female: (acc.upperSecondaryTotal?.female || 0) + add('upper_secondary_female_total' as keyof typeof cur),
      total: (acc.upperSecondaryTotal?.total || 0) + add('upper_secondary_total' as keyof typeof cur),
      room: (acc.upperSecondaryTotal?.room || 0) + add('upper_secondary_room_total' as keyof typeof cur),
    };

    // รวมทั้งหมด
    acc.total = {
      male: (acc.total?.male || 0) + add('total_male' as keyof typeof cur),
      female: (acc.total?.female || 0) + add('total_female' as keyof typeof cur),
      total: (acc.total?.total || 0) + add('total_all' as keyof typeof cur),
      room: (acc.total?.room || 0) + add('total_room' as keyof typeof cur),
    };

    return acc;
  }, {} as Record<string, { male: number; female: number; total: number; room: number }>);

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">ข้อมูลนักเรียนตามปี</h2>

      {/* Dropdown เลือกปี */}
      {years.length > 0 && (
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-slate-300 rounded-md px-3 py-1 mb-4"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              ปี {y}
            </option>
          ))}
        </select>
      )}

      <table className="table-auto border-collapse border border-slate-300 w-full text-center">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-300 px-4 py-2">ระดับชั้น</th>
            <th className="border border-slate-300 px-4 py-2">ชาย</th>
            <th className="border border-slate-300 px-4 py-2">หญิง</th>
            <th className="border border-slate-300 px-4 py-2">รวม</th>
            <th className="border border-slate-300 px-4 py-2">ห้อง</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((i) => (
            <tr key={`nursery${i}`}>
              <td className="border border-slate-300 px-4 py-2">อ.{i}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`nursery${i}`]?.male}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`nursery${i}`]?.female}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`nursery${i}`]?.total}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`nursery${i}`]?.room}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border border-slate-300 px-4 py-2">รวมก่อนประถม</td>
            <td className="border border-slate-300 px-4 py-2">{sum.nurseryTotal?.male}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.nurseryTotal?.female}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.nurseryTotal?.total}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.nurseryTotal?.room}</td>
          </tr>

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <tr key={`primary${i}`}>
              <td className="border border-slate-300 px-4 py-2">ป.{i}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`primary${i}`]?.male}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`primary${i}`]?.female}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`primary${i}`]?.total}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`primary${i}`]?.room}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border border-slate-300 px-4 py-2">รวมประถม</td>
            <td className="border border-slate-300 px-4 py-2">{sum.primaryTotal?.male}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.primaryTotal?.female}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.primaryTotal?.total}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.primaryTotal?.room}</td>
          </tr>

          {[1, 2, 3].map((i) => (
            <tr key={`secondary${i}`}>
              <td className="border border-slate-300 px-4 py-2">ม.{i}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.male}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.female}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.total}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.room}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border border-slate-300 px-4 py-2">รวม ม.ต้น</td>
            <td className="border border-slate-300 px-4 py-2">{sum.lowerSecondaryTotal?.male}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.lowerSecondaryTotal?.female}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.lowerSecondaryTotal?.total}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.lowerSecondaryTotal?.room}</td>
          </tr>

          {[4, 5, 6].map((i) => (
            <tr key={`secondary${i}`}>
              <td className="border border-slate-300 px-4 py-2">ม.{i}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.male}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.female}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.total}</td>
              <td className="border border-slate-300 px-4 py-2">{sum[`secondary${i}`]?.room}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border border-slate-300 px-4 py-2">รวม ม.ปลาย</td>
            <td className="border border-slate-300 px-4 py-2">{sum.upperSecondaryTotal?.male}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.upperSecondaryTotal?.female}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.upperSecondaryTotal?.total}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.upperSecondaryTotal?.room}</td>
          </tr>

          <tr className="font-bold bg-slate-200">
            <td className="border border-slate-300 px-4 py-2">รวมทั้งหมด</td>
            <td className="border border-slate-300 px-4 py-2">{sum.total?.male}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.total?.female}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.total?.total}</td>
            <td className="border border-slate-300 px-4 py-2">{sum.total?.room}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

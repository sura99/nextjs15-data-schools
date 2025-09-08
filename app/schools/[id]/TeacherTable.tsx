'use client';

import { School } from '@/interfaces/school';
import { useState } from 'react';

interface Props {
  school: School;
}

export default function TeacherTableDetail({ school }: Props) {
  const years = [...new Set(school.teachers.map((t) => t.year_data))].sort(
    (a, b) => Number(b) - Number(a)
  );

  const [selectedYear, setSelectedYear] = useState<string>(years[0] ?? '');

  const teachersOfYear = school.teachers.filter(
    (t) => t.year_data === selectedYear
  );

  return (
    <main className="mt-8 px-2 md:px-0">
      {/* เลือกปี */}
      {years.length > 0 && (
        <section className="bg-white shadow rounded-lg p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              ข้อมูลครู
            </h2>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  ปี {y}
                </option>
              ))}
            </select>
          </div>

          {/* ตารางครู */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ผอ.</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">รอง ผอ.</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ครู</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">พนักงานราชการ</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ลูกจ้าง</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">รวม</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {teachersOfYear.map((t, idx) => (
                  <tr
                    key={t.id}
                    className="hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 text-gray-800">{t.director}</td>
                    <td className="px-4 py-3 text-gray-800">{t.sub_director}</td>
                    <td className="px-4 py-3 text-gray-800">{t.teacher_servant}</td>
                    <td className="px-4 py-3 text-gray-800">{t.teacher_goverment}</td>
                    <td className="px-4 py-3 text-gray-800">{t.teacher_employee}</td>
                    <td className="px-4 py-3 text-gray-800 font-semibold">{t.total_all}</td>
                  </tr>
                ))}
                {teachersOfYear.length === 0 && (
                  <tr>
                    <td
                      className="px-4 py-4 text-center text-gray-500"
                      colSpan={6}
                    >
                      ไม่มีข้อมูลครูในปีนี้
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
}

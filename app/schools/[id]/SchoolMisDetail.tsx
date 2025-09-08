'use client';

import { School } from '@/interfaces/school';
import { useState } from 'react';

interface Props {
  school: School;
}

export default function SchoolDetailClient({ school }: Props) {

  // ปีทั้งหมด
  const years = [...new Set(school.schoolmis.map((m) => m.year_data))].sort(
    (a, b) => Number(b) - Number(a)
  );
  // state ปีที่เลือก
  const [selectedYear, setSelectedYear] = useState<string>(
    years[0] ?? ''
  );

  const mis = school.schoolmis.find((m) => m.year_data === selectedYear);

  return (
    <main className="mt-8">

      {/* เลือกปี */}
      {years.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-slate-800">
              ข้อมูลนักเรียน
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
                    <th className="px-4 py-3">ระดับชั้น</th>
                    <th className="px-4 py-3 text-right">ชาย</th>
                    <th className="px-4 py-3 text-right">หญิง</th>
                    <th className="px-4 py-3 text-right">รวม</th>
                    <th className="px-4 py-3 text-right">ห้อง</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-sm">

                  {/* ถ้า อ.1 มีค่าเป็น 0 ไม่ต้องแสดง */}
                  {mis.nursery1_total !== "0" && (
                  <>
                    <tr>
                      <td className="px-4 py-3">อ.1</td>
                      <td className="px-4 py-3 text-right">{mis.nursery1_male}</td>
                      <td className="px-4 py-3 text-right">{mis.nursery1_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.nursery1_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.nursery1_room}</td>
                    </tr>
                  </>
                  )}
                  <tr>
                    <td className="px-4 py-3">อ.2</td>
                    <td className="px-4 py-3 text-right">{mis.nursery2_male}</td>
                    <td className="px-4 py-3 text-right">{mis.nursery2_female}</td>
                    <td className="px-4 py-3 text-right font-medium">{mis.nursery2_total}</td>
                    <td className="px-4 py-3 text-right font-medium">{mis.nursery2_room}</td>
                  </tr>
                   <tr>
                    <td className="px-4 py-3">อ.3</td>
                    <td className="px-4 py-3 text-right">{mis.nursery3_male}</td>
                    <td className="px-4 py-3 text-right">{mis.nursery3_female}</td>
                    <td className="px-4 py-3 text-right font-medium">{mis.nursery3_total}</td>
                    <td className="px-4 py-3 text-right font-medium">{mis.nursery3_room}</td>
                  </tr>
                   <tr className='bg-orange-100'>
                    <td className="px-4 py-3">รวมก่อนประถม</td>
                    <td className="px-4 py-3 text-right">{mis.nursery_male_total}</td>
                    <td className="px-4 py-3 text-right">{mis.nursery_female_total}</td>
                    <td className="px-4 py-3 text-right font-medium">{mis.nursery_total}</td>
                    <td className="px-4 py-3 text-right font-medium">{mis.nursery_room_total}</td>
                  </tr>
                  
                   {/* ประถมศึกษา */}
                     <tr>
                      <td className="px-4 py-3">ป.1</td>
                      <td className="px-4 py-3 text-right">{mis.primary1_male}</td>
                      <td className="px-4 py-3 text-right">{mis.primary1_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary1_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary1_room}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">ป.2</td>
                      <td className="px-4 py-3 text-right">{mis.primary2_male}</td>
                      <td className="px-4 py-3 text-right">{mis.primary2_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary2_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary2_room}</td>
                    </tr>
                     <tr>
                      <td className="px-4 py-3">ป.3</td>
                      <td className="px-4 py-3 text-right">{mis.primary3_male}</td>
                      <td className="px-4 py-3 text-right">{mis.primary3_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary3_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary3_room}</td>
                    </tr>
                     <tr>
                      <td className="px-4 py-3">ป.4</td>
                      <td className="px-4 py-3 text-right">{mis.primary4_male}</td>
                      <td className="px-4 py-3 text-right">{mis.primary4_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary4_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary4_room}</td>
                    </tr>
                     <tr>
                      <td className="px-4 py-3">ป.5</td>
                      <td className="px-4 py-3 text-right">{mis.primary5_male}</td>
                      <td className="px-4 py-3 text-right">{mis.primary5_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary5_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary5_room}</td>
                    </tr>
                     <tr>
                      <td className="px-4 py-3">ป.6</td>
                      <td className="px-4 py-3 text-right">{mis.primary6_male}</td>
                      <td className="px-4 py-3 text-right">{mis.primary6_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary6_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary6_room}</td>
                    </tr>

                    {/* รวมประถมศึกษา */}
                    <tr className='bg-violet-100'>
                      <td className="px-4 py-3">รวมประถมศึกษา</td>
                      <td className="px-4 py-3 text-right">{mis.primary_male_total}</td>
                      <td className="px-4 py-3 text-right">{mis.primary_female_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.primary_room_total}</td>
                    </tr>

                    {/* ม.ต้น */} 
                    {/* ถ้า รวมทั้งสิ้น ม.ต้น มีค่าเป็น 0 ไม่ต้องแสดง */}
                    {mis.lower_secondary_total !== "0" && (
                      <>
                        <tr>
                          <td className="px-4 py-3">ม.1</td>
                          <td className="px-4 py-3 text-right">{mis.secondary1_male}</td>
                          <td className="px-4 py-3 text-right">{mis.secondary1_female}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary1_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary1_room}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">ม.2</td>
                          <td className="px-4 py-3 text-right">{mis.secondary2_male}</td>
                          <td className="px-4 py-3 text-right">{mis.secondary2_female}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary2_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary2_room}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">ม.3</td>
                          <td className="px-4 py-3 text-right">{mis.secondary3_male}</td>
                          <td className="px-4 py-3 text-right">{mis.secondary3_female}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary3_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary3_room}</td>
                        </tr>

                        {/* รวม ม.ต้น */}
                        <tr className="bg-blue-100">
                          <td className="px-4 py-3">รวม ม.ต้น</td>
                          <td className="px-4 py-3 text-right">{mis.lower_secondary_male_total}</td>
                          <td className="px-4 py-3 text-right">{mis.lower_secondary_female_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.lower_secondary_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.lower_secondary_room_total}</td>
                        </tr>
                      </>
                    )}


                     {/* ม.ปลาย */}
                     {/* ถ้า รวมทั้งสิ้น ม.ปลาย มีค่าเป็น 0 ไม่ต้องแสดง */}
                     {mis.upper_secondary_total !== "0" && (
                      <>
                      <tr>
                          <td className="px-4 py-3">ม.4</td>
                          <td className="px-4 py-3 text-right">{mis.secondary4_male}</td>
                          <td className="px-4 py-3 text-right">{mis.secondary4_female}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary4_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary4_room}</td>
                      </tr>
                      <tr>
                          <td className="px-4 py-3">ม.5</td>
                          <td className="px-4 py-3 text-right">{mis.secondary5_male}</td>
                          <td className="px-4 py-3 text-right">{mis.secondary5_female}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary5_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary5_room}</td>
                        </tr>
                      <tr>
                          <td className="px-4 py-3">ม.6</td>
                          <td className="px-4 py-3 text-right">{mis.secondary6_male}</td>
                          <td className="px-4 py-3 text-right">{mis.secondary6_female}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary6_total}</td>
                          <td className="px-4 py-3 text-right font-medium">{mis.secondary6_room}</td>
                        </tr>

                    {/* รวม ม.ปลาย */}
                    <tr className='bg-green-100'>
                      <td className="px-4 py-3">รวม ม.ปลาย</td>
                      <td className="px-4 py-3 text-right">{mis.upper_secondary_male_total}</td>
                      <td className="px-4 py-3 text-right">{mis.upper_secondary_female_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.upper_secondary_total}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.upper_secondary_room_total}</td>
                    </tr>
                    </>
                     )}

                     {/* รวม ทั้งสิ้น */}
                    <tr className='bg-red-200'>
                      <td className="px-4 py-3">รวมทั้งสิ้น</td>
                      <td className="px-4 py-3 text-right">{mis.total_male}</td>
                      <td className="px-4 py-3 text-right">{mis.total_female}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.total_all}</td>
                      <td className="px-4 py-3 text-right font-medium">{mis.total_room}</td>
                    </tr>
                  
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
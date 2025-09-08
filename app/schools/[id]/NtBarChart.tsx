'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { School } from '@/interfaces/school';

interface Props { school: School }

export default function NtBarChart({ school }: Props) {
  const subjects = ['คณิตศาสตร์', 'ภาษาไทย', 'เฉลี่ยรวม'];
  const keys = ['math_avg', 'th_avg', 'total_avg'] as const;

  const data = subjects.map((sub, idx) => ({
    subject: sub,
    ...Object.fromEntries(
      school.nts?.map(m => [m.year_exam, Number(m[keys[idx]])]) ?? []
    )
  }));

  if (!data.length) return <p className="text-slate-500">ไม่มีข้อมูล NT</p>;

  const years = [...new Set(school.nts?.map(m => m.year_exam) ?? [])].sort();

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        เปรียบเทียบคะแนน NT แต่ละวิชา (รายปี)
      </h3>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,.1)',
              }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            {years.map((yr, idx) => (
              <Bar
                key={yr}
                dataKey={yr}
                name={`ปี ${yr}`}
                fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][idx % 4]}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
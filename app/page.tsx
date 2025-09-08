import React from 'react'
import SummaryCard from '@/components/ui/CardComponet';
import { Users, School, UserCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <>
    <div className="mx-auto">
      <h4 className='ml-8 text-2xl'>ข้อมูล ณ 10 มิถุนายน 2568</h4>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        <SummaryCard
          title="โรงเรียน"
          value={185}
          icon={<School className="w-6 h-6" />}
          gradient="from-sky-400 to-sky-600"
          textColor="text-sky-100"
        /> 

        <SummaryCard
          title="นักเรียนชาย"
          value={"12,431"}
          icon={<Users className="w-6 h-6" />}
          gradient="from-teal-400 to-teal-600"
          textColor="text-emerald-100"
        />
        
        <SummaryCard
          title="นักเรียนหญิง"
          value={"11,031"}
          icon={<Users className="w-6 h-6" />}
          gradient="from-teal-400 to-teal-600"
          textColor="text-teal-100"
        />
        <SummaryCard
          title="นักเรียนทั้งหมด"
          value={"23,462"}
          icon={<Users className="w-6 h-6" />}
          gradient="from-emerald-400 to-emerald-600"
          textColor="text-emerald-100"
        />
        {/* บุคลากร */}
        <SummaryCard
          title="ผอ.โรงเรียน"
          value={152}
          icon={<UserCheck className="w-6 h-6" />}
          gradient="from-violet-400 to-violet-600"
          textColor="text-violet-100"
        />
        <SummaryCard
          title="รอง ผอ.โรงเรียน"
          value={25}
          icon={<Users className="w-6 h-6" />}
          gradient="from-violet-400 to-violet-600"
          textColor="text-violet-100"
        />
        <SummaryCard
          title="ครู"
          value={"1,775"}
          icon={<Users className="w-6 h-6" />}
          gradient="from-violet-400 to-violet-600"
          textColor="text-violet-100"
        />
        <SummaryCard
          title="รวมทั้งสิ้น"
          value={"1,952"}
          icon={<Users className="w-6 h-6" />}
          gradient="from-fuchsia-400 to-fuchsia-600"
          textColor="text-sky-100"
        />
      </section>
    </div>
    </>
  )
}
export default HomePage
import React from 'react'
import SummaryCard from '@/components/ui/CardComponet';
import { Users, School, UserCheck } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      <SummaryCard
        title="นักเรียน"
        value={12346}
        icon={<Users className="w-6 h-6" />}
        gradient="from-emerald-400 to-emerald-600"
        textColor="text-emerald-100"
      />
      <SummaryCard
        title="โรงเรียน"
        value={185}
        icon={<School className="w-6 h-6" />}
        gradient="from-sky-400 to-sky-600"
        textColor="text-sky-100"
      />
      <SummaryCard
        title="ครู"
        value={4567}
        icon={<UserCheck className="w-6 h-6" />}
        gradient="from-violet-400 to-violet-600"
        textColor="text-violet-100"
      />
       <SummaryCard
        title="นักเรียน"
        value={12456}
        icon={<Users className="w-6 h-6" />}
        gradient="from-emerald-400 to-emerald-600"
        textColor="text-emerald-100"
      />
      <SummaryCard
        title="โรงเรียน"
        value={185}
        icon={<School className="w-6 h-6" />}
        gradient="from-sky-400 to-sky-600"
        textColor="text-sky-100"
      />
    </section>
    </>
  )
}
export default HomePage
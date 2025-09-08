// app/schools/[id]/page.tsx
import { School } from '@/interfaces/school';
import SchoolMisDetail from './SchoolMisDetail'; // แยก client
import OnetDetail from './OnetDetail';
import OnetBarChart from './OnetBarChart';
import OnetDetailM3 from './OnetDetailM3';
import OnetBarChartM3 from './OnetBarChartM3'
import NtBarChart from './NtBarChart'
import NtDetail from './NtDetail'
import TeacherTalbe from './TeacherTable'
import {
  ArrowLeft,
  Users,
  MapPinPlus,
  University,
  Pin
} from 'lucide-react';
import Link from 'next/link';

import { Metadata } from 'next';

// เปลี่ยนชื่อตามที่เราคลิก
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const school = await getSchool(id);          // เรียกใช้ฟังก์ชันเดิม
  return {
    title: school ? `โรงเรียน${school.school_name}` : 'ไม่พบข้อมูล',
    description: `รายละเอียดโรงเรียน ${school?.school_name || ''}`,
  };
}

async function getSchool(id: string): Promise<School | null> {
  //const res = await fetch(`http://localhost:3001/schools/${id}`, { cache: 'no-store' });
  const res = await fetch(`http://209.15.117.226/api/schools/${id}`, { cache: 'no-store' });   //test api
  if (!res.ok) return null;
  const data = await res.json();
  return Array.isArray(data) ? data[0] : data;
}

export default async function SchoolDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const school = await getSchool(id);

  if (!school) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">ไม่พบข้อมูลโรงเรียน</h1>
        <Link
          href="/schools"
          className="mt-4 inline-flex items-center gap-2 text-blue-600 underline"
        >
          <ArrowLeft size={16} /> กลับหน้ารายการ
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full container mx-auto px-4 sm:px-8 space-y-8">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-xl shadow">
            
            {/*  เปลี่ยน ICON  */}
            <University className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
              โรงเรียน{school.school_name}
            </h1>
            <p className="mt-1 text-slate-600">รหัส SMIS: {school.smis_code}</p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card icon={<Users />} title="ศูนย์พัฒนาวิชาการ">
          {school.school_group}
        </Card>
        <Card icon={<Pin />} title="อำเภอ">
          {school.district}
        </Card>
         <Card icon={<MapPinPlus />} title="ที่อยู่">
          {school.moo} ต.{school.sub_distric} อ. {school.district} จ.เพชรบูรณ์  {school.zip_code}
        </Card>
         {/* <Card icon={<Map />} title="อ.1"> */}
          {/* {school.schoolmis[0]?.total_all ?? '-'} แบบนี้ข้อมูลไม่ปลอดภัย*/}
          {/* {school.schoolmis?.[0]?.total_all || 'ไม่มีข้อมูล'} */}
        {/* </Card> */}
      </section>

      <section>
          <TeacherTalbe school={school} />
      </section>

      <SchoolMisDetail school={school} />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OnetDetail school={school} />
        <OnetBarChart school={school} />
      </section>
      
      {school.onetm3s?.length ? (
          // แสดง component เมื่อมีข้อมูล
           <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OnetDetailM3 school={school} />
              <OnetBarChartM3 school={school} />
            </section>
        ) : null}

      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OnetDetailM3 school={school} />
        <OnetBarChartM3 school={school} />
      </section> */}
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NtDetail school={school} />
        <NtBarChart school={school} />
      </section>
      

      {/* Map */}
      {school.lat && school.long && (
        <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">แผนที่</h2>
            <div className="aspect-video rounded-xl overflow-hidden border">
            <iframe
                title="แผนที่โรงเรียน"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${school.lat},${school.long}`
                )}&hl=th&z=15&output=embed`}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
            ></iframe>
            </div>
        </section>
        )}

      {/* CTA */}
      <div>
        <Link
          href="/schools"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
        >
          <ArrowLeft size={16} /> เมนูโรงเรียน
        </Link>
      </div>
    </main>
  );
}

/* Reusable Card */
function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
      <div className="bg-slate-100 p-2 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-600">{children}</p>
      </div>
    </div>
  );
}
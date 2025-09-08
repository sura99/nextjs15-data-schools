// app/schools/page.tsx
import { School } from '@/interfaces/school';
import SchoolTable from './SchoolTable';
import { Metadata } from 'next';

// header แสดงข้อความบนหน้าเว็บ
export const metadata: Metadata = {
  title: 'รายชื่อโรงเรียนทั้งหมด',
  description: 'รายชื่อโรงเรียนในสังกัด สพป.เพชรบูรณ์ เขต 3',
};

async function getData(): Promise<School[]> {
  //const res = await fetch('http://localhost:3001/schools', { cache: 'no-store' });
  const res = await fetch('http://209.15.117.226/api/schools', { cache: 'no-store' });   //test api
  //if (!res.ok) throw new Error('Failed to fetch schools');
  if (!res.ok) throw new Error('Failed to fetch schools');
  return res.json();
}

export default async function SchoolsPage() {
  const schools = await getData();
  return <SchoolTable schools={schools} />;
}
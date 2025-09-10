// app/cct/page.tsx
import CctTable from '@/app/ccts/CctTable'
import { Cct } from '@/interfaces/cct';
import { Metadata } from 'next';


//header แสดงข้อความบนหน้าเว็บ
export const metadata: Metadata = {
  title: 'ปัจจัยพื้นฐานนักเรียนยากจน',
  description: 'รายชื่อโรงเรียนในสังกัด สพป.เพชรบูรณ์ เขต 3',
};

 async function getData(): Promise<Cct[]> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    //const res = await fetch('http://localhost:3001/cct', { cache: 'no-store' }); //localhost
    const res = await fetch(`${apiUrl}/cct`, { cache: 'no-store' }); 
    //if (!res.ok) throw new Error('Failed to fetch cct');
    if (!res.ok) throw new Error('Failed to fetch cct');
    return res.json();
  }

const page = async () => {
  const ccts = await getData()
  return (
    <>
        <CctTable ccts={ccts} />
    </>
  )
}

export default page
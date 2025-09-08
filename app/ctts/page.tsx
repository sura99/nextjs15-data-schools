import React from 'react'
import CctTable from '@/app/ctts/CctTable'
import { Metadata } from 'next';

// header แสดงข้อความบนหน้าเว็บ
export const metadata: Metadata = {
  title: 'ปัจจัยพื้นฐานนักเรียนยากจน',
  description: 'รายชื่อโรงเรียนในสังกัด สพป.เพชรบูรณ์ เขต 3',
};

const page = () => {
  return (
    <>
        <CctTable />
    </>
  )
}

export default page
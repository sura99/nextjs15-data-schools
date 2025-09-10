"use client";
import Link from "next/link";
import { BookOpen, FileText, Newspaper } from "lucide-react";


const BugetInfoPage = () => {
  const documents = [
    { text: "สรุปผลการเบิกจ่ายเงินงบประมาณ ปี พ.ศ.2568", href: "https://drive.google.com/drive/folders/1mGt52rmtlIlviH6BYHwBDGLdFX3PiXIo?usp=sharing", icon: <Newspaper size={20} className="text-red-400" /> },
    { text: "สรุปผลการเบิกจ่ายเงินงบประมาณ ปี พ.ศ.2567", href: "https://drive.google.com/drive/folders/1HV2VZAag4WKMtB6HgwWaOHldkcFq0NY6?usp=sharing", icon: <FileText size={20} className="text-orange-400" /> },
    { text: "ผลประเมินตัวชี้วัด", href: "https://drive.google.com/drive/folders/1kZomaJooIF7Z6nrADz-2cLqG9AGmgW-T?usp=sharing", icon: <BookOpen size={20} className="text-green-400" /> },
    { text: "แผนปฏิบัติการ", href: "https://drive.google.com/drive/folders/1R91m-OwouU4TmdAv1Ve8qRAS4UbQjoC7?usp=sharing", icon: <FileText size={20} className="text-sky-400" /> },
    { text: "แผนพัฒนาคุณภาพการศึกษาขั้นพื้นฐาน", href: "https://drive.google.com/drive/folders/1FjrYKAYQ9p5-FCvCda6tgvGUfe1lFiVR?usp=sharing", icon: <Newspaper size={20} className="text-pink-400" /> },
    { text: "รายงานการจัดการศึกษา ของ สพป.เพชรบูรณ์ เขต 3", href: "https://drive.google.com/drive/folders/1cy3Oy_bFwKyziFf4GYPMWitTLwZD1ezT?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "ปัจจัยพื้นฐานนักเรียนยากจน", href: "https://drive.google.com/drive/folders/1zvspZU0zIbGBc1M_YiZOlSfg2WfMI5tu?usp=sharing", icon: <Newspaper size={20} className="text-pink-400" /> },
    // { text: "", href: "", icon: <FileText size={20} className="text-pink-400" /> },

  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
          สารสนเทศด้านบริหารงานงบประมาณ
        </h1>

        {/* Grid 2 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <Link
              key={index}
              href={doc.href}
              target="_blank"
              className="flex items-center gap-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition shadow-sm"
            >
              <div className="flex-shrink-0">{doc.icon}</div>
              <span className="text-gray-700 dark:text-gray-200 font-medium">{doc.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default BugetInfoPage;

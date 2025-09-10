"use client";
import Link from "next/link";
import { BookOpen, FileText } from "lucide-react";


const AcademicInfoPage = () => {
  const documents = [
    { text: "ข้อมูลคุณลักษณะกับคิดวิเคราะห์", href: "https://drive.google.com/drive/folders/1jvTyeFKM9w3Oxl7-ur1NzZXG4aFMXdGC?usp=sharing", icon: <FileText size={20} className="text-pink-400" /> },
    { text: "ผลการประเมินคุณภาพภายในสถานศึกษา", href: "https://drive.google.com/drive/folders/1eN3PFErPNf8F7Mcy_NkOq8NjOUOovmpU?usp=sharing", icon: <FileText size={20} className="text-pink-400" /> },
    { text: "ผลการประเมินพัฒนาการนักเรียน", href: "https://drive.google.com/drive/folders/1zY4xkVja1MJWh9dUuLqy12M62YFr6-kA?usp=sharing", icon: <FileText size={20} className="text-sky-400" /> },
    { text: "ผลสอบ NT", href: "https://drive.google.com/drive/folders/1Jzhb4xq3EySeqVE7ESJUhfAyXihiiucI?usp=sharing", icon: <BookOpen size={20} className="text-green-400" /> },
    { text: "ผลสอบ O-NET", href: "https://drive.google.com/drive/folders/1Bg5h8IqVgi1gFbmHZUL3Kz1xKrrZcsF8?usp=sharing", icon: <FileText size={20} className="text-pink-400" /> },
    { text: "ผลสอบ RT", href: "https://drive.google.com/drive/folders/1PXier4Db6j3WJYNwdulkcDBG9rKCE48t?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "รายงาน SAR", href: "https://drive.google.com/drive/folders/1m02xkH8C6ZmgCvs6AjrkxD7Z67_Q2cDO?usp=sharing", icon: <FileText size={20} className="text-orange-400" /> },
    { text: "PISA", href: "https://drive.google.com/drive/folders/1fqr1TCJ4jQtiWE0bPeXU79TEX9c_f6N3?usp=sharing", icon: <BookOpen size={20} className="text-blue-400" /> },
    // { text: "", href: "", icon: <FileText size={20} className="text-pink-400" /> },

  ];

  return (
    <>
       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
          สารสนเทศด้านบริหารด้านวิชาการ
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

export default AcademicInfoPage;

"use client";
import Link from "next/link";
import { BookOpen, FileText } from "lucide-react";


const PersonInfoPage = () => {
  const documents = [   
    { text: "เกณฑ์อัตรากำลัง", href: "https://drive.google.com/drive/folders/1nhKM9UCsCWG6wm0gONZ9lo8cEFi-w_y-?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "ข้อมูลครูและบุคลากรทางการศึกษา", href: "https://drive.google.com/drive/folders/1DqnfI8hyZIGlqG0OQBcWS6B9g4vuJEK3?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "แผนอัตรากำลัง", href: "https://drive.google.com/drive/folders/14kUUF-CZMexsARM4XC7oQUeVFFvEiYVs?usp=sharing", icon: <FileText size={20} className="text-pink-400" /> },
  ];

  return (
    <>
       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
          สารสนเทศด้านบริหารงานบุคคล
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

export default PersonInfoPage;

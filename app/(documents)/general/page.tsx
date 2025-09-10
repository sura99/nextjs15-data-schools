"use client";
import Link from "next/link";
import { BookOpen, FileText, Newspaper } from "lucide-react";


const GeneralInfoPage = () => {
  const documents = [   
    { text: "ข้อมูลจำนวนนักเรียนจากระบบ DMC", href: "https://drive.google.com/drive/folders/1MjrcttB6hp7RsW5N9pgPvlTTyD3ryFWV?usp=sharing", icon: <Newspaper size={20} className="text-pink-400" /> },
    { text: "จำนวนนักเรียนด้อยโอกาสที่ได้รับการช่วยเหลือ", href: "https://drive.google.com/drive/folders/1vtRdhXiDlB9uAduvtHyfcquju_OOl833?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "ผลการติดตามมาตรฐาน", href: "https://drive.google.com/drive/folders/1f_793xIi4vq_H_giDJBOt70Zbf2-p5C2?usp=sharing", icon: <FileText size={20} className="text-pink-400" /> },
    { text: "ผลการประเมิน ITA", href: "https://drive.google.com/drive/folders/1c3I3kNYBGzSf9AkBI6BEoDO5FYHL4mJa?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "ผลการประเมิน PMQA", href: "https://drive.google.com/drive/folders/1DnwzmIUSyoVOwQHLfJNCe7FVrba9Iv5X?usp=sharing", icon: <FileText size={20} className="text-orange-400" /> },
    { text: "ผลการรับนักเรียน", href: "https://drive.google.com/drive/folders/1dSz80CbMPEfOnv6NZH0-yPnh8Y22ibPE?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "ผลการสำรวจความพึงพอใจ", href: "https://drive.google.com/drive/folders/1hlfaeruvfBFQaCUgesdl1W069NaK3YAJ?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "แผนการรับนักเรียน", href: "https://drive.google.com/drive/folders/1vVbCtQ2x8oxXjQ6VwtFo2ecpCjHtrYUe?usp=sharing", icon: <Newspaper size={20} className="text-pink-400" /> },
    { text: "แผนบริหารจัดการโรงเรียนขนาดเล็ก", href: "https://drive.google.com/drive/folders/1fvBpuDcPHYmh5Avi88wlcyIPU-L0qrwo?usp=sharing", icon: <BookOpen size={20} className="text-green-400" /> },
    { text: "แผนเต็มรูป", href: "https://drive.google.com/drive/folders/1V-wAPySRZf1MWFuZGvjzXmnWJLmVlfKU?usp=sharing", icon: <BookOpen size={20} className="text-pink-400" /> },
    { text: "ภาพรวมแผนชั้นเรียน", href: "https://drive.google.com/drive/folders/1i6b7rCL4C3VwKI5H6iORkFdKKx1s25Bq?usp=sharing", icon: <Newspaper size={20} className="text-violet-400" /> },
    // { text: "", href: "", icon: <BookOpen size={20} className="text-pink-400" /> },

  ];

  return (
    <>
       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100 text-center">
          สารสนเทศด้านบริหารงานทั่วไป
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

export default GeneralInfoPage;

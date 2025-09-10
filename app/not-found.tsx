"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-6xl font-bold mb-4 text-gray-700 dark:text-gray-200"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="text-lg mb-6 text-center text-gray-600 dark:text-gray-300"
      >
        ขอโทษครับ หน้าที่คุณกำลังค้นหาไม่พบ <br />
        กรุณาตรวจสอบ URL หรือกลับสู่หน้าหลัก
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          กลับสู่หน้าหลัก
        </Link>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    scale: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 px-4">
      {/* Animated Dots */}
      <div className="flex space-x-4 mb-6">
        <motion.div
          className="w-4 h-4 bg-blue-500 rounded-full"
          animate={{ y: ["0%", "-50%", "0%"], scale: [1, 1.5, 1] }}
          transition={{ ...bounceTransition, delay: 0 }}
        />
        <motion.div
          className="w-4 h-4 bg-green-500 rounded-full"
          animate={{ y: ["0%", "-50%", "0%"], scale: [1, 1.5, 1] }}
          transition={{ ...bounceTransition, delay: 0.2 }}
        />
        <motion.div
          className="w-4 h-4 bg-purple-500 rounded-full"
          animate={{ y: ["0%", "-50%", "0%"], scale: [1, 1.5, 1] }}
          transition={{ ...bounceTransition, delay: 0.4 }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="text-gray-700 dark:text-gray-200 text-lg font-medium"
      >
        กำลังโหลด...
      </motion.p>
    </div>
  );
}

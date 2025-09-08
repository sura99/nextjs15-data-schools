import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   reactStrictMode: true, // ถ้ามี
  // ปิด ESLint ตอน build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

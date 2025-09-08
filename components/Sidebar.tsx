"use client";

import { useState } from "react";
import { Menu, X, Home, BarChart3, Settings,Earth } from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`${
        open ? "w-64" : "w-16"
      } h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 ease-in-out flex flex-col shadow-xl`}
    >
      {/* Header with Logo */}
      <div className="flex items-center justify-between p-4">
        <div
          className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${
            open ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white"><Earth/></span>
          </div>
          <span className="text-xl font-bold text-white">PBN3 BIGDATA</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 hover:bg-gray-700 rounded transition-colors duration-200"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1 px-2">
        <ul className="space-y-2">
          <SidebarItem
            icon={<Home size={20} />}
            text="หน้าหลัก"
            href="/"
            open={open}
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            text="โรงเรียน"
            href="/schools"
            open={open}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            text="ปัจจัยพื้นฐานนักเรียนยากจน"
            href="/ctts"
            open={open}
          />
          {/* <SidebarItem
            icon={<FileInput size={20} />}
            text="NT"
            href="#"
            open={open}
          /> */}
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`px-4 py-3 text-sm text-gray-400 border-t border-gray-700 transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>สพป.เพชรบูรณ เขต 3</p>
      </div>
    </aside>
  );
}


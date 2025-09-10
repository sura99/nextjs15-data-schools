"use client";

import { useState } from "react";
import {
  Home,
  BarChart3,
  Settings,
  Earth,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  DollarSign,
  Users,
  Building,
  University,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

// ✅ Sidebar Item ธรรมดา
function SidebarItem({
  icon,
  text,
  href,
  open,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  open: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition ${
          open ? "justify-start" : "justify-center"
        }`}
      >
        {icon}
        {open && <span className="text-sm font-medium">{text}</span>}
      </a>
    </li>
  );
}

// ✅ Sidebar Dropdown (เมนูย่อย)
interface DropdownItem {
  text: string;
  href: string;
  icon?: React.ReactNode;
  target?: string; // _blank, _self, default
}

interface SidebarDropdownProps {
  icon: React.ReactNode;
  text: string;
  open: boolean;
  items: DropdownItem[];
}

function SidebarDropdown({ icon, text, open, items }: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={`flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 ${
            open ? "justify-between" : "justify-center"
          }`}
        >
          <div className="flex items-center gap-3">
            {icon}
            {open && <span className="text-sm font-medium">{text}</span>}
          </div>
          {open && (
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          )}
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <ul
          className={`mt-1 space-y-1 text-gray-300 text-sm ${
            open ? "pl-10" : "pl-3"
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target={item.target}
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-700 transition"
              >
                {item.icon && <span>{item.icon}</span>}
                {open && <span>{item.text}</span>}
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

// ✅ Sidebar หลัก
export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`${
        open ? "w-64" : "w-20"
      } h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 flex flex-col shadow-xl`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div
          className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${
            open ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Earth size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold">PBN3 BIGDATA</span>
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
          {/* เมนูหลัก */}
          <SidebarItem
            icon={<Home size={20} className="text-blue-400" />}
            text="หน้าหลัก"
            href="/"
            open={open}
          />
          <SidebarItem
            icon={<University size={20} className="text-green-400" />}
            text="โรงเรียน"
            href="/schools"
            open={open}
          />
          <SidebarItem
            icon={<BarChart3 size={20} className="text-purple-400" />}
            text="ปัจจัยพื้นฐานนักเรียนยากจน"
            href="/ccts"
            open={open}
          />

          {/* Dropdown Menu */}
          <SidebarDropdown
            icon={<Settings size={20} className="text-yellow-400" />}
            text="เอกสารเผยแพร่"
            open={open}
            items={[
              {
                text: "บริหารงานวิชาการ",
                href: "/academic",
                icon: <BookOpen size={18} className="text-green-400" />,
              },
              {
                text: "บริหารงานงบประมาณ",
                href: "budget",
                icon: <DollarSign size={18} className="text-yellow-400" />,
              },
              {
                text: "บริหารงานบุคคล",
                href: "/person",
                icon: <Users size={18} className="text-purple-400" />,
              },
              {
                text: "บริหารงานทั่วไป",
                href: "/general",
                icon: <Building size={18} className="text-pink-400" />,
              },
            ]}
          />
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`px-4 py-3 text-sm text-gray-400 border-t border-gray-700 transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <p>สพป.เพชรบูรณ์ เขต 3</p>
      </div>
    </aside>
  );
}

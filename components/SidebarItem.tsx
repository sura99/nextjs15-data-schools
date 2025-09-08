// components/sidebar/SidebarItem.tsx
import Link from "next/link";
import { ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  text: string;
  href: string;
  open: boolean;
};

export default function SidebarItem({ icon, text, href, open }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:text-white group ${
        open ? "justify-start" : "justify-center"
      }`}
    >
      <span className="text-gray-300 group-hover:text-white transition-colors">
        {icon}
      </span>
      <span
        className={`overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 w-auto" : "opacity-0 w-0"
        }`}
      >
        {text}
      </span>
    </Link>
  );
}
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  open: boolean;
}

export default function SidebarItem({ icon, text, href, open }: SidebarItemProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition-colors duration-200 overflow-hidden"
      >
        <div className="flex-shrink-0">{icon}</div>
        <span
          className={`transition-all duration-300 whitespace-nowrap ${
            open ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}
        >
          {text}
        </span>
      </a>
    </li>
  );
}

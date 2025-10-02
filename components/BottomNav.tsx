"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/request", label: "Заявка" },
  { href: "/analytics", label: "Аналитика" },
  { href: "/balance", label: "Финансы" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-red-700 flex justify-around py-2">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 text-center py-2 ${
              active ? "text-red-600 font-bold" : "text-gray-300"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import LangSwitcher from "./LangSwitcher";
import { useTranslation } from "@/lib/i18n";

/**
 * Sticky navigation bar component.  Contains the EVILS logo, page links and
 * language switcher.  On desktop the links are laid out horizontally.
 * Mobile users see a simplified horizontal layout; further enhancements
 * (collapsible menus) could be added as needed.
 */
export default function NavBar() {
  const { t } = useTranslation();
  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/request", label: t("nav.request") },
    { href: "/dashboard", label: t("nav.dashboard") },
    { href: "/about", label: t("nav.about") },
  ];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--panel)]/70 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo-evils.png"
            alt="EVILS logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-6 text-sm uppercase tracking-wide font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Language switcher */}
        <LangSwitcher />
      </div>
    </nav>
  );
}
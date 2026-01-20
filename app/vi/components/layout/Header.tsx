"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "../ui/Button";
import { LanguageSwitch } from "../ui/LanguageSwitch";

const MENU_ITEMS = [
  { label: "Trang Chủ", href: "/" },
  {
    label: (
      <>
        Tin <span className="text-[var(--red-normal)]">hot</span>
      </>
    ),
    href: "/",
  },
  { label: "Việc Làm", href: "/" },
  { label: "Về Chúng Tôi", href: "/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--blue-darker)] shadow-xl sticky top-0 z-100">
      {/* HEADER BAR */}
      <div className="h-[72px] px-4 flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 font-semibold text-white">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitch />
          <Button variant="primary">
            <Link href="/">Đăng nhập</Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-4">
          <LanguageSwitch />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--blue-darker)] border-t border-white/10">
          <ul className="flex flex-col gap-4 px-6 py-6 text-white font-semibold">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}

            <Button variant="primary">
              <Link href="/">Đăng nhập</Link>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
}

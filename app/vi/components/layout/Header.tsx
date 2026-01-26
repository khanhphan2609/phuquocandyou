"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Users, Search } from "lucide-react";

const MENU_ITEMS = [
  { label: "Điểm đến", href: "/" },
  { label: "Tiện ích", href: "/" },
  { label: "Tin tức", href: "/" },
  { label: "Tuyển dụng", href: "/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-6 py-5 flex items-center justify-between z-50 bg-[#001524]/70 backdrop-blur-2xl border-b border-white/10">

        {/* Left - Logo */}
        <h1 className="text-xl md:text-2xl font-black italic text-white whitespace-nowrap">
          PhuQuoc
          <span className="text-cyan-400">&</span>
          <span className="text-cyan-300">You</span>
        </h1>

        {/* Center - Nav + Search (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">

          {/* Navigation */}
          <div className="flex items-center gap-8 px-10 h-[55px] rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            {MENU_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-sm font-black uppercase tracking-[0.2em] text-white group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-[220px] h-[45px] pl-10 pr-5 rounded-full text-sm text-white bg-white/5 border border-white/20 backdrop-blur-xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all placeholder:text-white/50"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Mobile Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white bg-white/5 backdrop-blur-xl"
          >
            <Search size={18} />
          </button>

          {/* Login Button */}
          <button className="flex items-center gap-3 pl-2 pr-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all">

            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <Users className="text-white w-4 h-4 md:w-5 md:h-5" />
            </div>

            <div className="hidden md:flex flex-col items-start leading-none">
              <span className="text-[10px] font-black text-white uppercase">
                Member
              </span>
              <span className="text-[9px] font-bold text-cyan-300 uppercase">
                Đăng nhập
              </span>
            </div>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white bg-white/5 backdrop-blur-xl"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Search Expand */}
      {searchOpen && (
        <div className="lg:hidden fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] z-50">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              autoFocus
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full h-[50px] pl-10 pr-5 rounded-full text-sm text-white bg-[#001524]/95 border border-white/20 backdrop-blur-xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all placeholder:text-white/50"
            />
          </div>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-[#001524]/95 backdrop-blur-2xl border-l border-white/20 transform transition-transform duration-500 z-50 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col gap-6 mt-20">
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-bold uppercase tracking-[0.2em] hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <button className="mt-6 px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all">
            Liên hệ
          </button>
        </div>
      </div>
    </>
  );
}

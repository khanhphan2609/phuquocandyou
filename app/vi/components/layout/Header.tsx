"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MenuIcon,
  CloseIcon,
  SearchIcon,
  FaUserCircleIcon,
} from "../ui/Icons";

const MENU_ITEMS = [
  { label: "Điểm đến", href: "/" },
  { label: "Tiện ích", href: "/" },
  { label: "Tin tức", href: "/" },
  { label: "Tuyển dụng", href: "/" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // derive lang from pathname to avoid calling setState inside useEffect
  const lang = pathname?.startsWith("/en") ? ("EN" as const) : ("VI" as const);

  const switchLang = (l: "VI" | "EN") => {
    const p = pathname ?? (typeof window !== "undefined" ? window.location.pathname : "/");
    const base = p.replace(/^\/(?:vi|en)/, "") || "/";
    const target = base === "/" ? `/${l.toLowerCase()}` : `/${l.toLowerCase()}${base}`;
    setLangOpen(false);
    router.push(target);
  };


  return (
    <>
      <header className="w-full px-6 lg:px-12 py-6 lg:py-8 flex items-center justify-between lg:justify-start z-50 relative gap-4 lg:gap-0">
        {/* Logo */}
        <Link href="/" className="flex-none lg:pr-10">
          <Image
            src="/logo.png"
            alt="Phú Quốc & You"
            width={50}
            height={50}
            className="flex items-center font-black text-2xl tracking-tighter text-white cursor-pointer italic drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:scale-105 transition-all duration-500 whitespace-nowrap group"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="h-16 bg-[#001524]/40 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center px-10 hover:border-cyan-400/50 transition-all">
            <div className="flex gap-12 items-center text-xs lg:text-sm font-black uppercase tracking-[0.4em] text-white">
              {MENU_ITEMS.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`nav-link hover:text-cyan-300 transition-all drop-shadow-md relative group ${
                      isActive ? "text-cyan-300 font-extrabold" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="h-4 w-[1px] bg-white/20 mx-2"></div>
              <button className="px-8 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs lg:text-sm font-black uppercase tracking-[0.2em] rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:scale-105 transition-all">
                Liên hệ
              </button>
            </div>
          </div>
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="group flex items-center gap-4 p-1.5 pr-6
      bg-cyan-500/10 backdrop-blur-3xl
      border border-cyan-400/30 rounded-full
      hover:bg-cyan-500/20 transition-all shadow-2xl"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full
        bg-gradient-to-br from-cyan-400 to-blue-600
        flex items-center justify-center
        shadow-[0_0_15px_rgba(34,211,238,0.4)]
        group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
        transition-all flex-shrink-0"
              >
                <span className="text-white text-sm">🇻🇳</span>
              </div>

              {/* Text */}
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                VI
              </span>

              {/* Arrow */}
              <span
                className={`text-cyan-300 transition-transform duration-300 ${
                  langOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 mt-3 w-[170px] rounded-2xl
      border border-white/10 bg-[#001524]/95 backdrop-blur-2xl
      shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => switchLang("EN")}
                  className="group flex items-center gap-3 p-2 m-2 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-lg w-[calc(100%-1rem)]"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
                    <span className="text-white text-xs">🇬🇧</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-300 flex-1">EN</span>
                </button>
              </div>
            )}
          </div>

          {/* Login */}
          <button className="group flex items-center gap-4 p-1.5 pr-8 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
              <FaUserCircleIcon className="text-white w-5 h-5" />
            </div>

            <div className="flex flex-col items-start">
              {/* <span className="text-[11px] font-black uppercase tracking-[0.1em] text-white">
                Member
              </span> */}
              <span className="text-[9px] font-bold text-cyan-300 uppercase tracking-[0.1em]">
                Đăng nhập
              </span>
            </div>
          </button>

        </div>

        {/* Mobile Right Section */}
        <div className="flex lg:hidden items-center gap-4 w-full justify-end">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white bg-white/5 backdrop-blur-xl"
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>
      {/* Mobile Search Expand */}
      {searchOpen && (
        <div className="lg:hidden fixed top-[96px] left-1/2 -translate-x-1/2 w-[90%] z-50">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              autoFocus
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full h-[50px] pl-10 pr-5 rounded-full text-sm text-white border border-white/20 backdrop-blur-xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all placeholder:text-white/50"
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
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#001524]/95 backdrop-blur-2xl border-l border-white/20 transform transition-transform duration-500 z-50 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col gap-6 mt-4">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-all"
          >
            <CloseIcon size={20} />
          </button>

          <div className="h-[1px] bg-white/20 my-2"></div>

          {MENU_ITEMS.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-white text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-cyan-300" : "hover:text-cyan-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="h-[1px] bg-white/20 my-2"></div>

          {/* Language Selector in Mobile Menu */}
          <div className="relative z-10">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="w-full group flex items-center gap-4 p-1.5 pr-6 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
                <span className="text-white text-sm">🇻🇳</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">VI</span>
              <span className={`text-cyan-300 transition-transform duration-300 ml-auto ${langOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {langOpen && (
              <div className="absolute left-0 top-full mt-2 w-full rounded-2xl border border-white/10 bg-[#001524]/95 backdrop-blur-2xl shadow-2xl overflow-hidden z-20">
                <button
                  onClick={() => switchLang("EN")}
                  className="w-full group flex items-center gap-4 p-1.5 pr-6 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 m-2 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
                    <span className="text-white text-sm">🇬🇧</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">EN</span>
                </button>
              </div>
            )}
          </div>

          {/* Login Button in Mobile Menu */}
          <button className="group flex items-center gap-4 p-1.5 pr-8 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl w-full justify-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
              <FaUserCircleIcon className="text-white w-4 h-4" />
            </div>
            <div className="flex flex-col items-start">
              {/* <span className="text-[11px] font-black uppercase tracking-[0.1em] text-white">Xin chào, Member</span> */}
              <span className="text-[9px] font-bold text-cyan-300 uppercase tracking-[0.1em]">Đăng nhập</span>
            </div>
          </button>

          <button className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all w-full">
            Liên hệ
          </button>
        </div>
      </div>
    </>
  );
}

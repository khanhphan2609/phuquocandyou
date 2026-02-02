"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MenuIcon, CloseIcon, FaUserCircleIcon } from "../ui/Icons";

const MENU_ITEMS = [
  { label: "Điểm đến", href: "/", external: false },
  { label: "Tiện ích", href: "/", external: false },
  { label: "Tin tức", href: "https://news.phuquocandyou.com", external: true },
  {
    label: "Tuyển dụng",
    href: "https://careers.phuquocandyou.com",
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // derive lang from pathname to avoid calling setState inside useEffect
  const lang = pathname?.startsWith("/en") ? ("EN" as const) : ("VI" as const);

  const switchLang = (l: "VI" | "EN") => {
    const p =
      pathname ??
      (typeof window !== "undefined" ? window.location.pathname : "/");
    const base = p.replace(/^\/(?:vi|en)/, "") || "/";
    const target =
      base === "/" ? `/${l.toLowerCase()}` : `/${l.toLowerCase()}${base}`;
    setLangOpen(false);
    router.push(target);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 flex z-50">
        {/* Logo */}
        <Link href="#Hero">
          <Image
            src="/logo.png"
            alt="Phú Quốc & You"
            width={80}
            height={80}
            className="drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] hover:scale-110 transition-all duration-400"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <div className="h-16 bg-[#001524]/40 border border-white/10 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center px-12 hover:border-cyan-400/50 transition-all">
            <div className="flex gap-4 items-center text-xs lg:text-sm font-black uppercase tracking-[0.2em] text-[--white]">
              {MENU_ITEMS.map((item, index) => {
                const isActive =
                  !item.external &&
                  (pathname === item.href ||
                    (item.href !== "/" && pathname?.startsWith(item.href)));
                return (
                  <Link
                    target="_blank"
                    key={index}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
    relative flex items-center justify-center
    text-white uppercase tracking-[0.2em]
    transition-colors duration-300
    hover:text-cyan-300
    ${isActive ? "text-cyan-300 font-extrabold" : ""}
    
    after:content-['']
    after:absolute
    after:left-1/2
    after:-bottom-2
    after:h-[3px]
    after:w-[70%]
    after:bg-cyan-400
    after:rounded-full
    after:-translate-x-1/2
    after:scale-x-0
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
    aria-[current=page]:after:scale-x-100
  `}
                  >
                    <span className="px-4">{item.label}</span>
                  </Link>
                );
              })}
              <div className="h-4 w-[1px] bg-[var(--gray-normal)]/20"></div>
              <button className="px-8 cursor-pointer py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs lg:text-sm font-black uppercase tracking-[0.2em] rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:scale-105 transition-all">
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
              className="w-full group flex items-center gap-4 px-2 py-1
      bg-cyan-500/10 backdrop-blur-3xl
      border border-cyan-400/30 rounded-full
      hover:bg-cyan-500/20 transition-all shadow-2xl cursor-pointer"
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
                <span className="text-white text-sm">
                  {lang === "VI" ? "🇻🇳" : "🇬🇧"}
                </span>
              </div>

              {/* Text */}
              <span className="text-[12px] font-bold uppercase tracking-wider text-cyan-300">
                {lang}
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
              <div className="absolute -right-0 mt-4 w-full bg-transparent overflow-hidden">
                <button
                  onClick={() => switchLang(lang === "VI" ? "EN" : "VI")}
                  className="w-full group flex items-center gap-4 px-2 py-1 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-full
        bg-gradient-to-br from-cyan-400 to-blue-600
        flex items-center justify-center
        shadow-[0_0_15px_rgba(34,211,238,0.4)]
        group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
        transition-all flex-shrink-0"
                  >
                    <span className="text-white text-sm">
                      {lang === "VI" ? "🇬🇧" : "🇻🇳"}
                    </span>
                  </div>

                  {/* Text */}
                  <span className="text-[12px] font-bold uppercase tracking-wider text-cyan-300">
                    {lang === "VI" ? "EN" : "VI"}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Login */}
          <button className="group flex items-center gap-4 p-1.5 pr-8 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
              <FaUserCircleIcon className="text-white w-5 h-5" />
            </div>

            <div className="flex flex-col items-start">
              {/* <span className="text-[11px] font-black uppercase tracking-[0.1em] text-white">
                Member
              </span> */}
              <span className="text-[12px] font-bold text-cyan-300 uppercase tracking-[0.1em]">
                Đăng nhập
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Right Section */}
        <div className="flex lg:hidden items-center gap-4 w-full justify-end">
          {/* Language Switch Mobile */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all cursor-pointer"
            >
              <span className="text-white text-sm">
                {lang === "VI" ? "🇻🇳" : "🇬🇧"}
              </span>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-transparent shadow-2xl overflow-hidden z-20">
                <button
                  onClick={() => switchLang(lang === "VI" ? "EN" : "VI")}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all cursor-pointer"
                >
                  <span className="text-white text-sm">
                    {lang === "VI" ? "🇬🇧" : "🇻🇳"}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white bg-white/5 backdrop-blur-xl cursor-pointer"
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-[#001524]/95 backdrop-blur-2xl border-l border-white/20 transform transition-transform duration-500 z-50 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-4 mt-4">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-all cursor-pointer"
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
                className={`text-white text-xs font-bold uppercase tracking-[0.1em] transition-colors whitespace-nowrap ${
                  isActive ? "text-cyan-300" : "hover:text-cyan-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-xs font-bold uppercase tracking-[0.1em] transition-colors whitespace-nowrap hover:text-cyan-400"
          >
            Liên hệ
          </Link>

          <div className="h-[1px] bg-white/20 my-2"></div>

          {/* Login Button in Mobile Menu */}
          <button className="group flex items-center gap-4 p-1.5 pr-8 bg-cyan-500/10 backdrop-blur-3xl border border-cyan-400/30 rounded-full hover:bg-cyan-500/20 transition-all shadow-2xl w-full justify-center cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all flex-shrink-0">
              <FaUserCircleIcon className="text-white w-4 h-4" />
            </div>
            <div className="flex flex-col items-start">
              {/* <span className="text-[11px] font-black uppercase tracking-[0.1em] text-white">Xin chào, Member</span> */}
              <span className="text-[9px] font-bold text-cyan-300 uppercase tracking-[0.1em]">
                Đăng nhập
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

type Variant = "desktop" | "mobile";

export default function LanguageSwitcher({ variant }: { variant: Variant }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const lang = pathname?.startsWith("/en") ? "EN" : "VI";

  const switchLang = () => {
    const base = pathname?.replace(/^\/(?:vi|en)/, "") || "/";
    const target =
      base === "/"
        ? `/${lang === "VI" ? "en" : "vi"}`
        : `/${lang === "VI" ? "en" : "vi"}${base}`;
    setOpen(false);
    router.push(target);
  };

  /* ================= MOBILE ================= */
  if (variant === "mobile") {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"
        >
          <span className="text-white text-sm">
            {lang === "VI" ? "🇻🇳" : "🇬🇧"}
          </span>
        </button>

        {open && (
          <button
            onClick={switchLang}
            className="absolute right-0 top-full mt-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"
          >
            <span className="text-white text-sm">
              {lang === "VI" ? "🇬🇧" : "🇻🇳"}
            </span>
          </button>
        )}
      </div>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full group flex items-center gap-4 px-2 py-1
        bg-cyan-500/10 backdrop-blur-3xl
        border border-cyan-400/30 rounded-full
        hover:bg-cyan-500/20 transition-all cursor-pointer"
      >
        {/* FLAG ICON */}
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

        {/* TEXT */}
        <span className="text-[12px] font-bold uppercase tracking-wider text-white">
          {lang}
        </span>

        {/* ARROW */}
        <span
          className={`text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute -right-0 mt-4 w-full bg-transparent overflow-hidden">
          <button
            onClick={switchLang}
            className="w-full group flex items-center gap-4 px-2 py-1
            bg-cyan-500/10 backdrop-blur-3xl
            border border-cyan-400/30 rounded-full
            hover:bg-cyan-500/20 transition-all cursor-pointer"
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

            <span className="text-[12px] font-bold uppercase tracking-wider text-white">
              {lang === "VI" ? "EN" : "VI"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import NavLinks from "./NavLinks";

export default function DesktopNav({ pathname }: { pathname: string | null }) {
  return (
    <nav className="hidden lg:flex flex-1 justify-center">
      <div className="h-16 bg-[#001524]/40 border border-white/10 backdrop-blur-2xl rounded-full flex items-center px-12">
        <div className="flex gap-4 items-center text-sm font-black uppercase tracking-[0.2em]">
          <NavLinks pathname={pathname} variant="desktop" />
          <div className="h-4 w-[1px] bg-white/20" />
          <Link href="https://www.facebook.com/profile.php?id=61585377338599" target="_blank" className="px-8 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full">
            Liên hệ
          </Link>
        </div>
      </div>
    </nav>
  );
}

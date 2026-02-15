"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../../ui/Icons";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import LoginButton from "@/app/vi/components/ui/LoginButton";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT: LOGO */}
          <Link href="#Hero" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Phú Quốc & You"
              width={70}
              height={70}
            />
          </Link>

          {/* CENTER: DESKTOP NAV */}
          <DesktopNav pathname={pathname} />

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-4">

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher variant="desktop" />
              <LoginButton variant="desktop" />
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-4">
              <LanguageSwitcher variant="mobile" />
              <button
  onClick={() => setMenuOpen(true)}
  className="w-10 h-10 flex items-center justify-center rounded-full
  bg-gradient-to-br from-cyan-400 to-blue-600
  shadow-[0_0_10px_rgba(34,211,238,0.4)]
  hover:shadow-[0_0_18px_rgba(34,211,238,0.7)]
  transition-all"
>
  <MenuIcon size={18} className="text-white" />
</button>
            </div>

          </div>
        </div>
      </header>

      <MobileNav
        open={menuOpen}
        pathname={pathname}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

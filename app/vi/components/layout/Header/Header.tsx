"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon } from "../../ui/Icons";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-4 flex z-50">
        <Link href="#Hero">
          <Image src="/logo.png" alt="Phú Quốc & You" width={80} height={80} />
        </Link>

        <DesktopNav pathname={pathname} />

        <div className="hidden lg:flex gap-4">
          <LanguageSwitcher variant="desktop" />
        </div>

        <div className="lg:hidden flex gap-4 ml-auto">
          <LanguageSwitcher variant="mobile" />
          <button onClick={() => setMenuOpen(true)}>
            <MenuIcon size={20} />
          </button>
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

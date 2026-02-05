"use client";

import Link from "next/link";
import { MENU_ITEMS } from "./header.data";

type Props = {
  pathname: string | null;
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
};

export default function NavLinks({ pathname, variant, onItemClick }: Props) {
  return (
    <>
      {MENU_ITEMS.map((item) => {
        const isActive =
          !item.external &&
          (pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href)));

        const baseClass =
          variant === "desktop"
            ? `
relative flex items-center justify-center
text-white uppercase tracking-[0.2em]
transition-colors duration-300
hover:text-cyan-300
${isActive ? "text-cyan-300 font-extrabold" : ""}

after:content-['']
after:absolute after:left-1/2 after:-bottom-2
after:h-[3px] after:w-[70%]
after:bg-cyan-400 after:rounded-full
after:-translate-x-1/2 after:scale-x-0
after:transition-transform after:duration-300
hover:after:scale-x-100
aria-[current=page]:after:scale-x-100
`
            : `
text-white text-xs font-bold uppercase tracking-[0.1em]
transition-colors whitespace-nowrap
${isActive ? "text-white" : "hover:text-cyan-400"}
`;

        return (
          <Link
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-current={isActive ? "page" : undefined}
            onClick={onItemClick}
            className={baseClass}
          >
            {variant === "desktop" ? (
              <span className="px-4">{item.label}</span>
            ) : (
              item.label
            )}
          </Link>
        );
      })}
    </>
  );
}

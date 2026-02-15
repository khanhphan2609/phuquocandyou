"use client";

import { HERO_CONTENT } from "./hero.data";
import type { HeroTabId } from "./hero.data";

type OrbPosition = {
  x: number;
  y: number;
  size: number;
};

type OrbItem = {
  id: HeroTabId;
  title: string;
  details: string[];
};

type OrbProps = {
  item: OrbItem;
  isCentered: boolean;
  position: OrbPosition;
  onClick: () => void;
};

export default function Orb({ item, isCentered, position, onClick }: OrbProps) {
  const content = HERO_CONTENT[item.id];
  const Icon = content.icon;

  return (
    <div
      onClick={onClick}
      className={`orb absolute cursor-pointer transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
        isCentered ? "z-30" : "z-10"
      }`}
      style={{
        top: "50%",
        left: "50%",
        width: position.size,
        height: position.size,
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
      }}
    >
      <div
        className={`w-full h-full rounded-full flex flex-col items-center justify-center border backdrop-blur-xl transition-all duration-700
        ${
          isCentered
            ? "border-[var(--white)]/80 text-white shadow-[0_0_100px_rgba(34,211,238,0.4)]"
            : "border-[var(--white)]/40 text-blue-100 hover:scale-110 hover:border-cyan-400/50"
        }`}
      >
        {/* ===== ICON ===== */}
        <div
          className={`transition-all p-4 duration-500 flex items-center justify-center rounded-full
  ${
    isCentered
      ? `mb-4 w-14 h-14 p-3 bg-gradient-to-br ${content.themeColor}
         shadow-[0_0_25px_rgba(34,211,238,0.6)]`
      : "mb-2 w-8 h-8 bg-white/10"
  }`}
        >
          <div
            className={`transition-all duration-300 ${
              isCentered ? "scale-110 text-white" : "opacity-80 text-white"
            }`}
          >
            {content.icon}
          </div>
        </div>

        {/* ===== TITLE ===== */}
        <span
          className={`font-black uppercase tracking-[0.25em] drop-shadow-lg text-center ${
            isCentered ? "text-[20px] mb-4" : "text-xs"
          }`}
        >
          {item.title}
        </span>

        {/* ===== DETAILS (ONLY CENTERED) ===== */}
        {isCentered && (
          <div className="flex flex-col gap-3">
            {item.details.map((d) => (
              <div key={d} className="flex items-center gap-3 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-cyan-100">
                  {d}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

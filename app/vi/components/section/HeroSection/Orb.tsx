"use client";

import { HERO_ITEMS } from "./hero.data";

type OrbItem = (typeof HERO_ITEMS)[number];

type OrbPosition = {
  x: number;
  y: number;
  size: number;
};

type OrbProps = {
  item: OrbItem;
  isCentered: boolean;
  position: OrbPosition;
  onClick: () => void;
};

export default function Orb({
  item,
  isCentered,
  position,
  onClick,
}: OrbProps) {
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
            ? "border-white/50 text-white shadow-[0_0_100px_rgba(34,211,238,0.4)]"
            : "border-white/10 text-blue-100 hover:scale-110 hover:border-cyan-400/50"
        }`}
      >
        <span
          className={`font-black uppercase tracking-[0.25em] drop-shadow-lg ${
            isCentered ? "text-[20px] mb-4" : "text-xs"
          }`}
        >
          {item.title}
        </span>

        {isCentered && (
          <div className="flex flex-col gap-3">
            {item.details.map((d) => (
              <div
                key={d}
                className="flex items-center gap-3 justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]" />
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-cyan-50">
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

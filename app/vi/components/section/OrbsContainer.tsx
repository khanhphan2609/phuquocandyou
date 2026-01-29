"use client";

import { useState, useEffect } from "react";
import { CONFIG, CONTENT_DATA, ITEMS } from "./heroConfig";

interface OrbProps {
  item: typeof ITEMS[0];
  isCentered: boolean;
  onClick: () => void;
}

function Orb({ item, isCentered, onClick }: OrbProps) {
  const data = CONTENT_DATA[item.id as keyof typeof CONTENT_DATA];
  const [position, setPosition] = useState({ x: 0, y: 0, size: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const multiplier = CONFIG.getPositionMultiplier();
      const sizeMultiplier = CONFIG.getSizeMultiplier();

      let posIndex = 0;
      if (!isCentered) {
        const otherItems = ITEMS.filter((i) => i.id !== item.id);
        posIndex = otherItems.findIndex((i) => i.id === item.id) + 1;
      }

      const pos = CONFIG.spiralPositions[posIndex];
      const xPos = pos.x * multiplier.x;
      const yPos = pos.y * multiplier.y;
      const size = pos.size * sizeMultiplier;

      setPosition({ x: xPos, y: yPos, size });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isCentered, item.id]);

  const getIconName = () => {
    if (item.id === "HOME") return "waves";
    if (item.id === "TRAVEL") return "sun";
    return "anchor";
  };

  return (
    <div
      onClick={onClick}
      className="orb absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer z-10 group"
      style={{
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
        width: `${position.size}px`,
        height: `${position.size}px`,
        top: "50%",
        left: "50%",
      }}
    >
      <div
        className={`w-full h-full flex flex-col items-center justify-center rounded-full transition-all duration-700 border ${
          isCentered
            ? "backdrop-blur-3xl border-white/50 text-white z-30 shadow-[0_0_100px_rgba(34,211,238,0.4)]"
            : "bg-white/5 backdrop-blur-xl border-white/10 text-blue-100 hover:bg-white/15 hover:border-cyan-400/50 hover:scale-110 shadow-lg"
        }`}
        style={
          isCentered
            ? { background: "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.1) 100%)" }
            : {}
        }
      >
        <div className="text-center px-6 pointer-events-none">
          <div className="flex flex-col items-center">
            {isCentered && (
              <div
                className={`p-4 rounded-full mb-4 ring-2 ring-white/30 shadow-2xl bg-gradient-to-br ${data.themeColor} animate-bounce-slow`}
              >
                <i data-lucide={getIconName()} className="w-8 h-8 text-white"></i>
              </div>
            )}

            <span
              className={`font-black tracking-[0.25em] uppercase drop-shadow-lg ${
                isCentered ? "text-[20px] mb-4" : "text-xs"
              }`}
            >
              {item.title}
            </span>

            <div
              className={`flex flex-col gap-3 transition-all duration-1000 ${
                isCentered ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              {item.details.map((d, idx) => (
                <div key={idx} className="flex items-center gap-3 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-cyan-50 drop-shadow-md whitespace-nowrap">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isCentered && (
        <div className="absolute inset-[-30px] border border-cyan-400/30 rounded-full animate-spin-slow pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"></div>
        </div>
      )}
    </div>
  );
}

interface OrbsContainerProps {
  currentTab: string;
  onTabChange: (tabId: string) => void;
}

export default function OrbsContainer({ currentTab, onTabChange }: OrbsContainerProps) {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-[600px] xl:min-h-[750px] w-full max-w-[800px] lg:pl-0 flex-shrink-0">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Rotating Decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[850px] h-[850px] border border-blue-400/10 rounded-full animate-spin-slow-reverse"></div>
          <svg className="w-[140%] h-[140%] opacity-20 text-cyan-300 absolute" viewBox="0 0 100 100">
            <path d="M10,50 Q25,25 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.05" />
            <path d="M10,60 Q25,35 50,60 T90,60" fill="none" stroke="currentColor" strokeWidth="0.05" />
          </svg>
        </div>

        {/* Orbs Container */}
        <div id="orbs-container" className="relative w-full h-full">
          {ITEMS.map((item) => (
            <Orb
              key={item.id}
              item={item}
              isCentered={item.id === currentTab}
              onClick={() => onTabChange(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

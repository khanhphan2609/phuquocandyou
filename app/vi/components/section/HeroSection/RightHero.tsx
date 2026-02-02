"use client";

import { useHeroOrbs } from "./useHeroOrbs";
import Orb from "./Orb";
import type { HeroTabId } from "./hero.data";

type RightHeroProps = {
  currentTab: HeroTabId;
  onTabChange: (id: HeroTabId) => void;
};

export default function RightHero({
  currentTab,
  onTabChange,
}: RightHeroProps) {
  const orbs = useHeroOrbs(currentTab);

  return (
    <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-[600px] xl:min-h-[750px] w-full max-w-[800px] flex-shrink-0">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-spin-slow" />
          <div className="absolute w-[850px] h-[850px] border border-blue-400/10 rounded-full animate-spin-slow-reverse" />
        </div>

        {/* ORBS */}
        <div className="relative w-full h-full z-10">
          {orbs.map(({ item, isCentered, position }) => (
            <Orb
              key={item.id}
              item={item}
              isCentered={isCentered}
              position={position}
              onClick={() => onTabChange(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

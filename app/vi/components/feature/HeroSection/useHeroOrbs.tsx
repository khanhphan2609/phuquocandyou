"use client";

import { useEffect, useMemo, useState } from "react";
import { HERO_ITEMS, HERO_LAYOUT, HeroTabId } from "./hero.data";

type OrbPosition = {
  x: number;
  y: number;
  size: number;
};

type HeroOrb = {
  item: (typeof HERO_ITEMS)[number];
  isCentered: boolean;
  position: OrbPosition;
};

export const useHeroOrbs = (currentTab: HeroTabId): HeroOrb[] => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update(); // initial
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return useMemo(() => {
    if (width === null) return [];

    const multiplier = HERO_LAYOUT.getPositionMultiplier(width);
    const sizeMultiplier = HERO_LAYOUT.getSizeMultiplier(width);

    return HERO_ITEMS.map((item) => {
      const isCentered = item.id === currentTab;
      const otherItems = HERO_ITEMS.filter((i) => i.id !== currentTab);

      const index = isCentered
        ? 0
        : otherItems.findIndex((i) => i.id === item.id) + 1;

      const pos = HERO_LAYOUT.spiralPositions[index];

      return {
        item,
        isCentered,
        position: {
          x: pos.x * multiplier.x,
          y: pos.y * multiplier.y,
          size: pos.size * sizeMultiplier,
        },
      };
    });
  }, [currentTab, width]);
};

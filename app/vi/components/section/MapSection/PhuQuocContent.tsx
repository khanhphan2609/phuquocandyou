"use client";

import Image from "next/image";
import { RegionData } from "./phu_quoc.data";

type Props = {
  region: RegionData;
  activeLocation: RegionData["locations"][number] | null;
  onSelectLocation: (loc: RegionData["locations"][number]) => void;
};

export default function PhuQuocContent({
  region,
  activeLocation,
  onSelectLocation,
}: Props) {
  return (
    <div className="space-y-8">
      {/* TITLE */}
      <h2 className="flex justify-center lg:block text-[1.8rem] sm:text-3xl lg:text-2xl xl:text-5xl font-black italic leading-[1.1] tracking-tight drop-shadow-2xl mb-5 text-[var(--blue-normal)]">
        {activeLocation ? activeLocation.name : region.title}
      </h2>

      {/* DESC */}
      <p className="text-[var(--gray-light)]/90 text-base sm:text-lg xl:text-xl leading-relaxed font-medium drop-shadow-md border-l-2 border-cyan-400 pl-5">
        {activeLocation ? activeLocation.desc : region.desc}
      </p>

      {/* LOCATIONS */}
      <div className="flex gap-8 overflow-x-auto pb-5 snap-x snap-mandatory">
        {region.locations.map((loc) => (
          <div
            key={loc.id}
            onClick={() => onSelectLocation(loc)}
            className="shrink-0 snap-start cursor-pointer"
          >
            <div className="relative w-[220px] h-[300px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition">
              <Image
                src={loc.thumbnail}
                alt={loc.name}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <p
                className={`absolute bottom-4 left-4 right-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeLocation?.id === loc.id
                    ? "text-[var(--blue-normal)]"
                    : "text-[var(--blue-light)]"
                }`}
              >
                {loc.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

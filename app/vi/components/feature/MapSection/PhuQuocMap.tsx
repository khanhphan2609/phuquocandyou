"use client";

import { useState } from "react";
import { REGIONS, RegionKey } from "./phu_quoc.data";
import SVGMap from "./SVGMap";
import PhuQuocContent from "./PhuQuocContent";

export default function PhuQuocMap() {
  const [activeRegion, setActiveRegion] = useState<RegionKey>("north");
  const [activeLocation, setActiveLocation] = useState<
    (typeof REGIONS)[RegionKey]["locations"][number] | null
  >(null);

  return (
    <section id="PhuQuocMap" className="z-5">
      <div className="grid grid-cols-1 mx-8 lg:mx-0 sm:px-8 lg:grid-cols-2 items-center bg-white/5 backdrop-blur-xl py-12 rounded-3xl border border-white/10 shadow-2xl">
        
        {/* MAP */}
        <div className="flex">
          <SVGMap
            activeRegion={activeRegion}
            onChangeRegion={(key) => {
              setActiveRegion(key);
              setActiveLocation(null);
            }}
          />
        </div>

        {/* CONTENT */}
        <PhuQuocContent
          region={REGIONS[activeRegion]}
          activeLocation={activeLocation}
          onSelectLocation={setActiveLocation}
        />
      </div>
    </section>
  );
}

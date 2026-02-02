"use client";

import { useEffect } from "react";

type BgContainerProps = {
  bgImage: string;
};

export default function BgContainer({ bgImage }: BgContainerProps) {
  useEffect(() => {
    const el = document.getElementById("bg-image");
    if (el) {
      el.style.backgroundImage = `url(${bgImage})`;
    }
  }, [bgImage]);

  return (
    <div id="bg-container" className="fixed inset-0 z-0">
      <div
        id="bg-image"
        className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-1000"
      />
      {/* overlay giữ nguyên */}
    </div>
  );
}

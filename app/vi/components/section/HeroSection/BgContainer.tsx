"use client";
import { useEffect } from "react";

export default function BgContainer() {
  useEffect(() => {
    const bgImageDiv = document.getElementById("bg-image");
    if (bgImageDiv) {
      bgImageDiv.style.backgroundImage = `url('https://images.unsplash.com/photo-1730714103959-5d5a30acf547?w=900&auto=format&fit=crop')`;
    }
  }, []);

  return (
    <div id="bg-container" className="fixed inset-0 z-0">
      <div
        id="bg-image"
        className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-1000"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-800/20 to-transparent backdrop-blur-[2px]"></div>
      {/* <!-- Top Gradient for Header Readability --> */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#001524]/90 via-[#001524]/40 to-transparent pointer-events-none"></div>

      {/* <!-- Light Streaks --> */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[1px] h-[120%] bg-white/20 rotate-[35deg] blur-xl animate-pulse"></div>
        <div className="absolute top-[-10%] left-[50%] w-[1px] h-[120%] bg-white/30 rotate-[35deg] blur-2xl animate-pulse duration-[5000ms]"></div>
      </div>
    </div>
  );
}

"use client";

import "./Hero.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="flex flex-col lg:flex-row items-center w-full lg:gap-12 px-6 lg:px-16 max-w-[1920px] mx-auto relative z-10 py-10 lg:overflow-hidden"
    >
      {/* Left Card */}
      <div className="w-full max-w-md lg:max-w-none lg:w-[500px] xl:w-[580px] flex-shrink-0 lg:mr-auto z-20 mb-8 lg:mb-0">
        <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,21,36,0.5)] bg-white/10 backdrop-blur-2xl border border-white/20 aspect-[4/5.2] flex flex-col hover:border-white/40 transition-all group">
          {/* Image Section */}
          <div className="relative w-full h-[48%] shrink-0 overflow-hidden">
            <Image
              id="content-image"
              src="https://images.unsplash.com/photo-1589394815804-964ed9be2eb3?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover transition-all duration-1000 animate-in fade-in zoom-in-105"
              alt="Phú Quốc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001524]/80 via-transparent to-transparent"></div>
            <div
              id="content-tag"
              className="absolute top-8 left-8 px-5 py-2 rounded-full backdrop-blur-xl border border-white/30 text-[11px] font-black uppercase tracking-[0.3em] text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
            >
              Coastal Luxury
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col flex-1">
            <h2
              id="content-title"
              className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl italic"
            >
              PHÚ QUỐC: BẢN GIAO HƯỞNG ĐẠI DƯƠNG
            </h2>

            <div className="relative mb-8 flex-1">
              <div id="default-description">
                <p
                  id="content-description"
                  className="text-blue-50/90 text-xl xl:text-2xl leading-relaxed font-medium drop-shadow-md border-l-2 border-cyan-400 pl-6"
                >
                  Đắm mình trong sắc xanh vô tận của biển trời. Nơi kiến trúc hiện đại hòa quyện cùng vẻ đẹp hoang sơ của Đảo Ngọc.
                </p>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <button
                id="explore-btn"
                className="group w-full py-5 text-white font-black text-[11px] lg:text-xs uppercase tracking-[0.4em] rounded-[1.5rem] shadow-2xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                <span id="btn-text">Bắt đầu hành trình</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Orbs */}
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
          <div id="orbs-container" className="relative w-full h-full"></div>
        </div>
      </div>
    </section>
  );
}

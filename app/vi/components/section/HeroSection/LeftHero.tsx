"use client";

import { JSX } from "react";
import { HeroTabId } from "./hero.data";

type LeftHeroProps = {
  data: {
    tag: string;
    title: string;
    description: string;
    image: string;
    themeColor: string;
    icon: JSX.Element;
  };
  currentTab: string;

  tabs?: HeroTabId[];
  onNext?: () => void;
  onPrev?: () => void;
};

export default function LeftHero({
  data,
  currentTab,
  tabs,
  onNext,
  onPrev,
}: LeftHeroProps) {
  return (
    <div
      className="
        w-full pl-8 lg:pl-0 md:pl-40
        max-w-[92vw] sm:max-w-md md:max-w-lg
        lg:max-w-none lg:w-[480px] xl:w-[560px]
        flex-shrink-0 z-20 mb-20 lg:mb-0
      "
    >
      {/* INNER */}
      <div className="flex justify-center lg:justify-start">
        {/* CARD */}
        <div
          className="
            relative rounded-[2rem] lg:rounded-[3.5rem]
            overflow-hidden bg-[var(--white)]/10 backdrop-blur-2xl
            border border-[var(--white)]/20
            shadow-[0_40px_100px_-20px_rgba(0,21,36,0.5)]
            aspect-[4/5.3] flex flex-col
            transition-all hover:border-[var(--white)]/40
          "
        >
          {/* IMAGE */}
          <div className="relative w-full h-[45%] sm:h-[48%] overflow-hidden">
            <img
              key={data.image}
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover transition-transform duration-1000 scale-105 animate-in fade-in zoom-in-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />

            {/* TAG */}
            <div
              className={`
                absolute top-6 left-6 sm:top-8 sm:left-8
                px-4 py-1.5 sm:px-5 sm:py-2
                rounded-full backdrop-blur-xl
                border border-[var(--white)]/30
                text-[10px] sm:text-[11px]
                font-black uppercase tracking-[0.3em]
                text-[var(--white)] bg-gradient-to-r ${data.themeColor}
              `}
            >
              {data.tag}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
            <h2
              key={data.title}
              className="
                text-[1.8rem] sm:text-3xl lg:text-2xl xl:text-5xl
                font-black italic text-[var(--white)]
                leading-[1.1] tracking-tight
                drop-shadow-2xl mb-5
                animate-in fade-in slide-in-from-bottom-6
              "
            >
              {data.title}
            </h2>

            <div className="relative flex-1 mb-6">
              <p
                key={data.description}
                className="
                  text-blue-50/90 text-base sm:text-lg xl:text-xl
                  leading-relaxed font-medium
                  drop-shadow-md border-l-2 border-cyan-400 pl-5
                  animate-in fade-in slide-in-from-bottom-8
                "
              >
                {data.description}
              </p>
            </div>

            <button
              className={`
                w-full py-4 sm:py-5
                rounded-[1.4rem] text-[var(--white)]
                font-black text-[10px] sm:text-xs
                uppercase tracking-[0.35em]
                shadow-2xl flex items-center justify-center gap-3
                hover:scale-[1.02] transition-all
                bg-gradient-to-r ${data.themeColor}
              `}
            >
              {currentTab === "HOME"
                ? "Bắt đầu hành trình"
                : "Khám phá chi tiết"}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET NAV */}
      {tabs && onNext && onPrev && (
        <div className="mt-6 flex lg:hidden items-center justify-between">
          {/* PREV */}
          <button
            onClick={onPrev}
            className="
        w-10 h-10 rounded-full
        flex items-center justify-center
        bg-[var(--white)]/10 backdrop-blur
        border border-[var(--white)]/20
        text-[var(--white)] text-xl
        active:scale-90 transition
      "
          >
            ‹
          </button>

          {/* DOTS */}
          <div className="flex gap-2">
            {tabs.map((id) => (
              <span
                key={id}
                className={`w-2.5 h-2.5 rounded-full transition-all z-10 ${
                  id === currentTab ? "bg-cyan-400 scale-125" : "bg-[var(--white)]/30"
                }`}
              />
            ))}
          </div>

          {/* NEXT */}
          <button
            onClick={onNext}
            className="
        w-10 h-10 rounded-full
        flex items-center justify-center
        bg-[var(--white)]/10 backdrop-blur
        border border-[var(--white)]/20
        text-[var(--white)] text-xl
        active:scale-90 transition
      "
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

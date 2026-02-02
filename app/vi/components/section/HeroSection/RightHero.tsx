"use client";

import { RefObject } from "react";

type RightHeroProps = {
  orbsRef: RefObject<HTMLDivElement | null>;
};

export default function RightHero({ orbsRef }: RightHeroProps) {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-[600px] xl:min-h-[750px] w-full max-w-[800px] lg:pl-0 flex-shrink-0">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-spin-slow" />
          <div className="absolute w-[850px] h-[850px] border border-blue-400/10 rounded-full animate-spin-slow-reverse" />

          <svg
            className="w-[140%] h-[140%] opacity-20 text-cyan-300 absolute"
            viewBox="0 0 100 100"
          >
            <path
              d="M10,50 Q25,25 50,50 T90,50"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.05}
            />
            <path
              d="M10,60 Q25,35 50,60 T90,60"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.05}
            />
          </svg>
        </div>

        {/* Orbs */}
        <div
          id="orbs-container"
          ref={orbsRef}
          className="relative w-full h-full"
        />
      </div>
    </div>
  );
}

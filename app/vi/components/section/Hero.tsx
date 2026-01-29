"use client";

import { useState, useEffect } from "react";
import "./Hero.css";
import OrbsContainer from "./OrbsContainer";
import { CONTENT_DATA } from "./heroConfig";

export default function Hero() {
  const [currentTab, setCurrentTab] = useState<string>("HOME");
  const [contentData, setContentData] = useState(CONTENT_DATA.HOME);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    const tabData = CONTENT_DATA[currentTab as keyof typeof CONTENT_DATA];
    if (tabData) {
      setContentData(tabData);
      // Trigger re-animation by changing key
      setImageKey((prev) => prev + 1);
    }
  }, [currentTab]);

  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
  };

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
            <img
              key={imageKey}
              id="content-image"
              src={contentData.image}
              className="w-full h-full object-cover transition-all duration-1000 animate-in fade-in zoom-in-105"
              alt="Phú Quốc"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001524]/80 via-transparent to-transparent"></div>
            <div
              id="content-tag"
              className={`absolute top-8 left-8 px-5 py-2 rounded-full backdrop-blur-xl border border-white/30 text-[11px] font-black uppercase tracking-[0.3em] text-white bg-gradient-to-r ${contentData.themeColor}`}
            >
              {contentData.tag}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col flex-1">
            <h2
              id="content-title"
              className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl italic"
            >
              {contentData.title}
            </h2>

            <div className="relative mb-8 flex-1">
              <div id="default-description">
                <p
                  id="content-description"
                  className="text-blue-50/90 text-xl xl:text-2xl leading-relaxed font-medium drop-shadow-md border-l-2 border-cyan-400 pl-6"
                >
                  {contentData.description}
                </p>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <button
                id="explore-btn"
                className={`group w-full py-5 text-white font-black text-[11px] lg:text-xs uppercase tracking-[0.4em] rounded-[1.5rem] shadow-2xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all bg-gradient-to-r ${contentData.themeColor}`}
              >
                <span id="btn-text">{currentTab === "HOME" ? "Bắt đầu hành trình" : "Khám phá chi tiết"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Orbs */}
      <OrbsContainer currentTab={currentTab} onTabChange={handleTabChange} />
    </section>
  );
}

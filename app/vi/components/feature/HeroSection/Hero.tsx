"use client";

import { useState } from "react";
import "./Hero.css";

import { HERO_CONTENT, HeroTabId } from "./hero.data";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import BgContainer from "./BgContainer";

export default function Hero() {
  const [currentTab, setCurrentTab] = useState<HeroTabId>("HOME");
  const currentData = HERO_CONTENT[currentTab];
  const tabs = Object.keys(HERO_CONTENT) as HeroTabId[];

  const goNext = () => {
    const i = tabs.indexOf(currentTab);
    setCurrentTab(tabs[(i + 1) % tabs.length]);
  };

  const goPrev = () => {
    const i = tabs.indexOf(currentTab);
    setCurrentTab(tabs[(i - 1 + tabs.length) % tabs.length]);
  };

  return (
    <>
      {/* Background phụ thuộc state */}
      <BgContainer bgImage={currentData.bgImage} />

      <section
        id="Hero"
        className="block lg:flex flex-col lg:flex-row items-center w-full lg:gap-12"
      >
        {/* LeftHero nhận data trực tiếp */}
        <LeftHero
          data={currentData}
          currentTab={currentTab}
          tabs={tabs}
          onNext={goNext}
          onPrev={goPrev}
        />

        {/* RightHero chỉ render orbs */}
        <RightHero currentTab={currentTab} onTabChange={setCurrentTab} />
      </section>
    </>
  );
}

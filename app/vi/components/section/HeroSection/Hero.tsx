"use client";

import { useState } from "react";
import "./Hero.css";
import { useHeroOrbs } from "./useHeroOrbs";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import BgContainer from "./BgContainer";

export default function Hero() {
  const [currentTab, setCurrentTab] = useState("HOME");
  const orbsRef = useHeroOrbs(currentTab, setCurrentTab);

  return (
    <section
      id="Hero"
      className="flex flex-col lg:flex-row items-center w-full lg:gap-12"
    >
      <BgContainer/>
      <LeftHero/>
      <RightHero orbsRef={orbsRef} />
    </section>
  );
}

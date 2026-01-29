"use client";

import { useEffect, useState } from "react";

type HeroStateListener = (state: HeroState) => void;

export interface HeroState {
  currentTab: string;
  listeners: HeroStateListener[];
}

export const useHeroState = () => {
  const [currentTab, setCurrentTabState] = useState<string>("HOME");
  const [listeners, setListeners] = useState<HeroStateListener[]>([]);

  const setCurrentTab = (tabId: string) => {
    setCurrentTabState((prev) => {
      if (prev !== tabId) {
        const newState: HeroState = {
          currentTab: tabId,
          listeners,
        };
        listeners.forEach((listener) => listener(newState));
        return tabId;
      }
      return prev;
    });
  };

  const subscribe = (listener: HeroStateListener) => {
    setListeners((prev) => [...prev, listener]);
  };

  return {
    currentTab,
    setCurrentTab,
    subscribe,
  };
};

export const useHeroContent = (tabId: string) => {
  const [contentImage, setContentImage] = useState<string>("");
  const [contentTag, setContentTag] = useState<string>("");
  const [contentTitle, setContentTitle] = useState<string>("");
  const [contentDescription, setContentDescription] = useState<string>("");
  const [btnText, setBtnText] = useState<string>("");
  const [themeColor, setThemeColor] = useState<string>("");

  useEffect(() => {
    // This will be updated by parent through props, but we can set defaults
    setContentImage("");
  }, [tabId]);

  return {
    contentImage,
    contentTag,
    contentTitle,
    contentDescription,
    btnText,
    themeColor,
    setContentImage,
    setContentTag,
    setContentTitle,
    setContentDescription,
    setBtnText,
    setThemeColor,
  };
};

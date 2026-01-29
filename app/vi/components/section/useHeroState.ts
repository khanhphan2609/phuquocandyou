"use client";

import { useState } from "react";
import { CONTENT_DATA } from "./heroConfig";

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
  // Derive content directly from the static CONTENT_DATA to avoid
  // calling setState synchronously inside effects which can cause
  // cascading renders. Caller can use returned values directly.
  const key = tabId as keyof typeof CONTENT_DATA;
  const data = CONTENT_DATA[key] ?? CONTENT_DATA.HOME;

  return {
    contentImage: data.image,
    contentTag: data.tag,
    contentTitle: data.title,
    contentDescription: data.description,
    btnText: tabId === "HOME" ? "Bắt đầu hành trình" : "Khám phá chi tiết",
    themeColor: data.themeColor,
  };
};

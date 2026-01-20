"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "flag-icons/css/flag-icons.min.css";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "./Button";

type Lang = "vi" | "en";

export function LanguageSwitch() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "vi";
    return (localStorage.getItem("lang") as Lang) || "vi";
  });

  // close when click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLang = () => {
    const newLang: Lang = lang === "vi" ? "en" : "vi";

    localStorage.setItem("lang", newLang);
    setLang(newLang);
    setOpen(false);
    router.push(`/${newLang}`);
  };

  return (
    <div ref={ref} className="relative">
      {/* Current language */}
      <Button
        variant="primary"
        onClick={() => setOpen(!open)}
        aria-label="Language"
        className="flex items-center gap-2"
      >
        <span className={`fi fi-${lang === "vi" ? "vn" : "us"}`} />
        <FaArrowDown size={12} />
      </Button>

      {/* Dropdown: ONLY the other language */}
      {open && (
        <div className="absolute right-0 mt-2 z-50">
          <Button
            onClick={switchLang}
            className="flex items-center gap-2"
          >
            <span
              className={`fi fi-${lang === "vi" ? "us" : "vn"}`}
            />
            {lang === "vi" ? "EN" : "VI"}
          </Button>
        </div>
      )}
    </div>
  );
}

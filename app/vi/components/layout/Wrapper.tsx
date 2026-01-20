"use client";

import { useEffect, useRef } from "react";

/* ================= CONFIG ================= */

const PARTICLES = {
  snow: {
    char: "❄",
    count: 80,
    minSize: 20,
    maxSize: 40,
    minDuration: 8,
    maxDuration: 16,
    opacity: [0.4, 1],
    color: "#fff",
    rotate: false,
  },

  luckyMoney: {
    char: "🧧",
    count: 20,
    minSize: 24,
    maxSize: 50,
    minDuration: 10,
    maxDuration: 18,
    opacity: [0.5, .7],
    color: "inherit",
    rotate: true,
  },

  flower: {
    char: "🌸",
    count: 50,
    minSize: 20,
    maxSize: 45,
    minDuration: 12,
    maxDuration: 20,
    opacity: [0.6, 1],
    color: "inherit",
    rotate: true,
  },

  star: {
    char: "⭐",
    count: 60,
    minSize: 16,
    maxSize: 30,
    minDuration: 6,
    maxDuration: 12,
    opacity: [0.7, 1],
    color: "gold",
    rotate: true,
  },
} as const;

// 🔁 CHỈ ĐỔI DÒNG NÀY
const PRESET = PARTICLES.luckyMoney;

/* ========================================= */

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    for (let i = 0; i < PRESET.count; i++) {
      const el = document.createElement("span");
      el.innerText = PRESET.char;

      const size =
        Math.random() * (PRESET.maxSize - PRESET.minSize) +
        PRESET.minSize;

      const duration =
        Math.random() *
          (PRESET.maxDuration - PRESET.minDuration) +
        PRESET.minDuration;

      const opacity =
        Math.random() *
          (PRESET.opacity[1] - PRESET.opacity[0]) +
        PRESET.opacity[0];

      el.style.position = "absolute";
      el.style.top = "-10px";
      el.style.left = Math.random() * 100 + "%";
      el.style.fontSize = size + "px";
      el.style.opacity = opacity.toString();
      el.style.color = PRESET.color;
      el.style.pointerEvents = "none";
      el.style.userSelect = "none";
      el.style.animation = `fall ${duration}s linear ${
        Math.random() * 5
      }s infinite`;

      if (PRESET.rotate) {
        el.style.animation += ", spin 6s linear infinite";
      }

      container.appendChild(el);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        ref={ref}
        className="fixed inset-0 z-50 pointer-events-none"
        aria-hidden
      />

      {children}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(110vh) translateX(30px);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

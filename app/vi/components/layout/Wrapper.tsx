"use client";

import { useEffect, useRef } from "react";

/* ================= CONFIG ================= */

const PARTICLES = {
  snow: {
    chars: ["❄", "❅", "❆"],
    count: 80,
    minSize: 20,
    maxSize: 40,
    minDuration: 10,
    maxDuration: 20,
    opacity: [0.4, 1],
    color: "#fff",
    rotate: false,
  },

  luckyMoney: {
    chars: ["🧨", "🧧", "🏮", "🇻🇳", "🎈"],
    count: 22,
    minSize: 28,
    maxSize: 56,
    minDuration: 14,
    maxDuration: 24,
    opacity: [0.25, 0.6],
    color: "inherit",
    rotate: true,
  },

  flower: {
    chars: ["🌸", "🌺"],
    count: 50,
    minSize: 20,
    maxSize: 45,
    minDuration: 14,
    maxDuration: 26,
    opacity: [0.6, 1],
    color: "inherit",
    rotate: true,
  },

  star: {
    chars: ["⭐", "✨"],
    count: 60,
    minSize: 16,
    maxSize: 30,
    minDuration: 8,
    maxDuration: 14,
    opacity: [0.7, 1],
    color: "gold",
    rotate: true,
  },
} as const;

// 🔁 ĐỔI PRESET Ở ĐÂY
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

      // 🎲 Random ký tự
      const char =
        PRESET.chars[
          Math.floor(Math.random() * PRESET.chars.length)
        ];
      el.innerText = char;

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

      const sway = Math.random() * 40 - 20;

      el.style.position = "absolute";
      el.style.top = "-80px";
      el.style.left = Math.random() * 100 + "%";
      el.style.fontSize = size + "px";
      el.style.opacity = opacity.toString();
      el.style.color = PRESET.color;
      el.style.pointerEvents = "none";
      el.style.userSelect = "none";

      el.style.setProperty("--sway", `${sway}px`);

      el.style.animation = `
        fall ${duration}s linear ${Math.random() * 4}s infinite,
        sway ${duration / 2}s ease-in-out infinite
      `;

      if (PRESET.rotate) {
        el.style.animation += `, spin ${duration}s linear infinite`;
      }

      container.appendChild(el);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Layer */}
      <div
        ref={ref}
        className="fixed inset-0 z-50 pointer-events-none"
        aria-hidden
      />

      {children}

      {/* Animations */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(110vh);
          }
        }

        @keyframes sway {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(var(--sway));
          }
          100% {
            transform: translateX(0);
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

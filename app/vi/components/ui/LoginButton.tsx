"use client";

import { FiUser } from "react-icons/fi";

type Variant = "desktop" | "mobile";

export default function LoginButton({ variant }: { variant: Variant }) {

  const handleLogin = () => {
    window.location.href = "https://id.phuquocandyou.com";
  };

  /* ================= MOBILE ================= */
  if (variant === "mobile") {
    return (
      <button
        onClick={handleLogin}
        className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-gradient-to-br from-cyan-400 to-blue-600"
      >
        <FiUser className="text-white text-lg" />
      </button>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <button
      onClick={handleLogin}
      className="group flex items-center gap-4 px-4 py-1
      bg-cyan-500/10 backdrop-blur-3xl
      border border-cyan-400/30 rounded-full
      hover:bg-cyan-500/20 transition-all cursor-pointer"
    >
      {/* ICON */}
      <div
        className="w-12 h-12 rounded-full
        bg-gradient-to-br from-cyan-400 to-blue-600
        flex items-center justify-center
        shadow-[0_0_15px_rgba(34,211,238,0.4)]
        group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
        transition-all flex-shrink-0"
      >
        <FiUser className="text-white text-xl" />
      </div>

      {/* TEXT */}
      <span className="text-[12px] font-bold uppercase tracking-wider text-white">
        LOGIN
      </span>
    </button>
  );
}

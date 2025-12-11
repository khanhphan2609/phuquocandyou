"use client";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 3200);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 sm:px-10 md:px-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105 -z-10"
      >
        <source src="https://youtu.be/v4YWwU7l1k8" type="video/mp4" />
      </video>

      {/* Main Content Box */}
      <div
        className={`relative w-full max-w-6xl min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] text-center rounded-2xl backdrop-blur-xl bg-white/10 border border-white/25 shadow-[0_0_50px_rgba(255,255,255,0.15)] flex flex-col justify-center py-10 md:py-16 px-6 sm:px-10 md:px-14 transition-all duration-[1200ms] ease-out
          ${
            animate
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          }`}
      >
        {/* Glow Accent */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/25 via-purple-400/15 to-pink-400/25 blur-[120px] opacity-80 animate-pulse"></div>

        {/* Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold 
  bg-gradient-to-r from-[#00f2fe] via-[#7e5bef] to-[#ff9bd6] 
  bg-clip-text text-transparent drop-shadow-xl tracking-wide 
  transition-all duration-[1200ms] delay-[200ms] 
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Phú Quốc & You
        </h1>

        {/* Description */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl text-[#e8f7ff]/90 
  leading-relaxed drop-shadow-sm max-w-3xl mx-auto transition-all 
  duration-[1200ms] delay-[350ms]
  ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Phú Quốc & You là tạp chí du lịch và phong cách sống dành cho những ai
          muốn khám phá Đảo Ngọc theo cách sâu sắc và khác biệt. Chúng tôi kể
          lại bằng trải nghiệm chân thực — văn hóa, con người, di sản, ẩm thực
          và những cảm xúc mà chỉ Phú Quốc mới mang đến.
        </p>

        {/* Social Icons */}
        <div
          className={`mt-8 flex items-center justify-center gap-4 sm:gap-6 transition-all duration-[1000ms] delay-[500ms]
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <a
            href="tel:+84984007528"
            className="p-3 sm:p-4 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 transition shadow-lg"
          >
            <FaPhoneAlt className="text-white text-lg sm:text-xl" />
          </a>

          <a
            href="#"
            className="p-3 sm:p-4 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 transition shadow-lg"
          >
            <FaFacebookF className="text-white text-lg sm:text-xl" />
          </a>

          <a
            href="#"
            className="p-3 sm:p-4 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 transition shadow-lg"
          >
            <FaInstagram className="text-white text-lg sm:text-xl" />
          </a>

          <a
            href="#"
            className="p-3 sm:p-4 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 transition shadow-lg"
          >
            <FaTiktok className="text-white text-lg sm:text-xl" />
          </a>
        </div>
      </div>
    </main>
  );
}

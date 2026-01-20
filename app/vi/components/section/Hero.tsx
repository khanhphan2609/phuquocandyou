"use client";

import Link from "next/link";
import "./Hero.css";
import HeroModel from "../ui/HeroModel";
import { motion, type Variants, easeInOut } from "framer-motion";
import { Button } from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const itemVars: Variants = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const buttonVars: Variants = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut,

    },
  },
};

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-[92vh] flex items-center justify-center px-4 mb-20 lg:mb-0"
    >
      <div
        className="
          relative
          flex flex-col gap-20 md:gap-25 lg:gap-0 lg:flex-row items-center justify-between
          w-full max-w-[1400px]
          min-h-[75vh]
          bg-[var(--blue-light)]
          rounded-[2.5rem]
          border border-[var(--blue-normal)]
          shadow-2xl shadow-[var(--blue-dark)]
          mt-4 lg:mt-0
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-8 max-w-xl pt-8 lg:pt-0 lg:pl-8 ml-10">
          {/* TITLE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVars}
            className="z-10 -mt-6 lg:-mt-10"
          >
            <h1
              className="
    flex flex-row items-center
    whitespace-nowrap
    text-[7.5vw] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]
    font-[1000]
    tracking-tight
    uppercase
    leading-none
    select-none
  "
            >
              <motion.span
                variants={itemVars}
                className="inline-block bg-clip-text text-transparent bg-cover bg-no-repeat pt-10"
                style={{
                  backgroundImage: "url('/images/thumnails/bg-title.webp')",
                  WebkitBackgroundClip: "text",
                }}
              >
                Phú&nbsp;
              </motion.span>

              <motion.span
                variants={itemVars}
                className="inline-block bg-clip-text text-transparent bg-cover bg-no-repeat pt-10"
                style={{
                  backgroundImage: "url('/images/thumnails/bg-title.webp')",
                  WebkitBackgroundClip: "text",
                }}
              >
                Quốc&nbsp;
              </motion.span>

              <motion.span
                variants={itemVars}
                className="inline-block bg-clip-text text-transparent bg-cover bg-no-repeat pt-10"
                style={{
                  backgroundImage: "url('/images/thumnails/bg-title.webp')",
                  WebkitBackgroundClip: "text",
                }}
              >
                &amp; You
              </motion.span>
            </h1>

            <motion.p
              variants={itemVars}
              className="
                mt-3
                text-[var(--blue-dark)]
                text-[12px] lg:text-l
                tracking-[0.2em]
                font-light
                uppercase
              "
            >
              Kết nối, chia sẻ và khám phá Phú Quốc cùng cộng đồng đam mê du
              lịch, ẩm thực và trải nghiệm địa phương.
            </motion.p>
          </motion.div>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center gap-6">
            <motion.div
              variants={buttonVars}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button>
                <Link
                  href="https://www.facebook.com/profile.php?id=61585377338599"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    Tham gia cộng đồng ngay
                    <FaArrowRight className="text-sm" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        {/* RIGHT */}
        <HeroModel />
      </div>
    </section>
  );
}

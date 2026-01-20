"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

type HeroModelProps = {
  total?: number;
  visible?: number;
  interval?: number;
};

export default function HeroModel({
  total = 10,
  visible = 6,
  interval = 3000,
}: HeroModelProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [total, interval]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        ease: easeOut,
        delay: 0.3,
      }}
      className="model-3d scale-80 md:scale-90 lg:scale-100 lg:mr-40"
    >
      <Link
        href="https://www.facebook.com/profile.php?id=61585377338599"
        target="_blank"
        rel="noopener noreferrer"
        className="model-3d__hover-effect"
      >
        <div className="spinner">
          {Array.from({ length: visible }).map((_, index) => {
            const imgIndex = ((offset + index) % total) + 1;

            return (
              <div key={index}>
                <Image
                  src={`/images/thumnails/${imgIndex}.png`}
                  alt={`Thumbnail ${imgIndex}`}
                  width={300}
                  height={300}
                  priority={index === 0}
                />
              </div>
            );
          })}
        </div>

        <span className="tooltip">Khám phá cộng đồng</span>
      </Link>
    </motion.div>
  );
}

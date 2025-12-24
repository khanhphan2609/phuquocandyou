"use client";
import { useState } from "react"; 
import Image from "next/image";
import { motion, AnimatePresence, Variants, easeInOut } from "framer-motion";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const gridMap = [
    null, null, null, 0,
    null, null, 1, 2,
    null, 3, 4, 5,
    6, 7, 8, 9
  ];

  const images = Array.from({ length: 10 }, (_, i) => `/images/thumnails/${i + 1}.png`);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVars: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: easeInOut } }
  };

  return (
    <main className="min-h-screen bg-[#004d5a] text-white overflow-hidden relative flex flex-col font-sans">
      
      {/* Menu Hamburger */}
      <div 
        className="absolute top-8 right-8 z-50 flex flex-col items-end gap-1.5 cursor-pointer p-2 group" 
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="w-8 h-0.5 bg-[#87d1d4] rounded-full transition-all group-hover:w-5"></div>
        <div className="w-5 h-0.5 bg-[#87d1d4] rounded-full transition-all group-hover:w-8"></div>
      </div>

      <div className="flex-1 container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start md:pt-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVars}
          className="w-full md:w-3/5 z-10"
        >
          <h1 className="text-[17vw] md:text-[8.5rem] lg:text-[10.5rem] font-[1000] tracking-tighter uppercase select-none flex flex-col items-center md:items-start leading-none">
            
            <motion.span
              variants={itemVars}
              className="inline-block bg-clip-text text-transparent bg-cover bg-no-repeat pt-16 pb-2"
              style={{ 
                backgroundImage: "url('/images/thumnails/bg-title.webp')",
                backgroundPosition: "center top",
                WebkitBackgroundClip: "text",
              }}
            >
              Phú
            </motion.span>

            <motion.span
              variants={itemVars}
              className="inline-block bg-clip-text text-transparent bg-cover bg-no-repeat pt-32 pb-4 -mt-24 md:-mt-32"
              style={{ 
                backgroundImage: "url('/images/thumnails/bg-title.webp')",
                backgroundPosition: "center 45%",
                WebkitBackgroundClip: "text",
              }}
            >
              Quốc
            </motion.span>

            <motion.span
              variants={itemVars}
              className="inline-block bg-clip-text text-transparent bg-cover bg-no-repeat pt-10 pb-4 -mt-8 md:-mt-10"
              style={{ 
                backgroundImage: "url('/images/thumnails/bg-title.webp')",
                backgroundPosition: "center bottom",
                WebkitBackgroundClip: "text",
              }}
            >
              & You
            </motion.span>
          </h1>
          
          <motion.p 
            variants={itemVars}
            className="text-[#87d1d4] mt-12 md:mt-6 text-sm md:text-base tracking-[0.3em] font-light opacity-80 uppercase text-center md:text-left"
          >
            Trải nghiệm thiên đường đảo ngọc
          </motion.p>
        </motion.div>
      </div>

      {/* Grid ảnh */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="w-full md:w-[48%] lg:w-[42%] self-end mt-10 md:mt-0 md:absolute md:bottom-0 md:right-0"
      >
        <div className="grid grid-cols-4 gap-0.5 md:gap-1 p-0.5">
          {gridMap.map((imgIdx, idx) => (
            <motion.div 
              key={idx}
              variants={itemVars}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              onClick={() => setIsPopupOpen(true)}
              className="aspect-square relative overflow-hidden bg-transparent cursor-pointer group"
            >
              {imgIdx !== null && (
                <>
                  <Image
                    src={images[imgIdx]}
                    alt={`Phu Quoc ${imgIdx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 25vw, 15vw"
                  />
                  <div className="absolute inset-0 bg-[#004d5a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popup Coming Soon */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-[#002d35]/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#004d5a] border border-[#87d1d4]/30 p-8 md:p-12 max-w-lg w-full rounded-2xl shadow-2xl text-center"
            >
              <h2 className="text-[#87d1d4] text-4xl font-black uppercase tracking-tighter mb-4">
                Coming Soon
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Tính năng này đang được phát triển để mang lại trải nghiệm tuyệt vời nhất cho bạn.
              </p>
              
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="bg-[#87d1d4] text-[#004d5a] font-bold py-3 px-8 rounded-full hover:bg-white transition-all active:scale-95 uppercase tracking-widest text-sm"
              >
                Đã hiểu
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  SunIcon,
  AnchorIcon,
  UsersIcon,
  BriefcaseIcon,
  HomeIcon,
  RealEstateIconAlt,
} from "../ui/Icons";


type TabType =
  | "HOME"
  | "TRAVEL"
  | "REAL_ESTATE"
  | "COMMUNITY"
  | "CAREERS";

const ITEMS: {
  id: TabType;
  title: string;
  details: string[];
}[] = [
    {
      id: "HOME",
      title: "TRANG CHỦ",
      details: ["Thiên Đường Đảo Ngọc", "Trung Tâm Du Lịch"],
    },
    {
      id: "TRAVEL",
      title: "TRẢI NGHIỆM",
      details: ["VinWonders", "Cáp Treo Hòn Thơm", "Tour 4 Đảo"],
    },
    {
      id: "REAL_ESTATE",
      title: "BẤT ĐỘNG SẢN",
      details: ["Biệt Thự Biển", "Shophouse Địa Trung Hải"],
    },
    {
      id: "COMMUNITY",
      title: "NHỊP SỐNG",
      details: ["Văn Hóa Địa Phương", "Lễ Hội Biển"],
    },
    {
      id: "CAREERS",
      title: "SỰ NGHIỆP",
      details: ["Cơ Hội Việc Làm", "Môi Trường Chuyên Nghiệp"],
    },
  ];

const CONTENT_DATA: Record<
  TabType,
  {
    tag: string;
    title: string;
    description: string;
    image: string;
    bgImage: string;
  }
> = {
  HOME: {
    tag: "Coastal Luxury",
    title: "PHÚ QUỐC: BẢN GIAO HƯỞNG ĐẠI DƯƠNG",
    description:
      "Đắm mình trong sắc xanh vô tận của biển trời. Nơi kiến trúc hiện đại hòa quyện cùng vẻ đẹp hoang sơ của Đảo Ngọc.",
    image:
      "/images/thumnails/hero_img/1.png",
    bgImage:
      "/images/thumnails/hero_img/bg(1).png",
  },
  TRAVEL: {
    tag: "Sea & Adventure",
    title: "KHÁM PHÁ MIỀN NHIỆT ĐỚI TƯƠI SÁNG",
    description:
      "Những hành trình bất tận dưới ánh mặt trời rực rỡ.",
    image:
      "/images/thumnails/hero_img/2.png",
    bgImage:
      "/images/thumnails/hero_img/bg(2).png",
  },
  REAL_ESTATE: {
    tag: "Oceanfront Living",
    title: "KIẾN TẠO DI SẢN BÊN BỜ SÓNG",
    description:
      "Sở hữu tầm nhìn triệu đô hướng biển.",
    image:
      "/images/thumnails/hero_img/3.png",
    bgImage:
      "/images/thumnails/hero_img/bg(3).png",
  },
  COMMUNITY: {
    tag: "Island Soul",
    title: "KẾT NỐI TÂM HỒN ĐẢO NGỌC",
    description:
      "Lan tỏa những giá trị bền vững và nhịp sống năng động.",
    image:
      "/images/thumnails/hero_img/4.png",
    bgImage:
      "/images/thumnails/hero_img/bg(4).png",
  },
  CAREERS: {
    tag: "Bright Future",
    title: "VƯƠN XA CÙNG TẦM VÓC MỚI",
    description:
      "Đón đầu những cơ hội nghề nghiệp hấp dẫn.",
    image:
      "/images/thumnails/hero_img/5.png",
    bgImage:
      "/images/thumnails/hero_img/bg(5).png",
  },
};

const spiral = [
  { x: 0, y: 0, size: 260 },
  { x: 180, y: -120, size: 150 },
  { x: 220, y: 100, size: 140 },
  { x: 40, y: 220, size: 140 },
  { x: -170, y: 150, size: 140 },
];


export default function HeroWithOrbs() {
  const [current, setCurrent] = useState<TabType>("HOME");

  const ordered: TabType[] = [
    current,
    ...ITEMS.filter((i) => i.id !== current).map((i) => i.id),
  ];

  const data = CONTENT_DATA[current];

  const getIcon = (id: TabType) => {
    switch (id) {
      case "HOME":
        return <HomeIcon size={28} />;
      case "TRAVEL":
        return <SunIcon size={28} />;
      case "REAL_ESTATE":
        return <RealEstateIconAlt size={28} />;
      case "COMMUNITY":
        return <UsersIcon size={28} />;
      case "CAREERS":
        return <BriefcaseIcon size={28} />;
    }
  };


  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white flex items-center justify-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={data.bgImage}
          alt="bg"
          fill
          className="object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-16">


        {/* ================= LEFT CARD ================= */}
        <div className="w-full lg:w-[520px] flex-shrink-0">

          <div className="rounded-[40px] overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">

            {/* IMAGE DYNAMIC */}
            <div className="relative h-[300px]">
              <Image
                src={data.image}
                alt="card-img"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-10 space-y-6">
              <h2 className="text-3xl font-black leading-tight">
                {data.title}
              </h2>

              <p className="text-blue-100 border-l-2 border-cyan-400 pl-4">
                {data.description}
              </p>
              <Link
                href="/explore"
                className="block w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-center bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition"
              >
                {data.tag}
              </Link>

            </div>
          </div>
        </div>

        {/* ================= RIGHT ORBS ================= */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative min-h-[650px]">
          <div className="relative w-[560px] h-[560px]">


            {ordered.map((id, index) => {
              const item = ITEMS.find((i) => i.id === id)!;
              const pos = spiral[index];
              const isCenter = index === 0;

              return (
                <div
                  key={id}
                  onClick={() => setCurrent(id)}
                  className="absolute cursor-pointer transition-all duration-1000"
                  style={{
                    width: pos.size,
                    height: pos.size,
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
                    zIndex: isCenter ? 30 : 10,
                  }}
                >
                  <div
                    className={`relative w-full h-full rounded-full flex flex-col items-center justify-center text-center transition-all duration-500
                    ${isCenter
                        ? "bg-gradient-to-b from-[#0f2b46] to-[#081b2f] shadow-[0_0_120px_rgba(34,211,238,0.5)]"
                        : "bg-white/5 hover:scale-110"
                      }`}
                  >
                    {isCenter ? (
                      <>
                        <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg">
                          {getIcon(id)}
                        </div>

                        <h2 className="text-2xl font-black tracking-[6px] mb-6">
                          {item.title}
                        </h2>

                        <div className="space-y-3">
                          {item.details.map((detail, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-center gap-3 text-sm font-semibold"
                            >
                              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {item.title}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

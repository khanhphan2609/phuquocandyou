"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";

type RegionKey =
  | "ganhDau"
  | "baiThom"
  | "cuaCan"
  | "duongDong"
  | "hamNinh"
  | "baiVong"
  | "baiSao"
  | "anThoi"
  | "anThoiIslands";

type RegionData = {
  title: string;
  desc: string;
  gridIndex: number;
  images: string[];
};

const regions: Record<RegionKey, RegionData> = {
  // giữ nguyên data của bạn
  // (mình không rút gọn để bạn copy paste trực tiếp)
  ganhDau: {
    title: "Gành Dầu",
    desc: "Khu vực phía Tây Bắc Phú Quốc, nổi tiếng với bãi biển hoang sơ.",
    gridIndex: 1,
    images: [
      "/images/regions_img/ganh-dau/ganh-dau-1.png",
      "/images/regions_img/ganh-dau/ganh-dau-2.png",
      "/images/regions_img/ganh-dau/ganh-dau-3.png",
    ],
  },
  baiThom: {
    title: "Bãi Thơm",
    desc: "Khu vực phía Đông Bắc với nhiều cảnh quan thiên nhiên đẹp.",
    gridIndex: 2,
    images: [
      "/images/regions_img/bai-thom/bai-thom-1.png",
      "/images/regions_img/bai-thom/bai-thom-2.png",
      "/images/regions_img/bai-thom/bai-thom-3.png",
    ],
  },
  cuaCan: {
    title: "Cửa Cạn",
    desc: "Nơi có làng chài truyền thống và bãi biển yên bình.",
    gridIndex: 3,
    images: [
      "/images/regions_img/cua-can/cua-can-1.png",
      "/images/regions_img/cua-can/cua-can-2.png",
      "/images/regions_img/cua-can/cua-can-3.png",
    ],
  },
  duongDong: {
    title: "Dương Đông",
    desc: "Trung tâm hành chính và du lịch của Phú Quốc.",
    gridIndex: 4,
    images: [
      "/images/regions_img/duong-dong/duong-dong-1.png",
      "/images/regions_img/duong-dong/duong-dong-2.png",
      "/images/regions_img/duong-dong/duong-dong-3.png",
    ],
  },
  hamNinh: {
    title: "Hàm Ninh",
    desc: "Làng chài nổi tiếng với hải sản tươi sống.",
    gridIndex: 5,
    images: [
      "/images/regions_img/ham-ninh/ham-ninh-1.png",
      "/images/regions_img/ham-ninh/ham-ninh-2.png",
      "/images/regions_img/ham-ninh/ham-ninh-3.png",
    ],
  },
  baiVong: {
    title: "Bãi Vòng",
    desc: "Khu vực có cảng tàu và bãi biển đẹp.",
    gridIndex: 6,
    images: [
      "/images/regions_img/bai-vong/bai-vong-1.png",
      "/images/regions_img/bai-vong/bai-vong-2.png",
      "/images/regions_img/bai-vong/bai-vong-3.png",
    ],
  },
  baiSao: {
    title: "Bãi Sao",
    desc: "Một trong những bãi biển đẹp nhất Phú Quốc.",
    gridIndex: 7,
    images: [
      "/images/regions_img/bai-sao/bai-sao-1.png",
      "/images/regions_img/bai-sao/bai-sao-2.png",
      "/images/regions_img/bai-sao/bai-sao-3.png",
    ],
  },
  anThoi: {
    title: "An Thới",
    desc: "Thị trấn phía Nam đảo, cửa ngõ ra quần đảo An Thới.",
    gridIndex: 8,
    images: [
      "/images/regions_img/an-thoi/an-thoi-1.png",
      "/images/regions_img/an-thoi/an-thoi-2.png",
      "/images/regions_img/an-thoi/an-thoi-3.png",
    ],
  },
  anThoiIslands: {
    title: "Quần đảo An Thới",
    desc: "Gồm nhiều đảo nhỏ nổi tiếng với hoạt động snorkeling và lặn biển.",
    gridIndex: 9,
    images: [
      "/images/regions_img/an-thoi-islands/an-thoi-islands-1.png",
      "/images/regions_img/an-thoi-islands/an-thoi-islands-2.png",
      "/images/regions_img/an-thoi-islands/an-thoi-islands-3.png",
    ],
  },
};

export default function PhuQuocMap() {
  const [activeRegion, setActiveRegion] =
    useState<RegionKey>("ganhDau");

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1
          className="
  text-center
  text-2xl md:text-3xl
  font-extrabold
  uppercase
  tracking-widest
  mb-10
  text-[var(--primary)]
"
        >
          Các Địa Điểm Nổi Bật Ở Phú Quốc
        </h1>

        {/* TAB NAVIGATION */}
        <div className="flex justify-center mb-12 md:mb-20">

          <div className="bg-gray-100 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-md w-full max-w-5xl">

            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-6 md:gap-8 w-max">
                {(Object.keys(regions) as RegionKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveRegion(key)}
                    className={`pb-2 font-semibold border-b-4 whitespace-nowrap transition-all duration-300
              ${activeRegion === key
                        ? "text-[var(--blue-normal)] border-[var(--blue-normal)]"
                        : "text-gray-700 border-transparent hover:text-[var(--blue-normal-hover)] hover:border-[var(--blue-normal-hover)]"
                      }`}
                  >
                    {regions[key].title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* MAP */}
          <div className="flex justify-center">
            <div className="w-full aspect-square">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {[...Array(9)].map((_, i) => {
                  const x = (i % 3) * 100;
                  const y = Math.floor(i / 3) * 100;

                  const isActive =
                    regions[activeRegion].gridIndex === i + 1;

                  return (
                    <path
                      key={i}
                      d={`M${x} ${y} H${x + 100} V${y + 100} H${x} Z`}
                      onClick={() => {
                        const found = (
                          Object.keys(regions) as RegionKey[]
                        ).find(
                          (key) =>
                            regions[key].gridIndex === i + 1
                        );
                        if (found) setActiveRegion(found);
                      }}
                      className={`cursor-pointer transition-all duration-300
                        ${isActive
                          ? "fill-[var(--blue-normal)]"
                          : "fill-gray-300 hover:fill-[var(--blue-normal-hover)]"
                        }`}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-[var(--blue-dark)]">
              {regions[activeRegion].title}
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              {regions[activeRegion].desc}
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[400px]">
              {/* Big image */}
              <div className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden group">
                <Image
                  src={regions[activeRegion].images[0]}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Small 1 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src={regions[activeRegion].images[1]}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Small 2 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src={regions[activeRegion].images[2]}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>


            <Button variant="primary" size="lg">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

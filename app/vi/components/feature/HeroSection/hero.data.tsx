import {
  FiMap,
  FiCompass,
  FiHome,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import { JSX } from "react";

export const HERO_ICONS = {
  HOME: <FiHome className="w-8 h-8 text-white" />,
  TRAVEL: <FiCompass className="w-8 h-8 text-white" />,
  REAL_ESTATE: <FiMap className="w-8 h-8 text-white" />,
  COMMUNITY: <FiUsers className="w-8 h-8 text-white" />,
  CAREERS: <FiTrendingUp className="w-8 h-8 text-white" />,
};

export const HERO_CONTENT = {
  HOME: {
    tag: "Coastal Luxury",
    title: "PHÚ QUỐC: BẢN GIAO HƯỞNG ĐẠI DƯƠNG",
    description:
      "Đắm mình trong sắc xanh vô tận của biển trời. Nơi kiến trúc hiện đại hòa quyện cùng vẻ đẹp hoang sơ của Đảo Ngọc.",
    image:
      "https://images.unsplash.com/photo-1730714103959-5d5a30acf547?w=900&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1730714103959-5d5a30acf547?w=900&auto=format&fit=crop",
    themeColor: "from-cyan-400 via-blue-500 to-indigo-600",
    icon: HERO_ICONS.HOME,
  },

  TRAVEL: {
    tag: "Sea & Adventure",
    title: "KHÁM PHÁ MIỀN NHIỆT ĐỚI TƯƠI SÁNG",
    description:
      "Những hành trình bất tận dưới ánh mặt trời rực rỡ, nơi mỗi bước chân là một kỷ niệm đáng nhớ.",
    image:
      "https://images.unsplash.com/photo-1544918877-460635b6d13e?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop",
    themeColor: "from-sky-300 via-cyan-400 to-blue-500",
    icon: HERO_ICONS.TRAVEL,
  },

  "REAL ESTATE": {
    tag: "Oceanfront Living",
    title: "KIẾN TẠO DI SẢN BÊN BỜ SÓNG",
    description:
      "Sở hữu tầm nhìn triệu đô hướng biển. Không gian sống đẳng cấp.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop",
    themeColor: "from-teal-400 via-emerald-500 to-cyan-600",
    icon: HERO_ICONS.REAL_ESTATE,
  },

  COMMUNITY: {
    tag: "Island Soul",
    title: "KẾT NỐI TÂM HỒN ĐẢO NGỌC",
    description:
      "Lan tỏa những giá trị bền vững trong cộng đồng ven biển văn minh.",
    image:
      "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2000&auto=format&fit=crop",
    themeColor: "from-blue-400 via-indigo-400 to-violet-500",
    icon: HERO_ICONS.COMMUNITY,
  },

  CAREERS: {
    tag: "Bright Future",
    title: "VƯƠN XA CÙNG TẦM VÓC MỚI",
    description:
      "Đón đầu những cơ hội nghề nghiệp hấp dẫn tại tập đoàn hàng đầu.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    themeColor: "from-cyan-500 via-blue-400 to-sky-300",
    icon: HERO_ICONS.CAREERS,
  },
} satisfies Record<
  string,
  {
    tag: string;
    title: string;
    description: string;
    image: string;
    bgImage: string;
    themeColor: string;
    icon: JSX.Element;
  }
>;

export const HERO_ITEMS: {
  id: HeroTabId;
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
    id: "REAL ESTATE",
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

export const HERO_LAYOUT = {
  spiralPositions: [
    { x: 0, y: 0, size: 260 },
    { x: 1.1, y: -0.85, size: 190 },
    { x: 1.4, y: 0.6, size: 170 },
    { x: 0.3, y: 1.6, size: 170 },
    { x: -1.0, y: 1.0, size: 170 },
  ],

  getPositionMultiplier(w: number) {
    if (w < 768) return { x: 120, y: 110 };
    if (w < 1024) return { x: 150, y: 140 };
    return { x: 200, y: 190 };
  },

  getSizeMultiplier(w: number) {
    if (w < 768) return 0.6;
    if (w < 1024) return 0.8;
    return 1;
  },
};

export type HeroTabId = keyof typeof HERO_CONTENT;

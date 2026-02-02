import { useEffect, useRef, useCallback } from "react";
import {
  FiMap,
  FiCompass,
  FiHome,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";  
import { createRoot, Root } from "react-dom/client";
import { JSX } from "react/jsx-runtime";

type HTMLElementWithIconRoot = HTMLElement & {
  __iconRoot?: Root;
};

// ============================================
// PHẦN 1: CẤU HÌNH DỮ LIỆU
// ============================================

const ICON_COMPONENTS = {
  HOME: <FiHome className="w-8 h-8 text-white" />,
  TRAVEL: <FiCompass className="w-8 h-8 text-white" />,
  REAL_ESTATE: <FiMap className="w-8 h-8 text-white" />,
  COMMUNITY: <FiUsers className="w-8 h-8 text-white" />,
  CAREERS: <FiTrendingUp className="w-8 h-8 text-white" />,
};

const CONFIG = {
  spiralPositions: [
    { x: 0, y: 0, size: 260 },
    { x: 1.1, y: -0.85, size: 190 },
    { x: 1.4, y: 0.6, size: 170 },
    { x: 0.3, y: 1.6, size: 170 },
    { x: -1.0, y: 1.0, size: 170 },
  ],

  getPositionMultiplier() {
    const width = window.innerWidth;
    if (width < 768) {
      return { x: 120, y: 110 };
    } else if (width < 1024) {
      return { x: 150, y: 140 };
    }
    return { x: 200, y: 190 };
  },

  getSizeMultiplier() {
    const width = window.innerWidth;
    if (width < 768) {
      return 0.6;
    } else if (width < 1024) {
      return 0.8;
    }
    return 1;
  },
};

const CONTENT_DATA = {
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
    icon: ICON_COMPONENTS.HOME,
  },
  TRAVEL: {
    tag: "Sea & Adventure",
    title: "KHÁM PHÁ MIỀN NHIỆT ĐỚI TƯƠI SÁNG",
    description:
      "Những hành trình bất tận dưới ánh mặt trời rực rỡ, nơi mỗi bước chân là một kỷ niệm đáng nhớ tại thiên đường vui chơi hàng đầu.",
    image:
      "https://images.unsplash.com/photo-1544918877-460635b6d13e?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000&auto=format&fit=crop",
    themeColor: "from-sky-300 via-cyan-400 to-blue-500",
    icon: ICON_COMPONENTS.TRAVEL,
  },
  "REAL ESTATE": {
    tag: "Oceanfront Living",
    title: "KIẾN TẠO DI SẢN BÊN BỜ SÓNG",
    description:
      "Sở hữu tầm nhìn triệu đô hướng biển. Không gian sống đẳng cấp dành cho những chủ nhân xứng tầm.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2000&auto=format&fit=crop",
    themeColor: "from-teal-400 via-emerald-500 to-cyan-600",
    icon: ICON_COMPONENTS.REAL_ESTATE,
  },
  COMMUNITY: {
    tag: "Island Soul",
    title: "KẾT NỐI TÂM HỒN ĐẢO NGỌC",
    description:
      "Cùng lan tỏa những giá trị bền vững và nhịp sống năng động trong một cộng đồng ven biển văn minh.",
    image:
      "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2000&auto=format&fit=crop",
    themeColor: "from-blue-400 via-indigo-400 to-violet-500",
    icon: ICON_COMPONENTS.COMMUNITY,
  },
  CAREERS: {
    tag: "Bright Future",
    title: "VƯƠN XA CÙNG TẦM VÓC MỚI",
    description:
      "Đón đầu những cơ hội nghề nghiệp hấp dẫn tại tập đoàn du lịch nghỉ dưỡng hàng đầu Việt Nam.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    bgImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    themeColor: "from-cyan-500 via-blue-400 to-sky-300",
    icon: ICON_COMPONENTS.CAREERS,
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

const ITEMS = [
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

// ============================================
// PHẦN 2: CUSTOM HOOK
// ============================================

export const useHeroOrbs = (
  currentTab: string,
  onTabChange: (id: string) => void,
) => {
  const orbsContainerRef = useRef<HTMLDivElement>(null);

  // Update nội dung
  const updateContent = useCallback((tabId: string) => {
    const data = CONTENT_DATA[tabId as keyof typeof CONTENT_DATA];
    if (!data) return;

    const bgImage = document.getElementById("bg-image") as HTMLElement;
    const contentImage = document.getElementById(
      "content-image",
    ) as HTMLImageElement;
    const contentTag = document.getElementById("content-tag") as HTMLElement;
    const contentTitle = document.getElementById(
      "content-title",
    ) as HTMLElement;
    const contentDescription = document.getElementById(
      "content-description",
    ) as HTMLElement;
    const exploreBtn = document.getElementById("explore-btn") as HTMLElement;
    const btnText = document.getElementById("btn-text") as HTMLElement;

    if (bgImage) bgImage.style.backgroundImage = `url(${data.bgImage})`;
    if (contentImage) contentImage.src = data.image;
    if (contentTag) {
      contentTag.textContent = data.tag;
      contentTag.className = `absolute top-8 left-8 px-5 py-2 rounded-full backdrop-blur-xl border border-white/30 text-[9px] font-black uppercase tracking-[0.3em] text-white bg-gradient-to-r ${data.themeColor}`;
    }
    if (contentTitle) contentTitle.textContent = data.title;
    if (contentDescription) contentDescription.textContent = data.description;
    if (btnText)
      btnText.textContent =
        tabId === "HOME" ? "Bắt đầu hành trình" : "Khám phá chi tiết";
    if (exploreBtn) {
      exploreBtn.className = `group w-full py-5 text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-[1.5rem] shadow-2xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all bg-gradient-to-r ${data.themeColor}`;
    }

    // Trigger image animation
    if (contentImage) {
      const imgClasses = ["animate-in", "fade-in", "zoom-in-105"];
      contentImage.classList.remove(...imgClasses);
      void contentImage.offsetWidth;
      contentImage.classList.add(...imgClasses);
    }
  }, []);

  // Update orbs
  const renderOrbs = useCallback(() => {
    if (!orbsContainerRef.current) return;

    const container = orbsContainerRef.current;

    // Initial render
    if (container.children.length === 0) {
      ITEMS.forEach((item) => {
        const orb = document.createElement("div");
        orb.dataset.id = item.id;
        orb.className = `orb absolute transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer z-10 group`;
        orb.onclick = () => onTabChange(item.id);

        // ⚠️ Tạo root React cho orb
        const reactRoot = document.createElement("div");
        reactRoot.className = "w-full h-full";
        orb.appendChild(reactRoot);

        container.appendChild(orb);
      });
    }

    // Update orbs
    ITEMS.forEach((item) => {
      const orb = container.querySelector(
        `.orb[data-id="${item.id}"]`,
      ) as HTMLElement;
      if (orb) {
        const isCentered = item.id === currentTab;
        const otherItems = ITEMS.filter((i) => i.id !== currentTab);
        let posIndex = 0;
        if (!isCentered) {
          posIndex = otherItems.findIndex((i) => i.id === item.id) + 1;
        }

        const pos = CONFIG.spiralPositions[posIndex];
        const multiplier = CONFIG.getPositionMultiplier();
        const sizeMultiplier = CONFIG.getSizeMultiplier();

        const xPos = pos.x * multiplier.x;
        const yPos = pos.y * multiplier.y;
        const size = pos.size * sizeMultiplier;

        orb.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.top = "50%";
        orb.style.left = "50%";

        const data = CONTENT_DATA[item.id as keyof typeof CONTENT_DATA];

        const innerHTML = `
          <div class="w-full h-full flex flex-col items-center justify-center rounded-full transition-all duration-700 border
            ${
              isCentered
                ? `backdrop-blur-3xl border-white/50 text-white z-30 shadow-[0_0_100px_rgba(34,211,238,0.4)]`
                : "bg-white/5 backdrop-blur-xl border-white/10 text-blue-100 hover:bg-white/15 hover:border-cyan-400/50 hover:scale-110 shadow-lg"
            }"
            style="${isCentered ? "background: radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.1) 100%)" : ""}">
            
            <div class="text-center px-6 pointer-events-none">
              <div class="flex flex-col items-center">
                ${
                  isCentered
                    ? `
                   <div class="p-4 rounded-full mb-4 ring-2 ring-white/30 shadow-2xl bg-gradient-to-br ${data.themeColor} animate-bounce-slow">
                     <div class="react-icon-slot w-8 h-8 text-white"></div>
                   </div>
                `
                    : ""
                }
                
                <span class="font-black tracking-[0.25em] uppercase drop-shadow-lg ${isCentered ? "text-[20px] mb-4" : "text-xs"}">
                  ${item.title}
                </span>
                
                <div class="flex flex-col gap-3 transition-all duration-1000 ${isCentered ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}">
                  ${item.details
                    .map(
                      (d) => `
                    <div class="flex items-center gap-3 justify-center">
                      <div class="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
                      <span class="text-xs font-bold uppercase tracking-[0.1em] text-cyan-50 drop-shadow-md whitespace-nowrap">${d}</span>
                    </div>
                  `,
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </div>
          
          ${
            isCentered
              ? `
            <div class="absolute inset-[-30px] border border-cyan-400/30 rounded-full animate-spin-slow pointer-events-none">
               <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_white]"></div>
            </div>
          `
              : ""
          }
        `;

        orb.innerHTML = innerHTML;

        // ===============================
        // GẮN REACT ICON (KHÔNG ĐỤNG LOGIC)
        // ===============================
        const slot = orb.querySelector(
          ".react-icon-slot",
        ) as HTMLElementWithIconRoot | null;

        if (isCentered && slot && data?.icon) {
          if (!slot.__iconRoot) {
            slot.__iconRoot = createRoot(slot);
          }

          slot.__iconRoot.render(data.icon);
        }
      }
    });
  }, [currentTab, onTabChange]);

  // Main useEffect
  useEffect(() => {
    updateContent(currentTab);
    renderOrbs();

    // Resize listener
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        renderOrbs();
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [currentTab, updateContent, renderOrbs]);

  return orbsContainerRef;
};

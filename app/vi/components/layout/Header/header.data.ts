// header.data.ts

export type MENU_ITEMS = {
  label: string;
  href: string;
  external?: boolean;
};

export const MENU_ITEMS: MENU_ITEMS[] = [
  { label: "Tiện ích", href: "#Hero", external: false },
  { label: "Điểm đến", href: "#PhuQuocMap", external: false },
  { label: "Tin tức", href: "https://news.phuquocandyou.com", external: true },
  {
    label: "Tuyển dụng",
    href: "https://careers.phuquocandyou.com",
    external: true,
  },
];

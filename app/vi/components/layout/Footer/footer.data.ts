// footer.data.ts
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  ThreadsIcon,
} from "@/app/vi/components/ui/Icons";
export type FooterLink = {
  label: string;
  href?: string;
  external?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const FOOTER_COLUMNS = [
  {
    title: "Điểm đến",
    links: [
      { label: "Bắc Đảo", href: "/", external: false },
      { label: "Nam Đảo", href: "/", external: false },
      { label: "Xem Thêm", href: "/", external: false },
    ],
  },
  {
    title: "Tiện ích",
    links: [
      { label: "Trang Chủ", href: "#Hero", external: false },
      { label: "Trải Nghiệm", href: "#Hero", external: false },
      { label: "Việc Làm", href: "#Hero", external: false },
    ],
  },
  {
    title: "Liên kết nhanh",
    links: [
        { label: "Về Chúng Tôi", href: "#Hero", external: false },
      { label: "Liên Hệ Hợp Tác", href: "#Hero", external: false },
      { label: "Điều Khoản Sử Dụng", href: "#Hero", external: false },
    ],
  },
  {
    title: "Thông tin liên hệ",
    links: [
      { label: "Email: phuquocandyou@gmail.com", href: "mailto:phuquocandyou@gmail.com", external: true},
      { label: "Hotline: 098 400 75 28", href: "tel:0984007528", external: true },
      { label: "Địa chỉ: Dương Đông, Phú Quốc", href: undefined },
    ],
  },
];

export const FOOTER_SOCIALS = [
  {
    href: "https://www.facebook.com/profile.php?id=61585377338599",
    Icon: FacebookIcon,
  },
  {
    href: "https://instagram.com/phuquocandyou",
    Icon: InstagramIcon,
  },
  {
    href: "https://tiktok.com/@phuquocandyou",
    Icon: TikTokIcon,
  },
  {
    href: "https://threads.net/@phuquocandyou",
    Icon: ThreadsIcon,
  },
];

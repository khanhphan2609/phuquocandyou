import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  ThreadsIcon,
} from "../ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-darker)] text-[var(--blue-light)] z-10">

      {/* ===== MAIN ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-bold mb-5 text-white border-b border-[var(--blue-normal)] pb-2">
              Điểm đến
            </h2>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Grand World Phú Quốc</a></li>
              <li><a href="/" className="hover:text-white transition">Làng chài Rạch Vẹm</a></li>
              <li><a href="/" className="hover:text-white transition">Bãi Sao</a></li>
              <li><a href="/" className="hover:text-white transition">Hòn Thơm</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-bold mb-5 text-white border-b border-[var(--blue-normal)] pb-2">
              Tiện ích
            </h2>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Bắc đảo</a></li>
              <li><a href="/" className="hover:text-white transition">Nam đảo</a></li>
              <li><a href="/" className="hover:text-white transition">Dương Đông</a></li>
              <li><a href="/" className="hover:text-white transition">An Thới</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-bold mb-5 text-white border-b border-[var(--blue-normal)] pb-2">
              Liên kết nhanh
            </h2>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Tour 1 ngày</a></li>
              <li><a href="/" className="hover:text-white transition">Tour 3N2Đ</a></li>
              <li><a href="/" className="hover:text-white transition">Lặn ngắm san hô</a></li>
              <li><a href="/" className="hover:text-white transition">Câu cá đêm</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-bold mb-5 text-white border-b border-[var(--blue-normal)] pb-2">
              Thông tin liên hệ
            </h2>
            <ul className="space-y-3 text-sm">
              <li>Email: phuquocandyou@gmail.com</li>
              <li>Hotline: 098 400 75 28</li>
              <li>Địa chỉ: Dương Đông, Phú Quốc</li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61585377338599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Fanpage Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-[var(--blue-dark)]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Socials */}
          <div className="flex gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-[var(--blue-dark)] hover:bg-[var(--blue-normal)]
                         transition-all duration-300"
            >
              <FacebookIcon size={20} className="text-white" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-[var(--blue-dark)] hover:bg-[var(--blue-normal)]
                         transition-all duration-300"
            >
              <InstagramIcon size={20} className="text-white" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-[var(--blue-dark)] hover:bg-[var(--blue-normal)]
                         transition-all duration-300"
            >
              <TikTokIcon size={20} className="text-white" />
            </a>

            <a
              href="https://threads.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-[var(--blue-dark)] hover:bg-[var(--blue-normal)]
                         transition-all duration-300"
            >
              <ThreadsIcon size={20} className="text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Phú Quốc & You. All rights reserved.
          </div>

          {/* Cookie Button */}
          <button className="px-4 py-2 text-sm rounded-md border border-[var(--blue-normal)]
                             hover:bg-[var(--blue-normal)] hover:text-white
                             transition">
            Cookies Settings
          </button>

        </div>
      </div>
    </footer>
  );
}

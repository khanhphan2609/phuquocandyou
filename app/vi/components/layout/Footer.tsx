import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-darker)] border-t border-neutral-200">
      {/* ===== MAIN ===== */}
      <div className="footer-main max-w-7xl mx-auto px-6 py-16">
        <div
          className="
           grid gap-12
           grid-cols-1
           sm:grid-cols-2
           lg:grid-cols-4
           place-items-start
           "
        >
          {/* Column 1 */}
          <div className="footer-col">
            <h2 className="text-xl font-bold mb-4 text-white border-b-2 border-[var(--blue-normal)] pb-2 whitespace-nowrap">
              Các điểm đến hàng đầu
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="/" className="hover:underline hover:text-white transition">Grand World Phú Quốc</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Làng chài Rạch Vẹm</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Bãi Sao</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Hòn Thơm</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h2 className="text-xl font-bold mb-4 text-white border-b-2 border-[var(--blue-normal)] pb-2 whitespace-nowrap">
              Các vùng của Phú Quốc
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="/" className="hover:underline hover:text-white transition">Bắc đảo</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Nam đảo</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Dương Đông</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">An Thới</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h2 className="text-xl font-bold mb-4 text-white border-b-2 border-[var(--blue-normal)] pb-2 whitespace-nowrap">
              Đi du lịch vòng quanh
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li><a href="/" className="hover:underline hover:text-white transition">Tour 1 ngày</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Tour 3N2Đ</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Lặn ngắm san hô</a></li>
              <li><a href="/" className="hover:underline hover:text-white transition">Câu cá đêm</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h2 className="text-xl font-bold mb-4 text-white border-b-2 border-[var(--blue-normal)] pb-2 whitespace-nowrap">
              Liên hệ với chúng tôi
            </h2>
            <ul className="space-y-2 text-neutral-300">
              <li>Email: phuquocandyou@gmail.com</li>
              <li>Hotline: 098 400 75 28</li>
              <li>Địa chỉ: Dương Đông, Phú Quốc</li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61585377338599" className="hover:underline hover:text-white transition">
                  Fanpage Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM / SUB FOOTER ===== */}
      <div className="footer-bottom border-t border-neutral-700">
        <div
          className="
      max-w-7xl mx-auto px-6 py-6
      grid gap-4
      grid-cols-1
      md:grid-cols-[auto_1fr_auto]
      items-center
      text-center md:text-left
    "
        >
          {/* LEFT */}
          <div className="footer-socials flex justify-center md:justify-start gap-4">
            <FaFacebook />
            <FaSquareInstagram />
            <AiFillTikTok />
            <FaSquareThreads />
          </div>

          {/* CENTER */}
          <div className="footer-meta text-sm text-neutral-300">
            © {new Date().getFullYear()} Phú Quốc & You. All rights reserved |{" "}
            <a href="#" className="hover:underline">
              Terms
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Legal
            </a>
          </div>

          {/* RIGHT */}
          <div className="footer-legal flex justify-center md:justify-end">
            <button className="border px-4 py-2 rounded-md text-sm">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

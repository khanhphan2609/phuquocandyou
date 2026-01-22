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
          <div className="footer-col">Col 1</div>
          <div className="footer-col">Col 2</div>
          <div className="footer-col">Col 3</div>
          <div className="footer-col">Col 4</div>
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
            Socials
          </div>

          {/* CENTER */}
          <div className="footer-meta text-sm text-neutral-300">
            © {new Date().getFullYear()} Docker Inc. All rights reserved |{" "}
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

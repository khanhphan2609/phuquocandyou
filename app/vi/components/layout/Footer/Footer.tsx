import { FOOTER_COLUMNS, FOOTER_SOCIALS } from "./footer.data";

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-darker)] text-[var(--blue-light)] z-100">
      {/* ===== MAIN ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((col, idx) => (
            <div key={idx}>
              <h2 className="text-lg font-bold mb-5 text-white border-b border-[var(--blue-normal)] pb-2">
                {col.title}
              </h2>

              <ul className="space-y-3 text-sm">
                {col.links.map((link, i) => (
                  <li key={i}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="hover:text-white transition"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-[var(--blue-dark)]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Socials */}
          <div className="flex gap-5">
            {FOOTER_SOCIALS.map(({ href, Icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center
                           bg-[var(--blue-dark)] hover:bg-[var(--blue-normal)]
                           transition-all duration-300"
              >
                <Icon size={20} className="text-white" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Phú Quốc & You. All rights reserved.
          </div>

          {/* Cookie Button */}
          <button
            className="px-4 py-2 text-sm rounded-md border border-[var(--blue-normal)]
                       hover:bg-[var(--blue-normal)] hover:text-white transition"
          >
            Cookies Settings
          </button>
        </div>
      </div>
    </footer>
  );
}

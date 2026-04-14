import Image from "next/image";

const navLinks = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#spomen", label: "Spomen" },
  { href: "#turnir", label: "Turnir" },
  { href: "/galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "/politika-privatnosti", label: "Politika privatnosti" },
];

export default function Footer() {
  return (
    <footer className="bg-night text-green-100/60 pt-10 pb-6 sm:pt-12 sm:pb-7 lg:pt-14 lg:pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="footer-grid grid grid-cols-1 min-[500px]:grid-cols-2 min-[740px]:grid-cols-3 gap-10 pb-10 border-b border-white/[0.07] min-[740px]:justify-items-center">
          <div className="flex flex-col min-[500px]:col-span-2 min-[740px]:col-span-1">
            <div className="flex items-center gap-2.5 font-[family-name:var(--font-montserrat)] font-bold text-lg text-green-50 mb-3">
              <Image
                src="/logo.png"
                alt="UG Ridžali Džebe logo"
                width={36}
                height={36}
                className="w-9 h-9 flex-shrink-0 rounded-full"
              />
              <span className="leading-tight text-center min-[740px]:whitespace-nowrap min-[740px]:text-left">
                UG <span translate="no">&quot;Ridžali-Džebe&quot;</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-green-100/40 mb-4 max-w-[280px]">
              Udruženje građana posvećeno očuvanju tradicije, sjećanju na šehide
              i jačanju zajednice kroz sport i kulturu.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/ug_ridzalidzebe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-green-100/40 hover:text-instagram hover:bg-instagram/10 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100083602091090"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-green-100/40 hover:text-facebook hover:bg-facebook/10 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="sm:justify-self-center">
            <h4 className="font-[family-name:var(--font-montserrat)] font-semibold text-green-50/80 mb-4 text-sm uppercase tracking-wider">
              Navigacija
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-green-100/40 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:justify-self-center flex flex-col justify-between">
            <div>
              <h4 className="font-[family-name:var(--font-montserrat)] font-semibold text-green-50/80 mb-4 text-sm uppercase tracking-wider">
                Kontakt
              </h4>
              <div className="flex flex-col gap-4 text-sm text-green-100/40">
                <a
                  href="mailto:info@ugridzalidzebe.com"
                  className="inline-flex items-center gap-2.5 hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4l-10 8L2 4" />
                    </svg>
                  </div>
                  <span>info@ugridzalidzebe.com</span>
                </a>
                <a
                  href="tel:+38761750827"
                  className="inline-flex items-center gap-2.5 hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>+387 61 750 827</span>
                </a>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.05] max-[499.98px]:w-1/2">
              <p className="text-[0.7rem] text-green-100/20 uppercase tracking-wider mb-1">
                Arhitekt stranice
              </p>
              <p className="text-xs text-green-100/40">Amer Ćosić</p>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-green-100/30">
          <p>
            &copy; {new Date().getFullYear()} Udruženje građana
            <span translate="no">&quot;Ridžali-Džebe&quot;</span>. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

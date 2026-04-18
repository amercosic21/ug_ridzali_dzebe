import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  EmailIcon,
  PhoneIcon,
} from "./icons";

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
                <InstagramIcon width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100083602091090"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-green-100/40 hover:text-facebook hover:bg-facebook/10 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon width={18} height={18} />
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
                    <EmailIcon width={15} height={15} />
                  </div>
                  <span>info@ugridzalidzebe.com</span>
                </a>
                <a
                  href="tel:+38761750827"
                  className="inline-flex items-center gap-2.5 hover:text-accent transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-accent/10 transition-colors flex-shrink-0">
                    <PhoneIcon width={15} height={15} />
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

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#spomen", label: "Spomen" },
  { href: "#turnir", label: "Turnir" },
  { href: "/galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [navState, setNavState] = useState<"top" | "hidden" | "fixed">("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#pocetna");
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const isGallery = pathname.startsWith("/galerija");

  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      if (isHome) return href;
      return href === "#pocetna" ? "/" : `/${href}`;
    }
    return href;
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroEnd = isHome ? window.innerHeight - 80 : 300;
      if (y <= 10) {
        setNavState("top");
      } else if (y < heroEnd) {
        setNavState("hidden");
      } else {
        setNavState("fixed");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    const sectionIds = links
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (!href.startsWith("#")) {
      return pathname.startsWith(href);
    }
    return isHome && activeSection === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-5 ${
        navState === "top"
          ? "bg-transparent translate-y-0 opacity-100"
          : navState === "hidden"
            ? "-translate-y-full opacity-0"
            : `${isGallery ? "bg-nav-gallery/95" : "bg-nav/95"} translate-y-0 opacity-100 shadow-[0_2px_20px_rgba(0,0,0,0.15)]`
      }`}
    >
      <div className="w-full px-6 sm:px-10 flex items-center justify-between">
        <a
          href={isHome ? "#pocetna" : "/"}
          className="flex items-center gap-2.5 font-bold text-xl text-green-50 group"
        >
          <Image
            src="/logo.png"
            alt="UG Ridžali Džebe logo"
            width={40}
            height={40}
            className="w-10 h-10 flex-shrink-0 rounded-full"
          />
          <span className="font-[family-name:var(--font-montserrat)] group-hover:text-accent transition-colors duration-200">
            UG <span translate="no">"Ridžali-Džebe"</span>
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-[5px] min-[871px]:hidden bg-transparent border-none cursor-pointer p-1 z-[52]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori meni"
        >
          <span
            className={`w-6 h-0.5 bg-green-50 rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-green-50 rounded transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-green-50 rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>

        {/* Mobile backdrop */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[49] min-[871px]:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Menu */}
        <ul
          className={`
            flex list-none gap-1
            max-[870.98px]:fixed max-[870.98px]:top-0 max-[870.98px]:right-0 max-[870.98px]:w-[280px] max-[870.98px]:h-screen
            max-[870.98px]:bg-night/98 max-[870.98px]:backdrop-blur-xl max-[870.98px]:flex-col max-[870.98px]:pt-20 max-[870.98px]:px-7 max-[870.98px]:pb-7
            max-[870.98px]:shadow-[-5px_0_30px_rgba(0,0,0,0.4)]
            max-[870.98px]:transition-transform max-[870.98px]:duration-300 max-[870.98px]:z-[51]
            ${menuOpen ? "max-[870.98px]:translate-x-0" : "max-[870.98px]:translate-x-full"}
          `}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={resolveHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium text-[0.95rem] transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "text-green-100/80 hover:text-green-50 hover:bg-green-100/10"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

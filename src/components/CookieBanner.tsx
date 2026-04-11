"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-primary-dark/95 backdrop-blur-sm border-t border-primary/20 px-8 py-6 animate-[slideUp_0.4s_ease]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold text-accent text-sm mb-1">
            Kolačići
          </p>
          <p className="text-green-100/60 text-sm leading-relaxed">
            Koristimo kolačiće za analizu prometa i poboljšanje korisničkog
            iskustva. Klikom na &ldquo;Prihvati&rdquo; pristajete na korištenje
            kolačića.{" "}
            <Link
              href="/politika-privatnosti"
              className="text-green-100/80 hover:text-white underline underline-offset-2"
            >
              Saznajte više
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 ml-4">
          <button
            onClick={decline}
            className="px-6 py-2 rounded-full text-sm font-[family-name:var(--font-montserrat)] font-semibold text-green-100/50 border border-green-100/25 hover:text-accent hover:border-accent cursor-pointer transition-all duration-200"
          >
            Odbij
          </button>
          <button
            onClick={accept}
            className="px-6 py-2 rounded-full text-sm font-[family-name:var(--font-montserrat)] font-semibold bg-accent text-primary-dark border border-accent hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,174,37,0.35)] hover:bg-accent-dark cursor-pointer transition-all duration-200"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  );
}

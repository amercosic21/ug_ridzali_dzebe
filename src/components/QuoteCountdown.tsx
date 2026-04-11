"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const TOURNAMENT_DATE = new Date("2026-08-15T09:00:00+02:00");
const TOURNAMENT_END = new Date("2026-08-16T23:00:00+02:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft | null {
  const now = new Date();
  const diff = TOURNAMENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function isTournamentLive(): boolean {
  const now = new Date();
  return now >= TOURNAMENT_DATE && now <= TOURNAMENT_END;
}

export default function QuoteCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [live, setLive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const tick = () => {
      setTimeLeft(calculateTimeLeft());
      setLive(isTournamentLive());
    };

    tick();
    let timer = setInterval(tick, 1000);

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        tick();
        timer = setInterval(tick, 1000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="py-16 bg-sage relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-400/[0.08] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-gray-400/[0.05] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8 text-center">
        <ScrollReveal>
          <span className="text-accent text-7xl font-serif leading-none block mb-4">
            &ldquo;
          </span>
          <blockquote className="text-[clamp(1.1rem,2.5vw,1.5rem)] leading-relaxed font-light italic mb-6 text-gray-700">
            Sport ima moć da mijenja svijet. Ima moć da inspiriše. Ima moć da
            ujedini ljude na način na koji malo šta drugo može.
          </blockquote>
          <div className="w-12 h-0.5 bg-accent/60 mx-auto mb-4" />
          <cite className="text-gray-400 text-sm not-italic font-[family-name:var(--font-montserrat)]">
            Nelson Mandela
          </cite>
        </ScrollReveal>

        <div className="my-14 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300/40" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,174,37,0.5)" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <div className="flex-1 h-px bg-gray-300/40" />
        </div>

        {!mounted ? (
          <p className="text-lg text-gray-400">Učitavanje...</p>
        ) : live ? (
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">
                Uživo
              </span>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-4 text-gray-900">
              Turnir je u toku!
            </h2>
            <p className="text-lg text-gray-500">
              Memorijalni turnir se upravo održava. Dođite i podržite ekipe!
            </p>
          </ScrollReveal>
        ) : timeLeft ? (
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/25 rounded-full mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-dark">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-accent-dark text-sm font-semibold uppercase tracking-wider">
                Sljedeći turnir
              </span>
            </div>
            <p className="text-gray-400 mb-10 text-sm">Avgust 2026. na izletištu u Ridžalima</p>
            <div className="flex justify-center gap-3 sm:gap-6">
              {[
                { value: timeLeft.days, label: "Dana" },
                { value: timeLeft.hours, label: "Sati" },
                { value: timeLeft.minutes, label: "Minuta" },
                { value: timeLeft.seconds, label: "Sekundi" },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] bg-white/70 border border-gray-200/60 rounded-2xl flex items-center justify-center mb-2.5 shadow-sm">
                    <span className="font-[family-name:var(--font-montserrat)] text-[1.8rem] sm:text-[2.5rem] font-extrabold text-gray-800">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[0.65rem] sm:text-xs text-gray-400 uppercase tracking-[0.15em] font-medium">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}

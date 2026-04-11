"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Let the browser handle scroll restoration on back/forward navigation
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "back_forward") return;

    const timeout = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}

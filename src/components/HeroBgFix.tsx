"use client";

import { useEffect } from "react";

const MIN_VISIBLE_WIDTH = 850;

export default function HeroBgFix() {
  useEffect(() => {
    const section = document.getElementById("pocetna");
    if (!section) return;
    const svg = section.querySelector("svg");
    const container = svg?.parentElement;
    if (!svg || !container) return;

    function apply() {
      if (!svg || !container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isPortrait = h > w;

      if (isPortrait) {
        const vbHeight = Math.max(Math.ceil((MIN_VISIBLE_WIDTH * h) / w), 810);
        const yStart = -(vbHeight - 810);
        svg.setAttribute("viewBox", `0 ${yStart} 1440 ${vbHeight}`);
        svg.setAttribute("preserveAspectRatio", "xMidYMax slice");
        container.style.width = "100%";
        container.style.transformOrigin = "center bottom";

        const ratio = h / w;
        const t = ratio - 1;
        const scale = 1 + t * (0.55 + t * 0.08);
        container.style.transform = `scaleY(${scale.toFixed(3)})`;
      } else {
        svg.setAttribute("viewBox", "0 0 1440 810");
        svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
        container.style.width = "max(100%, calc(100vh * 1440 / 810))";
        container.style.transformOrigin = "";
        container.style.transform = "";
      }
    }

    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return null;
}

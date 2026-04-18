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

    function getLvh() {
      const probe = document.createElement("div");
      probe.style.cssText =
        "position:absolute;top:0;left:0;height:100lvh;width:1px;visibility:hidden;pointer-events:none;";
      document.body.appendChild(probe);
      const h = probe.offsetHeight || window.innerHeight;
      document.body.removeChild(probe);
      return h;
    }

    function apply() {
      if (!svg || !container) return;
      const w = window.innerWidth;
      const h = getLvh();
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
        container.style.width = "max(100%, calc(100lvh * 1440 / 810))";
        container.style.transformOrigin = "";
        container.style.transform = "";
      }
    }

    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return null;
}

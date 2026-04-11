"use client";

import { useRef, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

const delayMap = new WeakMap<Element, number>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const delay = delayMap.get(entry.target) ?? 0;
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), delay);
          } else {
            entry.target.classList.remove("visible");
          }
        }
      },
      { threshold: 0.15 },
    );
  }
  return sharedObserver;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    delayMap.set(el, delay);
    const observer = getObserver();
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      delayMap.delete(el);
    };
  }, [delay]);

  const dirClass =
    direction === "left"
      ? "from-left"
      : direction === "right"
        ? "from-right"
        : "";

  return (
    <div ref={ref} className={`scroll-reveal ${dirClass} ${className}`}>
      {children}
    </div>
  );
}

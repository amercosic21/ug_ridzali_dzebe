"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
}

export default function Lightbox({
  images,
  startIndex,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const [loaded, setLoaded] = useState(true);
  const indexRef = useRef(startIndex);
  const touchStartX = useRef(0);
  const wasPinch = useRef(false);

  const goTo = useCallback((newIndex: number) => {
    indexRef.current = newIndex;
    setLoaded(false);
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  }, [onIndexChange]);

  const prev = useCallback(() => {
    goTo((indexRef.current - 1 + images.length) % images.length);
  }, [images.length, goTo]);

  const next = useCallback(() => {
    goTo((indexRef.current + 1) % images.length);
  }, [images.length, goTo]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, prev, next]);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 1) wasPinch.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (wasPinch.current) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  // Preload nearby images so they're cached before navigation
  const preloadIndices = [-2, -1, 1, 2, 3].map(
    (offset) => (index + offset + images.length) % images.length,
  );

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/92 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        wasPinch.current = false;
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Preloader */}
      <div className="hidden" aria-hidden="true">
        {preloadIndices.map((i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={images[i].src} alt="" />
        ))}
      </div>

      <button
        onClick={onClose}
        className="absolute top-5 right-6 bg-transparent border-none text-green-50 text-4xl cursor-pointer hover:text-accent transition-colors z-10"
        aria-label="Zatvori"
      >
        &times;
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 border-none text-green-50 text-3xl p-4 cursor-pointer rounded-full hover:bg-white/25 transition-colors z-10"
            aria-label="Prethodna"
          >
            &#10094;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 border-none text-green-50 text-3xl p-4 cursor-pointer rounded-full hover:bg-white/25 transition-colors z-10"
            aria-label="Sljedeća"
          >
            &#10095;
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={index}
        src={images[index].src}
        alt={images[index].alt}
        onClick={(e) => e.stopPropagation()}
        onLoad={() => setLoaded(true)}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg transition-opacity duration-200 ease-in select-none"
        style={{ opacity: loaded ? 1 : 0 }}
        draggable={false}
      />

      {images.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-green-100/50 text-sm font-[family-name:var(--font-montserrat)]"
        >
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

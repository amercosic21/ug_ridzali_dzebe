"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import LightboxControls from "./lightbox/LightboxControls";
import LightboxCarousel from "./lightbox/LightboxCarousel";
import { useZoom } from "./lightbox/useZoom";
import { useLightboxGestures } from "./lightbox/useLightboxGestures";
import { BUTTON_ZOOM_FACTOR, MAX_SCALE, MIN_SCALE } from "./lightbox/constants";

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
  const indexRef = useRef(startIndex);
  const imgRef = useRef<HTMLImageElement>(null);
  const zoom = useZoom(imgRef);

  const goTo = useCallback(
    (newIndex: number) => {
      indexRef.current = newIndex;
      setIndex(newIndex);
      zoom.resetZoom();
      onIndexChange?.(newIndex);
    },
    [onIndexChange, zoom],
  );

  const prev = useCallback(() => {
    goTo((indexRef.current - 1 + images.length) % images.length);
  }, [images.length, goTo]);

  const next = useCallback(() => {
    goTo((indexRef.current + 1) % images.length);
  }, [images.length, goTo]);

  const gestures = useLightboxGestures({
    imgRef,
    zoom,
    onPrev: prev,
    onNext: next,
  });

  const mouseDownOnImageRef = useRef(false);
  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    mouseDownOnImageRef.current = e.target === imgRef.current;
  };
  const handleBackdropClick = () => {
    if (mouseDownOnImageRef.current) {
      mouseDownOnImageRef.current = false;
      return;
    }
    onClose();
  };

  const zoomInBtn = useCallback(() => {
    zoom.zoomToPoint(
      zoom.scaleRef.current * BUTTON_ZOOM_FACTOR,
      window.innerWidth / 2,
      window.innerHeight / 2,
      true,
    );
  }, [zoom]);

  const zoomOutBtn = useCallback(() => {
    zoom.zoomToPoint(
      zoom.scaleRef.current / BUTTON_ZOOM_FACTOR,
      window.innerWidth / 2,
      window.innerHeight / 2,
      true,
    );
  }, [zoom]);

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

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const preloadIndices = [-2, 2, 3].map(
    (offset) => (index + offset + images.length) % images.length,
  );

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/92 overflow-hidden"
      onMouseDown={handleBackdropMouseDown}
      onClick={handleBackdropClick}
      style={{ touchAction: "none" }}
    >
      <div className="hidden" aria-hidden="true">
        {preloadIndices.map((i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={images[i].src} alt="" />
        ))}
      </div>

      <LightboxControls
        total={images.length}
        currentIndex={index}
        onClose={onClose}
        onPrev={prev}
        onNext={next}
        onZoomIn={zoomInBtn}
        onZoomOut={zoomOutBtn}
        canZoomIn={zoom.scale < MAX_SCALE}
        canZoomOut={zoom.scale > MIN_SCALE}
      />

      <LightboxCarousel
        images={images}
        index={index}
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        dragX={gestures.dragX}
        animating={gestures.animating}
        scale={zoom.scale}
        translate={zoom.translate}
        zoomAnimating={zoom.zoomAnimating}
        imgRef={imgRef}
        onTouchStart={gestures.onTouchStart}
        onTouchMove={gestures.onTouchMove}
        onTouchEnd={gestures.onTouchEnd}
        panning={gestures.panning}
        onMouseDown={gestures.onMouseDown}
        onDoubleClick={gestures.onDoubleClick}
      />
    </div>
  );
}

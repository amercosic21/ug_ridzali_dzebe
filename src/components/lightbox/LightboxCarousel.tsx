import { type RefObject } from "react";
import {
  SWIPE_ANIMATION_MS,
  ZOOM_ANIMATION_MS,
  ZOOM_EASING,
} from "./constants";

interface Image {
  src: string;
  alt: string;
}

interface LightboxCarouselProps {
  images: Image[];
  index: number;
  prevIndex: number;
  nextIndex: number;
  dragX: number;
  animating: boolean;
  scale: number;
  translate: { x: number; y: number };
  zoomAnimating: boolean;
  imgRef: RefObject<HTMLImageElement | null>;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  panning: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onDoubleClick: (e: React.MouseEvent) => void;
}

export default function LightboxCarousel({
  images,
  index,
  prevIndex,
  nextIndex,
  dragX,
  animating,
  scale,
  translate,
  zoomAnimating,
  imgRef,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  panning,
  onMouseDown,
  onDoubleClick,
}: LightboxCarouselProps) {
  const cursor = panning ? "grabbing" : scale > 1 ? "grab" : "default";
  return (
    <div
      className="absolute top-0 left-0 h-full flex items-center"
      style={{
        width: "300vw",
        transform: `translate3d(calc(-100vw + ${dragX}px), 0, 0)`,
        transition: animating
          ? `transform ${SWIPE_ANIMATION_MS}ms ease-out`
          : "none",
        willChange: "transform",
        touchAction: "none",
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="w-screen h-full flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[prevIndex].src}
          alt=""
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
          style={{ transform: "translateZ(0)" }}
          draggable={false}
        />
      </div>

      <div
        className="w-screen h-full flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={images[index].src}
          alt={images[index].alt}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={onMouseDown}
          onDoubleClick={onDoubleClick}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
          style={{
            transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
            transition: zoomAnimating
              ? `transform ${ZOOM_ANIMATION_MS}ms ${ZOOM_EASING}`
              : "none",
            willChange: "transform",
            backfaceVisibility: "hidden",
            cursor,
          }}
          draggable={false}
        />
      </div>

      <div
        className="w-screen h-full flex items-center justify-center"
        style={{ willChange: "transform" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[nextIndex].src}
          alt=""
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
          style={{ transform: "translateZ(0)" }}
          draggable={false}
        />
      </div>
    </div>
  );
}

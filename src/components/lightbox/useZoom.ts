import { useState, useCallback, useRef, type RefObject } from "react";
import { flushSync } from "react-dom";
import {
  MIN_SCALE,
  MAX_SCALE,
  DOUBLE_TAP_FACTOR,
  ZOOM_ANIMATION_MS,
} from "./constants";

export function useZoom(imgRef: RefObject<HTMLImageElement | null>) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zoomAnimating, setZoomAnimating] = useState(false);
  const scaleRef = useRef(1);

  const clampTranslate = useCallback(
    (x: number, y: number, currentScale: number) => {
      if (currentScale <= 1 || !imgRef.current) return { x: 0, y: 0 };
      const w = imgRef.current.offsetWidth * currentScale;
      const h = imgRef.current.offsetHeight * currentScale;
      const maxX = Math.max(0, (w - window.innerWidth) / 2);
      const maxY = Math.max(0, (h - window.innerHeight) / 2);
      return {
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, y)),
      };
    },
    [imgRef],
  );

  const resetZoom = useCallback(() => {
    scaleRef.current = 1;
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const zoomToPoint = useCallback(
    (rawScale: number, x: number, y: number, animate: boolean) => {
      if (!imgRef.current) return;
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, rawScale));
      if (newScale === scaleRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const visualCx = rect.left + rect.width / 2;
      const visualCy = rect.top + rect.height / 2;
      const ratio = newScale / scaleRef.current;
      const newTx = translate.x + (x - visualCx) * (1 - ratio);
      const newTy = translate.y + (y - visualCy) * (1 - ratio);
      const clamped = clampTranslate(newTx, newTy, newScale);

      scaleRef.current = newScale;
      if (animate) {
        flushSync(() => setZoomAnimating(true));
        void imgRef.current.offsetHeight;
      }
      setScale(newScale);
      setTranslate(clamped);
      if (animate) {
        setTimeout(() => setZoomAnimating(false), ZOOM_ANIMATION_MS);
      }
    },
    [translate, clampTranslate, imgRef],
  );

  const zoomToward = useCallback(
    (tapX: number, tapY: number) => {
      zoomToPoint(scaleRef.current * DOUBLE_TAP_FACTOR, tapX, tapY, true);
    },
    [zoomToPoint],
  );

  const applyPinch = useCallback(
    (rawScale: number) => {
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, rawScale));
      scaleRef.current = newScale;
      setScale(newScale);
      setTranslate((t) => clampTranslate(t.x, t.y, newScale));
    },
    [clampTranslate],
  );

  return {
    scale,
    translate,
    scaleRef,
    zoomAnimating,
    clampTranslate,
    resetZoom,
    zoomToPoint,
    zoomToward,
    applyPinch,
    setTranslate,
  };
}

export type ZoomController = ReturnType<typeof useZoom>;

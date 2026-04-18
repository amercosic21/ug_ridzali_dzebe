import { useRef, type RefObject } from "react";
import {
  MIN_SCALE,
  SWIPE_THRESHOLD,
  SWIPE_THRESHOLD_MAX,
  DOUBLE_TAP_MS,
  TAP_MAX_MS,
  TAP_MAX_MOVE,
  DOUBLE_TAP_MAX_DIST,
} from "./constants";
import type { ZoomController } from "./useZoom";

interface TouchOptions {
  imgRef: RefObject<HTMLImageElement | null>;
  zoom: ZoomController;
  setDragX: (x: number) => void;
  setAnimating: (a: boolean) => void;
  finishSwipe: (finalDelta: number, threshold: number, fromPan: boolean) => void;
  currentDragX: () => number;
}

const getDistance = (t1: React.Touch, t2: React.Touch) =>
  Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);

export function useTouchGestures({
  imgRef,
  zoom,
  setDragX,
  setAnimating,
  finishSwipe,
  currentDragX,
}: TouchOptions) {
  const dragStartX = useRef<number | null>(null);
  const pinchStart = useRef<{ distance: number; scale: number } | null>(null);
  const panStart = useRef<{
    x: number;
    y: number;
    tx: number;
    ty: number;
  } | null>(null);
  const tapStart = useRef<{ x: number; y: number; time: number } | null>(null);
  const lastTap = useRef<{ x: number; y: number; time: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchStart.current = {
        distance: getDistance(e.touches[0], e.touches[1]),
        scale: zoom.scaleRef.current,
      };
      panStart.current = null;
      dragStartX.current = null;
      tapStart.current = null;
      lastTap.current = null;
      return;
    }

    if (e.touches.length !== 1) return;
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const now = Date.now();

    if (
      lastTap.current &&
      now - lastTap.current.time < DOUBLE_TAP_MS &&
      Math.hypot(x - lastTap.current.x, y - lastTap.current.y) <
        DOUBLE_TAP_MAX_DIST &&
      imgRef.current
    ) {
      const rect = imgRef.current.getBoundingClientRect();
      const onImage =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      if (onImage) {
        lastTap.current = null;
        tapStart.current = null;
        panStart.current = null;
        dragStartX.current = null;
        zoom.zoomToward(x, y);
        return;
      }
    }

    tapStart.current = { x, y, time: now };
    if (zoom.scaleRef.current > 1) {
      panStart.current = {
        x,
        y,
        tx: zoom.translate.x,
        ty: zoom.translate.y,
      };
      dragStartX.current = null;
    } else {
      dragStartX.current = x;
      setAnimating(false);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      zoom.applyPinch(
        (distance / pinchStart.current.distance) * pinchStart.current.scale,
      );
      return;
    }

    if (
      e.touches.length === 1 &&
      panStart.current &&
      zoom.scaleRef.current > 1
    ) {
      const dx = e.touches[0].clientX - panStart.current.x;
      const dy = e.touches[0].clientY - panStart.current.y;
      const desiredX = panStart.current.tx + dx;
      const desiredY = panStart.current.ty + dy;
      const clamped = zoom.clampTranslate(
        desiredX,
        desiredY,
        zoom.scaleRef.current,
      );
      zoom.setTranslate(clamped);
      setDragX(desiredX - clamped.x);
      return;
    }

    if (e.touches.length === 1 && dragStartX.current !== null) {
      setDragX(e.touches[0].clientX - dragStartX.current);
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (pinchStart.current) {
      pinchStart.current = null;
      tapStart.current = null;
      if (zoom.scaleRef.current <= MIN_SCALE) zoom.resetZoom();
      return;
    }

    if (tapStart.current && imgRef.current) {
      const tap = tapStart.current;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const moved = Math.hypot(endX - tap.x, endY - tap.y);
      const elapsed = Date.now() - tap.time;
      const rect = imgRef.current.getBoundingClientRect();
      const onImage =
        endX >= rect.left &&
        endX <= rect.right &&
        endY >= rect.top &&
        endY <= rect.bottom;

      if (moved < TAP_MAX_MOVE && elapsed < TAP_MAX_MS && onImage) {
        tapStart.current = null;
        panStart.current = null;
        dragStartX.current = null;
        lastTap.current = { x: endX, y: endY, time: Date.now() };
        return;
      }
      tapStart.current = null;
    }

    let finalDelta: number | null = null;
    let threshold = SWIPE_THRESHOLD;
    let fromPan = false;

    if (panStart.current) {
      panStart.current = null;
      finalDelta = currentDragX();
      threshold = Math.min(
        SWIPE_THRESHOLD_MAX,
        SWIPE_THRESHOLD * zoom.scaleRef.current,
      );
      fromPan = true;
    } else if (dragStartX.current !== null) {
      finalDelta = e.changedTouches[0].clientX - dragStartX.current;
      dragStartX.current = null;
    }

    if (finalDelta === null) return;
    finishSwipe(finalDelta, threshold, fromPan);
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}

import { useEffect, useRef, type RefObject } from "react";
import {
  MOUSE_SWIPE_THRESHOLD,
  MOUSE_SWIPE_THRESHOLD_MAX,
  WHEEL_ZOOM_FACTOR,
} from "./constants";
import type { ZoomController } from "./useZoom";

interface MouseOptions {
  imgRef: RefObject<HTMLImageElement | null>;
  zoom: ZoomController;
  setDragX: (x: number) => void;
  setAnimating: (a: boolean) => void;
  setPanning: (p: boolean) => void;
  finishSwipe: (finalDelta: number, threshold: number, fromPan: boolean) => void;
}

export function useMouseGestures({
  imgRef,
  zoom,
  setDragX,
  setAnimating,
  setPanning,
  finishSwipe,
}: MouseOptions) {
  const dragStartX = useRef<number | null>(null);
  const panStart = useRef<{
    x: number;
    y: number;
    tx: number;
    ty: number;
  } | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? WHEEL_ZOOM_FACTOR : 1 / WHEEL_ZOOM_FACTOR;
      zoom.zoomToPoint(
        zoom.scaleRef.current * factor,
        e.clientX,
        e.clientY,
        false,
      );
    };

    img.addEventListener("wheel", onWheel, { passive: false });
    return () => img.removeEventListener("wheel", onWheel);
  }, [imgRef, zoom]);

  const onDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    zoom.zoomToward(e.clientX, e.clientY);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const zoomed = zoom.scaleRef.current > 1;
    let currentDrag = 0;

    if (zoomed) {
      panStart.current = {
        x: startX,
        y: startY,
        tx: zoom.translate.x,
        ty: zoom.translate.y,
      };
      setPanning(true);
    } else {
      dragStartX.current = startX;
      setAnimating(false);
    }

    const onMove = (ev: MouseEvent) => {
      if (panStart.current && zoomed) {
        const dx = ev.clientX - panStart.current.x;
        const dy = ev.clientY - panStart.current.y;
        const desiredX = panStart.current.tx + dx;
        const desiredY = panStart.current.ty + dy;
        const clamped = zoom.clampTranslate(
          desiredX,
          desiredY,
          zoom.scaleRef.current,
        );
        zoom.setTranslate(clamped);
        currentDrag = desiredX - clamped.x;
        setDragX(currentDrag);
      } else if (dragStartX.current !== null) {
        currentDrag = ev.clientX - dragStartX.current;
        setDragX(currentDrag);
      }
    };

    const onUp = (ev: MouseEvent) => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);

      let finalDelta = 0;
      let threshold = MOUSE_SWIPE_THRESHOLD;
      let fromPan = false;

      if (panStart.current) {
        finalDelta = currentDrag;
        threshold = Math.min(
          MOUSE_SWIPE_THRESHOLD_MAX,
          MOUSE_SWIPE_THRESHOLD * zoom.scaleRef.current,
        );
        fromPan = true;
        panStart.current = null;
        setPanning(false);
      } else if (dragStartX.current !== null) {
        finalDelta = ev.clientX - dragStartX.current;
        dragStartX.current = null;
      }

      finishSwipe(finalDelta, threshold, fromPan);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return { onMouseDown, onDoubleClick };
}

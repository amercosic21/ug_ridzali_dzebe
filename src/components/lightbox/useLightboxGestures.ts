import { useCallback, useRef, useState, type RefObject } from "react";
import { SWIPE_ANIMATION_MS } from "./constants";
import { useTouchGestures } from "./useTouchGestures";
import { useMouseGestures } from "./useMouseGestures";
import type { ZoomController } from "./useZoom";

interface GestureOptions {
  imgRef: RefObject<HTMLImageElement | null>;
  zoom: ZoomController;
  onPrev: () => void;
  onNext: () => void;
}

export function useLightboxGestures({
  imgRef,
  zoom,
  onPrev,
  onNext,
}: GestureOptions) {
  const [dragX, setDragX] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [panning, setPanning] = useState(false);
  const dragXRef = useRef(0);

  const updateDragX = useCallback((x: number) => {
    dragXRef.current = x;
    setDragX(x);
  }, []);

  const finishSwipe = useCallback(
    (finalDelta: number, threshold: number, fromPan: boolean) => {
      if (finalDelta === 0) return;

      if (Math.abs(finalDelta) > threshold) {
        const direction = finalDelta < 0 ? -1 : 1;
        setAnimating(true);
        updateDragX(direction * window.innerWidth);
        setTimeout(() => {
          if (direction < 0) onNext();
          else onPrev();
          setAnimating(false);
          updateDragX(0);
        }, SWIPE_ANIMATION_MS);
      } else if (!fromPan) {
        setAnimating(true);
        updateDragX(0);
        setTimeout(() => setAnimating(false), SWIPE_ANIMATION_MS);
      } else {
        updateDragX(0);
      }
    },
    [onNext, onPrev, updateDragX],
  );

  const touch = useTouchGestures({
    imgRef,
    zoom,
    setDragX: updateDragX,
    setAnimating,
    finishSwipe,
    currentDragX: () => dragXRef.current,
  });

  const mouse = useMouseGestures({
    imgRef,
    zoom,
    setDragX: updateDragX,
    setAnimating,
    setPanning,
    finishSwipe,
  });

  return {
    dragX,
    animating,
    panning,
    ...touch,
    ...mouse,
  };
}

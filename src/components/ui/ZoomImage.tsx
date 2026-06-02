import Image from "next/image";
import { CSSProperties, ReactNode } from "react";

interface ZoomImageProps {
  src: string;
  alt: string;
  /** Wrapper classes (rounding, shadow, sizing, position). `group overflow-hidden` is always applied. */
  className?: string;
  /** Extra classes appended to the <Image> (e.g. object-position, w-full h-auto). */
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  /** Overlay markup rendered above the image (hover tint, icons). */
  children?: ReactNode;
  /** Use Next's fill layout; otherwise pass width + height for intrinsic sizing. */
  fill?: boolean;
  width?: number;
  height?: number;
}

/** Shared hover zoom: the image scales up while the wrapper clips the overflow. */
const ZOOM = "transition-transform duration-500 group-hover:scale-105";

/**
 * Image wrapped in a `group overflow-hidden` container that zooms on hover.
 * Consolidates the repeated photo-tile pattern used across About, Memorial,
 * GalleryTeaser and the gallery page.
 */
export default function ZoomImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes,
  priority,
  onClick,
  style,
  children,
  fill,
  width,
  height,
}: ZoomImageProps) {
  return (
    <div onClick={onClick} style={style} className={`group overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        priority={priority}
        sizes={sizes}
        className={`${fill ? "object-cover " : ""}${imageClassName} ${ZOOM}`.replace(/\s+/g, " ").trim()}
      />
      {children}
    </div>
  );
}

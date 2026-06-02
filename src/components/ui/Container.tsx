import { ReactNode } from "react";

/**
 * Centered content column with the site's standard max width and page gutters.
 * Pass `className` for per-section extras (e.g. "relative z-10", vertical padding).
 */
export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`max-w-390 mx-auto px-6 md:px-10 lg:px-16 ${className}`.trim()}>
      {children}
    </div>
  );
}

import { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: ReactNode;
  /** Full class string for the eyebrow (replaces the default primary label). */
  eyebrowClassName?: string;
  /** Heading text or markup (may include inline icons). */
  title: ReactNode;
  /** Extra classes appended to the <h2>. */
  headingClassName?: string;
  /** Full class string for the accent divider (replaces the default). */
  dividerClassName?: string;
  /** Set false to omit the divider. */
  divider?: boolean;
  /** Wrapper classes — controls alignment and bottom spacing. */
  className?: string;
  /** Optional subtitle/description rendered under the divider. */
  children?: ReactNode;
}

const DEFAULT_EYEBROW =
  "inline-block text-primary font-display font-semibold text-sm uppercase tracking-[0.15em] mb-3";

/**
 * Standard centered section heading: optional eyebrow, a clamp-sized title,
 * and an accent divider. Used across the marketing sections (About, Contact,
 * Tournament). Per-section tweaks go through the *ClassName props.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowClassName = DEFAULT_EYEBROW,
  title,
  headingClassName = "",
  dividerClassName = "w-15 h-1 bg-accent mx-auto rounded",
  divider = true,
  className = "text-center mb-14",
  children,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow != null && <span className={eyebrowClassName}>{eyebrow}</span>}
      <h2
        className={`text-[clamp(1.8rem,4vw,2.5rem)] font-display font-extrabold text-gray-900 leading-[1.15] mb-4 ${headingClassName}`}
      >
        {title}
      </h2>
      {divider && <div className={dividerClassName} />}
      {children}
    </div>
  );
}

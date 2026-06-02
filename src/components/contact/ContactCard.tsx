import { ReactNode } from "react";
import { ArrowRightIcon } from "../icons";

export interface ContactCardProps {
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
  ariaLabel: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle: string;
  /** Per-channel hover colors, e.g. "hover:bg-facebook/8 hover:border-facebook/30". */
  hoverClassName: string;
  /** Per-channel icon container colors, e.g. "bg-facebook/10 group-hover:bg-facebook/20". */
  iconWrapClassName: string;
  /** Mark the title as non-translatable (phone number). */
  noTranslate?: boolean;
  titleClassName?: string;
  bodyClassName?: string;
  arrowClassName?: string;
}

/** A single contact channel: icon tile, title + subtitle, hover arrow. */
export default function ContactCard({
  href,
  external,
  ariaLabel,
  icon,
  title,
  subtitle,
  hoverClassName,
  iconWrapClassName,
  noTranslate,
  titleClassName = "",
  bodyClassName = "",
  arrowClassName = "",
}: ContactCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl font-medium transition-all duration-300 hover:translate-x-1 hover:shadow-sm group ${hoverClassName}`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${iconWrapClassName}`}
      >
        {icon}
      </div>
      <div className={`flex flex-col ${bodyClassName}`.trim()}>
        <span
          className={`text-gray-800 font-semibold ${titleClassName}`.trim()}
          {...(noTranslate ? { translate: "no" as const } : {})}
        >
          {title}
        </span>
        <span className="text-gray-400 text-xs">{subtitle}</span>
      </div>
      <ArrowRightIcon
        width={16}
        height={16}
        className={`ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity ${arrowClassName}`.trim()}
        aria-hidden="true"
      />
    </a>
  );
}

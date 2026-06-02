import { ReactNode } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "./data";

interface StatListProps {
  /** Container classes (layout differs per breakpoint). */
  className?: string;
  /** Per-stat wrapper classes. */
  itemClassName?: string;
  /** Classes for the animated number. */
  counterClassName?: string;
  /** Extra content rendered after the stats (e.g. a floating image). */
  children?: ReactNode;
}

/** Renders the three counted stats; layout is driven entirely by props. */
export default function StatList({
  className,
  itemClassName,
  counterClassName,
  children,
}: StatListProps) {
  return (
    <div className={className}>
      {stats.map((stat) => (
        <div key={stat.label} className={itemClassName}>
          <AnimatedCounter
            target={stat.number}
            suffix={stat.suffix}
            className={counterClassName}
          />
          <span className="text-sm text-gray-400">{stat.label}</span>
        </div>
      ))}
      {children}
    </div>
  );
}

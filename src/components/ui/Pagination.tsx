import { Ref } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** Attached to the controls row so callers can measure it (scroll compensation). */
  containerRef?: Ref<HTMLDivElement>;
}

/** Builds the page list with leading/trailing ellipses for long ranges. */
function getPageNumbers(page: number, totalPages: number): (number | "...")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | "...")[] = [1];
  if (page > 3) pages.push("...");
  for (let p = Math.max(2, page - 1); p <= Math.min(totalPages - 1, page + 1); p++) {
    pages.push(p);
  }
  if (page < totalPages - 2) pages.push("...");
  pages.push(totalPages);
  return pages;
}

const arrowClass =
  "w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer bg-white";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  containerRef,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <>
      <div ref={containerRef} className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={arrowClass}
          aria-label="Prethodna stranica"
        >
          &#8249;
        </button>

        {getPageNumbers(page, totalPages).map((p, i) =>
          p === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm"
            >
              &hellip;
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-display font-semibold text-sm transition-all cursor-pointer ${
                page === p
                  ? "bg-primary border-primary text-white shadow-[0_2px_12px_rgba(27,94,32,0.3)]"
                  : "bg-white border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={arrowClass}
          aria-label="Sljedeća stranica"
        >
          &#8250;
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-4 font-display">
        Stranica {page} od {totalPages}
      </p>
    </>
  );
}

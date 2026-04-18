import { SearchPlusIcon, SearchMinusIcon } from "../icons";

interface LightboxControlsProps {
  total: number;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
}

export default function LightboxControls({
  total,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onZoomIn,
  onZoomOut,
  canZoomIn,
  canZoomOut,
}: LightboxControlsProps) {
  return (
    <>
      <button
        onClick={onClose}
        className="absolute top-5 right-6 bg-transparent border-none text-green-50 text-4xl cursor-pointer hover:text-accent transition-colors z-10"
        aria-label="Zatvori"
      >
        &times;
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-5 right-5 flex items-center gap-2 z-10"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onZoomOut();
          }}
          disabled={!canZoomOut}
          className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 text-green-50 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Umanji"
        >
          <SearchMinusIcon width={20} height={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onZoomIn();
          }}
          disabled={!canZoomIn}
          className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/10 text-green-50 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Uvećaj"
        >
          <SearchPlusIcon width={20} height={20} />
        </button>
      </div>

      {total > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 border-none text-green-50 text-3xl p-4 cursor-pointer rounded-full hover:bg-white/25 transition-colors z-10"
            aria-label="Prethodna"
          >
            &#10094;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 border-none text-green-50 text-3xl p-4 cursor-pointer rounded-full hover:bg-white/25 transition-colors z-10"
            aria-label="Sljedeća"
          >
            &#10095;
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-green-100/50 text-sm font-[family-name:var(--font-montserrat)] z-10"
          >
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </>
  );
}

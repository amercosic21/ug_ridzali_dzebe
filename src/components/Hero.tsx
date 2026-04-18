import HeroBgFix from "./HeroBgFix";
import HeroScene from "./hero/HeroScene";
import HeroPortraitFix from "./hero/HeroPortraitFix";
import { PlayIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center justify-center text-center text-green-50 overflow-hidden"
    >
      <HeroBgFix />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
          style={{ width: "max(100%, calc(100lvh * 1440 / 810))" }}
          suppressHydrationWarning
        >
          <HeroScene />
        </div>
        <HeroPortraitFix />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(5,20,0,0.28) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6">
        <h1
          className="text-[clamp(2.2rem,6vw,4rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-5 leading-tight"
          style={{ animation: "fadeSlideUp 0.8s ease 0.15s both" }}
        >
          <span className="block text-green-100/90 text-[clamp(0.85rem,2vw,1.1rem)] font-semibold uppercase tracking-[0.22em] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Udruženje građana
          </span>
          <span className="text-accent block drop-shadow-[0_2px_16px_rgba(255,174,37,0.4)]" translate="no">
            "Ridžali-Džebe"
          </span>
        </h1>

        <p
          className="text-[clamp(1rem,2.2vw,1.2rem)] text-green-100/90 font-medium mb-10 max-w-lg mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          style={{ animation: "fadeSlideUp 0.8s ease 0.3s both" }}
        >
          Tradicija, zajedništvo i memorijalni turnir u malom nogometu od 1996.
          godine
        </p>

        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animation: "fadeSlideUp 0.8s ease 0.45s both" }}
        >
          <a
            href="#turnir"
            className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-sm sm:text-base bg-accent text-primary-dark border-2 border-accent hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(255,174,37,0.4)] transition-all duration-300"
          >
            <PlayIcon width={16} height={16} />
            O turniru
          </a>
          <a
            href="#galerija"
            className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-sm sm:text-base bg-green-100/10 text-green-50 border-2 border-green-100/30 hover:bg-green-100/20 hover:border-green-100/50 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
          >
            Galerija
          </a>
        </div>
      </div>
    </section>
  );
}

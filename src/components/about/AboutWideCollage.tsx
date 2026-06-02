import ScrollReveal from "@/components/effects/ScrollReveal";
import ZoomImage from "@/components/ui/ZoomImage";
import { izletisteImages } from "./data";

/**
 * Right column of the main row (≥1150px). Plain div, NOT a ScrollReveal — each
 * absolute-positioned 1440+ collage child must animate on its own
 * IntersectionObserver, so wrapping them in a single reveal would gate them all
 * together. Stadion shows at 1150+, the inline 2×2 mid-collage at 1150–1439.98,
 * and the absolute magazine images at 1440+.
 */
export default function AboutWideCollage() {
  return (
    <div className="about-right hidden min-[1150px]:w-1/2 min-[1150px]:flex min-[1150px]:max-[1439.98px]:flex-col min-[1150px]:max-[1439.98px]:gap-3 min-[1440px]:relative min-[1440px]:justify-end min-[1440px]:z-1">
      <ScrollReveal
        direction="right"
        className="min-[1440px]:w-[90%] min-[1440px]:z-1"
      >
        <ZoomImage
          {...izletisteImages.stadion}
          width={1200}
          height={800}
          imageClassName="w-full h-auto"
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="rounded-xl sm:rounded-2xl shadow-xl"
        />
      </ScrollReveal>

      {/* 1150–1439.98: inline 2×2 collage below stadion. */}
      <ScrollReveal
        direction="up"
        className="hidden min-[1150px]:max-[1439.98px]:grid min-[1150px]:max-[1439.98px]:grid-cols-2 min-[1150px]:max-[1439.98px]:grid-rows-2 min-[1150px]:max-[1439.98px]:gap-2.5 min-[1150px]:max-[1439.98px]:flex-1"
      >
        <ZoomImage
          {...izletisteImages.nadstresnica}
          width={340}
          height={680}
          imageClassName="w-full h-full object-cover"
          sizes="24vw"
          className="row-span-2 rounded-xl sm:rounded-2xl shadow-lg"
        />
        <ZoomImage
          {...izletisteImages.stadion2}
          width={476}
          height={340}
          imageClassName="w-full h-full object-cover"
          sizes="24vw"
          className="rounded-xl sm:rounded-2xl shadow-lg"
        />
        <ZoomImage
          {...izletisteImages.igraliste}
          width={476}
          height={340}
          imageClassName="w-full h-full object-cover"
          sizes="24vw"
          className="rounded-xl sm:rounded-2xl shadow-lg"
        />
      </ScrollReveal>

      {/* 1440+: absolute magazine collage, positioned relative to about-right. */}
      <ScrollReveal
        direction="up"
        className="hidden min-[1440px]:block min-[1440px]:absolute min-[1440px]:z-2 min-[1440px]:-left-[4%] min-[1440px]:top-[90%] min-[1440px]:w-[48%]"
      >
        <ZoomImage
          {...izletisteImages.nadstresnica}
          width={680}
          height={340}
          imageClassName="w-full h-auto"
          sizes="24vw"
          className="rounded-2xl shadow-lg"
        />
      </ScrollReveal>
      <ScrollReveal
        direction="right"
        className="hidden min-[1440px]:block min-[1440px]:absolute min-[1440px]:z-2 min-[1440px]:right-0 min-[1440px]:top-[103%] min-[1440px]:w-[54%]"
      >
        <ZoomImage
          {...izletisteImages.igraliste}
          width={680}
          height={340}
          imageClassName="w-full h-auto"
          sizes="24vw"
          className="rounded-2xl shadow-lg"
        />
      </ScrollReveal>
    </div>
  );
}

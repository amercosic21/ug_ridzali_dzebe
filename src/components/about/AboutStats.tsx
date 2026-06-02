import ScrollReveal from "@/components/effects/ScrollReveal";
import ZoomImage from "@/components/ui/ZoomImage";
import StatList from "./StatList";
import { izletisteImages } from "./data";

/**
 * Shared stats block: vertical on mobile, horizontal/centered 460–1299.98,
 * grid-placed under the text at 1300–1439.98 (via globals.css), vertical column
 * at 1440+. Hidden at 1024–1149.98 where AboutCompact renders the stats inline.
 * The floating stadion2 is a standalone ScrollReveal so it animates on its own.
 */
export default function AboutStats() {
  return (
    <StatList
      className="about-stats relative flex flex-col gap-5 mt-12 min-[460px]:max-[1299.98px]:flex-row min-[460px]:max-[1299.98px]:items-baseline min-[460px]:max-[1299.98px]:justify-center min-[460px]:max-[1299.98px]:gap-8 min-[1024px]:max-[1149.98px]:hidden min-[1440px]:items-start min-[1440px]:mt-16 min-[1440px]:gap-6"
      itemClassName="stat flex items-baseline gap-4 min-[460px]:max-[1299.98px]:flex-col min-[460px]:max-[1299.98px]:items-center min-[460px]:max-[1299.98px]:text-center min-[460px]:max-[1299.98px]:gap-1"
      counterClassName="font-display text-3xl font-extrabold text-accent-dark leading-none min-[1440px]:text-[2rem]"
    >
      <ScrollReveal
        direction="left"
        className="hidden min-[1440px]:block min-[1440px]:absolute min-[1440px]:z-2 min-[1440px]:left-[22%] min-[1440px]:top-[-20%] min-[1440px]:w-[25%]"
      >
        <ZoomImage
          {...izletisteImages.stadion2}
          width={476}
          height={340}
          imageClassName="w-full h-auto"
          sizes="24vw"
          className="rounded-2xl shadow-lg"
        />
      </ScrollReveal>
    </StatList>
  );
}

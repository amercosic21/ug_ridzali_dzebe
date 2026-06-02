import ScrollReveal from "@/components/effects/ScrollReveal";
import ZoomImage from "@/components/ui/ZoomImage";
import StatList from "./StatList";
import {
  IntroHeading,
  Paragraph1,
  Paragraph2,
  Paragraph3,
} from "./AboutContent";
import { izletisteImages } from "./data";

/**
 * Simpler two-row layout shown only at 1024–1149.98px. Stats live here (under
 * p3) so they sit directly beneath the text; the shared .about-stats block is
 * hidden at this breakpoint.
 */
export default function AboutCompact() {
  return (
    <div className="hidden min-[1024px]:max-[1149.98px]:flex min-[1024px]:max-[1149.98px]:flex-col gap-16">
      {/* Top: text on left, stadion + (stadion2, igraliste) on right */}
      <div className="flex gap-4 items-start">
        <ScrollReveal direction="left" className="w-1/2">
          <IntroHeading />
          <Paragraph1 />
          <Paragraph2 />
        </ScrollReveal>
        <ScrollReveal direction="right" className="w-1/2 flex flex-col gap-2.5">
          <ZoomImage
            {...izletisteImages.stadion}
            width={1200}
            height={800}
            imageClassName="w-full h-auto"
            sizes="45vw"
            className="rounded-2xl shadow-xl"
          />
          <div className="grid grid-cols-2 gap-2.5">
            <ZoomImage
              {...izletisteImages.stadion2}
              width={476}
              height={340}
              imageClassName="w-full h-full object-cover"
              sizes="22vw"
              className="rounded-2xl shadow-lg aspect-3/2"
            />
            <ZoomImage
              {...izletisteImages.igraliste}
              width={476}
              height={340}
              imageClassName="w-full h-full object-cover"
              sizes="22vw"
              className="rounded-2xl shadow-lg aspect-3/2"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom: nadstrešnica (70% of left half) on left, p3 + stats on right */}
      <div className="flex gap-4 items-stretch">
        <div className="w-1/2 flex justify-center">
          <ZoomImage
            {...izletisteImages.nadstresnica}
            width={340}
            height={680}
            imageClassName="w-full h-full object-cover object-[center_30%]"
            sizes="32vw"
            className="w-[70%] rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <ScrollReveal direction="right">
            <Paragraph3 />
          </ScrollReveal>
          <StatList
            className="flex flex-row items-baseline justify-center gap-8 mt-6 pt-4 border-t border-gray-200"
            itemClassName="flex flex-col items-center text-center gap-1"
            counterClassName="font-display text-3xl font-extrabold text-accent-dark leading-none"
          />
        </div>
      </div>
    </div>
  );
}

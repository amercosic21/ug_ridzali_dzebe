import ScrollReveal from "@/components/effects/ScrollReveal";
import ZoomImage from "@/components/ui/ZoomImage";
import { IntroHeading, Paragraph1, Paragraph2, Paragraph3 } from "./AboutContent";
import { izletisteImages } from "./data";

/**
 * Text column of the main (≥1150px) row. Below 1024px the stadion photo sits
 * inline between paragraphs 2 and 3 (lg:hidden); it has no own ScrollReveal so
 * it fades in with the surrounding text.
 */
export default function AboutTextColumn() {
  return (
    <ScrollReveal
      direction="left"
      className="about-text min-[1150px]:w-1/2 min-[1150px]:shrink-0 min-[1150px]:max-[1439.98px]:pr-2 min-[1440px]:pr-8"
    >
      <IntroHeading />
      <Paragraph1 />
      <Paragraph2 />
      <ZoomImage
        {...izletisteImages.stadion}
        width={1200}
        height={800}
        imageClassName="w-full h-auto"
        sizes="100vw"
        className="lg:hidden rounded-xl sm:rounded-2xl shadow-xl mb-4"
      />
      <Paragraph3 />
    </ScrollReveal>
  );
}

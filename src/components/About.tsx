import ScrollReveal from "@/components/effects/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import AboutMainRow from "./about/AboutMainRow";
import AboutCompact from "./about/AboutCompact";
import AboutMobileCollage from "./about/AboutMobileCollage";
import AboutStats from "./about/AboutStats";
import AboutFacilities from "./about/AboutFacilities";

export default function About() {
  return (
    <section id="o-nama" className="relative bg-cream py-10 sm:py-14 lg:py-16">
      <Container>
        <ScrollReveal>
          <SectionHeading eyebrow="Upoznajte nas" title="O nama" />
        </ScrollReveal>

        {/* .about-wrap must stay the direct parent of .about-main, the compact
            block, the mobile collage and .about-stats — the 1300–1439.98 grid
            cascade in globals.css depends on this exact structure. */}
        <div className="about-wrap">
          <AboutMainRow />
          <AboutCompact />
          <AboutMobileCollage />
          <AboutStats />
        </div>

        <AboutFacilities />
      </Container>
    </section>
  );
}

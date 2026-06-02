import AboutTextColumn from "./AboutTextColumn";
import AboutWideCollage from "./AboutWideCollage";

/**
 * Main About row, shown at 1150–1439.98 (flex-row) and 1440+ (magazine).
 * Hidden at 1024–1149.98 (AboutCompact takes over). At 1300–1439.98 globals.css
 * sets `display: contents` here so the text/right columns join the .about-wrap
 * grid directly — keep this the direct parent of .about-text and .about-right.
 */
export default function AboutMainRow() {
  return (
    <div className="about-main relative flex flex-col gap-4 sm:gap-6 min-[1024px]:max-[1149.98px]:hidden min-[1150px]:flex-row min-[1150px]:max-[1439.98px]:gap-8 min-[1150px]:max-[1439.98px]:items-stretch min-[1440px]:gap-0 min-[1440px]:items-start">
      <AboutTextColumn />
      <AboutWideCollage />
    </div>
  );
}

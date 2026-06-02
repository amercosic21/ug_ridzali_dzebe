import ZoomImage from "@/components/ui/ZoomImage";
import { izletisteImages } from "./data";

/** Mobile-only (<1024px) 2×2 collage flowing below the main row. */
export default function AboutMobileCollage() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 mt-4 sm:mt-6 lg:hidden">
      <ZoomImage
        {...izletisteImages.nadstresnica}
        width={340}
        height={680}
        imageClassName="w-full h-full object-cover"
        sizes="50vw"
        className="row-span-2 rounded-xl sm:rounded-2xl shadow-lg"
      />
      <ZoomImage
        {...izletisteImages.stadion2}
        width={476}
        height={340}
        imageClassName="w-full h-full object-cover"
        sizes="50vw"
        className="rounded-xl sm:rounded-2xl shadow-lg"
      />
      <ZoomImage
        {...izletisteImages.igraliste}
        width={476}
        height={340}
        imageClassName="w-full h-full object-cover"
        sizes="50vw"
        className="rounded-xl sm:rounded-2xl shadow-lg"
      />
    </div>
  );
}

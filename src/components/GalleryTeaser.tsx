"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import ScrollReveal from "./ScrollReveal";
import { ChevronRightIcon } from "./icons";

const layout = [
  { col: "1 / 3", row: "1 / 5" },
  { col: "10 / 13", row: "1 / 5" },
  { col: "7 / 9", row: "3 / 7" },
  { col: "7 / 10", row: "1 / 3" },
  { col: "1 / 4", row: "5 / 9" },
  { col: "4 / 7", row: "5 / 7" },
  { col: "6 / 9", row: "7 / 9" },
  { col: "9 / 13", row: "5 / 9" },
  { col: "3 / 7", row: "1 / 5" },
  { col: "4 / 6", row: "7 / 9" },
  { col: "9 / 10", row: "3 / 5" },
];

const mobileLayout = [
  { col: "1 / 4", row: "1 / 5" },
  { col: "8 / 12", row: "4 / 7" },
  { col: "4 / 8", row: "4 / 8" },
  { col: "1 / 4", row: "5 / 8" },
  { col: "1 / 6", row: "12 / 14" },
  { col: "8 / 12", row: "7 / 10" },
  { col: "1 / 8", row: "8 / 10" },
  { col: "6 / 12", row: "10 / 14" },
  { col: "4 / 9", row: "1 / 4" },
  { col: "1 / 6", row: "10 / 12" },
  { col: "9 / 12", row: "1 / 4" },
];

// Pinned src putanje umjesto indeksa — redoslijed u galleryItems se može
// mijenjati (npr. sortiranje po kategorijama) a teaser i dalje prikazuje
// tačno ove slike na tačno ovim pozicijama.
const teaserSrcs = [
  "/galerija/528277706_722268367236560_523654382780508587_n.jpg",
  "/galerija/651152915_894018176728244_2609715522005896887_n.jpg",
  "/galerija/526758195_719502884179775_7243515591184165999_n.jpg",
  "/galerija/585610194_809802695149793_2098703234082125362_n.jpg",
  "/galerija/652653638_894017313394997_689662643918842979_n.jpg",
  "/galerija/611175174_841405065322889_2224016504308499957_n.jpg",
  "/galerija/475448278_585646207565444_8322946572365835190_n.jpg",
  "/galerija/480946101_604936725636392_2480714244560415557_n.jpg",
  "/galerija/481252251_604936635636401_94689198265777491_n.jpg",
  "/galerija/529712336_722268427236554_4535114938239014842_n.jpg",
  "/galerija/526349436_719503100846420_3780145278207882522_n.jpg",
];

export default function GalleryTeaser() {
  const router = useRouter();
  const picks = teaserSrcs.map((src) => {
    const index = galleryItems.findIndex((item) => item.src === src);
    return { ...galleryItems[index], index };
  });

  return (
    <section id="galerija" className="py-12 sm:py-16 lg:py-20 bg-amber">
      <div className="max-w-[2000px] mx-auto px-3 sm:px-6 md:px-10 lg:px-16">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-[family-name:var(--font-montserrat)] font-extrabold text-gray-900 mb-2">
              Iz galerije
            </h2>
            <div className="w-12 h-1 bg-accent rounded mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Desktop grid */}
          <div
            className="hidden min-[450px]:grid gap-0.5 min-[450px]:gap-1 lg:gap-2"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(8, clamp(28px, min(5vw, 8vh), 110px))",
            }}
          >
            {picks.map((img, i) => (
              <div
                key={i}
                onClick={() => router.push(`/galerija?img=${img.index + 1}`)}
                className="relative overflow-hidden rounded-lg lg:rounded-xl group cursor-pointer"
                style={{ gridColumn: layout[i].col, gridRow: layout[i].row }}
              >
                <Image
                  src={img.src}
                  alt={img.alt || "Galerija"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 40vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
          {/* Mobile grid */}
          <div
            className="grid min-[450px]:hidden gap-1"
            style={{
              gridTemplateColumns: "repeat(11, 1fr)",
              gridTemplateRows: "repeat(13, 6vh)",
            }}
          >
            {picks.map((img, i) => (
              <div
                key={i}
                onClick={() => router.push(`/galerija?img=${img.index + 1}`)}
                className="relative overflow-hidden rounded-md group cursor-pointer"
                style={{
                  gridColumn: mobileLayout[i].col,
                  gridRow: mobileLayout[i].row,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt || "Galerija"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal>
          <div className="text-center mt-10">
            <Link
              href="/galerija"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-[family-name:var(--font-montserrat)] font-semibold bg-accent text-primary-dark hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,174,37,0.35)] transition-all duration-300"
            >
              Pogledaj sve slike
              <ChevronRightIcon width={16} height={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

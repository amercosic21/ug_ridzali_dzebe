"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import ScrollReveal from "./ScrollReveal";

const layout = [
  { col: "1 / 3", row: "1 / 5" },
  { col: "10 / 13", row: "1 / 5" },
  { col: "7 / 9", row: "3 / 7" },
  { col: "7 / 10", row: "1 / 3" },
  { col: "1 / 4", row: "5 / 9" },
  { col: "4 / 7", row: "5 / 7" },
  { col: "6 / 9", row: "7 / 9" },
  { col: "9 / 13", row: "5 / 9" },
  { col: "3/ 7", row: "1 / 5" },
  { col: "4 / 6", row: "7 / 9" },
  { col: "9 / 10", row: "3 / 5" },
];

export default function GalleryTeaser() {
  const router = useRouter();
  const pickIndices = [15, 64, 14, 35, 67, 123, 71, 85, 87, 105, 12];
  const picks = pickIndices.map((i) => ({ ...galleryItems[i], index: i }));

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
          <div
            className="grid gap-0.5 sm:gap-1 lg:gap-2"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(8, clamp(28px, min(5vw, 8vh), 110px))",
            }}
          >
            {picks.map((img, i) => (
              <div
                key={i}
                onClick={() => router.push(`/galerija?img=${img.index + 1}`)}
                className="relative overflow-hidden rounded-md sm:rounded-lg lg:rounded-xl group cursor-pointer"
                style={{ gridColumn: layout[i].col, gridRow: layout[i].row }}
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
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

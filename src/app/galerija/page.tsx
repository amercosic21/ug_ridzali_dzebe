"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { galleryItems } from "@/data/gallery";

const ITEMS_PER_PAGE = 9;

function GalerijaContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const imgParam = searchParams.get("img");
    if (imgParam !== null) {
      const num = parseInt(imgParam, 10);
      const idx = num - 1;
      if (!isNaN(idx) && idx >= 0 && idx < galleryItems.length) {
        setPage(Math.floor(idx / ITEMS_PER_PAGE) + 1);
        setLightboxIndex(idx);
        setLightboxOpen(true);
      }
    }
  }, [searchParams]);

  const openLightbox = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
    window.history.replaceState(null, "", `/galerija?img=${globalIndex + 1}`);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    window.history.replaceState(null, "", "/galerija");
  }, []);

  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);
  const pageItems = galleryItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const getPageNumbers = () => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (page > 3) pages.push("...");
    for (
      let p = Math.max(2, page - 1);
      p <= Math.min(totalPages - 1, page + 1);
      p++
    ) {
      pages.push(p);
    }
    if (page < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gallery-body">
        <div className="bg-gallery pt-32 pb-14 text-center px-4">
          <p className="text-white/50 font-[family-name:var(--font-montserrat)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Uspomene
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-5 text-white">
            Galerija
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Slike sa turnira, izletišta i iz našeg kraja. Svaka fotografija čuva
            uspomenu na ljude i trenutke koji grade ovu tradiciju.
          </p>
        </div>

        <div className="max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {pageItems.map((item, i) => {
              const globalIndex = (page - 1) * ITEMS_PER_PAGE + i;
              return (
                <div
                  key={globalIndex}
                  onClick={() => openLightbox(globalIndex)}
                  className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt || `Slika ${globalIndex + 1}`}
                    fill
                    priority={page === 1 && i < 3}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {totalPages > 1 && (
            <>
              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer bg-white"
                  aria-label="Prethodna stranica"
                >
                  &#8249;
                </button>

                {getPageNumbers().map((p, i) =>
                  p === "..." ? (
                    <span
                      key={`ellipsis-${i}`}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm"
                    >
                      &hellip;
                    </span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(p as number)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-[family-name:var(--font-montserrat)] font-semibold text-sm transition-all cursor-pointer ${
                        page === p
                          ? "bg-primary border-primary text-white shadow-[0_2px_12px_rgba(27,94,32,0.3)]"
                          : "bg-white border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}

                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gray-300 text-gray-500 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer bg-white"
                  aria-label="Sljedeća stranica"
                >
                  &#8250;
                </button>
              </div>

              <p className="text-center text-sm text-gray-400 mt-4 font-[family-name:var(--font-montserrat)]">
                Stranica {page} od {totalPages}
              </p>
            </>
          )}
        </div>
      </main>

      <Footer />

      {lightboxOpen && (
        <Lightbox
          images={galleryItems.map((item) => ({
            src: item.src,
            alt: item.alt || "",
          }))}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
          onIndexChange={(idx) => window.history.replaceState(null, "", `/galerija?img=${idx + 1}`)}
        />
      )}
    </>
  );
}

export default function GalerijaPage() {
  return (
    <Suspense>
      <GalerijaContent />
    </Suspense>
  );
}

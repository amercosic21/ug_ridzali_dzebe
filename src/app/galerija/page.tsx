"use client";

import { Suspense, useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { flushSync } from "react-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import ZoomImage from "@/components/ui/ZoomImage";
import Pagination from "@/components/ui/Pagination";
import Container from "@/components/ui/Container";
import { SearchPlusIcon } from "@/components/icons";
import { galleryItems } from "@/data/gallery";

const ITEMS_PER_PAGE = 9;

function GalerijaContent() {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgParam = searchParams.get("img");
    if (imgParam !== null) {
      const num = parseInt(imgParam, 10);
      const idx = num - 1;
      if (!isNaN(idx) && idx >= 0 && idx < galleryItems.length) {
        // Sync UI to the ?img= deep-link param (external state → React).
        // eslint-disable-next-line react-hooks/set-state-in-effect
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
  const lastPageIsPartial = galleryItems.length % ITEMS_PER_PAGE !== 0;
  const pageItems = galleryItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const goToPage = (p: number) => {
    if (p === page) return;
    const involvesPartial =
      lastPageIsPartial && (p === totalPages || page === totalPages);
    if (!involvesPartial) {
      setPage(p);
      return;
    }
    const before = paginationRef.current?.getBoundingClientRect().top ?? 0;
    flushSync(() => setPage(p));
    const after = paginationRef.current?.getBoundingClientRect().top ?? 0;
    window.scrollBy(0, after - before);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gallery-body">
        <div className="bg-gallery pt-32 pb-14 text-center px-4">
          <p className="text-white/50 font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Uspomene
          </p>
          <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-display font-extrabold mb-5 text-white">
            Galerija
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Slike sa turnira, izletišta i iz našeg kraja. Svaka fotografija čuva
            uspomenu na ljude i trenutke koji grade ovu tradiciju.
          </p>
        </div>

        <Container className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-10">
            {pageItems.map((item, i) => {
              const globalIndex = (page - 1) * ITEMS_PER_PAGE + i;
              return (
                <ZoomImage
                  key={globalIndex}
                  src={item.src}
                  alt={item.alt || `Slika ${globalIndex + 1}`}
                  fill
                  priority={page === 1 && i < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onClick={() => openLightbox(globalIndex)}
                  className="relative rounded-lg sm:rounded-xl aspect-4/3 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <SearchPlusIcon width={22} height={22} stroke="white" />
                    </div>
                  </div>
                </ZoomImage>
              );
            })}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={goToPage}
            containerRef={paginationRef}
          />
        </Container>
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
          onIndexChange={(idx) =>
            window.history.replaceState(null, "", `/galerija?img=${idx + 1}`)
          }
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

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Memorial() {
  return (
    <section id="spomen" className="py-10 sm:py-14 lg:py-16 bg-memorial relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,0.5) 35px,
            rgba(255,255,255,0.5) 36px
          )`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,174,37,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="memorial-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div>
            <ScrollReveal>
              <div className="mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-heading-cool/10 border border-heading-cool/15 mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-text-cool"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-4 text-gray-900">
                  U spomen
                </h2>
                <div className="w-15 h-1 bg-heading-cool/30 rounded mb-6" />
                <p className="text-lg text-gray-800/75 leading-relaxed">
                  Memorijalni turnir se održava od 1996. godine u znak sjećanja
                  na šehide i drage mještane kojih više nema s nama. Hrabre
                  ljude koji su dali svoje živote braneći ovo područje tokom
                  rata 1992&ndash;1995. Njihova žrtva nikada neće biti
                  zaboravljena.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white/40 border border-heading-cool/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-gray-800/70 leading-relaxed mb-6">
                  Svake godine, okupljamo se na turniru ne samo da se takmičimo
                  i zabavljamo, već i da odamo počast onima koji su nas zauvijek
                  napustili. Naši roditelji, ali i oni prije njih, ostavili su
                  nam u amanet da se borimo, radimo i nastavimo graditi i
                  uljepšavati naše mjesto, kao što su to oni radili prije nas.
                </p>
                <p className="text-gray-800/70 leading-relaxed mb-8">
                  Stalnim radom i trudom održavamo spomen, izletište i trudimo
                  se da uvijek dodamo nešto novo. Kroz sport, muziku i
                  zajedništvo, čuvamo sjećanje na naše šehide i prenosimo
                  njihovu priču novim generacijama. Neka im je vječni rahmet.
                </p>
                <div className="border-t border-gray-800/10 pt-6">
                  <p className="text-heading-cool font-[family-name:var(--font-montserrat)] font-semibold italic text-lg leading-relaxed">
                    &ldquo;Oni koji su dali živote za slobodu žive vječno u
                    našim srcima.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-heading-cool/8 border border-heading-cool/15 rounded-full text-gray-800/60 text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>Tri decenije sjećanja i zajedništva</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group min-h-[438px] sm:min-h-[625px] min-[768px]:min-h-[775px] min-[870px]:min-h-[875px] lg:min-h-0 h-full">
              <Image
                src="/izletiste/spomenik.jpg"
                alt="Spomenik na izletištu pri zalasku sunca"
                fill
                className="object-cover object-[center_80%] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

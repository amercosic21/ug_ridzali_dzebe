import ScrollReveal from "./ScrollReveal";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "./icons";

export default function Contact() {
  return (
    <section id="kontakt" className="py-10 sm:py-14 lg:py-16 bg-cream text-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-[family-name:var(--font-montserrat)] font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Budite u toku
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-4">
              Kontakt
            </h2>
            <div className="w-15 h-1 bg-accent mx-auto rounded" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <ScrollReveal direction="left">
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold mb-4 text-gray-800">
                Povežite se s nama
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Za informacije o turniru, prijave ekipa ili pitanja o udruženju,
                kontaktirajte nas putem društvenih mreža ili telefona. Sve
                novosti o nadolazećem turniru i aktivnostima objavljujemo na
                našoj Facebook i Instagram stranici.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100083602091090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl font-medium transition-all duration-300 hover:bg-facebook/8 hover:border-facebook/30 hover:translate-x-1 hover:shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-facebook/10 flex items-center justify-center group-hover:bg-facebook/20 transition-colors">
                    <FacebookIcon width={20} height={20} className="text-facebook" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold">Udruženje građana <span translate="no">&ldquo;Ridžali-Džebe&rdquo;</span></span>
                    <span className="text-gray-400 text-xs">Pratite nas za novosti</span>
                  </div>
                  <ArrowRightIcon width={16} height={16} className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://www.instagram.com/ug_ridzalidzebe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl font-medium transition-all duration-300 hover:bg-instagram/8 hover:border-instagram/30 hover:translate-x-1 hover:shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-instagram/10 flex items-center justify-center group-hover:bg-instagram/20 transition-colors">
                    <InstagramIcon width={20} height={20} className="text-instagram" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold">ug_ridzalidzebe</span>
                    <span className="text-gray-400 text-xs">@ug_ridzalidzebe</span>
                  </div>
                  <ArrowRightIcon width={16} height={16} className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl text-gray-500">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <MapPinIcon width={20} height={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium text-sm" translate="no">Ridžali / Džebe, Zavidovići</span>
                    <span className="text-gray-400 text-xs">Bosna i Hercegovina</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14352.67937254290!2d18.142338594161885!3d44.45506601522129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e9538442519db%3A0xac8630063366b190!2sStadion%20Rid%C5%BEali%20D%C5%BEebe!5e0!3m2!1sbs!2sba!4v1773480271935!5m2!1sbs!2sba"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Ridžali Džebe"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

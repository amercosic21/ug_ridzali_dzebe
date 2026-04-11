import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 bg-cream text-gray-900 relative overflow-hidden">
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-facebook">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold">Udruženje građana &ldquo;Ridžali-Džebe&rdquo;</span>
                    <span className="text-gray-400 text-xs">Pratite nas za novosti</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/ug_ridzalidzebe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl font-medium transition-all duration-300 hover:bg-instagram/8 hover:border-instagram/30 hover:translate-x-1 hover:shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-lg bg-instagram/10 flex items-center justify-center group-hover:bg-instagram/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-instagram">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold">ug_ridzalidzebe</span>
                    <span className="text-gray-400 text-xs">@ug_ridzalidzebe</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <div className="flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl text-gray-500">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium text-sm">Ridžali / Džebe, Zavidovići</span>
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

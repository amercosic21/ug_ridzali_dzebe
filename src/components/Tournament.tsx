import ScrollReveal from "./ScrollReveal";

const infoCards = [
  {
    title: "Kada",
    description:
      "Svake godine u avgustu, vikendom, subota i nedjelja. Turnir se održava neprekidno od 1996. godine.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Raspored",
    description:
      "Utakmice malog nogometa igraju se od ranog jutra subotom i nedjeljom do 15:00h. Nakon toga slijedi muzički program.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Zabava",
    description:
      "U nedjelju nakon utakmica nastupa poznati pjevač ili bend. Muzika, druženje i slavlje traju do kasnih sati.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Zajednica",
    description:
      "Turnir okuplja ljude svih generacija. Prilika da se sjećamo onih kojih više nema, slavimo zajedništvo i stvaramo nova sjećanja.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const timeline = [
  {
    title: "Subota ujutro",
    description: "Početak turnira. Timovi se okupljaju, atmosfera raste. Prve utakmice malog nogometa od ranog jutra.",
  },
  {
    title: "Subota poslijepodne",
    description: "Utakmice se igraju do 15:00h. Nakon završetka, druženje uz hranu i piće.",
  },
  {
    title: "Nedjelja ujutro",
    description: "Nastavak turnira. Polufinalne i finalne utakmice. Napetost i navijanje na vrhuncu.",
  },
  {
    title: "Nedjelja poslijepodne",
    description: "Finale turnira i dodjela nagrada u 15:00h. Zatim nastupa pjevač, koncert i proslava traju do naveče.",
  },
];

export default function Tournament() {
  return (
    <section id="turnir" className="py-16 bg-charcoal relative overflow-hidden">
      <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-accent-dark font-[family-name:var(--font-montserrat)] font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Svake godine u avgustu
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-4 text-gray-900 flex items-center justify-center gap-3">
              {/* Bouncing football */}
              <span className="relative inline-flex flex-col items-center">
                <svg
                  width="32" height="32" viewBox="0 0 952.1 952.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1a1a1a"
                  style={{ animation: "ballBounce 1.8s ease-in-out infinite" }}
                >
                  <path d="M812.55,139.4c-43.7-43.7-94.6-78-151.3-102C602.55,12.6,540.25,0,475.95,0c-64.2,0.1-126.5,12.6-185.2,37.5 c-56.7,24-107.6,58.3-151.3,102c-43.7,43.7-78,94.6-102,151.3c-24.8,58.7-37.4,121-37.4,185.3c0,64.201,12.6,126.6,37.4,185.301 c24,56.699,58.3,107.6,102,151.299c43.7,43.701,94.6,78,151.3,102c58.7,24.801,121,37.4,185.3,37.4 c64.2,0,126.601-12.6,185.3-37.4c56.7-24,107.601-58.299,151.301-102c43.699-43.699,78-94.6,102-151.299 c24.8-58.701,37.399-121,37.399-185.301c0-64.2-12.6-126.6-37.399-185.3C890.55,234,856.25,183.2,812.55,139.4z M212.55,107.5 c4.3-3.3,8.5-6.8,12.9-9.9c23.1-16.2,48.7-29.3,74.7-40.2C355.55,34.2,415.75,22,475.95,22c40.1,0,81.2,5.4,119.899,16 c-15.3,6.2-34,18-65.399,44.8c-26.101-2.8-52.5-2.9-79-0.4c-34.601,3.3-69.4,11-103.4,23c-30.7,10.8-55,23.1-71.4,32.5 c-25.1-9-57.5-19.6-73.5-24.8C205.65,113.9,210.85,108.8,212.55,107.5z M646.15,226.5l-81.4,222.2l-195.3,37.5L208.05,319.5 c10.9-75.6,62.7-142.6,62.7-142.6c0.3-0.2,34.1-24.6,88.3-43.5c31.601-11.1,63.8-18.2,95.9-21.2c26.2-2.4,52.3-2,78.1,1.1 L646.15,226.5z M39.35,460.2c-5,32.3-6.1,65.8-3.5,99.5c-3.9-7.799-7-14.398-9.3-19.699c-3-20.9-4.5-42.301-4.5-64.1 c0-67,14.5-130.7,40.6-188c-2.9,30-1.5,61.1,0.6,84.7C52.05,400.7,44.05,430,39.35,460.2z M78.85,633.301 c-4.6-16.9-10-41.5-12.7-71c-3-33.301-2.1-66.4,2.9-98.101c3.8-24.3,9.9-47.899,18.3-70.6c32.9-27.8,76.5-44.1,100.6-51.6 L346.35,505.6L329.75,684.9L174.95,736.6C135.55,707.6,103.35,669.199,78.85,633.301z M549.25,892.9 c-34.5,22.6-121.7,28-157.1,29.299c-39-7.299-76.9-19.799-112.601-37c-31.2-15-60.8-33.6-87.8-55.398c0.5-0.9-4.2-48.602-4-66 l156.4-52.201l180.5,78.1l24.899,102.9C549.35,892.801,549.25,892.9,549.25,892.9z M849.15,734.6 C822.25,773.4,790.05,809.5,751.35,836.9c-36.3,25.6-84.899,34.4-128.1,41.5c-3.3,0.5-44.6,7.299-44.9,5.9l-24.899-103L680.55,649 l168.3-15.5c2.601,26.801,6,65.9,8,89.801C854.25,727.1,851.75,730.9,849.15,734.6z M851.75,600c-0.6,1-1.2,2.1-1.8,3.301 L682.35,618.699L592.15,460.9l81.6-222.7l115.2,7.3c24.5,20.5,46.2,43.3,64.6,67.9c23,30.9,40.9,64.8,53.101,100.7 C893.85,525.301,864.35,580.699,851.75,600z M911.85,349.8c-9.899-19.1-21.5-37.5-34.6-55c-20.7-27.7-45.3-53.2-73.2-75.9 c-5.1-25.3-19.1-65.1-56.7-106.9c0.7,0.5,1.4,1.1,2.101,1.6c2.3,1.7,4.5,3.5,6.8,5.2c25.9,20.4,49.5,43.5,70.4,68.9 c38.8,47.3,68.1,102.2,85.3,161.1C911.85,349.2,911.85,349.5,911.85,349.8z"/>
                </svg>
                {/* Shadow */}
                <span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-1 bg-gray-400/25 rounded-full"
                  style={{ animation: "ballShadow 1.8s ease-in-out infinite" }}
                />
              </span>
              Memorijalni turnir
            </h2>
            <div className="w-15 h-1 bg-accent mx-auto rounded mb-5" />
            <p className="text-base text-gray-500 max-w-[520px] mx-auto">
              Tradicionalni turnir u malom nogometu na izletištu u Ridžalima. Dva dana sporta, muzike i zajedništva u prelijepom ambijentu borove šume
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {infoCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="relative h-full bg-white/60 border border-gray-200/60 rounded-xl p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-accent/30 group overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="mb-4 text-accent-dark/60 group-hover:text-accent-dark group-hover:scale-110 transition-all duration-300 flex justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-2 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-[0.9rem] text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-white/40 border border-gray-200/50 rounded-xl p-7">
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold mb-6 text-accent-dark">
                Vikend turnira
              </h3>
              <div className="relative pl-8">
                {timeline.map((item, i) => (
                  <div key={i} className={`relative ${i < timeline.length - 1 ? "mb-6" : ""}`}>
                    <div className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-accent border-[2.5px] border-charcoal" />
                    <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-sm mb-1 text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-[0.85rem] text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

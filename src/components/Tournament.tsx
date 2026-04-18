import ScrollReveal from "./ScrollReveal";
import {
  CalendarIcon,
  ClockIcon,
  MusicIcon,
  UsersIcon,
  FootballIcon,
} from "./icons";

const infoCards = [
  {
    title: "Kada",
    description:
      "Svake godine u avgustu, vikendom, subota i nedjelja. Turnir se održava neprekidno od 1996. godine.",
    icon: <CalendarIcon width={36} height={36} />,
  },
  {
    title: "Raspored",
    description:
      "Utakmice malog nogometa igraju se od ranog jutra subotom i nedjeljom do 15:00h. Nakon toga slijedi muzički program.",
    icon: <ClockIcon width={36} height={36} />,
  },
  {
    title: "Zabava",
    description:
      "U nedjelju nakon utakmica nastupa poznati pjevač ili bend. Muzika, druženje i slavlje traju do kasnih sati.",
    icon: <MusicIcon width={36} height={36} />,
  },
  {
    title: "Zajednica",
    description:
      "Turnir okuplja ljude svih generacija. Prilika da se sjećamo onih kojih više nema, slavimo zajedništvo i stvaramo nova sjećanja.",
    icon: <UsersIcon width={36} height={36} />,
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
    <section id="turnir" className="py-10 sm:py-14 lg:py-16 bg-charcoal relative overflow-hidden">
      <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-accent-dark font-[family-name:var(--font-montserrat)] font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Svake godine u avgustu
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-4 text-gray-900 flex items-center justify-center gap-3">
              <span className="relative inline-flex flex-col items-center">
                <FootballIcon
                  className="text-[#1a1a1a]"
                  style={{ animation: "ballBounce 1.8s ease-in-out infinite" }}
                />
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

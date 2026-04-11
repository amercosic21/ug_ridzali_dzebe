import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { number: 28, label: "Turnira održano" },
  { number: 30, label: "Godina rada generacija" },
  { number: 500, suffix: "+", label: "Učesnika godišnje" },
];

const facilities = [
  {
    label: "Fudbalski teren",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20" />
        <path d="M9.5 5.5L12 8l2.5-2.5M9.5 18.5L12 16l2.5 2.5" />
      </svg>
    ),
  },
  {
    label: "Teren za košarku",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M4.93 4.93c4.08 2.38 4.08 11.76 0 14.14" />
        <path d="M19.07 4.93c-4.08 2.38-4.08 11.76 0 14.14" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    label: "Dječije igralište",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 22L12 2l10 20" />
        <path d="M7 14h10" />
        <circle cx="12" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    label: "8 nadstrešnica",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <line x1="5" y1="15" x2="19" y2="15" />
        <line x1="9" y1="10" x2="9" y2="20" />
        <line x1="15" y1="10" x2="15" y2="20" />
      </svg>
    ),
  },
  {
    label: "Kamini za roštilj",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="14" width="18" height="4" rx="1" />
        <line x1="6" y1="18" x2="6" y2="22" />
        <line x1="18" y1="18" x2="18" y2="22" />
        <path d="M7 10c0-2 1.5-3 1.5-5" />
        <path d="M12 10c0-2 1.5-3 1.5-5" />
        <path d="M17 10c0-2 1.5-3 1.5-5" />
      </svg>
    ),
  },
  {
    label: "Česme i WC",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v6" />
        <path d="M6 8h12a2 2 0 0 1 2 2c0 4-3 7-8 9-5-2-8-5-8-9a2 2 0 0 1 2-2z" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    label: "Besplatan parking",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
  {
    label: "Video nadzor",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="o-nama" className="py-10 sm:py-14 lg:py-16 bg-cream relative">
      <div className="max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-[family-name:var(--font-montserrat)] font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Upoznajte nas
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-4">
              O nama
            </h2>
            <div className="w-15 h-1 bg-accent mx-auto rounded" />
          </div>
        </ScrollReveal>

        {/* Flex row: text left half, teren right half. Collage absolute below. */}
        <div className="relative flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 lg:items-start">
          {/* LEFT: text */}
          <ScrollReveal direction="left" className="w-full lg:w-1/2 lg:pr-12">
            <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-gray-800 mb-5">
              Ridžali i Džebe
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ridžali i Džebe su naselja u općini Zavidovići, smještena u srcu
              Bosne i Hercegovine. Ova mjesta nose bogatu tradiciju i snažan
              osjećaj zajedništva koji se prenosi s generacije na generaciju.
              Udruženje građana &ldquo;Ridžali-Džebe&rdquo; zvanično je osnovano
              2024. godine s ciljem unapređenja i promovisanja našeg mjesta, od
              izgradnje infrastrukture do očuvanja tradicije i organizovanja
              događaja koji spajaju sve uzraste.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Naši mještani već 30 godina dobrovoljnim radom, vlastitim
              sredstvima i donacijama grade i održavaju izletište koje je
              postalo ponos cijele zajednice. Generacije su ulagale vrijeme,
              znoj i trud kako bi Ridžali i Džebe bili mjesto na koje su svi
              ponosni. Danas je izletište prava atrakcija koju posjećuju
              porodice, škole, izletnici i ljudi iz cijele regije.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Udruženje djeluje na principima dobrovoljnosti, solidarnosti i
              ljubavi prema zavičaju. Pored turnira, aktivno radimo na
              proširenju puteva, poboljšanju kanalizacije i rasvjete, te
              izgradnji nove infrastrukture na izletištu, sve kroz zajedničke
              akcije u kojima učestvuju mještani svih generacija.
            </p>

            {/* Stats — stacked vertically below text */}
            <div className="about-stats flex flex-col gap-5 mt-8 lg:pt-8 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-4">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-accent-dark"
                  />
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT: stadion */}
          <ScrollReveal
            direction="right"
            className="w-full lg:w-1/2 flex lg:justify-end z-[1]"
          >
            <div className="w-full lg:w-[90%] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/izletiste/stadion.jpg"
                alt="Stadion"
                width={1200}
                height={800}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </ScrollReveal>

          {/* Collage images — flow row on small/medium, absolute on lg+ */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 lg:hidden">
            <ScrollReveal direction="left" className="row-span-2 h-full">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group h-full">
                <Image
                  src="/izletiste/nadstresnica.webp"
                  alt="Nadstrešnica pri zalasku sunca"
                  width={340}
                  height={476}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="h-full">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group h-full">
                <Image
                  src="/izletiste/stadion2.webp"
                  alt="Stadion sa plavim stolicama"
                  width={476}
                  height={340}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="h-full">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group h-full">
                <Image
                  src="/izletiste/igraliste.webp"
                  alt="Izletište sa klupama i igralištem"
                  width={476}
                  height={340}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Collage images — absolute positioned on lg+ */}
          <ScrollReveal
            direction="left"
            className="about-collage-1 hidden lg:block lg:absolute lg:left-[20%] lg:top-[430px] lg:w-[26%] z-[2]"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src="/izletiste/stadion2.webp"
                alt="Stadion sa plavim stolicama"
                width={476}
                height={340}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                sizes="24vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            className="about-collage-2 hidden lg:block lg:absolute lg:left-[48%] lg:top-[300px] lg:w-[24%] z-[2]"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src="/izletiste/nadstresnica.webp"
                alt="Nadstrešnica pri zalasku sunca"
                width={340}
                height={476}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                sizes="24vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction="right"
            className="about-collage-3 hidden lg:block lg:absolute lg:right-0 lg:top-[375px] lg:w-[26%] z-[2]"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src="/izletiste/igraliste.webp"
                alt="Izletište sa klupama i igralištem"
                width={476}
                height={340}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                sizes="24vw"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Facilities icons */}
        <ScrollReveal>
          <div className="about-facilities mt-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Naše izletište
                </span>
              </div>
              <h4 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-800 mb-3">
                Samo 2 km od centra Zavidovića
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                Okruženo borovom šumom, naše izletište je idealno mjesto za
                rekreaciju, odmor i uživanje u prirodi. Pristupačno i besplatno
                za sve posjetioce.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10">
              {facilities.map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 80}>
                  <div className="flex flex-col items-center text-center gap-3 group">
                    <div className="text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                      {f.icon}
                    </div>
                    <span className="text-sm font-[family-name:var(--font-montserrat)] font-semibold text-gray-600">
                      {f.label}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

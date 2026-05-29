import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import {
  FootballFieldIcon,
  BasketballIcon,
  VolleyballIcon,
  PlaygroundIcon,
  ShelterIcon,
  PlugIcon,
  GrillIcon,
  WaterTapIcon,
  ParkingIcon,
  CameraIcon,
} from "./icons/facilities";
import { HomeIcon, PineTreeIcon } from "./icons";

const stats = [
  { number: 28, label: "Turnira održano" },
  { number: 30, label: "Godina rada generacija" },
  { number: 500, suffix: "+", label: "Učesnika godišnje" },
];

const facilities = [
  { label: "Fudbalski teren", icon: <FootballFieldIcon /> },
  { label: "Teren za košarku", icon: <BasketballIcon /> },
  { label: "Teren za odbojku", icon: <VolleyballIcon /> },
  { label: "Dječije igralište", icon: <PlaygroundIcon /> },
  { label: "8 nadstrešnica", icon: <ShelterIcon /> },
  { label: "Struja u nadstrešnicama", icon: <PlugIcon /> },
  { label: "Kamini za roštilj", icon: <GrillIcon /> },
  { label: "Česme i WC", icon: <WaterTapIcon /> },
  { label: "Besplatan parking", icon: <ParkingIcon /> },
  { label: "Video nadzor", icon: <CameraIcon /> },
];

export default function About() {
  const headingJsx = (
    <>
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 rounded-full mb-4">
        <PineTreeIcon width={14} height={14} className="text-primary" />
        <span className="text-primary font-[family-name:var(--font-montserrat)] font-semibold text-xs uppercase tracking-[0.12em]">
          30 godina tradicije
        </span>
      </span>
      <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-gray-800 leading-tight mb-5">
        <span translate="no">Ridžali i Džebe</span>
      </h3>
    </>
  );

  const paragraph1Jsx = (
    <p className="text-gray-600 text-base leading-relaxed mb-4 last:mb-0">
      <span className="font-bold text-primary-dark" translate="no">
        Ridžali i Džebe
      </span>{" "}
      su naselja u općini Zavidovići, smještena u{" "}
      <span className="font-bold text-primary-dark">
        srcu Bosne i Hercegovine
      </span>
      . Ova mjesta nose bogatu tradiciju i snažan osjećaj zajedništva koji se
      prenosi s generacije na generaciju. Udruženje građana
      &ldquo;Ridžali-Džebe&rdquo; zvanično je{" "}
      <span className="italic font-semibold text-accent-dark">
        osnovano 2024. godine
      </span>{" "}
      s ciljem unapređenja i promovisanja našeg mjesta, od izgradnje
      infrastrukture do očuvanja tradicije i organizovanja događaja koji spajaju
      sve uzraste.
    </p>
  );

  const paragraph2Jsx = (
    <p className="text-gray-600 text-base leading-relaxed mb-4 last:mb-0">
      Naši mještani već{" "}
      <span className="font-bold text-primary-dark">
        30 godina dobrovoljnim radom
      </span>
      , vlastitim sredstvima i donacijama grade i održavaju izletište koje je
      postalo{" "}
      <span className="italic font-semibold text-accent-dark">
        ponos cijele zajednice
      </span>
      . Generacije su ulagale vrijeme, znoj i trud kako bi Ridžali i Džebe bili
      mjesto na koje su svi ponosni. Danas je izletište prava atrakcija koju
      posjećuju porodice, škole, izletnici i ljudi iz cijele regije.
    </p>
  );

  const paragraph3Jsx = (
    <p className="text-gray-600 text-base leading-relaxed mb-4 last:mb-0">
      Udruženje djeluje na principima{" "}
      <span className="font-bold text-primary-dark">
        dobrovoljnosti, solidarnosti i ljubavi prema zavičaju
      </span>
      . Cilj našeg udruženja je unapređenje života svih naših mještana kroz
      razne aktivnosti poput rada na proširenju puteva, poboljšanju kanalizacije
      i rasvjete te izgradnji nove infrastrukture na izletištu, sve kroz
      zajedničke akcije u kojima učestvuju mještani svih generacija. Također, tu
      je i rad na uređenju i unapređenju našeg izletišta koje je izgrađeno oko{" "}
      <span className="font-bold text-primary-dark">
        spomenika našim šehidima
      </span>
      , onima koji su ostavili neizbrisiv trag u našim životima.{" "}
      <span className="italic font-semibold text-accent-dark">
        Svake godine u njihovu čast organizuje se memorijalni turnir u malom
        nogometu.
      </span>
    </p>
  );

  return (
    <section id="o-nama" className="relative bg-cream py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1560px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-primary font-[family-name:var(--font-montserrat)] font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Upoznajte nas
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold text-gray-900 leading-[1.15] mb-4">
              O nama
            </h2>
            <div className="w-15 h-1 bg-accent mx-auto rounded" />
          </div>
        </ScrollReveal>

        <div className="about-wrap">
          {/* Main row — flex-col mobile, flex-row at 1150–1439.98 and 1440+.
              Hidden at 1024–1149.98 (replaced by simpler 2-row flex block).
              CSS overrides to display:contents at 1300–1439.98. */}
          <div className="about-main relative flex flex-col gap-4 sm:gap-6 min-[1024px]:max-[1149.98px]:hidden min-[1150px]:flex-row min-[1150px]:max-[1439.98px]:gap-8 min-[1150px]:max-[1439.98px]:items-stretch min-[1440px]:gap-0 min-[1440px]:items-start">
            {/* LEFT: text */}
            <ScrollReveal
              direction="left"
              className="about-text min-[1150px]:w-1/2 min-[1150px]:flex-shrink-0 min-[1150px]:max-[1439.98px]:pr-2 min-[1440px]:pr-8"
            >
              {headingJsx}
              {paragraph1Jsx}
              {paragraph2Jsx}
              {/* <1024: stadion sits between p2 and p3 inline with the text flow.
                  Hidden at 1150+ where the dedicated about-right column renders it.
                  No own ScrollReveal: inherits the parent about-text fade so it
                  slides in with the surrounding paragraphs. */}
              <div className="lg:hidden rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group mb-4">
                <Image
                  src="/izletiste/stadion.jpg"
                  alt="Stadion"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  sizes="100vw"
                />
              </div>
              {paragraph3Jsx}
            </ScrollReveal>

            {/* RIGHT: stadion + collage variants.
                Plain div, NOT a ScrollReveal — each absolute-positioned
                collage child below must animate independently. If this
                wrapped them, its opacity would gate every child and the
                three abs images would all appear together when about-right
                re-enters the viewport (especially on scroll-up, where the
                stadion exits the viewport before the abs images do). */}
            <div className="about-right hidden min-[1150px]:w-1/2 min-[1150px]:flex min-[1150px]:max-[1439.98px]:flex-col min-[1150px]:max-[1439.98px]:gap-3 min-[1440px]:relative min-[1440px]:justify-end min-[1440px]:z-[1]">
              <ScrollReveal
                direction="right"
                className="stadion-wrap rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group min-[1440px]:w-[90%] min-[1440px]:z-[1]"
              >
                <Image
                  src="/izletiste/stadion.jpg"
                  alt="Stadion"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </ScrollReveal>

              {/* 1150–1439.98: inline 2×2 collage below stadion. */}
              <ScrollReveal
                direction="up"
                className="mid-collage hidden min-[1150px]:max-[1439.98px]:grid min-[1150px]:max-[1439.98px]:grid-cols-2 min-[1150px]:max-[1439.98px]:grid-rows-2 min-[1150px]:max-[1439.98px]:gap-2.5 min-[1150px]:max-[1439.98px]:flex-1"
              >
                <div className="mc-cell mc-tall row-span-2 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
                  <Image
                    src="/izletiste/nadstresnica.webp"
                    alt="Nadstrešnica pri zalasku sunca"
                    width={340}
                    height={680}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="24vw"
                  />
                </div>
                <div className="mc-cell overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
                  <Image
                    src="/izletiste/stadion2.webp"
                    alt="Stadion sa plavim stolicama"
                    width={476}
                    height={340}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="24vw"
                  />
                </div>
                <div className="mc-cell overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
                  <Image
                    src="/izletiste/igraliste.webp"
                    alt="Izletište sa klupama i igralištem"
                    width={476}
                    height={340}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="24vw"
                  />
                </div>
              </ScrollReveal>

              {/* 1440+: absolute magazine collage, positioned relative to
                  about-right. Each is its own ScrollReveal sibling of stadion
                  (not nested inside about-right) so each child's IntersectionObserver
                  drives its own animation independently. */}
              <ScrollReveal
                direction="up"
                className="hidden min-[1440px]:block min-[1440px]:absolute min-[1440px]:z-[2] min-[1440px]:-left-[4%] min-[1440px]:top-[90%] min-[1440px]:w-[48%]"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg group">
                  <Image
                    src="/izletiste/nadstresnica.webp"
                    alt="Nadstrešnica pri zalasku sunca"
                    width={680}
                    height={340}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="24vw"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal
                direction="right"
                className="hidden min-[1440px]:block min-[1440px]:absolute min-[1440px]:z-[2] min-[1440px]:right-0 min-[1440px]:top-[103%] min-[1440px]:w-[54%]"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg group">
                  <Image
                    src="/izletiste/igraliste.webp"
                    alt="Izletište sa klupama i igralištem"
                    width={680}
                    height={340}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="24vw"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* 1024–1149.98 only: simpler 2-row flex layout */}
          <div className="hidden min-[1024px]:max-[1149.98px]:flex min-[1024px]:max-[1149.98px]:flex-col gap-16">
            {/* Top: text on left, stadion + (stadion2, igraliste) on right */}
            <div className="flex gap-4 items-start">
              <ScrollReveal direction="left" className="w-1/2">
                {headingJsx}
                {paragraph1Jsx}
                {paragraph2Jsx}
              </ScrollReveal>
              <ScrollReveal
                direction="right"
                className="w-1/2 flex flex-col gap-2.5"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src="/izletiste/stadion.jpg"
                    alt="Stadion"
                    width={1200}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="45vw"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="overflow-hidden rounded-2xl shadow-lg group aspect-[3/2]">
                    <Image
                      src="/izletiste/stadion2.webp"
                      alt="Stadion sa plavim stolicama"
                      width={476}
                      height={340}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="22vw"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-lg group aspect-[3/2]">
                    <Image
                      src="/izletiste/igraliste.webp"
                      alt="Izletište sa klupama i igralištem"
                      width={476}
                      height={340}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="22vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom: nadstrešnica (70% of left half) on left, p3 + stats on right.
                Stats live here at this breakpoint so they sit directly under p3;
                the shared .about-stats block below is hidden at 1024–1149.98. */}
            <div className="flex gap-4 items-stretch">
              <div className="w-1/2 flex justify-center">
                <div className="w-[70%] overflow-hidden rounded-2xl shadow-lg group">
                  <Image
                    src="/izletiste/nadstresnica.webp"
                    alt="Nadstrešnica pri zalasku sunca"
                    width={340}
                    height={680}
                    className="w-full h-full object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
                    sizes="32vw"
                  />
                </div>
              </div>
              <div className="w-1/2 flex flex-col">
                <ScrollReveal direction="right">{paragraph3Jsx}</ScrollReveal>
                <div className="flex flex-row items-baseline justify-center gap-8 mt-6 pt-4 border-t border-gray-200">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center text-center gap-1"
                    >
                      <AnimatedCounter
                        target={stat.number}
                        suffix={stat.suffix}
                        className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-accent-dark leading-none"
                      />
                      <span className="text-sm text-gray-400">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only 2×2 collage flowing below the row */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 mt-4 sm:mt-6 lg:hidden">
            <div className="row-span-2 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
              <Image
                src="/izletiste/nadstresnica.webp"
                alt="Nadstrešnica pri zalasku sunca"
                width={340}
                height={680}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
              <Image
                src="/izletiste/stadion2.webp"
                alt="Stadion sa plavim stolicama"
                width={476}
                height={340}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group">
              <Image
                src="/izletiste/igraliste.webp"
                alt="Izletište sa klupama i igralištem"
                width={476}
                height={340}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="50vw"
              />
            </div>
          </div>

          {/* Stats — vertical mobile, horizontal centered 460–1299.98,
              hidden at 1024–1149.98 (rendered inline under p3 in that block),
              CSS overrides to grid placement at 1300–1439.98,
              vertical column at 1440+ */}
          <div className="about-stats relative flex flex-col gap-5 mt-12 min-[460px]:max-[1299.98px]:flex-row min-[460px]:max-[1299.98px]:items-baseline min-[460px]:max-[1299.98px]:justify-center min-[460px]:max-[1299.98px]:gap-8 min-[1024px]:max-[1149.98px]:hidden min-[1440px]:items-start min-[1440px]:mt-16 min-[1440px]:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat flex items-baseline gap-4 min-[460px]:max-[1299.98px]:flex-col min-[460px]:max-[1299.98px]:items-center min-[460px]:max-[1299.98px]:text-center min-[460px]:max-[1299.98px]:gap-1"
              >
                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-accent-dark leading-none min-[1440px]:text-[2rem]"
                />
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}

            {/* 1440+: stadion2 floats inside the stats column. Standalone
                ScrollReveal sibling of the stats — about-stats is a plain
                flex container, so this animates on its own IO. */}
            <ScrollReveal
              direction="left"
              className="hidden min-[1440px]:block min-[1440px]:absolute min-[1440px]:z-[2] min-[1440px]:left-[22%] min-[1440px]:top-[-20%] min-[1440px]:w-[25%]"
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
          </div>
        </div>

        {/* Naše izletište + facilities */}
        <div className="mt-12 min-[1024px]:max-[1439.98px]:mt-16 min-[1440px]:mt-32">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 rounded-full mb-4.5">
                <HomeIcon width={14} height={14} className="text-primary" />
                <span className="text-primary font-[family-name:var(--font-montserrat)] font-semibold text-xs uppercase tracking-[0.12em]">
                  Naše izletište
                </span>
              </span>
              <h4 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-gray-800 mb-3">
                Samo 2 km od centra Zavidovića
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                Okruženo borovom šumom, naše izletište je idealno mjesto za
                rekreaciju, odmor i uživanje u prirodi. Pristupačno i besplatno
                za sve posjetioce.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-6 sm:max-[799.98px]:gap-x-3 gap-y-8 lg:gap-x-7 lg:gap-y-10">
            {facilities.map((f, i) => (
              <ScrollReveal key={f.label} delay={i * 80}>
                <div className="flex flex-col items-center text-center gap-3 group cursor-default">
                  <div className="text-gray-400 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300">
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
      </div>
    </section>
  );
}

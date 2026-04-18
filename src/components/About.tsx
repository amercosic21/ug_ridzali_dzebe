import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import {
  FootballFieldIcon,
  BasketballIcon,
  PlaygroundIcon,
  ShelterIcon,
  GrillIcon,
  WaterTapIcon,
  ParkingIcon,
  CameraIcon,
} from "./icons/facilities";
import { HomeIcon } from "./icons";

const stats = [
  { number: 28, label: "Turnira održano" },
  { number: 30, label: "Godina rada generacija" },
  { number: 500, suffix: "+", label: "Učesnika godišnje" },
];

const facilities = [
  { label: "Fudbalski teren", icon: <FootballFieldIcon /> },
  { label: "Teren za košarku", icon: <BasketballIcon /> },
  { label: "Dječije igralište", icon: <PlaygroundIcon /> },
  { label: "8 nadstrešnica", icon: <ShelterIcon /> },
  { label: "Kamini za roštilj", icon: <GrillIcon /> },
  { label: "Česme i WC", icon: <WaterTapIcon /> },
  { label: "Besplatan parking", icon: <ParkingIcon /> },
  { label: "Video nadzor", icon: <CameraIcon /> },
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
              <span translate="no">Ridžali i Džebe</span>
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
            <div className="about-stats relative flex flex-col gap-5 mt-8 lg:pt-8 border-t border-gray-100">
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

              {/* Left collage image — positioned relative to stats on 1220px+ */}
              <ScrollReveal
                direction="left"
                className="about-collage-1 hidden min-[1220px]:block z-[2]"
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
          </ScrollReveal>

          {/* RIGHT: stadion */}
          <ScrollReveal
            direction="right"
            className="w-full lg:w-1/2 flex lg:justify-end lg:relative z-[1]"
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

            {/* Middle collage — positioned relative to stadion on 1220px+ */}
            <ScrollReveal
              direction="up"
              className="about-collage-2 hidden lg:block z-[2]"
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

            {/* Right collage — positioned relative to stadion on 1220px+ */}
            <ScrollReveal
              direction="right"
              className="about-collage-3 hidden lg:block z-[2]"
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

            {/* Left collage — positioned relative to stadion on 1024-1220px */}
            <ScrollReveal
              direction="left"
              className="about-collage-1-sm hidden lg:max-[1219.98px]:block z-[2]"
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

        </div>

        {/* Facilities icons */}
        <ScrollReveal>
          <div className="about-facilities mt-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-5">
                <HomeIcon width={16} height={16} className="text-primary" />
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

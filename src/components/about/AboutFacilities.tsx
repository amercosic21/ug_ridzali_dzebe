import ScrollReveal from "@/components/effects/ScrollReveal";
import { HomeIcon } from "../icons";
import { facilities } from "./data";

/** "Naše izletište" intro + the facilities icon grid. */
export default function AboutFacilities() {
  return (
    <div className="mt-12 min-[1024px]:max-[1439.98px]:mt-16 min-[1440px]:mt-32">
      <ScrollReveal>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 rounded-full mb-4.5">
            <HomeIcon width={14} height={14} className="text-primary" />
            <span className="text-primary font-display font-semibold text-xs uppercase tracking-[0.12em]">
              Naše izletište
            </span>
          </span>
          <h4 className="font-display text-xl font-bold text-gray-800 mb-3">
            Samo 2 km od centra Zavidovića
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
            Okruženo borovom šumom, naše izletište je idealno mjesto za
            rekreaciju, odmor i uživanje u prirodi. Pristupačno i besplatno za
            sve posjetioce.
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
              <span className="text-sm font-display font-semibold text-gray-600">
                {f.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

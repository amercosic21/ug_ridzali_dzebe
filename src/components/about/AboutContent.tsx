import { PineTreeIcon } from "../icons";

// Naslovni blok i tri uvodna paragrafa — dijele ih glavni (≥1150px) i
// kompaktni (1024–1149.98px) raspored, pa žive na jednom mjestu.

export function IntroHeading() {
  return (
    <>
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 rounded-full mb-4">
        <PineTreeIcon width={14} height={14} className="text-primary" />
        <span className="text-primary font-display font-semibold text-xs uppercase tracking-[0.12em]">
          30 godina tradicije
        </span>
      </span>
      <h3 className="text-2xl font-display font-bold text-gray-800 leading-tight mb-5">
        <span translate="no">Ridžali i Džebe</span>
      </h3>
    </>
  );
}

export function Paragraph1() {
  return (
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
}

export function Paragraph2() {
  return (
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
}

export function Paragraph3() {
  return (
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
}

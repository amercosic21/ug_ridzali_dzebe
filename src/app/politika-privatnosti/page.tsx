import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti | UG Ridžali Džebe",
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className="bg-night pt-14 pb-10 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-green-100/50 hover:text-green-100/80 text-sm transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            Nazad na početnu
          </Link>
          <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-[family-name:var(--font-montserrat)] font-extrabold text-green-50 mb-3">
            Politika privatnosti
          </h1>
          <div className="w-15 h-1 bg-accent mx-auto rounded" />
        </div>
      </header>

      <main className="bg-cream py-16">
        <article className="max-w-[800px] mx-auto px-6 text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              1. Uvod
            </h2>
            <p>
              Udruženje građana Ridžali Džebe (&ldquo;mi&rdquo;, &ldquo;naše&rdquo;)
              poštuje privatnost posjetilaca ove web stranice. Ova politika
              privatnosti objašnjava koje informacije prikupljamo, kako ih
              koristimo i koja su vaša prava.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              2. Koje informacije prikupljamo
            </h2>
            <p>
              Ova web stranica je informativnog karaktera. Ne prikupljamo lične
              podatke osim informacija koje nam dobrovoljno dostavite putem
              kontakt forme ili direktnom komunikacijom (ime, email adresa,
              sadržaj poruke).
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              3. Kako koristimo informacije
            </h2>
            <p>Informacije koje prikupimo koristimo isključivo za:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Odgovaranje na vaše upite i poruke</li>
              <li>Informisanje o aktivnostima udruženja i turniru</li>
              <li>Poboljšanje sadržaja web stranice</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              4. Kolačići (cookies)
            </h2>
            <p>
              Ova web stranica može koristiti osnovne tehničke kolačiće potrebne
              za funkcionisanje stranice. Ne koristimo kolačiće za praćenje ili
              oglašavanje. Ugrađeni sadržaji trećih strana (Google Maps, YouTube)
              mogu postavljati vlastite kolačiće u skladu sa svojim politikama
              privatnosti.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              5. Treće strane
            </h2>
            <p>
              Ova stranica koristi usluge trećih strana (Google Maps za prikaz
              lokacije, YouTube za video sadržaj). Ovi servisi imaju vlastite
              politike privatnosti i mogu prikupljati podatke u skladu sa svojim
              uslovima korištenja.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              6. Vaša prava
            </h2>
            <p>Imate pravo da:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Zatražite uvid u podatke koje imamo o vama</li>
              <li>Zatražite brisanje vaših podataka</li>
              <li>Povučete saglasnost za obradu podataka</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-gray-800 mb-3">
              7. Kontakt
            </h2>
            <p>
              Za sva pitanja u vezi sa privatnošću podataka, kontaktirajte nas
              putem <a href="/#kontakt" className="text-accent-dark hover:underline">kontakt forme</a> na
              našoj stranici ili putem naših društvenih mreža.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

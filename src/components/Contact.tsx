import ScrollReveal from "@/components/effects/ScrollReveal";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  EmailIcon,
  PhoneIcon,
} from "./icons";
import { siteInfo, mailtoHref, telHref } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ContactCard, { ContactCardProps } from "./contact/ContactCard";

const contactCards: ContactCardProps[] = [
  {
    href: siteInfo.social.facebook.url,
    external: true,
    ariaLabel: `Facebook stranica — ${siteInfo.social.facebook.label}`,
    icon: <FacebookIcon width={20} height={20} className="text-facebook" aria-hidden="true" />,
    title: (
      <>
        Udruženje građana <span translate="no">&ldquo;Ridžali-Džebe&rdquo;</span>
      </>
    ),
    subtitle: "Pratite nas za novosti",
    hoverClassName: "hover:bg-facebook/8 hover:border-facebook/30",
    iconWrapClassName: "bg-facebook/10 group-hover:bg-facebook/20",
  },
  {
    href: siteInfo.social.instagram.url,
    external: true,
    ariaLabel: `Instagram profil @${siteInfo.social.instagram.handle}`,
    icon: <InstagramIcon width={20} height={20} className="text-instagram" aria-hidden="true" />,
    title: siteInfo.social.instagram.handle,
    subtitle: `@${siteInfo.social.instagram.handle}`,
    hoverClassName: "hover:bg-instagram/8 hover:border-instagram/30",
    iconWrapClassName: "bg-instagram/10 group-hover:bg-instagram/20",
  },
  {
    href: mailtoHref,
    ariaLabel: `Pošaljite email na ${siteInfo.email}`,
    icon: <EmailIcon width={20} height={20} className="text-primary" aria-hidden="true" />,
    title: siteInfo.email,
    subtitle: "Pošaljite nam upit",
    hoverClassName: "hover:bg-primary/8 hover:border-primary/30",
    iconWrapClassName: "bg-primary/10 group-hover:bg-primary/20",
    titleClassName: "break-all",
    bodyClassName: "min-w-0",
    arrowClassName: "shrink-0",
  },
  {
    href: telHref,
    ariaLabel: `Nazovite ${siteInfo.phone.display}`,
    icon: <PhoneIcon width={20} height={20} className="text-accent-dark" aria-hidden="true" />,
    title: siteInfo.phone.display,
    subtitle: "Direktan kontakt",
    hoverClassName: "hover:bg-accent/10 hover:border-accent/40",
    iconWrapClassName: "bg-accent/15 group-hover:bg-accent/25",
    noTranslate: true,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-10 sm:py-14 lg:py-16 bg-cream text-gray-900 relative overflow-hidden">
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading eyebrow="Budite u toku" title="Kontakt" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:items-stretch">
          <ScrollReveal direction="left">
            <div>
              <h3 className="font-display text-xl font-bold mb-4 text-gray-800">
                Povežite se s nama
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Za informacije o turniru, prijave ekipa ili pitanja o udruženju,
                kontaktirajte nas putem društvenih mreža ili telefona. Sve
                novosti o nadolazećem turniru i aktivnostima objavljujemo na
                našoj Facebook i Instagram stranici.
              </p>
              <div className="flex flex-col gap-4">
                {contactCards.map((card) => (
                  <ContactCard key={card.href} {...card} />
                ))}

                <div className="flex items-center gap-3 px-6 py-4 bg-white/50 border border-gray-300/40 rounded-xl text-gray-500">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <MapPinIcon width={20} height={20} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium text-sm" translate="no">{siteInfo.address.area}</span>
                    <span className="text-gray-400 text-xs">{siteInfo.address.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:h-full">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
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
      </Container>
    </section>
  );
}

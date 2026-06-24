import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import HashScroll from "@/components/effects/HashScroll";
import CookieBanner from "@/components/effects/CookieBanner";
import { siteInfo } from "@/data/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ridzalidzebe.ba"),
  alternates: {
    canonical: "/",
  },
  title: 'UG "Ridžali-Džebe" | Memorijalni turnir u malom nogometu',
  description:
    "Udruženje građana Ridžali Džebe - Memorijalni turnir u malom nogometu koji se održava od 1996. godine u Zavidovićima. Izletište, sport, zajedništvo i sjećanje.",
  keywords: [
    "Ridžali",
    "Džebe",
    "Zavidovići",
    "memorijalni turnir",
    "mali nogomet",
    "udruženje građana",
    "turnir Ridžali",
    "BiH",
  ],
  openGraph: {
    title: 'UG "Ridžali-Džebe" | Memorijalni turnir u malom nogometu',
    siteName: siteInfo.siteName,
    description:
      "Tradicija, zajedništvo i memorijalni turnir u malom nogometu u Zavidovićima od 1996. godine.",
    type: "website",
    url: "/",
    locale: "bs_BA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: 'UG "Ridžali-Džebe" | Memorijalni turnir u malom nogometu',
      },
    ],
  },
  other: {
    "theme-color": "#3d7a1a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteInfo.name,
              url: siteInfo.url,
              logo: `${siteInfo.url}/logo.png`,
              foundingDate: siteInfo.foundingYear,
              description:
                "Udruženje građana posvećeno očuvanju tradicije, sjećanju na šehide i jačanju zajednice kroz sport i kulturu.",
              email: siteInfo.email,
              telephone: siteInfo.phone.display,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteInfo.address.city,
                addressCountry: siteInfo.address.countryCode,
              },
              sameAs: [
                siteInfo.social.facebook.url,
                siteInfo.social.instagram.url,
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteInfo.siteName,
              url: siteInfo.url,
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <a
          href="#o-nama"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:bottom-6 focus-visible:right-20 focus-visible:z-9999 focus-visible:bg-accent focus-visible:text-primary-dark focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-full focus-visible:text-sm focus-visible:font-semibold focus-visible:shadow-lg focus-visible:h-12 focus-visible:flex focus-visible:items-center"
        >
          Preskoči na sadržaj
        </a>
        <HashScroll />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import HashScroll from "@/components/HashScroll";
import CookieBanner from "@/components/CookieBanner";

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
    description:
      "Tradicija, zajedništvo i memorijalni turnir u malom nogometu u Zavidovićima od 1996. godine.",
    type: "website",
    locale: "bs_BA",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <a
          href="#o-nama"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-1/2 focus-visible:-translate-x-1/2 focus-visible:z-[9999] focus-visible:bg-accent focus-visible:text-primary-dark focus-visible:px-4 focus-visible:py-2 focus-visible:rounded"
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

import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Galerija | UG Ridžali-Džebe",
  description:
    "Slike sa turnira, izletišta i iz našeg kraja. Svaka fotografija čuva uspomenu na ljude i trenutke koji grade ovu tradiciju.",
  alternates: {
    canonical: "/galerija",
  },
  openGraph: {
    title: "Galerija | UG Ridžali-Džebe",
    siteName: siteInfo.siteName,
    description:
      "Slike sa turnira, izletišta i iz našeg kraja. Svaka fotografija čuva uspomenu na ljude i trenutke koji grade ovu tradiciju.",
    type: "website",
    url: "/galerija",
    locale: "bs_BA",
  },
};

export default function GalerijaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

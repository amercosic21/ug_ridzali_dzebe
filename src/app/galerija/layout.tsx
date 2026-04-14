import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija | UG Ridžali-Džebe",
  description:
    "Slike sa turnira, izletišta i iz našeg kraja. Svaka fotografija čuva uspomenu na ljude i trenutke koji grade ovu tradiciju.",
  openGraph: {
    title: "Galerija | UG Ridžali-Džebe",
    description:
      "Slike sa turnira, izletišta i iz našeg kraja. Svaka fotografija čuva uspomenu na ljude i trenutke koji grade ovu tradiciju.",
  },
};

export default function GalerijaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

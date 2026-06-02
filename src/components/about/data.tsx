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
} from "../icons/facilities";

export interface Stat {
  number: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { number: 28, label: "Turnira održano" },
  { number: 30, label: "Godina rada generacija" },
  { number: 500, suffix: "+", label: "Učesnika godišnje" },
];

export const facilities = [
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

// Fotografije izletišta (src + alt) — dijele ih razni breakpoint rasporedi.
// Dimenzije (width/height) se prosljeđuju po pozivu jer ista slika ima razne
// omjere u različitim rasporedima (npr. nadstrešnica je uspravna u kolažu,
// položena u 1440+ magazinskom rasporedu).
export const izletisteImages = {
  stadion: { src: "/izletiste/stadion.jpg", alt: "Stadion" },
  nadstresnica: {
    src: "/izletiste/nadstresnica.webp",
    alt: "Nadstrešnica pri zalasku sunca",
  },
  stadion2: { src: "/izletiste/stadion2.webp", alt: "Stadion sa plavim stolicama" },
  igraliste: {
    src: "/izletiste/igraliste.webp",
    alt: "Izletište sa klupama i igralištem",
  },
} as const;

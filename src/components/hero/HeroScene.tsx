import HeroSceneDefs from "./scene/HeroSceneDefs";
import Clouds from "./scene/Clouds";
import { FarBirds, NearBirds } from "./scene/Birds";
import Landscape from "./scene/Landscape";
import { LeftTrees, RightTrees } from "./scene/Trees";

/**
 * Decorative stadium-at-dusk illustration behind the hero. Children are ordered
 * back-to-front (sky → clouds → far birds → landscape → trees → near birds →
 * dark overlay); keep that order, it is the SVG paint order.
 */
export default function HeroScene() {
  return (
    <svg
      viewBox="0 0 1440 810"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      suppressHydrationWarning
    >
      <HeroSceneDefs />

      <rect x="0" y="-1300" width="1440" height="2110" fill="url(#skyGrad)" />
      <ellipse cx="1100" cy="80" rx="160" ry="160" fill="url(#sunGlow)" />
      <circle cx="1100" cy="80" r="42" fill="rgba(255,235,180,0.7)" />
      <circle cx="1100" cy="80" r="28" fill="rgba(255,245,210,0.9)" />

      <Clouds />
      <FarBirds />
      <Landscape />
      <LeftTrees />
      <RightTrees />
      <NearBirds />

      <rect x="0" y="-1300" width="1440" height="2110" fill="url(#darkOverlay)" />
    </svg>
  );
}

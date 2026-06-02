/** Gradient and glow definitions for the hero scene SVG. */
export default function HeroSceneDefs() {
  return (
    <defs>
      <linearGradient
        id="skyGrad"
        x1="0"
        y1="-1300"
        x2="0"
        y2="810"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#0b3a6e" />
        <stop offset="45%" stopColor="#104c8c" />
        <stop offset="62%" stopColor="#1565a8" />
        <stop offset="74%" stopColor="#2e8fcf" />
        <stop offset="88%" stopColor="#6abde0" />
        <stop offset="100%" stopColor="#a8d8ee" />
      </linearGradient>
      <linearGradient id="pitchGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a8a20" />
        <stop offset="50%" stopColor="#327a1c" />
        <stop offset="100%" stopColor="#286818" />
      </linearGradient>
      <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a7030" />
        <stop offset="100%" stopColor="#2e5c28" />
      </linearGradient>
      <linearGradient id="mountainNear" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2c5822" />
        <stop offset="100%" stopColor="#224820" />
      </linearGradient>
      <linearGradient id="standGradL" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#525258" />
        <stop offset="100%" stopColor="#323238" />
      </linearGradient>
      <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="rgba(255,240,200,0.65)" />
        <stop offset="40%" stopColor="rgba(255,220,150,0.25)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <linearGradient
        id="darkOverlay"
        x1="0"
        y1="-1300"
        x2="0"
        y2="810"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="rgba(8,25,0,0.58)" />
        <stop offset="62%" stopColor="rgba(8,25,0,0.58)" />
        <stop offset="80%" stopColor="rgba(8,25,0,0.40)" />
        <stop offset="91%" stopColor="rgba(5,18,0,0.28)" />
        <stop offset="100%" stopColor="rgba(4,12,0,0.22)" />
      </linearGradient>
    </defs>
  );
}

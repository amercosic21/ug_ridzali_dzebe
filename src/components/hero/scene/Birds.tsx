/**
 * Stylised flying bird (a body ellipse + two wing strokes). The far cluster
 * omits the belly stroke; the near cluster's larger birds include it.
 */
function Bird({ transform, belly }: { transform: string; belly?: boolean }) {
  return (
    <g transform={transform}>
      <ellipse cx="0" cy="0" rx="6" ry="3" />
      <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
      <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
      {belly && <path d="M-6,0 Q-5,3 -2,4 L2,4 Q5,3 6,0" opacity="0.6" />}
    </g>
  );
}

interface BirdClusterProps {
  opacity: string;
  birds: { transform: string; belly?: boolean }[];
}

function BirdCluster({ opacity, birds }: BirdClusterProps) {
  return (
    <g fill="white" opacity={opacity}>
      {birds.map((bird, i) => (
        <Bird key={i} {...bird} />
      ))}
    </g>
  );
}

const farBirds: BirdClusterProps = {
  opacity: "0.7",
  birds: [
    { transform: "translate(700, -100) rotate(-7) scale(0.6)" },
    { transform: "translate(300, -50) rotate(5) scale(0.7)" },
    { transform: "translate(1100, -150) rotate(-10) scale(0.55)" },
    { transform: "translate(650, -280) rotate(8) scale(0.45)" },
    { transform: "translate(450, -450) rotate(-6) scale(0.4)" },
    { transform: "translate(1000, -500) rotate(4) scale(0.35)" },
  ],
};

const nearBirds: BirdClusterProps = {
  opacity: "0.85",
  birds: [
    { transform: "translate(520, 120) rotate(-8)", belly: true },
    { transform: "translate(920, 90) rotate(5) scale(0.8)", belly: true },
    { transform: "translate(680, 60) rotate(-12) scale(0.65)", belly: true },
    { transform: "translate(800, 150) rotate(3) scale(0.5)" },
    { transform: "translate(600, 180) rotate(-5) scale(0.4)" },
  ],
};

/** High, faint birds rendered behind the mountains. */
export function FarBirds() {
  return <BirdCluster {...farBirds} />;
}

/** Larger foreground birds rendered above the landscape. */
export function NearBirds() {
  return <BirdCluster {...nearBirds} />;
}

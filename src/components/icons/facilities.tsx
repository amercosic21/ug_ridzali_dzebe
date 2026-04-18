type IconProps = React.SVGProps<SVGSVGElement>;

const baseProps = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function FootballFieldIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20M2 12h20" />
      <path d="M9.5 5.5L12 8l2.5-2.5M9.5 18.5L12 16l2.5 2.5" />
    </svg>
  );
}

export function BasketballIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M4.93 4.93c4.08 2.38 4.08 11.76 0 14.14" />
      <path d="M19.07 4.93c-4.08 2.38-4.08 11.76 0 14.14" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function PlaygroundIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M2 22L12 2l10 20" />
      <path d="M7 14h10" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
}

export function ShelterIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <line x1="5" y1="15" x2="19" y2="15" />
      <line x1="9" y1="10" x2="9" y2="20" />
      <line x1="15" y1="10" x2="15" y2="20" />
    </svg>
  );
}

export function GrillIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="14" width="18" height="4" rx="1" />
      <line x1="6" y1="18" x2="6" y2="22" />
      <line x1="18" y1="18" x2="18" y2="22" />
      <path d="M7 10c0-2 1.5-3 1.5-5" />
      <path d="M12 10c0-2 1.5-3 1.5-5" />
      <path d="M17 10c0-2 1.5-3 1.5-5" />
    </svg>
  );
}

export function WaterTapIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 2v6" />
      <path d="M6 8h12a2 2 0 0 1 2 2c0 4-3 7-8 9-5-2-8-5-8-9a2 2 0 0 1 2-2z" />
      <path d="M10 21h4" />
    </svg>
  );
}

export function ParkingIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  );
}

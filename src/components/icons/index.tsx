type IconProps = React.SVGProps<SVGSVGElement>;

export function FacebookIcon({ width = 24, height = 24, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ width = 24, height = 24, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function MapPinIcon({ width = 24, height = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ArrowRightIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function EmailIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  );
}

export function PhoneIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function CalendarIcon({ width = 24, height = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function ClockIcon({ width = 24, height = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function MusicIcon({ width = 24, height = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function UsersIcon({ width = 24, height = 24, strokeWidth = 1.8, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function StarIcon({ width = 24, height = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function ClockCircleIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function HomeIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function PlayIcon({ width = 24, height = 24, strokeWidth = 2.5, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function ChevronRightIcon({ width = 24, height = 24, strokeWidth = 2.5, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function SearchPlusIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export function SearchMinusIcon({ width = 24, height = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export function FootballIcon({ width = 32, height = 32, ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 952.1 952.1" fill="currentColor" {...props}>
      <path d="M812.55,139.4c-43.7-43.7-94.6-78-151.3-102C602.55,12.6,540.25,0,475.95,0c-64.2,0.1-126.5,12.6-185.2,37.5 c-56.7,24-107.6,58.3-151.3,102c-43.7,43.7-78,94.6-102,151.3c-24.8,58.7-37.4,121-37.4,185.3c0,64.201,12.6,126.6,37.4,185.301 c24,56.699,58.3,107.6,102,151.299c43.7,43.701,94.6,78,151.3,102c58.7,24.801,121,37.4,185.3,37.4 c64.2,0,126.601-12.6,185.3-37.4c56.7-24,107.601-58.299,151.301-102c43.699-43.699,78-94.6,102-151.299 c24.8-58.701,37.399-121,37.399-185.301c0-64.2-12.6-126.6-37.399-185.3C890.55,234,856.25,183.2,812.55,139.4z M212.55,107.5 c4.3-3.3,8.5-6.8,12.9-9.9c23.1-16.2,48.7-29.3,74.7-40.2C355.55,34.2,415.75,22,475.95,22c40.1,0,81.2,5.4,119.899,16 c-15.3,6.2-34,18-65.399,44.8c-26.101-2.8-52.5-2.9-79-0.4c-34.601,3.3-69.4,11-103.4,23c-30.7,10.8-55,23.1-71.4,32.5 c-25.1-9-57.5-19.6-73.5-24.8C205.65,113.9,210.85,108.8,212.55,107.5z M646.15,226.5l-81.4,222.2l-195.3,37.5L208.05,319.5 c10.9-75.6,62.7-142.6,62.7-142.6c0.3-0.2,34.1-24.6,88.3-43.5c31.601-11.1,63.8-18.2,95.9-21.2c26.2-2.4,52.3-2,78.1,1.1 L646.15,226.5z M39.35,460.2c-5,32.3-6.1,65.8-3.5,99.5c-3.9-7.799-7-14.398-9.3-19.699c-3-20.9-4.5-42.301-4.5-64.1 c0-67,14.5-130.7,40.6-188c-2.9,30-1.5,61.1,0.6,84.7C52.05,400.7,44.05,430,39.35,460.2z M78.85,633.301 c-4.6-16.9-10-41.5-12.7-71c-3-33.301-2.1-66.4,2.9-98.101c3.8-24.3,9.9-47.899,18.3-70.6c32.9-27.8,76.5-44.1,100.6-51.6 L346.35,505.6L329.75,684.9L174.95,736.6C135.55,707.6,103.35,669.199,78.85,633.301z M549.25,892.9 c-34.5,22.6-121.7,28-157.1,29.299c-39-7.299-76.9-19.799-112.601-37c-31.2-15-60.8-33.6-87.8-55.398c0.5-0.9-4.2-48.602-4-66 l156.4-52.201l180.5,78.1l24.899,102.9C549.35,892.801,549.25,892.9,549.25,892.9z M849.15,734.6 C822.25,773.4,790.05,809.5,751.35,836.9c-36.3,25.6-84.899,34.4-128.1,41.5c-3.3,0.5-44.6,7.299-44.9,5.9l-24.899-103L680.55,649 l168.3-15.5c2.601,26.801,6,65.9,8,89.801C854.25,727.1,851.75,730.9,849.15,734.6z M851.75,600c-0.6,1-1.2,2.1-1.8,3.301 L682.35,618.699L592.15,460.9l81.6-222.7l115.2,7.3c24.5,20.5,46.2,43.3,64.6,67.9c23,30.9,40.9,64.8,53.101,100.7 C893.85,525.301,864.35,580.699,851.75,600z M911.85,349.8c-9.899-19.1-21.5-37.5-34.6-55c-20.7-27.7-45.3-53.2-73.2-75.9 c-5.1-25.3-19.1-65.1-56.7-106.9c0.7,0.5,1.4,1.1,2.101,1.6c2.3,1.7,4.5,3.5,6.8,5.2c25.9,20.4,49.5,43.5,70.4,68.9 c38.8,47.3,68.1,102.2,85.3,161.1C911.85,349.2,911.85,349.5,911.85,349.8z" />
    </svg>
  );
}

// Pine needles: left position, animation duration, delay, rotation, horizontal drift
const needles = [
  { left: "4%", dur: "13s", delay: "0s", rot: "-28deg", drift: "18px" },
  { left: "12%", dur: "17s", delay: "4.5s", rot: "38deg", drift: "-22px" },
  { left: "22%", dur: "11s", delay: "8s", rot: "-42deg", drift: "14px" },
  { left: "35%", dur: "15s", delay: "2s", rot: "22deg", drift: "-18px" },
  { left: "50%", dur: "14s", delay: "6.5s", rot: "-33deg", drift: "20px" },
  { left: "63%", dur: "12s", delay: "1s", rot: "46deg", drift: "-12px" },
  { left: "75%", dur: "16s", delay: "9.5s", rot: "-20deg", drift: "24px" },
  { left: "84%", dur: "13s", delay: "3.5s", rot: "30deg", drift: "-20px" },
  { left: "93%", dur: "18s", delay: "7s", rot: "-50deg", drift: "16px" },
];

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center justify-center text-center text-green-50 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 810"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1565a8" />
              <stop offset="30%" stopColor="#2e8fcf" />
              <stop offset="65%" stopColor="#6abde0" />
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
            <linearGradient id="darkOverlay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(8,25,0,0.58)" />
              <stop offset="45%" stopColor="rgba(8,25,0,0.40)" />
              <stop offset="75%" stopColor="rgba(5,18,0,0.28)" />
              <stop offset="100%" stopColor="rgba(4,12,0,0.22)" />
            </linearGradient>
          </defs>

          <rect width="1440" height="810" fill="url(#skyGrad)" />
          <ellipse cx="1100" cy="80" rx="160" ry="160" fill="url(#sunGlow)" />
          <circle cx="1100" cy="80" r="42" fill="rgba(255,235,180,0.7)" />
          <circle cx="1100" cy="80" r="28" fill="rgba(255,245,210,0.9)" />

          <g opacity="0.85">
            <g fill="white" opacity="0.8">
              <ellipse cx="250" cy="100" rx="70" ry="28" />
              <ellipse cx="290" cy="88" rx="50" ry="24" />
              <ellipse cx="210" cy="92" rx="45" ry="22" />
              <ellipse cx="260" cy="110" rx="55" ry="20" />
            </g>
            <g fill="white" opacity="0.7">
              <ellipse cx="700" cy="65" rx="80" ry="30" />
              <ellipse cx="745" cy="53" rx="55" ry="26" />
              <ellipse cx="660" cy="57" rx="50" ry="24" />
              <ellipse cx="710" cy="75" rx="60" ry="22" />
            </g>
            <g fill="white" opacity="0.55">
              <ellipse cx="1300" cy="145" rx="60" ry="22" />
              <ellipse cx="1330" cy="135" rx="45" ry="20" />
              <ellipse cx="1270" cy="139" rx="40" ry="18" />
            </g>
          </g>

          <path
            d="M0,300 Q80,230 180,260 Q300,200 440,240 Q560,195 700,230 Q820,190 960,225 Q1100,190 1220,230 Q1340,205 1440,240 L1440,340 L0,340 Z"
            fill="url(#mountainFar)"
            opacity="0.7"
          />
          <path
            d="M0,320 Q120,270 260,300 Q400,260 520,290 Q650,255 780,285 Q920,260 1040,290 Q1180,265 1300,290 Q1380,275 1440,290 L1440,360 L0,360 Z"
            fill="url(#mountainNear)"
            opacity="0.8"
          />

          <g>
            <rect x="0" y="338" width="1440" height="25" fill="#225020" />
            <polygon points="0,342 18,290 36,342" fill="#225020" />
            <polygon points="25,342 48,282 71,342" fill="#285822" />
            <polygon points="52,342 75,275 98,342" fill="#225020" />
            <polygon points="78,342 105,280 132,342" fill="#285822" />
            <polygon points="110,342 135,272 160,342" fill="#225020" />
            <polygon points="140,342 165,278 190,342" fill="#285822" />
            <polygon points="170,342 198,270 226,342" fill="#225020" />
            <polygon points="205,342 230,280 255,342" fill="#285822" />
            <polygon points="238,342 262,275 286,342" fill="#225020" />
            <polygon points="268,342 295,282 322,342" fill="#285822" />
            <polygon points="300,342 325,275 350,342" fill="#225020" />
            <polygon points="332,342 358,280 384,342" fill="#285822" />
            <polygon points="365,342 390,285 415,342" fill="#225020" />
            <polygon points="395,342 420,278 445,342" fill="#285822" />
            <polygon points="1000,342 1025,280 1050,342" fill="#225020" />
            <polygon points="1030,342 1058,272 1086,342" fill="#285822" />
            <polygon points="1065,342 1090,278 1115,342" fill="#225020" />
            <polygon points="1095,342 1122,282 1149,342" fill="#285822" />
            <polygon points="1130,342 1155,275 1180,342" fill="#225020" />
            <polygon points="1162,342 1190,280 1218,342" fill="#285822" />
            <polygon points="1198,342 1225,272 1252,342" fill="#225020" />
            <polygon points="1232,342 1258,278 1284,342" fill="#285822" />
            <polygon points="1265,342 1292,282 1319,342" fill="#225020" />
            <polygon points="1300,342 1328,275 1356,342" fill="#285822" />
            <polygon points="1338,342 1365,280 1392,342" fill="#225020" />
            <polygon points="1375,342 1400,285 1425,342" fill="#285822" />
            <polygon points="1410,342 1435,278 1460,342" fill="#225020" />
          </g>

          <g>
            <rect x="0" y="358" width="445" height="20" fill="#1e501a" />
            <rect x="1000" y="358" width="440" height="20" fill="#1e501a" />
            <polygon points="0,363 22,306 44,363" fill="#1e501a" />
            <polygon points="30,363 58,298 86,363" fill="#22601e" />
            <polygon points="65,363 92,303 119,363" fill="#1e501a" />
            <polygon points="98,363 128,293 158,363" fill="#22601e" />
            <polygon points="135,363 162,300 189,363" fill="#1e501a" />
            <polygon points="168,363 195,296 222,363" fill="#22601e" />
            <polygon points="200,363 230,290 260,363" fill="#1e501a" />
            <polygon points="238,363 265,298 292,363" fill="#22601e" />
            <polygon points="272,363 300,293 328,363" fill="#1e501a" />
            <polygon points="308,363 335,300 362,363" fill="#22601e" />
            <polygon points="342,363 370,296 398,363" fill="#1e501a" />
            <polygon points="378,363 408,290 438,363" fill="#22601e" />
            <polygon points="1000,363 1028,298 1056,363" fill="#1e501a" />
            <polygon points="1035,363 1065,293 1095,363" fill="#22601e" />
            <polygon points="1072,363 1100,300 1128,363" fill="#1e501a" />
            <polygon points="1108,363 1138,296 1168,363" fill="#22601e" />
            <polygon points="1148,363 1175,293 1202,363" fill="#1e501a" />
            <polygon points="1182,363 1212,298 1242,363" fill="#22601e" />
            <polygon points="1222,363 1250,290 1278,363" fill="#1e501a" />
            <polygon points="1258,363 1288,296 1318,363" fill="#22601e" />
            <polygon points="1298,363 1325,300 1352,363" fill="#1e501a" />
            <polygon points="1335,363 1365,293 1395,363" fill="#22601e" />
            <polygon points="1375,363 1402,298 1429,363" fill="#1e501a" />
          </g>

          <g>
            <rect x="380" y="240" width="5" height="130" fill="#666" />
            <rect x="370" y="235" width="25" height="8" rx="1" fill="#777" />
            <rect x="1058" y="240" width="5" height="130" fill="#666" />
            <rect x="1048" y="235" width="25" height="8" rx="1" fill="#777" />
          </g>

          <path
            d="M90,378 L90,350 L1350,350 L1350,378 L1335,428 L105,428 Z"
            fill="url(#standGradL)"
          />
          <g>
            <line
              x1="100"
              y1="357"
              x2="1340"
              y2="357"
              stroke="rgba(60,150,220,0.5)"
              strokeWidth="2"
            />
            <line
              x1="102"
              y1="364"
              x2="1342"
              y2="364"
              stroke="rgba(50,140,210,0.45)"
              strokeWidth="2"
            />
            <line
              x1="104"
              y1="371"
              x2="1344"
              y2="371"
              stroke="rgba(60,150,220,0.5)"
              strokeWidth="2"
            />
            <line
              x1="106"
              y1="378"
              x2="1340"
              y2="378"
              stroke="rgba(50,140,210,0.4)"
              strokeWidth="2"
            />
            <line
              x1="108"
              y1="385"
              x2="1336"
              y2="385"
              stroke="rgba(60,150,220,0.35)"
              strokeWidth="2"
            />
          </g>

          <path
            d="M410,373 L1030,373 L1090,810 L350,810 Z"
            fill="url(#pitchGrad)"
          />
          <g opacity="0.08">
            <path d="M430,383 L503,383 L458,800 L370,800 Z" fill="white" />
            <path d="M575,383 L648,383 L633,800 L545,800 Z" fill="white" />
            <path d="M720,383 L793,383 L808,800 L720,800 Z" fill="white" />
            <path d="M865,383 L938,383 L983,800 L895,800 Z" fill="white" />
          </g>
          <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" fill="none">
            <path d="M430,383 L1010,383 L1070,800 L370,800 Z" />
            <path d="M720,383 L720,800" />
            <ellipse cx="720" cy="591" rx="50" ry="35" />
            <circle cx="720" cy="591" r="3" fill="rgba(255,255,255,0.28)" />
            <path d="M418,466 L518,466 L494,716 L382,716 Z" />
            <path d="M408,535 L443,535 L428,648 L392,648 Z" />
            <path d="M1022,466 L922,466 L946,716 L1058,716 Z" />
            <path d="M1032,535 L998,535 L1012,648 L1048,648 Z" />
          </g>
          <g opacity="0.3">
            <rect x="398" y="569" width="5" height="45" fill="white" rx="1" />
            <rect x="1038" y="569" width="5" height="45" fill="white" rx="1" />
          </g>

          <path
            d="M0,373 L410,373 L350,810 L0,810 Z"
            fill="rgba(38,85,22,0.4)"
          />
          <path
            d="M1030,373 L1440,373 L1440,810 L1090,810 Z"
            fill="rgba(38,85,22,0.4)"
          />
          <path
            d="M0,460 L370,460 L340,810 L0,810 Z"
            fill="#1a3a14"
            opacity="0.6"
          />
          <path
            d="M0,520 L355,520 L330,810 L0,810 Z"
            fill="#142e10"
            opacity="0.5"
          />
          <path
            d="M1070,460 L1440,460 L1440,810 L1100,810 Z"
            fill="#1a3a14"
            opacity="0.6"
          />
          <path
            d="M1085,520 L1440,520 L1440,810 L1110,810 Z"
            fill="#142e10"
            opacity="0.5"
          />

          <g>
            <g transform="translate(30, 530)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-42 -14,-4 14,-4" fill="#1c4816" />
              <polygon points="0,-58 -11,-22 11,-22" fill="#20521a" />
              <polygon points="0,-68 -8,-34 8,-34" fill="#265c1e" />
            </g>
            <g transform="translate(100, 545)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-45 -15,-4 15,-4" fill="#1e4a18" />
              <polygon points="0,-62 -12,-23 12,-23" fill="#22551c" />
              <polygon points="0,-73 -9,-36 9,-36" fill="#286020" />
            </g>
            <g transform="translate(210, 525)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-40 -13,-4 13,-4" fill="#1c4816" />
              <polygon points="0,-55 -10,-20 10,-20" fill="#20521a" />
              <polygon points="0,-65 -8,-32 8,-32" fill="#265c1e" />
            </g>
            <g transform="translate(300, 540)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-42 -14,-4 14,-4" fill="#1e4a18" />
              <polygon points="0,-58 -11,-22 11,-22" fill="#22551c" />
              <polygon points="0,-68 -8,-34 8,-34" fill="#286020" />
            </g>
            <g transform="translate(55, 650)">
              <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
              <polygon points="0,-55 -18,-5 18,-5" fill="#1a4216" />
              <polygon points="0,-75 -14,-28 14,-28" fill="#1e4c1a" />
              <polygon points="0,-88 -11,-42 11,-42" fill="#22561e" />
            </g>
            <g transform="translate(160, 635)">
              <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
              <polygon points="0,-50 -16,-5 16,-5" fill="#1a4216" />
              <polygon points="0,-68 -13,-26 13,-26" fill="#1e4c1a" />
              <polygon points="0,-80 -10,-38 10,-38" fill="#22561e" />
            </g>
            <g transform="translate(270, 640)">
              <rect x="-4" y="-5" width="8" height="16" fill="#163212" />
              <polygon points="0,-48 -15,-5 15,-5" fill="#1a4216" />
              <polygon points="0,-65 -12,-24 12,-24" fill="#1e4c1a" />
              <polygon points="0,-76 -9,-36 9,-36" fill="#22561e" />
            </g>
            <g transform="translate(20, 780)">
              <rect x="-5" y="-6" width="10" height="36" fill="#142e10" />
              <polygon points="0,-65 -22,-6 22,-6" fill="#183c14" />
              <polygon points="0,-88 -17,-32 17,-32" fill="#1c4618" />
              <polygon points="0,-104 -13,-50 13,-50" fill="#20501c" />
            </g>
            <g transform="translate(130, 770)">
              <rect x="-5" y="-6" width="10" height="36" fill="#142e10" />
              <polygon points="0,-60 -20,-6 20,-6" fill="#183c14" />
              <polygon points="0,-82 -16,-30 16,-30" fill="#1c4618" />
              <polygon points="0,-96 -12,-46 12,-46" fill="#20501c" />
            </g>
            <g transform="translate(240, 760)">
              <rect x="-5" y="-6" width="10" height="34" fill="#142e10" />
              <polygon points="0,-58 -19,-6 19,-6" fill="#183c14" />
              <polygon points="0,-78 -15,-28 15,-28" fill="#1c4618" />
              <polygon points="0,-92 -11,-44 11,-44" fill="#20501c" />
            </g>
          </g>

          <g>
            <g transform="translate(1150, 535)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-44 -14,-4 14,-4" fill="#1e4a18" />
              <polygon points="0,-60 -11,-22 11,-22" fill="#22551c" />
              <polygon points="0,-70 -8,-34 8,-34" fill="#286020" />
            </g>
            <g transform="translate(1280, 530)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-42 -13,-4 13,-4" fill="#1c4816" />
              <polygon points="0,-58 -10,-20 10,-20" fill="#20521a" />
              <polygon points="0,-68 -8,-32 8,-32" fill="#265c1e" />
            </g>
            <g transform="translate(1400, 540)">
              <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
              <polygon points="0,-40 -13,-4 13,-4" fill="#1e4a18" />
              <polygon points="0,-55 -10,-20 10,-20" fill="#22551c" />
              <polygon points="0,-65 -8,-32 8,-32" fill="#286020" />
            </g>
            <g transform="translate(1120, 645)">
              <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
              <polygon points="0,-52 -17,-5 17,-5" fill="#1a4216" />
              <polygon points="0,-70 -13,-26 13,-26" fill="#1e4c1a" />
              <polygon points="0,-82 -10,-40 10,-40" fill="#22561e" />
            </g>
            <g transform="translate(1260, 630)">
              <rect x="-4" y="-5" width="8" height="16" fill="#163212" />
              <polygon points="0,-48 -15,-5 15,-5" fill="#1a4216" />
              <polygon points="0,-65 -12,-24 12,-24" fill="#1e4c1a" />
              <polygon points="0,-76 -9,-36 9,-36" fill="#22561e" />
            </g>
            <g transform="translate(1380, 650)">
              <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
              <polygon points="0,-55 -18,-5 18,-5" fill="#1a4216" />
              <polygon points="0,-75 -14,-28 14,-28" fill="#1e4c1a" />
              <polygon points="0,-88 -11,-42 11,-42" fill="#22561e" />
            </g>
            <g transform="translate(1190, 770)">
              <rect x="-5" y="-6" width="10" height="36" fill="#142e10" />
              <polygon points="0,-62 -21,-6 21,-6" fill="#183c14" />
              <polygon points="0,-84 -16,-30 16,-30" fill="#1c4618" />
              <polygon points="0,-98 -12,-46 12,-46" fill="#20501c" />
            </g>
            <g transform="translate(1330, 780)">
              <rect x="-5" y="-6" width="10" height="36" fill="#142e10" />
              <polygon points="0,-65 -22,-6 22,-6" fill="#183c14" />
              <polygon points="0,-88 -17,-32 17,-32" fill="#1c4618" />
              <polygon points="0,-104 -13,-50 13,-50" fill="#20501c" />
            </g>
            <g transform="translate(1430, 760)">
              <rect x="-5" y="-6" width="10" height="34" fill="#142e10" />
              <polygon points="0,-58 -19,-6 19,-6" fill="#183c14" />
              <polygon points="0,-78 -15,-28 15,-28" fill="#1c4618" />
              <polygon points="0,-92 -11,-44 11,-44" fill="#20501c" />
            </g>
          </g>

          <g fill="white" opacity="0.85">
            <g transform="translate(520, 120) rotate(-8)">
              <ellipse cx="0" cy="0" rx="6" ry="3" />
              <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
              <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              <path d="M-6,0 Q-5,3 -2,4 L2,4 Q5,3 6,0" opacity="0.6" />
            </g>
            <g transform="translate(920, 90) rotate(5) scale(0.8)">
              <ellipse cx="0" cy="0" rx="6" ry="3" />
              <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
              <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              <path d="M-6,0 Q-5,3 -2,4 L2,4 Q5,3 6,0" opacity="0.6" />
            </g>
            <g transform="translate(680, 60) rotate(-12) scale(0.65)">
              <ellipse cx="0" cy="0" rx="6" ry="3" />
              <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
              <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              <path d="M-6,0 Q-5,3 -2,4 L2,4 Q5,3 6,0" opacity="0.6" />
            </g>
            <g transform="translate(800, 150) rotate(3) scale(0.5)">
              <ellipse cx="0" cy="0" rx="6" ry="3" />
              <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
              <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
            </g>
            <g transform="translate(600, 180) rotate(-5) scale(0.4)">
              <ellipse cx="0" cy="0" rx="6" ry="3" />
              <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
              <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
            </g>
          </g>

          <g opacity="0.6" transform="translate(990, 343)">
            <path d="M-14,-22 L0,-36 L14,-22 Z" fill="#305028" />
            <rect x="-11" y="-22" width="2.5" height="22" fill="#244020" />
            <rect x="9" y="-22" width="2.5" height="22" fill="#244020" />
            <rect x="-1" y="-22" width="2.5" height="22" fill="#244020" />
          </g>

          <rect width="1440" height="810" fill="url(#darkOverlay)" />
        </svg>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(5,20,0,0.28) 100%)",
        }}
      />

      {/* Pine needle rain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {needles.map((n, i) => (
          <div
            key={i}
            className="pine-needle"
            style={{
              left: n.left,
              animationDuration: n.dur,
              animationDelay: n.delay,
              ["--rot" as string]: n.rot,
              ["--drift" as string]: n.drift,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6">
        <h1
          className="text-[clamp(2.2rem,6vw,4rem)] font-[family-name:var(--font-montserrat)] font-extrabold mb-5 leading-tight"
          style={{ animation: "fadeSlideUp 0.8s ease 0.15s both" }}
        >
          <span className="block text-green-100/90 text-[clamp(0.85rem,2vw,1.1rem)] font-semibold uppercase tracking-[0.22em] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Udruženje građana
          </span>
          <span className="text-accent block drop-shadow-[0_2px_16px_rgba(255,174,37,0.4)]">
            "Ridžali-Džebe"
          </span>
        </h1>

        <p
          className="text-[clamp(1rem,2.2vw,1.2rem)] text-green-100/90 font-medium mb-10 max-w-lg mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          style={{ animation: "fadeSlideUp 0.8s ease 0.3s both" }}
        >
          Tradicija, zajedništvo i memorijalni turnir u malom nogometu od 1996.
          godine
        </p>

        <div
          className="flex gap-4 justify-center flex-wrap"
          style={{ animation: "fadeSlideUp 0.8s ease 0.45s both" }}
        >
          <a
            href="#turnir"
            className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-sm sm:text-base bg-accent text-primary-dark border-2 border-accent hover:bg-accent-dark hover:border-accent-dark hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(255,174,37,0.4)] transition-all duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            O turniru
          </a>
          <a
            href="#galerija"
            className="inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-sm sm:text-base bg-green-100/10 text-green-50 border-2 border-green-100/30 hover:bg-green-100/20 hover:border-green-100/50 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
          >
            Galerija
          </a>
        </div>
      </div>

    </section>
  );
}

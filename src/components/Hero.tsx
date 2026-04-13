import HeroBgFix from "./HeroBgFix";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center justify-center text-center text-green-50 overflow-hidden"
    >
      <HeroBgFix />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full"
          style={{ width: "max(100%, calc(100vh * 1440 / 810))" }}
        >
          <svg
            viewBox="0 0 1440 810"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
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

            <rect
              x="0"
              y="-1300"
              width="1440"
              height="2110"
              fill="url(#skyGrad)"
            />
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

            <g opacity="0.85">
              <g fill="white" opacity="0.6">
                <ellipse cx="400" cy="-30" rx="65" ry="25" />
                <ellipse cx="440" cy="-40" rx="50" ry="22" />
                <ellipse cx="360" cy="-35" rx="42" ry="20" />
                <ellipse cx="410" cy="-18" rx="50" ry="18" />
              </g>
              <g fill="white" opacity="0.5">
                <ellipse cx="1050" cy="-80" rx="75" ry="28" />
                <ellipse cx="1095" cy="-92" rx="52" ry="24" />
                <ellipse cx="1010" cy="-86" rx="45" ry="22" />
                <ellipse cx="1060" cy="-68" rx="55" ry="20" />
              </g>
              <g fill="white" opacity="0.45">
                <ellipse cx="200" cy="-180" rx="58" ry="22" />
                <ellipse cx="235" cy="-190" rx="42" ry="20" />
                <ellipse cx="170" cy="-185" rx="38" ry="18" />
              </g>
              <g fill="white" opacity="0.4">
                <ellipse cx="800" cy="-170" rx="70" ry="26" />
                <ellipse cx="840" cy="-182" rx="48" ry="22" />
                <ellipse cx="760" cy="-176" rx="44" ry="20" />
                <ellipse cx="810" cy="-160" rx="52" ry="18" />
              </g>
              <g fill="white" opacity="0.35">
                <ellipse cx="500" cy="-350" rx="55" ry="20" />
                <ellipse cx="530" cy="-360" rx="40" ry="18" />
                <ellipse cx="470" cy="-355" rx="36" ry="16" />
              </g>
              <g fill="white" opacity="0.3">
                <ellipse cx="1200" cy="-420" rx="60" ry="22" />
                <ellipse cx="1235" cy="-430" rx="44" ry="20" />
                <ellipse cx="1165" cy="-425" rx="38" ry="18" />
              </g>
              <g fill="white" opacity="0.25">
                <ellipse cx="350" cy="-550" rx="50" ry="18" />
                <ellipse cx="380" cy="-558" rx="38" ry="16" />
                <ellipse cx="320" cy="-554" rx="34" ry="15" />
              </g>
              <g fill="white" opacity="0.22">
                <ellipse cx="900" cy="-680" rx="55" ry="20" />
                <ellipse cx="935" cy="-688" rx="40" ry="18" />
                <ellipse cx="865" cy="-684" rx="36" ry="16" />
              </g>
            </g>

            <g fill="white" opacity="0.7">
              <g transform="translate(700, -100) rotate(-7) scale(0.6)">
                <ellipse cx="0" cy="0" rx="6" ry="3" />
                <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
                <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              </g>
              <g transform="translate(300, -50) rotate(5) scale(0.7)">
                <ellipse cx="0" cy="0" rx="6" ry="3" />
                <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
                <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              </g>
              <g transform="translate(1100, -150) rotate(-10) scale(0.55)">
                <ellipse cx="0" cy="0" rx="6" ry="3" />
                <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
                <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              </g>
              <g transform="translate(650, -280) rotate(8) scale(0.45)">
                <ellipse cx="0" cy="0" rx="6" ry="3" />
                <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
                <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              </g>
              <g transform="translate(450, -450) rotate(-6) scale(0.4)">
                <ellipse cx="0" cy="0" rx="6" ry="3" />
                <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
                <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
              </g>
              <g transform="translate(1000, -500) rotate(4) scale(0.35)">
                <ellipse cx="0" cy="0" rx="6" ry="3" />
                <path d="M-3,-1 Q-10,-10 -18,-8 Q-12,-4 -6,-1 Z" />
                <path d="M3,-1 Q10,-10 18,-8 Q12,-4 6,-1 Z" />
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
              <rect x="380" y="210" width="5" height="160" fill="#666" />
              <rect x="370" y="205" width="25" height="8" rx="1" fill="#777" />
              <rect x="1058" y="210" width="5" height="160" fill="#666" />
              <rect x="1048" y="205" width="25" height="8" rx="1" fill="#777" />
            </g>

            <path
              d="M90,378 L90,320 L1350,320 L1350,378 L1335,428 L105,428 Z"
              fill="url(#standGradL)"
            />
            <g>
              <line
                x1="94"
                y1="329"
                x2="1346"
                y2="329"
                stroke="rgba(60,150,220,0.5)"
                strokeWidth="2"
              />
              <line
                x1="96"
                y1="338"
                x2="1344"
                y2="338"
                stroke="rgba(50,140,210,0.45)"
                strokeWidth="2"
              />
              <line
                x1="98"
                y1="347"
                x2="1342"
                y2="347"
                stroke="rgba(60,150,220,0.5)"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="356"
                x2="1340"
                y2="356"
                stroke="rgba(50,140,210,0.45)"
                strokeWidth="2"
              />
              <line
                x1="102"
                y1="365"
                x2="1338"
                y2="365"
                stroke="rgba(60,150,220,0.4)"
                strokeWidth="2"
              />
              <line
                x1="104"
                y1="374"
                x2="1336"
                y2="374"
                stroke="rgba(50,140,210,0.4)"
                strokeWidth="2"
              />
              <line
                x1="106"
                y1="383"
                x2="1334"
                y2="383"
                stroke="rgba(60,150,220,0.35)"
                strokeWidth="2"
              />
            </g>

            <path
              d="M425,418 L1015,418 L1090,810 L350,810 Z"
              fill="url(#pitchGrad)"
            />
            <g opacity="0.08">
              <path d="M443,427 L512,427 L457,800 L370,800 Z" fill="white" />
              <path d="M582,427 L651,427 L632,800 L545,800 Z" fill="white" />
              <path d="M720,427 L789,427 L807,800 L720,800 Z" fill="white" />
              <path d="M858,427 L928,427 L983,800 L895,800 Z" fill="white" />
            </g>
            <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" fill="none">
              <path d="M443,427 L997,427 L1070,800 L370,800 Z" />
              <path d="M720,427 L720,800" />
              <ellipse cx="720" cy="586" rx="50" ry="33" />
              <circle cx="720" cy="586" r="3" fill="rgba(255,255,255,0.28)" />
              <path d="M431,486 L527,486 L500,710 L386,710" />
              <path d="M1009,486 L913,486 L940,710 L1054,710" />
              <path d="M421,548 L463,548 L448,649 L400,649" />
              <path d="M1019,548 L977,548 L992,649 L1040,649" />
            </g>
            <g opacity="0.3">
              <rect x="404" y="560" width="5" height="42" fill="white" rx="1" />
              <rect
                x="1032"
                y="560"
                width="5"
                height="42"
                fill="white"
                rx="1"
              />
            </g>

            <path
              d="M0,418 L425,418 L350,810 L0,810 Z"
              fill="rgba(38,85,22,0.4)"
            />
            <path
              d="M0,373 L105,373 L105,418 L0,418 Z"
              fill="rgba(38,85,22,0.4)"
            />
            <path
              d="M1015,418 L1440,418 L1440,810 L1090,810 Z"
              fill="rgba(38,85,22,0.4)"
            />
            <path
              d="M1335,373 L1440,373 L1440,418 L1335,418 Z"
              fill="rgba(38,85,22,0.4)"
            />
            <path
              d="M0,460 L400,460 L333,810 L0,810 Z"
              fill="#1a3a14"
              opacity="0.6"
            />
            <path
              d="M0,520 L372,520 L317,810 L0,810 Z"
              fill="#142e10"
              opacity="0.5"
            />
            <path
              d="M1040,460 L1440,460 L1440,810 L1107,810 Z"
              fill="#1a3a14"
              opacity="0.6"
            />
            <path
              d="M1068,520 L1440,520 L1440,810 L1124,810 Z"
              fill="#142e10"
              opacity="0.5"
            />

            <g>
              <g transform="translate(70, 530)">
                <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
                <polygon points="0,-42 -14,-4 14,-4" fill="#1c4816" />
                <polygon points="0,-58 -11,-22 11,-22" fill="#20521a" />
                <polygon points="0,-68 -8,-34 8,-34" fill="#265c1e" />
              </g>
              <g transform="translate(160, 545)">
                <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
                <polygon points="0,-45 -15,-4 15,-4" fill="#1e4a18" />
                <polygon points="0,-62 -12,-23 12,-23" fill="#22551c" />
                <polygon points="0,-73 -9,-36 9,-36" fill="#286020" />
              </g>
              <g transform="translate(250, 525)">
                <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
                <polygon points="0,-40 -13,-4 13,-4" fill="#1c4816" />
                <polygon points="0,-55 -10,-20 10,-20" fill="#20521a" />
                <polygon points="0,-65 -8,-32 8,-32" fill="#265c1e" />
              </g>
              <g transform="translate(340, 540)">
                <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
                <polygon points="0,-42 -14,-4 14,-4" fill="#1e4a18" />
                <polygon points="0,-58 -11,-22 11,-22" fill="#22551c" />
                <polygon points="0,-68 -8,-34 8,-34" fill="#286020" />
              </g>
              <g transform="translate(75, 645)">
                <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
                <polygon points="0,-55 -18,-5 18,-5" fill="#1a4216" />
                <polygon points="0,-75 -14,-28 14,-28" fill="#1e4c1a" />
                <polygon points="0,-88 -11,-42 11,-42" fill="#22561e" />
              </g>
              <g transform="translate(210, 620)">
                <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
                <polygon points="0,-50 -16,-5 16,-5" fill="#1a4216" />
                <polygon points="0,-68 -13,-26 13,-26" fill="#1e4c1a" />
                <polygon points="0,-80 -10,-38 10,-38" fill="#22561e" />
              </g>
              <g transform="translate(310, 640)">
                <rect x="-4" y="-5" width="8" height="16" fill="#163212" />
                <polygon points="0,-48 -15,-5 15,-5" fill="#1a4216" />
                <polygon points="0,-65 -12,-24 12,-24" fill="#1e4c1a" />
                <polygon points="0,-76 -9,-36 9,-36" fill="#22561e" />
              </g>
              <g transform="translate(60, 780)">
                <rect x="-5" y="-6" width="10" height="36" fill="#142e10" />
                <polygon points="0,-65 -22,-6 22,-6" fill="#183c14" />
                <polygon points="0,-88 -17,-32 17,-32" fill="#1c4618" />
                <polygon points="0,-104 -13,-50 13,-50" fill="#20501c" />
              </g>
              <g transform="translate(170, 770)">
                <rect x="-5" y="-6" width="10" height="36" fill="#142e10" />
                <polygon points="0,-60 -20,-6 20,-6" fill="#183c14" />
                <polygon points="0,-82 -16,-30 16,-30" fill="#1c4618" />
                <polygon points="0,-96 -12,-46 12,-46" fill="#20501c" />
              </g>
              <g transform="translate(280, 760)">
                <rect x="-5" y="-6" width="10" height="34" fill="#142e10" />
                <polygon points="0,-58 -19,-6 19,-6" fill="#183c14" />
                <polygon points="0,-78 -15,-28 15,-28" fill="#1c4618" />
                <polygon points="0,-92 -11,-44 11,-44" fill="#20501c" />
              </g>
            </g>

            <g>
              <g transform="translate(1100, 535)">
                <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
                <polygon points="0,-44 -14,-4 14,-4" fill="#1e4a18" />
                <polygon points="0,-60 -11,-22 11,-22" fill="#22551c" />
                <polygon points="0,-70 -8,-34 8,-34" fill="#286020" />
              </g>
              <g transform="translate(1220, 530)">
                <rect x="-3" y="-4" width="6" height="14" fill="#1a3a14" />
                <polygon points="0,-42 -13,-4 13,-4" fill="#1c4816" />
                <polygon points="0,-58 -10,-20 10,-20" fill="#20521a" />
                <polygon points="0,-68 -8,-32 8,-32" fill="#265c1e" />
              </g>
              <g transform="translate(1370, 540)">
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
              <g transform="translate(1275, 640)">
                <rect x="-4" y="-5" width="8" height="18" fill="#163212" />
                <polygon points="0,-55 -18,-5 18,-5" fill="#1a4216" />
                <polygon points="0,-75 -14,-28 14,-28" fill="#1e4c1a" />
                <polygon points="0,-88 -11,-42 11,-42" fill="#22561e" />
              </g>
              <g transform="translate(1190, 600)">
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

            <rect
              x="0"
              y="-1300"
              width="1440"
              height="2110"
              fill="url(#darkOverlay)"
            />
          </svg>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(5,20,0,0.28) 100%)",
        }}
      />

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

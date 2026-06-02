/**
 * Static landscape behind the foreground trees: distant mountain ridges, the
 * treeline silhouettes, goal posts, the stand, the pitch with its markings, and
 * the darker side shadows. Hand-tuned unique paths, kept verbatim.
 */
export default function Landscape() {
  return (
    <>
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
    </>
  );
}

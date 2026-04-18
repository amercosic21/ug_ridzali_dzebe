const portraitFixScript = `
  (function () {
    var w = innerWidth, h = innerHeight;
    if (h <= w) return;

    var svg = document.querySelector("#pocetna svg");
    var box = svg && svg.parentElement;
    if (!svg || !box) return;

    var vbH = Math.max(Math.ceil(850 * h / w), 810);
    var r   = h / w;
    var t   = r - 1;

    svg.setAttribute("viewBox", "0 " + -(vbH - 810) + " 1440 " + vbH);
    svg.setAttribute("preserveAspectRatio", "xMidYMax slice");

    box.style.width           = "100%";
    box.style.transformOrigin = "center bottom";
    box.style.transform       = "scaleY(" + (1 + t * (0.55 + t * 0.08)).toFixed(3) + ")";
  })();
`;

export default function HeroPortraitFix() {
  return <script dangerouslySetInnerHTML={{ __html: portraitFixScript }} />;
}

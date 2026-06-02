/** Two layers of stylised clouds (lower band + higher, fainter band). */
export default function Clouds() {
  return (
    <>
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
    </>
  );
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = 'UG "Ridžali-Džebe" | Memorijalni turnir u malom nogometu';

export default async function OgImage() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b2a10",
          gap: "30px",
        }}
      >
        <img
          src={logoSrc}
          width={280}
          height={280}
          style={{ borderRadius: "50%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Udruženje građana
          </span>
          <span
            style={{
              fontSize: "48px",
              color: "#ffae25",
              fontWeight: 800,
            }}
          >
            &quot;Ridžali-Džebe&quot;
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

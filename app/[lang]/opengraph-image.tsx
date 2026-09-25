import { ImageResponse } from "next/og";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";

export const alt = "Majd Kalthoum, fullstack developer in Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// The link preview for LinkedIn, Slack and so on: RTM's dark palette.
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { hero } = await getDictionary(isLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0d0e14",
          color: "#eceef6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, color: "#c9c0ff" }}>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: "#8b78ff" }} />
          {hero.status}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4 }}>Majd Kalthoum</div>
          <div style={{ fontSize: 48, color: "#a9adc2" }}>{hero.role}</div>
        </div>
        <div style={{ fontSize: 28, color: "#8387a1" }}>developermajd.com</div>
      </div>
    ),
    size,
  );
}

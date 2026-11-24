import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt =
  "Safe Screen Logistics: testing, blood draws and IV therapy that come to you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#061c1f";
const PAPER = "#f3f6f4";
const MINT = "#34c7b6";
const GLASS = "rgba(255,255,255,0.07)";
const EDGE = "rgba(255,255,255,0.42)";

const headline = "Testing, blood draws and IV therapy that come to you.";

/** Brand display face from Google Fonts. Falls back to the bundled font if the fetch fails. */
async function loadDisplayFont(text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&text=${encodeURIComponent(text)}`,
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** Called as a plain function: the image renderer does not expand components nested inside svg. */
function barcode(x: number, y: number) {
  return (
    <g>
      <rect x={x} y={y} width="26" height="44" rx="2" fill="rgba(255,255,255,0.92)" />
      {[0, 3, 5, 9, 11, 15, 18, 20].map((b, i) => (
        <rect key={b} x={x + 3 + b} y={y + 5} width={i % 3 === 0 ? 2 : 1} height="18" fill={INK} />
      ))}
      <rect x={x + 3} y={y + 28} width="20" height="2" fill={INK} opacity="0.45" />
      <rect x={x + 3} y={y + 34} width="13" height="2" fill={INK} opacity="0.45" />
    </g>
  );
}

function Tube({ id, cap, level }: { id: string; cap: string; level: number }) {
  const body = "M34 58 V228 a16 16 0 0 0 32 0 V58 Z";
  return (
    <svg width="112" height="280" viewBox="0 0 100 250">
      <clipPath id={id}>
        <path d={body} />
      </clipPath>
      <path d={body} fill={GLASS} />
      <g clipPath={`url(#${id})`}>
        <rect x="34" y={level} width="32" height={250 - level} fill="#c5354a" />
        <ellipse cx="50" cy={level} rx="16" ry="3.5" fill="#e2586c" />
      </g>
      <path d={body} fill="none" stroke={EDGE} strokeWidth="1.5" />
      {barcode(37, 128)}
      <rect x="27" y="26" width="46" height="34" rx="7" fill={cap} />
    </svg>
  );
}

function Cup() {
  const body = "M18 112 L26 236 Q27 246 37 246 H63 Q73 246 74 236 L82 112 Z";
  return (
    <svg width="112" height="280" viewBox="0 0 100 250">
      <clipPath id="og-cup">
        <path d={body} />
      </clipPath>
      <path d={body} fill={GLASS} />
      <g clipPath="url(#og-cup)">
        <rect x="14" y="168" width="72" height="82" fill="#f0b94a" />
        <ellipse cx="50" cy="168" rx="30" ry="4" fill="#f7d27e" />
      </g>
      <path d={body} fill="none" stroke={EDGE} strokeWidth="1.5" />
      {barcode(40, 180)}
      <rect x="11" y="90" width="78" height="23" rx="6" fill="#e8eef0" />
      <path d="M62 86 H78 V128 H62 Z" fill={MINT} />
    </svg>
  );
}

function IvBag() {
  const body =
    "M24 24 H76 a10 10 0 0 1 10 10 V150 q0 20 -20 26 L56 180 H44 L34 176 Q14 170 14 150 V34 a10 10 0 0 1 10 -10 Z";
  return (
    <svg width="112" height="280" viewBox="0 0 100 250">
      <clipPath id="og-bag">
        <path d={body} />
      </clipPath>
      <rect x="43" y="6" width="14" height="18" rx="7" fill="none" stroke={EDGE} strokeWidth="1.5" />
      <path d={body} fill={GLASS} />
      <g clipPath="url(#og-bag)">
        <rect x="14" y="72" width="72" height="112" fill={MINT} />
        <ellipse cx="50" cy="72" rx="36" ry="4" fill="#7bdccf" />
      </g>
      <path d={body} fill="none" stroke={EDGE} strokeWidth="1.5" />
      <path d="M70 60 H80 M74 82 H80 M70 104 H80 M74 126 H80 M70 148 H80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <rect x="46" y="180" width="8" height="14" fill={EDGE} />
      <rect x="41" y="194" width="18" height="36" rx="6" fill={GLASS} stroke={EDGE} strokeWidth="1.5" />
      <rect x="42" y="218" width="16" height="11" rx="5" fill={MINT} opacity="0.8" />
      <path d="M50 230 V250" stroke={EDGE} strokeWidth="2" />
    </svg>
  );
}

export default async function OpengraphImage() {
  const brand = site.name;
  const contact = `${site.domain}   ${site.phone}`;
  const font = await loadDisplayFont(headline + brand + contact);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: INK,
          backgroundImage:
            "radial-gradient(circle at 82% 105%, rgba(52,199,182,0.30), transparent 55%), radial-gradient(circle at 58% 115%, rgba(141,123,208,0.26), transparent 50%)",
          color: PAPER,
          fontFamily: "Display",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 560 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="56" height="56" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="15" fill="#0e3a3c" />
              <path d="M32 9C40 20 47 28 47 38a15 15 0 0 1-30 0C17 28 24 20 32 9Z" fill={MINT} />
              <path
                d="M24.5 38.5l5.5 5.5 10-12"
                fill="none"
                stroke={INK}
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.6 }}>{brand}</div>
          </div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1, letterSpacing: -2.4 }}>
            {headline}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#7bdccf", letterSpacing: -0.4 }}>
            {contact}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1, paddingLeft: 30 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <Cup />
            <Tube id="og-tube-a" cap="#8d7bd0" level={96} />
            <Tube id="og-tube-b" cap="#e0a32b" level={124} />
            <IvBag />
          </div>
          <div style={{ display: "flex", height: 2, backgroundColor: "rgba(243,246,244,0.3)" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Display", data: font, weight: 600, style: "normal" }] : undefined,
    },
  );
}

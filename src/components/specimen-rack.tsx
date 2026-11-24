import Link from "next/link";

/**
 * Home hero visual: the collection kit lined up on a shelf. Four vessels (a
 * specimen cup, two capped blood tubes, an IV bag) fill once, in sequence, on
 * page load. Each vessel links to the service it stands for. CSS-only motion
 * (see globals.css); the reduced-motion guard leaves them filled and static.
 */

const GLASS = "rgba(255,255,255,0.06)";
const GLASS_EDGE = "rgba(255,255,255,0.38)";

function Barcode({ x, y }: { x: number; y: number }) {
  const bars = [0, 3, 5, 9, 11, 15, 18, 20];
  return (
    <g>
      <rect x={x} y={y} width="26" height="44" rx="2" fill="rgba(255,255,255,0.92)" />
      {bars.map((b, i) => (
        <rect
          key={b}
          x={x + 3 + b}
          y={y + 5}
          width={i % 3 === 0 ? 2 : 1}
          height="18"
          fill="#061c1f"
        />
      ))}
      <rect x={x + 3} y={y + 28} width="20" height="2" fill="#061c1f" opacity="0.45" />
      <rect x={x + 3} y={y + 34} width="13" height="2" fill="#061c1f" opacity="0.45" />
    </g>
  );
}

function Tube({ id, cap, level, delay }: { id: string; cap: string; level: number; delay: number }) {
  const body = "M34 58 V228 a16 16 0 0 0 32 0 V58 Z";
  return (
    <svg viewBox="0 0 100 250" className="h-full w-auto" aria-hidden>
      <clipPath id={id}>
        <path d={body} />
      </clipPath>
      <path d={body} fill={GLASS} />
      <g clipPath={`url(#${id})`}>
        <g className="vessel-liquid" style={{ "--d": `${delay}s` } as React.CSSProperties}>
          <rect x="34" y={level} width="32" height={250 - level} fill="var(--crimson-500)" />
          <ellipse cx="50" cy={level} rx="16" ry="3.5" fill="#e2586c" />
        </g>
      </g>
      <path d={body} fill="none" stroke={GLASS_EDGE} strokeWidth="1.5" />
      <path d="M40 70 V214" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round" />
      <Barcode x={37} y={128} />
      <rect x="27" y="26" width="46" height="34" rx="7" fill={cap} />
      <path d="M35 32 V54 M43 32 V54 M57 32 V54 M65 32 V54" stroke="rgba(0,0,0,0.16)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Cup({ delay }: { delay: number }) {
  const body = "M18 112 L26 236 Q27 246 37 246 H63 Q73 246 74 236 L82 112 Z";
  return (
    <svg viewBox="0 0 100 250" className="h-full w-auto" aria-hidden>
      <clipPath id="rack-cup">
        <path d={body} />
      </clipPath>
      <path d={body} fill={GLASS} />
      <g clipPath="url(#rack-cup)">
        <g className="vessel-liquid" style={{ "--d": `${delay}s` } as React.CSSProperties}>
          <rect x="14" y="168" width="72" height="82" fill="var(--amber-400)" />
          <ellipse cx="50" cy="168" rx="30" ry="4" fill="#f7d27e" />
        </g>
      </g>
      <path d={body} fill="none" stroke={GLASS_EDGE} strokeWidth="1.5" />
      <path d="M27 124 L32 226" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round" />
      <Barcode x={40} y={180} />
      <rect x="11" y="90" width="78" height="23" rx="6" fill="#e8eef0" />
      <rect x="11" y="103" width="78" height="3" fill="rgba(6,28,31,0.18)" />
      {/* tamper seal over the lid */}
      <path d="M62 86 H78 V128 H62 Z" fill="var(--mint-400)" />
      <path d="M66 96 H74 M66 102 H74 M66 118 H74" stroke="#061c1f" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function IvBag({ delay }: { delay: number }) {
  const body =
    "M24 24 H76 a10 10 0 0 1 10 10 V150 q0 20 -20 26 L56 180 H44 L34 176 Q14 170 14 150 V34 a10 10 0 0 1 10 -10 Z";
  return (
    <svg viewBox="0 0 100 250" className="h-full w-auto" aria-hidden>
      <clipPath id="rack-bag">
        <path d={body} />
      </clipPath>
      <rect x="43" y="6" width="14" height="18" rx="7" fill="none" stroke={GLASS_EDGE} strokeWidth="1.5" />
      <path d={body} fill={GLASS} />
      <g clipPath="url(#rack-bag)">
        <g className="vessel-liquid" style={{ "--d": `${delay}s` } as React.CSSProperties}>
          <rect x="14" y="72" width="72" height="112" fill="var(--mint-400)" />
          <ellipse cx="50" cy="72" rx="36" ry="4" fill="var(--mint-300)" />
        </g>
      </g>
      <path d={body} fill="none" stroke={GLASS_EDGE} strokeWidth="1.5" />
      <path d="M22 40 V146" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 60 H80 M74 82 H80 M70 104 H80 M74 126 H80 M70 148 H80" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <rect x="46" y="180" width="8" height="14" fill={GLASS_EDGE} />
      <rect x="41" y="194" width="18" height="36" rx="6" fill={GLASS} stroke={GLASS_EDGE} strokeWidth="1.5" />
      <rect x="42" y="218" width="16" height="11" rx="5" fill="var(--mint-400)" opacity="0.8" />
      <circle className="iv-drop" cx="50" cy="198" r="2.4" fill="var(--mint-300)" />
      <path d="M50 230 V250" stroke={GLASS_EDGE} strokeWidth="2" />
    </svg>
  );
}

const vessels = [
  {
    href: "/services/drug-testing",
    name: "Testing",
    note: "DOT and non-DOT",
    art: <Cup delay={0.5} />,
  },
  {
    href: "/services/blood-draws",
    name: "Annual draws",
    note: "Yearly lab work",
    art: <Tube id="rack-tube-a" cap="var(--lav-500)" level={96} delay={0.75} />,
  },
  {
    href: "/services/blood-draws",
    name: "Insurance draws",
    note: "For your insurer",
    art: <Tube id="rack-tube-b" cap="var(--gold-500)" level={124} delay={1} />,
  },
  {
    href: "/services/iv-therapy",
    name: "IV therapy",
    note: "11 drip formulas",
    art: <IvBag delay={1.25} />,
  },
];

export function SpecimenRack() {
  return (
    <ul className="grid grid-cols-4">
      {vessels.map((v, i) => (
        <li
          key={v.name}
          className="vessel-in"
          style={{ "--d": `${0.15 + i * 0.12}s` } as React.CSSProperties}
        >
          <Link
            href={v.href}
            className="vessel group flex flex-col items-center rounded-xl"
          >
            <span className="flex h-44 items-end justify-center sm:h-64 lg:h-72">
              {v.art}
            </span>
            <span className="flex w-full flex-col items-center gap-0.5 border-t border-paper/25 px-1 pt-4 text-center">
              <span className="text-[0.8rem] font-semibold leading-tight text-paper group-hover:text-mint-300 sm:text-base">
                {v.name}
              </span>
              <span className="hidden text-sm text-paper/55 sm:block">{v.note}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

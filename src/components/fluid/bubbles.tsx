import { cn } from "@/lib/utils";

// Deterministic bubble set (no Math.random — stable SSR output).
const BUBBLES = [
  { left: "8%", size: 10, dur: "9s", delay: "0s" },
  { left: "22%", size: 6, dur: "11s", delay: "1.5s" },
  { left: "40%", size: 14, dur: "8s", delay: "0.7s" },
  { left: "57%", size: 8, dur: "12s", delay: "2.2s" },
  { left: "71%", size: 5, dur: "10s", delay: "0.3s" },
  { left: "86%", size: 12, dur: "9.5s", delay: "1.1s" },
  { left: "94%", size: 7, dur: "13s", delay: "2.8s" },
];

/**
 * Slowly rising bubbles — decorative water motif. CSS-animated, frozen under
 * prefers-reduced-motion (where they simply won't move).
 */
export function Bubbles({
  className,
  color = "rgba(52,199,182,0.5)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-0 overflow-hidden",
        className,
      )}
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble absolute bottom-0 rounded-full"
          style={
            {
              left: b.left,
              width: b.size,
              height: b.size,
              background: color,
              boxShadow: `0 0 0 1px ${color}`,
              "--dur": b.dur,
              "--delay": b.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

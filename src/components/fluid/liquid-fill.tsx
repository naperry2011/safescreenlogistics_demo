"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A vessel that fills with liquid as it scrolls through the viewport — the
 * signature "hydration" moment. The fill level is driven by scroll progress;
 * a doubled wave SVG drifts across the liquid surface for a living shimmer.
 * Under prefers-reduced-motion the vessel renders ~70% full and static.
 */
export function LiquidFill({
  className,
  caption = "Hydration",
}: {
  className?: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const height = useTransform(fill, [0, 1], ["8%", "92%"]);
  const pct = useTransform(fill, (v) => `${Math.round(8 + v * 84)}%`);

  return (
    <div
      ref={ref}
      className={cn(
        "relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-[2.5rem] border border-mint-300/60 bg-card/40 backdrop-blur-sm shadow-[inset_0_2px_20px_rgba(14,58,54,0.08)]",
        className,
      )}
    >
      {/* measurement ticks — a clinical touch */}
      <div className="pointer-events-none absolute right-4 top-6 bottom-6 flex flex-col justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="h-px w-3 bg-spruce-800/20" />
        ))}
      </div>

      {/* liquid */}
      <motion.div
        className="absolute inset-x-0 bottom-0"
        style={{ height: reduce ? "70%" : height }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-mint-400 to-spruce-600" />
        {/* drifting surface wave */}
        <div className="wave-anim absolute -top-3 left-0 flex h-6 w-[200%]">
          {[0, 1].map((i) => (
            <svg
              key={i}
              className="h-full w-1/2"
              viewBox="0 0 600 24"
              preserveAspectRatio="none"
            >
              <path
                d="M0 14 C 100 0, 200 0, 300 12 C 400 24, 500 24, 600 12 L600 24 L0 24 Z"
                fill="var(--mint-400)"
              />
            </svg>
          ))}
        </div>
        {/* rising inner bubbles */}
        <span className="bubble absolute bottom-2 left-[30%] size-1.5 rounded-full bg-white/50" style={{ "--dur": "6s" } as React.CSSProperties} />
        <span className="bubble absolute bottom-2 left-[60%] size-1 rounded-full bg-white/40" style={{ "--dur": "7.5s", "--delay": "1s" } as React.CSSProperties} />
      </motion.div>

      {/* readout */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="eyebrow text-spruce-800">{caption}</span>
        {reduce ? (
          <span className="font-mono text-sm text-spruce-900">70%</span>
        ) : (
          <motion.span className="font-mono text-sm text-spruce-900">{pct}</motion.span>
        )}
      </div>
    </div>
  );
}

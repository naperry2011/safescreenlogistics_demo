import { cn } from "@/lib/utils";

/**
 * Animated SVG wave divider — replaces flat section edges with a gentle liquid
 * crest. The inner track is 200% wide and drifts left (CSS .wave-anim) for a
 * subtle flowing effect; frozen under prefers-reduced-motion.
 */
export function WaveDivider({
  fill = "var(--spruce-950)",
  flip = false,
  className,
  height = 64,
}: {
  /** CSS color the wave should paint (usually the NEXT section's background). */
  fill?: string;
  flip?: boolean;
  className?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("relative w-full overflow-hidden leading-[0]", flip && "rotate-180", className)}
      style={{ height }}
    >
      <div className="wave-anim absolute inset-y-0 left-0 flex w-[200%]">
        {[0, 1].map((i) => (
          <svg
            key={i}
            className="h-full w-1/2"
            viewBox="0 0 1200 64"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 40 C 150 4, 300 4, 450 32 C 600 60, 750 60, 900 36 C 1020 17, 1110 17, 1200 32 L1200 64 L0 64 Z"
              fill={fill}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

type Tone = "mint" | "spruce" | "dark";

const palettes: Record<Tone, [string, string, string]> = {
  // soft aqua/mint blobs for light (paper) sections
  mint: ["rgba(52,199,182,0.55)", "rgba(123,220,207,0.45)", "rgba(201,168,106,0.30)"],
  // teal-leaning for mid sections
  spruce: ["rgba(29,107,97,0.45)", "rgba(52,199,182,0.40)", "rgba(123,220,207,0.30)"],
  // luminous accents on dark (spruce-950) sections
  dark: ["rgba(52,199,182,0.42)", "rgba(26,174,159,0.38)", "rgba(201,168,106,0.22)"],
};

/**
 * Drifting gooey metaball background. Decorative only (pointer-events-none).
 * CSS-animated (no JS) and auto-frozen under prefers-reduced-motion.
 */
export function GooBlobs({
  tone = "mint",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const [c1, c2, c3] = palettes[tone];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="goo absolute inset-0">
        <span
          className="blob-a absolute size-[42vw] max-w-[520px] rounded-full blur-[2px]"
          style={{ background: c1, top: "-8%", left: "-6%" }}
        />
        <span
          className="blob-b absolute size-[36vw] max-w-[460px] rounded-full blur-[2px]"
          style={{ background: c2, top: "10%", right: "-8%" }}
        />
        <span
          className="blob-c absolute size-[30vw] max-w-[380px] rounded-full blur-[2px]"
          style={{ background: c3, bottom: "-12%", left: "30%" }}
        />
      </div>
    </div>
  );
}

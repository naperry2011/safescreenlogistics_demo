import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/** Brand mark: a droplet with a check on a dark tile. Same geometry as src/app/icon.svg. */
export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const text = variant === "light" ? "text-paper" : "text-spruce-900";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden className="shrink-0">
        <rect width="64" height="64" rx="15" fill="var(--spruce-800)" />
        <path
          d="M32 9C40 20 47 28 47 38a15 15 0 0 1-30 0C17 28 24 20 32 9Z"
          fill="var(--mint-400)"
        />
        <path
          d="M24.5 38.5l5.5 5.5 10-12"
          stroke="var(--spruce-950)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={cn("flex flex-col leading-none", text)}>
        <span className="font-display text-[1.05rem] font-semibold tracking-tight">
          Safe Screen
        </span>
        <span className="eyebrow text-[0.55rem] text-mint-500 mt-0.5">
          Logistics
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}

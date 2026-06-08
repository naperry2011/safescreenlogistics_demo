import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/** Brand mark: a droplet cradled within a shield — hydration + safety. */
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
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M17 2.5c4.2 2.4 8.4 3.4 12.5 3.4 0 9.8-1.8 18.6-12.5 22.6C6.3 24.5 4.5 15.7 4.5 5.9 8.6 5.9 12.8 4.9 17 2.5Z"
          fill="var(--spruce-800)"
        />
        <path
          d="M17 9.5c2.6 3.1 4.6 5.9 4.6 8.6A4.6 4.6 0 0 1 17 22.7a4.6 4.6 0 0 1-4.6-4.6c0-2.7 2-5.5 4.6-8.6Z"
          fill="var(--mint-400)"
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

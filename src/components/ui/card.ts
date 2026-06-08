/**
 * Shared card chrome — the hover/elevation/border treatment used by
 * ServiceCard and DripCard. Compose with `cn(cardShell, "...specifics")`
 * so a single edit here restyles every card surface.
 */
export const cardShell =
  "group relative flex flex-col rounded-[var(--radius-xl2)] border border-line transition-all duration-300 hover:border-mint-400 hover:shadow-[0_24px_50px_-30px_rgba(14,58,54,0.45)] hover:-translate-y-1";

/** Mint icon chip that warms to solid mint on card hover. */
export const cardIconChip =
  "inline-flex items-center justify-center rounded-2xl bg-mint-100 text-spruce-800 group-hover:bg-mint-500 group-hover:text-spruce-950 transition-colors";

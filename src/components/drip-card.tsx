import Link from "next/link";
import type { Drip } from "@/data/drips";
import { dripService } from "@/data/services";

/** One line of the drip menu: name, dotted leader, price, then the detail. */
export function DripCard({ drip }: { drip: Drip }) {
  return (
    <Link
      href={`/book?service=${dripService.slug}&drip=${drip.slug}`}
      className="group flex h-full flex-col gap-2 border-t border-spruce-900/15 py-6"
    >
      <span className="flex items-baseline gap-3">
        <span className="font-display text-2xl text-spruce-950 transition-colors group-hover:text-spruce-600">
          {drip.name}
        </span>
        <span
          aria-hidden
          className="min-w-6 flex-1 -translate-y-1 border-b border-dotted border-spruce-900/35"
        />
        <span className="font-display text-2xl text-spruce-950">{drip.price}</span>
      </span>
      <span className="leading-relaxed text-ink-soft">{drip.blurb}</span>
      <span className="text-sm text-spruce-800">
        Best for {drip.bestFor.join(", ").toLowerCase()}
      </span>
      <span className="mt-auto pt-1 text-sm font-semibold text-spruce-700 underline decoration-mint-400 decoration-2 underline-offset-4 group-hover:text-spruce-950">
        Book this drip
      </span>
    </Link>
  );
}

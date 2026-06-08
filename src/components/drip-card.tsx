import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Drip } from "@/data/drips";

export function DripCard({ drip }: { drip: Drip }) {
  const Icon = drip.icon;
  return (
    <Link
      href={`/book?service=iv-therapy&drip=${drip.slug}`}
      className="group relative flex h-full flex-col gap-4 rounded-[var(--radius-xl2)] bg-card/80 backdrop-blur-sm border border-line p-6 transition-all duration-300 hover:border-mint-400 hover:shadow-[0_24px_50px_-30px_rgba(14,58,54,0.45)] hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-mint-100 text-spruce-800 group-hover:bg-mint-500 group-hover:text-spruce-950 transition-colors">
          <Icon className="size-6" />
        </span>
        <span className="font-display text-xl text-spruce-900">{drip.price}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg text-spruce-950 group-hover:text-spruce-700">
          {drip.name}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed">{drip.blurb}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {drip.bestFor.map((b) => (
          <span
            key={b}
            className="inline-flex items-center gap-1 rounded-full bg-paper-2/70 border border-line px-2.5 py-1 text-[0.7rem] text-spruce-800"
          >
            {b}
          </span>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-spruce-700 pt-1">
        Book this drip
        <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Drip } from "@/data/drips";
import { dripService } from "@/data/services";
import { cardShell, cardIconChip } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function DripCard({ drip }: { drip: Drip }) {
  const Icon = drip.icon;
  return (
    <Link
      href={`/book?service=${dripService.slug}&drip=${drip.slug}`}
      className={cn(cardShell, "h-full gap-4 bg-card/80 backdrop-blur-sm p-6")}
    >
      <div className="flex items-start justify-between">
        <span className={cn(cardIconChip, "size-12")}>
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

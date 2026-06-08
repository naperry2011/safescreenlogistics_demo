import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { cardShell, cardIconChip } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(cardShell, "gap-5 bg-card p-7")}
    >
      <div className="flex items-center justify-between">
        <span className={cn(cardIconChip, "size-14")}>
          <Icon className="size-7" />
        </span>
        <ArrowUpRight className="size-5 text-ink-soft/50 group-hover:text-mint-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl text-spruce-950">{service.name}</h3>
        <p className="text-ink-soft text-sm leading-relaxed">{service.summary}</p>
      </div>
      <div className="mt-auto flex items-center gap-3 pt-2 text-xs">
        <span className="eyebrow text-spruce-700">{service.startingPrice}</span>
        <span className="text-line">•</span>
        <span className="eyebrow text-ink-soft">{service.duration}</span>
      </div>
    </Link>
  );
}

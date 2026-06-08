import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col gap-5 rounded-[var(--radius-xl2)] bg-card border border-line p-7 transition-all duration-300 hover:border-mint-400 hover:shadow-[0_24px_50px_-30px_rgba(14,58,54,0.45)] hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center justify-center size-14 rounded-2xl bg-mint-100 text-spruce-800 group-hover:bg-mint-500 group-hover:text-spruce-950 transition-colors">
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

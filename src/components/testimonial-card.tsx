import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-[var(--radius-xl2)] bg-card border border-line p-7">
      <Quote className="size-7 text-mint-400" aria-hidden />
      <blockquote className="text-ink leading-relaxed flex-1">
        “{t.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-2 border-t border-line">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-spruce-800 text-paper font-display text-sm">
          {t.name.charAt(0)}
        </span>
        <span className="flex flex-col">
          <span className="font-medium text-spruce-950 text-sm">{t.name}</span>
          <span className="text-xs text-ink-soft">
            {t.location} · {t.context}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

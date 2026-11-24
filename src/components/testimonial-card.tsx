import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-6 border-t-2 border-spruce-950 pt-6">
      <blockquote className="flex-1 text-xl leading-snug text-spruce-950">
        “{t.quote}”
      </blockquote>
      <figcaption className="flex flex-col text-sm">
        <span className="font-semibold text-spruce-950">{t.name}</span>
        <span className="text-ink-soft">
          {t.location}, {t.context}
        </span>
      </figcaption>
    </figure>
  );
}

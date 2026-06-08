import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title = "Ready to feel your best?",
  subtitle = "Book in under two minutes. A licensed clinician will take care of the rest.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-xl2)] bg-spruce-900 text-paper px-8 py-14 sm:px-14 sm:py-16">
          {/* atmospheric accent glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, var(--mint-500), transparent 70%)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 -bottom-20 size-64 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--gold-500), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl flex flex-col gap-3">
              <h2 className="font-display text-3xl sm:text-4xl leading-tight">{title}</h2>
              <p className="text-paper/70 text-lg">{subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/book" variant="secondary" size="lg">
                Book Now
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 h-14 text-paper hover:bg-paper/10 transition-colors"
              >
                <Phone className="size-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}

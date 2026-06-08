import type { Metadata } from "next";
import { Check, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { packages } from "@/data/packages";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Simple, better-value wellness packages and memberships from Safe Screen Logistics — built around your goals.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Packages & Pricing"
              title="Wellness made simple"
              description="Transparent plans with no long-term lock-in. Choose a single session or a membership that keeps you consistent."
              align="center"
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col gap-6 rounded-[var(--radius-xl2)] p-8 border transition-all",
                    p.featured
                      ? "bg-spruce-900 text-paper border-spruce-900 shadow-[0_40px_80px_-40px_rgba(14,58,54,0.6)] lg:-translate-y-3"
                      : "bg-card border-line",
                  )}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-mint-500 px-4 py-1.5 text-xs font-medium text-spruce-950">
                      <Star className="size-3.5 fill-spruce-950" /> Most popular
                    </span>
                  )}
                  <div className="flex flex-col gap-2">
                    <h3
                      className={cn(
                        "font-display text-2xl",
                        p.featured ? "text-paper" : "text-spruce-950",
                      )}
                    >
                      {p.name}
                    </h3>
                    <p className={cn("text-sm", p.featured ? "text-paper/60" : "text-ink-soft")}>
                      {p.blurb}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "font-display text-4xl",
                        p.featured ? "text-paper" : "text-spruce-950",
                      )}
                    >
                      {p.price}
                    </span>
                    <span className={cn("text-sm", p.featured ? "text-paper/50" : "text-ink-soft")}>
                      {p.cadence}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={cn(
                          "flex gap-3 text-sm",
                          p.featured ? "text-paper/85" : "text-ink",
                        )}
                      >
                        <Check
                          className={cn(
                            "size-5 shrink-0",
                            p.featured ? "text-mint-300" : "text-mint-500",
                          )}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={`/book?package=${p.id}`}
                    variant={p.featured ? "secondary" : "outline"}
                    className="w-full"
                  >
                    Choose {p.name}
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-ink-soft">
              Need something custom? <a href="/contact" className="text-spruce-700 underline underline-offset-4 hover:text-spruce-900">Talk to our team</a> and we&apos;ll build a plan around you.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-3xl flex flex-col gap-8">
          <Reveal>
            <h2 className="font-display text-3xl text-spruce-950">
              Questions about plans
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqList items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

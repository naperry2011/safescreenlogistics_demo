import type { Metadata } from "next";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { DripCard } from "@/components/drip-card";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq";
import { GooBlobs } from "@/components/fluid/goo-blobs";
import { Bubbles } from "@/components/fluid/bubbles";
import { WaveDivider } from "@/components/fluid/wave-divider";
import { flagshipDrip, standardDrips } from "@/data/drips";
import { dripService } from "@/data/services";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "IV Drip Menu",
  description:
    "Explore the Safe Screen Logistics IV drip menu — ten condition-targeted infusions at $250 and the flagship Full Body Restart, each delivered by licensed clinicians.",
};

export default function MenuPage() {
  const FlagshipIcon = flagshipDrip.icon;

  return (
    <>
      {/* Hero + flagship */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-24">
        <GooBlobs tone="mint" />
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="The Drip Menu"
              title="Pick your formula"
              description="Every drip is tailored to a goal and administered by licensed clinicians using sterile, single-use equipment — at your location or a partner clinic."
            />
          </Reveal>

          {/* Flagship */}
          <Reveal delay={0.1}>
            <div className="relative mt-12 overflow-hidden rounded-[var(--radius-xl2)] bg-spruce-950 text-paper">
              <Bubbles color="rgba(52,199,182,0.45)" />
              <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                <div className="flex flex-col gap-5">
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-mint-500 px-4 py-1.5 text-xs font-medium text-spruce-950">
                    <Sparkles className="size-3.5" /> Flagship
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                    {flagshipDrip.name}
                  </h2>
                  <p className="text-paper/70 text-lg leading-relaxed max-w-xl">
                    {flagshipDrip.blurb}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {flagshipDrip.bestFor.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-full border border-paper/20 px-3 py-1.5 text-sm text-paper/85"
                      >
                        <Check className="size-3.5 text-mint-300" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <ButtonLink
                      href={`/book?service=${dripService.slug}&drip=${flagshipDrip.slug}`}
                      variant="secondary"
                      size="lg"
                    >
                      Book {flagshipDrip.name} <ArrowRight className="size-4" />
                    </ButtonLink>
                    <span className="font-display text-3xl text-paper">
                      {flagshipDrip.price}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="inline-flex size-40 items-center justify-center rounded-full bg-paper/5 border border-paper/10">
                    <FlagshipIcon className="size-20 text-mint-300" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Standard drips */}
      <section className="pb-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <Eyebrow>Targeted infusions · $250 each</Eyebrow>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standardDrips.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 3) * 0.06}>
                <DripCard drip={d} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="text-center text-sm text-ink-soft">
              Not sure which to choose?{" "}
              <a href="/contact" className="text-spruce-700 underline underline-offset-4 hover:text-spruce-900">
                Ask our clinical team
              </a>{" "}
              and we&apos;ll recommend the right drip for your goals.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <Container className="max-w-3xl flex flex-col gap-8">
          <Reveal>
            <SectionHeading eyebrow="Good to know" title="Questions about drips" />
          </Reveal>
          <Reveal delay={0.05}>
            <FaqList items={faqs} />
          </Reveal>
        </Container>
      </section>

      <WaveDivider fill="var(--paper)" />
      <CtaBand title="Ready to pick your drip?" />
    </>
  );
}

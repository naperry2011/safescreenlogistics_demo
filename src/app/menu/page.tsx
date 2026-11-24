import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { DripCard } from "@/components/drip-card";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq";
import { flagshipDrip, standardDrips } from "@/data/drips";
import { dripService } from "@/data/services";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "IV Drip Menu",
  description:
    "The Safe Screen Logistics IV drip menu: ten targeted infusions at $250 and the flagship Full Body Restart, each given by licensed clinicians.",
};

export default function MenuPage() {
  return (
    <>
      <section className="pt-16 pb-14 sm:pt-24">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            as="h1"
            title="The drip menu"
            description="Every drip is built around a goal and given by licensed clinicians using sterile, single-use equipment, at your location or a partner clinic."
          />

          <div className="grid gap-10 rounded-[var(--radius-xl2)] bg-spruce-950 p-8 text-paper sm:p-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div className="flex flex-col gap-5">
              <p className="font-semibold text-mint-300">Our most complete drip</p>
              <h2 className="font-display text-5xl leading-none sm:text-7xl">
                {flagshipDrip.name}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-paper/70">
                {flagshipDrip.blurb}
              </p>
              <p className="text-paper/85">
                Best for {flagshipDrip.bestFor.join(", ").toLowerCase()}
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:items-end">
              <span className="font-display text-6xl leading-none text-mint-300">
                {flagshipDrip.price}
              </span>
              <ButtonLink
                href={`/book?service=${dripService.slug}&drip=${flagshipDrip.slug}`}
                variant="secondary"
                size="lg"
              >
                Book {flagshipDrip.name}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="flex flex-col gap-8">
          <h2 className="font-display text-4xl leading-none text-spruce-950 sm:text-5xl">
            Targeted infusions, $250 each
          </h2>
          <div className="grid gap-x-16 md:grid-cols-2">
            {standardDrips.map((d) => (
              <DripCard key={d.slug} drip={d} />
            ))}
          </div>
          <p className="text-ink-soft">
            Not sure which to choose?{" "}
            <Link
              href="/contact"
              className="font-semibold text-spruce-800 underline decoration-mint-400 decoration-2 underline-offset-4 hover:text-spruce-950"
            >
              Ask our clinical team
            </Link>{" "}
            and we will recommend the right drip for your goals.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="flex max-w-3xl flex-col gap-8">
          <SectionHeading title="Questions about drips" />
          <FaqList items={faqs} />
        </Container>
      </section>

      <CtaBand title="Ready to pick your drip?" />
    </>
  );
}

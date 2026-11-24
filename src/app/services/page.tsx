import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DOT and non-DOT testing, annual and insurance blood draws, and mobile IV hydration therapy from Safe Screen Logistics.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
        <Container>
          <SectionHeading
            as="h1"
            title="Three services, one visit to wherever you are"
            description="Testing, blood draws and IV therapy, each handled by licensed clinicians with sterile, single-use equipment at your home, workplace, or a partner location."
          />
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <ul className="border-t-2 border-spruce-950">
            {services.map((s) => (
              <li
                key={s.slug}
                className="grid gap-8 border-b border-spruce-900/15 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-4xl leading-[1.02] text-spruce-950 sm:text-5xl">
                    {s.name}
                  </h2>
                  <dl className="flex gap-10 pt-2 text-sm">
                    <div>
                      <dt className="text-ink-soft">Price</dt>
                      <dd className="font-semibold text-spruce-950">{s.startingPrice}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft">Visit length</dt>
                      <dd className="font-semibold text-spruce-950">{s.duration}</dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col gap-7">
                  <p className="text-lg leading-relaxed text-ink">{s.intro}</p>
                  {s.options && (
                    <dl className="grid gap-6 sm:grid-cols-2">
                      {s.options.map((o) => (
                        <div key={o.name} className="border-l-2 border-mint-400 pl-4">
                          <dt className="font-semibold text-spruce-950">{o.name}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-ink-soft">
                            {o.detail}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <div className="flex flex-wrap items-center gap-5">
                    <ButtonLink href={`/book?service=${s.slug}`}>Book this service</ButtonLink>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-spruce-800 hover:text-spruce-950"
                    >
                      What to expect <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

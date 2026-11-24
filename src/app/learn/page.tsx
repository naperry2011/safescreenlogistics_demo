import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqList } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { articles } from "@/data/articles";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Clear, no-hype guidance from Safe Screen Logistics on hydration, recovery, lab work, and building routines that stick.",
};

export default function LearnPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="pt-16 pb-14 sm:pt-24">
        <Container>
          <SectionHeading
            as="h1"
            title="Plain answers before your visit"
            description="Practical guidance from our clinical team. No hype, no jargon."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Link
            href={`/learn/${featured.slug}`}
            className="group grid gap-6 border-t-2 border-spruce-950 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-14"
          >
            <h2 className="font-display text-4xl leading-[1.02] text-spruce-950 transition-colors group-hover:text-spruce-600 sm:text-6xl">
              {featured.title}
            </h2>
            <div className="flex flex-col gap-4 lg:pt-2">
              <p className="text-lg leading-relaxed text-ink">{featured.excerpt}</p>
              <p className="text-sm text-ink-soft">
                {featured.category}, {featured.readMinutes} min read
              </p>
            </div>
          </Link>
          <ul className="border-t border-spruce-900/15">
            {rest.map((a) => (
              <li key={a.slug} className="border-b border-spruce-900/15">
                <Link
                  href={`/learn/${a.slug}`}
                  className="group grid gap-2 py-7 md:grid-cols-[1fr_1.2fr_auto] md:items-baseline md:gap-10"
                >
                  <span className="font-display text-2xl leading-snug text-spruce-950 transition-colors group-hover:text-spruce-600">
                    {a.title}
                  </span>
                  <span className="leading-relaxed text-ink-soft">{a.excerpt}</span>
                  <span className="text-sm text-ink-soft">
                    {a.category}, {a.readMinutes} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="flex max-w-3xl flex-col gap-8">
          <SectionHeading title="Frequently asked questions" />
          <FaqList items={faqs} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

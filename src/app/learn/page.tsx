import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { articles } from "@/data/articles";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Clear, no-hype wellness education from Safe Screen Logistics — hydration, recovery, lab work, and building routines that stick.",
};

export default function LearnPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="The Journal"
              title="Wellness, explained simply"
              description="Practical, honest guidance from our clinical team — no hype, no jargon."
            />
          </Reveal>
        </Container>
      </section>

      {/* Featured */}
      <section className="pb-12">
        <Container>
          <Reveal>
            <Link
              href={`/learn/${featured.slug}`}
              className="group grid gap-8 rounded-[var(--radius-xl2)] bg-spruce-900 text-paper p-8 sm:p-12 lg:grid-cols-2 lg:items-center overflow-hidden relative"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, var(--mint-500), transparent 70%)" }}
                aria-hidden
              />
              <div className="relative flex flex-col gap-4">
                <span className="eyebrow text-mint-400">{featured.category} · Featured</span>
                <h2 className="font-display text-3xl sm:text-4xl leading-tight group-hover:text-mint-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-paper/70 leading-relaxed">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-mint-300 mt-2">
                  Read article <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="relative hidden lg:flex items-center justify-center">
                <span className="font-display text-[9rem] leading-none text-paper/5">
                  {featured.readMinutes}
                  <span className="text-3xl align-top">min</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link
                  href={`/learn/${a.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-[var(--radius-xl2)] bg-card border border-line p-6 hover:border-mint-400 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-mint-500">{a.category}</span>
                    <span className="text-xs text-ink-soft/70">{a.readMinutes} min</span>
                  </div>
                  <h3 className="font-display text-lg text-spruce-950 group-hover:text-spruce-700">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed flex-1">
                    {a.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <Container className="max-w-3xl flex flex-col gap-8">
          <Reveal>
            <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
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

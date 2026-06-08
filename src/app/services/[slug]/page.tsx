import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { DripCard } from "@/components/drip-card";
import { services, getService } from "@/data/services";
import { faqs } from "@/data/faqs";
import { standardDrips, flagshipDrip } from "@/data/drips";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(700px 400px at 85% 0%, rgba(52,199,182,0.16), transparent 60%)",
          }}
          aria-hidden
        />
        <Container>
          <Reveal>
            <Link
              href="/services"
              className="text-sm text-ink-soft hover:text-spruce-900"
            >
              ← All services
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="flex flex-col gap-5 max-w-2xl">
              <Reveal>
                <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-mint-100 text-spruce-800">
                  <Icon className="size-8" />
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl leading-tight text-spruce-950">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-ink-soft leading-relaxed">
                  {service.intro}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <span className="inline-flex items-center gap-2 text-sm text-spruce-800">
                    <Tag className="size-4 text-mint-500" /> {service.startingPrice}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-spruce-800">
                    <Clock className="size-4 text-mint-500" /> {service.duration}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <ButtonLink href={`/book?service=${service.slug}`} size="lg">
                    Book {service.name} <ArrowRight className="size-4" />
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Benefits card */}
            <Reveal delay={0.15}>
              <div className="rounded-[var(--radius-xl2)] bg-card border border-line p-7 lg:w-80">
                <Eyebrow>Why clients choose it</Eyebrow>
                <ul className="mt-5 flex flex-col gap-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink">
                      <Check className="size-5 shrink-0 text-mint-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What to expect */}
      <section className="py-16 sm:py-20 bg-paper-2/50 border-y border-line">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <h2 className="font-display text-3xl text-spruce-950">
              What to expect
            </h2>
          </Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.expect.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} as="li">
                <div className="flex flex-col gap-3">
                  <span className="font-display text-4xl text-mint-500/50">
                    0{i + 1}
                  </span>
                  <h3 className="font-medium text-spruce-950">{step.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Good for */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <h2 className="font-display text-3xl text-spruce-950">
              Who it&apos;s a great fit for
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {service.goodFor.map((g) => (
                <span
                  key={g}
                  className="inline-flex items-center gap-2 rounded-full bg-card border border-line px-4 py-2.5 text-sm text-spruce-900"
                >
                  <span className="size-1.5 rounded-full bg-mint-500" />
                  {g}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Drip menu — services that offer the drip menu */}
      {service.hasDrips && (
        <section className="pb-4">
          <Container className="flex flex-col gap-8">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-display text-3xl text-spruce-950">
                  Explore the drip menu
                </h2>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-spruce-700 hover:text-spruce-900"
                >
                  See the full menu <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[flagshipDrip, ...standardDrips].slice(0, 6).map((d, i) => (
                <Reveal key={d.slug} delay={(i % 3) * 0.06}>
                  <DripCard drip={d} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="pb-20 pt-16">
        <Container className="max-w-3xl flex flex-col gap-8">
          <Reveal>
            <h2 className="font-display text-3xl text-spruce-950">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <FaqList items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBand title={`Book your ${service.name.toLowerCase()} today`} />
    </>
  );
}

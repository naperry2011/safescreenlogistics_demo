import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
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

  return (
    <>
      {/* Hero */}
      <section className="pt-14 pb-16 sm:pt-20">
        <Container>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-spruce-900"
            >
              <ArrowLeft className="size-4" /> All services
            </Link>
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="flex flex-col gap-5 max-w-2xl">
              <div>
                <h1 className="font-display text-5xl sm:text-7xl leading-[0.98] text-spruce-950">
                  {service.name}
                </h1>
              </div>
              <div>
                <p className="text-lg text-ink-soft leading-relaxed">
                  {service.intro}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <span className="inline-flex items-center gap-2 text-sm text-spruce-800">
                    <Tag className="size-4 text-mint-500" /> {service.startingPrice}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-spruce-800">
                    <Clock className="size-4 text-mint-500" /> {service.duration}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <ButtonLink href={`/book?service=${service.slug}`} size="lg">
                    Book this service
                  </ButtonLink>
                </div>
              </div>
            </div>

            {/* Benefits card */}
            <div>
              <div className="rounded-[var(--radius-xl2)] bg-card border border-line p-7 lg:w-80">
                <h2 className="font-semibold text-spruce-950">What you get</h2>
                <ul className="mt-5 flex flex-col gap-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink">
                      <Check className="size-5 shrink-0 text-mint-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Options: the named variants of this service */}
      {service.options && (
        <section className="pb-16 sm:pb-20">
          <Container>
            <div className="grid gap-px overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-line md:grid-cols-2">
              {service.options.map((o) => (
                <div key={o.name} className="flex flex-col gap-3 bg-card p-8 sm:p-10">
                  <h2 className="font-display text-3xl text-spruce-950">
                    {o.name}
                  </h2>
                  <p className="text-ink-soft leading-relaxed max-w-md">
                    {o.detail}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* What to expect */}
      <section className="py-16 sm:py-20 bg-paper-2/50 border-y border-line">
        <Container className="flex flex-col gap-12">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl leading-none text-spruce-950">
              What to expect
            </h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.expect.map((step, i) => (
              <li key={step.title}>
                <div className="flex flex-col gap-3">
                  <span className="font-display text-6xl leading-none text-mint-500">
                    {i + 1}
                  </span>
                  <h3 className="font-medium text-spruce-950">{step.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Good for */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl text-spruce-950">
              Who it is for
            </h2>
          </div>
          <div>
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
          </div>
        </Container>
      </section>

      {/* Drip menu, services that offer the drip menu */}
      {service.hasDrips && (
        <section className="pb-4">
          <Container className="flex flex-col gap-8">
            <div>
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
            </div>
            <div className="grid gap-x-16 md:grid-cols-2">
              {[flagshipDrip, ...standardDrips].slice(0, 6).map((d) => (
                <div key={d.slug}>
                  <DripCard drip={d} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="pb-20 pt-16">
        <Container className="max-w-3xl flex flex-col gap-8">
          <div>
            <h2 className="font-display text-3xl text-spruce-950">
              Common questions
            </h2>
          </div>
          <div>
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

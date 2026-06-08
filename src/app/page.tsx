import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  CalendarCheck,
  Star,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { articles } from "@/data/articles";

const steps = [
  {
    icon: Sparkles,
    title: "Choose your service",
    detail: "Pick IV therapy, a blood draw, or a wellness package built for your goals.",
  },
  {
    icon: MapPin,
    title: "Mobile or in-clinic",
    detail: "We come to your home, office, or gym — or you visit a partner location.",
  },
  {
    icon: CalendarCheck,
    title: "We handle the rest",
    detail: "A licensed clinician arrives on time. You relax and feel the difference.",
  },
];

const trust = [
  { icon: ShieldCheck, label: "Licensed clinicians" },
  { icon: Sparkles, label: "Sterile, single-use kits" },
  { icon: Clock, label: "On-time, every time" },
  { icon: MapPin, label: "Mobile or in-clinic" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* layered atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 500px at 80% -10%, rgba(52,199,182,0.20), transparent 60%), radial-gradient(700px 500px at 10% 10%, rgba(201,168,106,0.12), transparent 55%)",
          }}
          aria-hidden
        />
        <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="flex flex-col gap-7">
              <Reveal>
                <Eyebrow>Mobile IV Therapy &amp; Wellness</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display text-[2.7rem] leading-[1.02] sm:text-6xl text-spruce-950">
                  Clinical-grade
                  <br />
                  wellness,{" "}
                  <span className="relative inline-block text-spruce-700">
                    delivered
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="10"
                      viewBox="0 0 200 10"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M2 7C40 2 160 2 198 7"
                        stroke="var(--mint-500)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  to you.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
                  Professional IV hydration, mobile blood draws, and tailored
                  wellness packages — administered by licensed clinicians,
                  wherever and whenever works for you.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-3">
                  <ButtonLink href="/book" size="lg">
                    Book your visit <ArrowRight className="size-4" />
                  </ButtonLink>
                  <ButtonLink href="/services" variant="outline" size="lg">
                    Explore services
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-gold-500 text-gold-500" />
                    ))}
                    <span className="ml-1 text-sm text-ink-soft">
                      Loved by local clients
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Hero visual: a floating appointment card + drip motif */}
            <Reveal delay={0.15} className="relative">
              <div className="relative mx-auto max-w-md">
                <div
                  className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-2xl opacity-50"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(52,199,182,0.4), rgba(201,168,106,0.25))",
                  }}
                  aria-hidden
                />
                <div className="rounded-[2rem] bg-card border border-line p-6 shadow-[0_40px_80px_-40px_rgba(14,58,54,0.5)]">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-mint-500">Next available</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-spruce-700">
                      <span className="size-2 rounded-full bg-mint-500 animate-pulse" />
                      Today
                    </span>
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-mint-100 text-spruce-800">
                      <Sparkles className="size-7" />
                    </span>
                    <div>
                      <p className="font-display text-xl text-spruce-950">
                        IV Hydration Therapy
                      </p>
                      <p className="text-sm text-ink-soft">30–60 min · from $129</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {["2:30", "4:00", "5:30"].map((t, i) => (
                      <div
                        key={t}
                        className={
                          "rounded-xl border py-3 text-center text-sm " +
                          (i === 1
                            ? "border-mint-500 bg-mint-100 text-spruce-900 font-medium"
                            : "border-line text-ink-soft")
                        }
                      >
                        {t} PM
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-spruce-900 py-3.5 text-paper text-sm font-medium">
                    <CalendarCheck className="size-4" /> Confirm booking
                  </div>
                </div>
                {/* floating badge */}
                <div className="absolute -left-5 bottom-10 hidden sm:flex items-center gap-2 rounded-full bg-card border border-line px-4 py-2.5 shadow-lg">
                  <ShieldCheck className="size-5 text-mint-500" />
                  <span className="text-sm font-medium text-spruce-900">
                    Licensed &amp; insured
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* trust strip */}
        <div className="border-y border-line bg-paper-2/60">
          <Container className="py-5">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between">
              {trust.map((t) => (
                <li key={t.label} className="flex items-center gap-2 text-sm text-spruce-800">
                  <t.icon className="size-5 text-mint-500" />
                  {t.label}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SERVICES                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="What we offer"
              title="Care that comes to you"
              description="Three ways we help you feel your best — each delivered with clinical precision and genuine warmth."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* HOW IT WORKS                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-24 bg-spruce-950 text-paper">
        <Container className="flex flex-col gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title={<span className="text-paper">Three simple steps</span>}
              description={
                <span className="text-paper/60">
                  No waiting rooms, no friction. From booking to aftercare, we
                  make it effortless.
                </span>
              }
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl text-mint-400/40">
                      0{i + 1}
                    </span>
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-paper/10 text-mint-300">
                      <step.icon className="size-6" />
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-paper">{step.title}</h3>
                  <p className="text-paper/60 leading-relaxed">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TESTIMONIALS                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Client stories"
              title="Trusted across the community"
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* LEARN TEASER                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="pb-20 sm:pb-28">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="From the journal"
                title="Wellness, explained simply"
              />
              <Link
                href="/learn"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-spruce-700 hover:text-spruce-900"
              >
                Read the journal <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link
                  href={`/learn/${a.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-[var(--radius-xl2)] bg-card border border-line p-6 hover:border-mint-400 hover:-translate-y-1 transition-all"
                >
                  <span className="eyebrow text-mint-500">{a.category}</span>
                  <h3 className="font-display text-lg text-spruce-950 group-hover:text-spruce-700">
                    {a.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed flex-1">
                    {a.excerpt}
                  </p>
                  <span className="text-xs text-ink-soft/70 pt-2">
                    {a.readMinutes} min read
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

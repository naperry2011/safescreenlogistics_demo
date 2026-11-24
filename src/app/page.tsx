import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  MapPin,
  PackageCheck,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { CtaBand } from "@/components/cta-band";
import { DripCard } from "@/components/drip-card";
import { SpecimenRack } from "@/components/specimen-rack";
import { LiquidFill } from "@/components/fluid/liquid-fill";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { articles } from "@/data/articles";
import { flagshipDrip, standardDrips } from "@/data/drips";

const steps = [
  {
    title: "Choose your service",
    detail: "Pick testing, a blood draw, or an IV drip. Not sure which? Call and we will sort it out.",
  },
  {
    title: "Tell us where",
    detail: "We come to your home, office, or job site, or you visit a partner location.",
  },
  {
    title: "We handle the rest",
    detail: "A licensed clinician arrives on time with everything needed, paperwork included.",
  },
];

const trust = [
  { icon: ShieldCheck, label: "Licensed clinicians" },
  { icon: PackageCheck, label: "Sterile, single-use kits" },
  { icon: Clock, label: "On time, every time" },
  { icon: MapPin, label: "Mobile or in-clinic" },
];

/** Tube-cap color that marks each service row, matching the hero vessels. */
const serviceMark: Record<string, string> = {
  "drug-testing": "var(--amber-400)",
  "blood-draws": "var(--crimson-500)",
  "iv-therapy": "var(--mint-400)",
};

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO: the collection kit on a shelf                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="px-3 pt-2 sm:px-5">
        <div className="relative overflow-hidden rounded-[2rem] bg-spruce-950 text-paper">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 70% at 78% 100%, rgba(52,199,182,0.22), transparent 70%), radial-gradient(40% 50% at 55% 110%, rgba(141,123,208,0.2), transparent 70%)",
            }}
          />
          <Container className="relative grid gap-10 pt-14 pb-10 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-x-14 lg:pb-16">
            <h1 className="font-display text-[2.9rem] leading-[0.95] sm:text-7xl lg:col-span-2 lg:text-[5.5rem]">
              Testing, blood draws and IV therapy that come to you.
            </h1>
            <div className="flex flex-col gap-7 lg:pb-6">
              <p className="max-w-xl text-lg leading-relaxed text-paper/70">
                DOT and non-DOT testing, annual and insurance blood draws, and
                IV hydration, done at your home or workplace by licensed
                clinicians.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <ButtonLink href="/book" variant="secondary" size="lg">
                  Book a visit
                </ButtonLink>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-paper/25 px-6 text-paper transition-colors hover:bg-paper/10"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </div>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-2 self-start break-all text-paper/65 transition-colors hover:text-mint-300"
              >
                <Mail className="size-4 shrink-0" /> {site.email}
              </a>
            </div>

            <SpecimenRack />
          </Container>
        </div>

        <Container className="py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm text-spruce-800">
                <t.icon className="size-5 text-mint-500" />
                {t.label}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SERVICES: one row per service                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <h2 className="font-display text-4xl leading-none text-spruce-950 sm:text-6xl">
            What we do
          </h2>
          <ul className="border-t border-spruce-900/15">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-spruce-900/15">
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-4 py-8 transition-colors hover:bg-card sm:px-4 lg:grid-cols-[1.1fr_1fr_auto] lg:items-center lg:gap-10 lg:py-10"
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="h-10 w-3 shrink-0 rounded-full"
                      style={{ background: serviceMark[s.slug] }}
                    />
                    <span className="font-display text-3xl leading-[1.05] text-spruce-950 sm:text-4xl">
                      {s.name}
                    </span>
                  </span>
                  <span className="flex flex-col gap-3">
                    <span className="leading-relaxed text-ink-soft">{s.summary}</span>
                    <span className="flex flex-wrap gap-2">
                      {(s.options?.map((o) => o.name) ?? ["11 drip formulas", s.startingPrice]).map(
                        (label) => (
                          <span
                            key={label}
                            className="rounded-full bg-paper-2 px-3 py-1 text-sm font-medium text-spruce-800"
                          >
                            {label}
                          </span>
                        ),
                      )}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="hidden size-8 text-spruce-900/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint-500 lg:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* DRIP MENU TEASER (scroll-driven liquid fill)                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="pb-8">
        <Container className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <LiquidFill caption="Tailored to you" />
          <div className="flex flex-col gap-6">
            <SectionHeading
              title="An IV formula for every goal"
              description="Energy, recovery, beauty, calm, immunity. Pick the drip that fits the moment, or let our clinicians recommend one."
            />
            <div className="grid gap-x-10 sm:grid-cols-2">
              {[flagshipDrip, ...standardDrips.slice(0, 3)].map((d) => (
                <DripCard key={d.slug} drip={d} />
              ))}
            </div>
            <ButtonLink href="/menu" variant="outline" size="lg" className="self-start">
              See the full drip menu <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* HOW IT WORKS                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mt-16 bg-spruce-950 py-20 text-paper sm:py-28">
        <Container className="relative flex flex-col gap-14">
          <SectionHeading
            title={<span className="text-paper">Three steps, no waiting room</span>}
            description={
              <span className="text-paper/60">
                From booking to follow-up, we keep it simple.
              </span>
            }
          />
          <ol className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title}>
                <div className="flex flex-col gap-4">
                  <span className="font-display text-8xl leading-none text-mint-400">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-2xl text-paper">{step.title}</h3>
                  <p className="leading-relaxed text-paper/60">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TESTIMONIALS                                                     */}
      {/* ---------------------------------------------------------------- */}
      {testimonials.length > 0 && (
        <section className="pt-20 sm:pt-28">
          <Container className="flex flex-col gap-12">
            <SectionHeading title="What clients say" />
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* LEARN TEASER                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 sm:py-28">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="Plain answers before your visit" />
            <Link
              href="/learn"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-spruce-700 hover:text-spruce-900"
            >
              Read the journal <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="border-t border-spruce-900/15">
            {articles.slice(0, 3).map((a) => (
              <li key={a.slug} className="border-b border-spruce-900/15">
                <Link
                  href={`/learn/${a.slug}`}
                  className="group grid gap-2 py-6 transition-colors hover:bg-card sm:px-4 md:grid-cols-[1fr_1.2fr_auto] md:items-baseline md:gap-10"
                >
                  <span className="font-display text-xl leading-snug text-spruce-950 group-hover:text-spruce-700">
                    {a.title}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">{a.excerpt}</span>
                  <span className="text-sm text-ink-soft/70">{a.readMinutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

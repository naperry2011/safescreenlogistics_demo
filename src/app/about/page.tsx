import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Sparkles, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Safe Screen Logistics brings clinical-grade wellness — IV therapy, a tailored drip menu, and blood draws — to you, with safety and care at the center.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    detail:
      "Licensed clinicians, sterile single-use equipment, and careful protocols on every visit.",
  },
  {
    icon: HeartHandshake,
    title: "Genuine care",
    detail:
      "We treat every client like a person, not an appointment — warm, attentive, unhurried.",
  },
  {
    icon: Sparkles,
    title: "Clinical quality",
    detail:
      "Professional standards you'd expect in a clinic, delivered wherever you are.",
  },
  {
    icon: Clock,
    title: "Respect for your time",
    detail:
      "On-time arrivals, effortless booking, and no waiting rooms — ever.",
  },
];

const stats = [
  { value: "100%", label: "Licensed clinicians" },
  { value: "30–60", label: "Minute sessions" },
  { value: "7 days", label: "A week availability" },
  { value: "0", label: "Waiting rooms" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(700px 400px at 20% 0%, rgba(52,199,182,0.16), transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Our story"
              title="Wellness should feel effortless"
              description="Safe Screen Logistics was built on a simple belief: getting professional, clinical-grade care shouldn't mean waiting rooms, friction, or guesswork."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-5 text-lg text-ink leading-relaxed">
              <p>
                We bring IV hydration therapy — through a tailored drip menu —
                and mobile blood draws directly to the people who need them —
                busy professionals, athletes, and anyone who values their time
                and their health.
              </p>
              <p>
                Every service is delivered by licensed clinicians who lead with
                safety and treat each visit with genuine care. The result is
                wellness that fits seamlessly into your life, not the other way
                around.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl2)] bg-line border border-line sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card p-7 text-center">
                  <p className="font-display text-4xl text-spruce-900">{s.value}</p>
                  <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading eyebrow="What we stand for" title="Our values" align="center" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius-xl2)] bg-card border border-line p-6">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-mint-100 text-spruce-800">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg text-spruce-950">{v.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{v.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

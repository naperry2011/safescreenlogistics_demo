import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "Safe Screen Logistics brings DOT and non-DOT testing, blood draws, and IV therapy to you, with safety and care at the center.",
};

const values = [
  {
    title: "Safety first",
    detail:
      "Licensed clinicians, sterile single-use equipment, and careful protocols on every visit.",
  },
  {
    title: "Paperwork done right",
    detail:
      "Labels, custody forms, and lab orders are checked before we leave, so results are not held up.",
  },
  {
    title: "People, not appointments",
    detail:
      "We take the time to explain what we are doing and answer questions before we start.",
  },
  {
    title: "Respect for your time",
    detail:
      "We come to you and arrive when we say we will. Nobody sits in a waiting room.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <SectionHeading as="h1" title="Clinical work, done where you are" />
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink lg:pt-3">
            <p>
              Safe Screen Logistics is a mobile service. We handle DOT and
              non-DOT testing for employers, annual and insurance blood draws,
              and IV hydration therapy, and we do it at your home or workplace.
            </p>
            <p>
              Getting a test or a blood draw should not cost half a day. A
              licensed clinician comes to you with everything needed, does the
              work carefully, and takes care of the paperwork afterward.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container className="flex flex-col gap-10">
          <h2 className="font-display text-4xl leading-none text-spruce-950 sm:text-5xl">
            How we work
          </h2>
          <dl className="grid border-t-2 border-spruce-950 md:grid-cols-2 md:gap-x-16">
            {values.map((v) => (
              <div key={v.title} className="border-b border-spruce-900/15 py-8">
                <dt className="font-display text-2xl text-spruce-950">{v.title}</dt>
                <dd className="mt-2 max-w-md leading-relaxed text-ink-soft">{v.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

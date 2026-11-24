import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Safe Screen Logistics. Call ${site.phone} or email ${site.email}.`,
};

export default function ContactPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-24">
      <Container>
        <SectionHeading
          as="h1"
          title="Call, email, or send a note"
          description="Ask about DOT and non-DOT testing, blood draws, IV therapy, or setting up visits for a whole team."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="flex flex-col border-t-2 border-spruce-950">
            <div className="flex flex-col gap-1 border-b border-spruce-900/15 py-7">
              <span className="text-sm text-ink-soft">Call</span>
              <a
                href={site.phoneHref}
                className="font-display text-5xl leading-none text-spruce-950 transition-colors hover:text-spruce-600 sm:text-6xl"
              >
                {site.phone}
              </a>
            </div>
            <div className="flex flex-col gap-1 border-b border-spruce-900/15 py-7">
              <span className="text-sm text-ink-soft">Email</span>
              <a
                href={site.emailHref}
                className="break-all text-xl font-semibold text-spruce-950 underline decoration-mint-400 decoration-2 underline-offset-4 hover:text-spruce-600 sm:text-2xl"
              >
                {site.email}
              </a>
            </div>
            <div className="flex flex-col gap-3 border-b border-spruce-900/15 py-7">
              <span className="text-sm text-ink-soft">Hours</span>
              <dl className="flex flex-col gap-1.5">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-ink-soft">{h.day}</dt>
                    <dd className="font-semibold text-spruce-950">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="py-7 text-ink-soft">
              Serving the greater Indianapolis area, with mobile visits and
              partner locations available.
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

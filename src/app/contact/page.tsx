import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Safe Screen Logistics. Call ${site.phone} or email ${site.email}.`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 400px at 80% 0%, rgba(52,199,182,0.14), transparent 60%)",
        }}
        aria-hidden
      />
      <Container>
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's talk wellness"
            description="Questions, custom plans, or ready to book? We'd love to hear from you."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Info */}
          <Reveal>
            <div className="flex flex-col gap-4">
              <InfoCard icon={<Phone className="size-5" />} label="Call us" value={site.phone} href={site.phoneHref} />
              <InfoCard icon={<Mail className="size-5" />} label="Email" value={site.email} href={site.emailHref} />
              <div className="rounded-[var(--radius-xl2)] bg-card border border-line p-6 flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 text-spruce-900">
                  <Clock className="size-5 text-mint-500" />
                  <span className="font-medium">Hours</span>
                </span>
                <ul className="flex flex-col gap-1.5 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="text-ink-soft">{h.day}</span>
                      <span className="text-spruce-950">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-xl2)] bg-paper-2/50 border border-line p-6 flex items-center gap-3 text-sm text-ink-soft">
                <MapPin className="size-5 text-mint-500 shrink-0" />
                Serving the greater Indianapolis area — mobile visits and partner
                locations available.
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-[var(--radius-xl2)] bg-card border border-line p-6 hover:border-mint-400 transition-colors"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-mint-100 text-spruce-800 group-hover:bg-mint-500 group-hover:text-spruce-950 transition-colors">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs text-ink-soft">{label}</span>
        <span className="text-spruce-950 font-medium">{value}</span>
      </span>
    </a>
  );
}

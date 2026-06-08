import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile IV hydration therapy, professional blood draws, and tailored wellness packages from Safe Screen Logistics.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24">
        <Container>
          <Reveal>
            <SectionHeading
              as="h1"
              eyebrow="Services"
              title="Clinical wellness, on your terms"
              description="Every service is delivered by licensed clinicians using sterile, single-use equipment — at your home, office, or a partner location."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

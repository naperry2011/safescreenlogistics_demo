import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BookingWizard } from "@/components/booking-wizard";

export const metadata: Metadata = {
  title: "Book a Visit",
  description:
    "Book DOT or non-DOT testing, a blood draw, or mobile IV therapy with Safe Screen Logistics in a couple of minutes.",
};

export default function BookPage() {
  return (
    <section className="pt-14 pb-24 sm:pt-20">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          title="Book a visit"
          description="A few quick steps. We will confirm the details with you and take care of the rest."
          className="mb-10"
        />
        <Suspense
          fallback={
            <div className="h-96 rounded-[var(--radius-xl2)] bg-card border border-line animate-pulse" />
          }
        >
          <BookingWizard />
        </Suspense>
      </Container>
    </section>
  );
}

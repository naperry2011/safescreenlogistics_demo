import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { BookingWizard } from "@/components/booking-wizard";

export const metadata: Metadata = {
  title: "Book a Visit",
  description:
    "Book mobile IV therapy, a specific drip, or a blood draw with Safe Screen Logistics in just a couple of minutes.",
};

export default function BookPage() {
  return (
    <section className="relative overflow-hidden pt-14 pb-24 sm:pt-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 400px at 50% -5%, rgba(52,199,182,0.16), transparent 60%)",
        }}
        aria-hidden
      />
      <Container className="max-w-3xl">
        <div className="text-center flex flex-col items-center gap-3 mb-10">
          <Eyebrow>Book your visit</Eyebrow>
          <h1 className="font-display text-4xl sm:text-5xl text-spruce-950">
            Let&apos;s get you scheduled
          </h1>
          <p className="text-ink-soft max-w-md">
            A couple of quick steps. We&apos;ll confirm the details and take
            care of everything else.
          </p>
        </div>
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

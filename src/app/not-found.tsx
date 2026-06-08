import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section-heading";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container className="max-w-xl text-center flex flex-col items-center gap-5">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="font-display text-6xl text-spruce-950">Lost the drip</h1>
        <p className="text-ink-soft text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to feeling your best.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/book" variant="outline">
            Book a visit
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

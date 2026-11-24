import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container className="flex max-w-2xl flex-col gap-6">
        <h1 className="font-display text-6xl leading-none text-spruce-950 sm:text-7xl">
          That page is not here
        </h1>
        <p className="text-lg text-ink-soft">
          The link may be old, or the page may have moved. The home page has
          everything we offer.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <ButtonLink href="/">Go to the home page</ButtonLink>
          <ButtonLink href="/book" variant="outline">
            Book a visit
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

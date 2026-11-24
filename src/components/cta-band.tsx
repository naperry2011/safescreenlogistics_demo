import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function CtaBand({
  title = "Tell us where and when.",
  subtitle = "Book online in a couple of minutes, or call or email and we will set it up with you.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Container>
      <div className="rounded-[var(--radius-xl2)] bg-spruce-950 px-8 py-14 text-paper sm:px-14 sm:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <h2 className="font-display text-4xl leading-[1.02] sm:text-6xl">{title}</h2>
            <p className="text-lg text-paper/70">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
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
              className="inline-flex items-center gap-2 break-all text-paper/75 transition-colors hover:text-mint-300"
            >
              <Mail className="size-4 shrink-0" /> {site.email}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

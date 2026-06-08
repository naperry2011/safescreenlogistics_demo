import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";

export function Footer() {
  return (
    <footer className="bg-spruce-950 text-paper/80 mt-24">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-paper/60 max-w-xs">
              {site.tagline} Professional mobile IV therapy, a tailored drip
              menu, and blood draws — on your schedule.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-mint-300">
                <Phone className="size-4" /> {site.phone}
              </a>
              <a href={site.emailHref} className="inline-flex items-center gap-2 hover:text-mint-300">
                <Mail className="size-4" /> {site.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className="eyebrow text-mint-400">Services</h3>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-sm text-paper/70 hover:text-paper"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className="eyebrow text-mint-400">Company</h3>
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-paper/70 hover:text-paper"
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="eyebrow text-mint-400">Wellness updates</h3>
            <p className="text-sm text-paper/60">
              Tips, offers, and new services. No spam — unsubscribe anytime.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/50">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-mint-300">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

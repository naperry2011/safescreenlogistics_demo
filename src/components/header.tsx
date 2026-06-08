"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Menu closes via onClick on each link (see below), avoiding a setState-in-effect.
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line shadow-[0_4px_24px_-16px_rgba(12,31,29,0.5)]"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {site.nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm rounded-full transition-colors",
                  active
                    ? "text-spruce-900 font-medium"
                    : "text-ink-soft hover:text-spruce-900 hover:bg-spruce-800/[0.05]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-spruce-900 px-3"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <ButtonLink href="/book" size="sm">
            Book Now
          </ButtonLink>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center size-11 rounded-full text-spruce-900 hover:bg-spruce-800/[0.06]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height] duration-300 bg-paper border-b border-line",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <Container className="py-4 flex flex-col gap-1">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-xl text-ink-soft hover:bg-spruce-800/[0.05] hover:text-spruce-900"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-line">
            <ButtonLink href="/book" className="flex-1" size="md" onClick={() => setOpen(false)}>
              Book Now
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center size-11 rounded-full border border-line text-spruce-900"
              aria-label={`Call ${site.phone}`}
            >
              <Phone className="size-5" />
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}

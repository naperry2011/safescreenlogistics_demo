"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left group"
            >
              <span className="font-display text-lg text-spruce-950 group-hover:text-spruce-700 transition-colors">
                {item.q}
              </span>
              <span
                className={cn(
                  "shrink-0 inline-flex items-center justify-center size-8 rounded-full border border-line text-spruce-800 transition-transform duration-300",
                  isOpen && "rotate-45 bg-mint-500 border-mint-500 text-spruce-950",
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="text-ink-soft leading-relaxed max-w-2xl pr-12">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

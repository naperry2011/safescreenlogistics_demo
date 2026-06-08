"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ variant = "footer" }: { variant?: "footer" | "panel" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setMessage(data.message ?? "You're subscribed!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p
        className={cn(
          "flex items-center gap-2 text-sm",
          variant === "footer" ? "text-mint-300" : "text-mint-500",
        )}
      >
        <Check className="size-4" /> {message}
      </p>
    );
  }

  const dark = variant === "footer";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div
        className={cn(
          "flex items-center rounded-full p-1 pl-4 border transition-colors",
          dark
            ? "bg-spruce-950/40 border-paper/15 focus-within:border-mint-400"
            : "bg-card border-line focus-within:border-mint-400",
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className={cn(
            "flex-1 bg-transparent outline-none text-sm placeholder:text-current/40",
            dark ? "text-paper" : "text-ink",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center size-9 rounded-full bg-mint-500 text-spruce-950 hover:bg-mint-400 transition-colors disabled:opacity-60"
          aria-label="Subscribe"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <ArrowRight className="size-4" />
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-500">{message}</p>
      )}
    </form>
  );
}

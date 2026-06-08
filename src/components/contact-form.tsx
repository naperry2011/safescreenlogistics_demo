"use client";

import { useState } from "react";
import { Loader2, Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-paper/40 px-4 h-12 text-sm text-ink outline-none focus:border-mint-400 focus:bg-card transition-colors";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      setFeedback(data.message);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-xl2)] bg-card border border-line p-10 text-center flex flex-col items-center gap-4">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-mint-100 text-spruce-800">
          <Check className="size-7" />
        </span>
        <h3 className="font-display text-2xl text-spruce-950">Message sent</h3>
        <p className="text-ink-soft max-w-sm">{feedback}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius-xl2)] bg-card border border-line p-7 sm:p-8 flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-ink-soft">Name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-ink-soft">Phone (optional)</span>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputCls}
            placeholder="(765) 555-0123"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink-soft">Email</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputCls}
          placeholder="you@example.com"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink-soft">How can we help?</span>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(inputCls, "min-h-32 py-3 resize-y")}
          placeholder="Tell us what you're looking for…"
        />
      </label>
      {status === "error" && <p className="text-sm text-red-500">{feedback}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-spruce-800 h-12 px-6 text-paper text-sm font-medium hover:bg-spruce-700 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Send message
          </>
        )}
      </button>
    </form>
  );
}

"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ChevronLeft,
  Home,
  Building2,
  Loader2,
  CalendarCheck,
  PartyPopper,
} from "lucide-react";
import { services } from "@/data/services";
import { drips, getDrip } from "@/data/drips";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Mode = "mobile" | "clinic";

const STEPS = ["Service", "Where", "Time", "Details", "Confirm"] as const;

const CLINICS = [
  "Downtown Wellness Center — Indianapolis",
  "Northside Health Suite — Carmel",
  "Eastgate Clinic — Fishers",
];

/** Generate the next 7 calendar days (label + ISO date). Client-side only. */
function useUpcomingDays() {
  return useMemo(() => {
    const days: { iso: string; weekday: string; day: string; month: string }[] = [];
    const base = new Date();
    for (let i = 1; i <= 7; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      days.push({
        iso: d.toISOString().slice(0, 10),
        weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
        day: d.toLocaleDateString("en-US", { day: "numeric" }),
        month: d.toLocaleDateString("en-US", { month: "short" }),
      });
    }
    return days;
  }, []);
}

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "12:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

export function BookingWizard() {
  const searchParams = useSearchParams();
  const days = useUpcomingDays();

  const initialService =
    services.find((s) => s.slug === searchParams.get("service"))?.slug ??
    services[0].slug;
  const initialDrip = getDrip(searchParams.get("drip") ?? "")?.slug ?? "";

  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [dripSlug, setDripSlug] = useState(initialDrip);
  const [mode, setMode] = useState<Mode>("mobile");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState(CLINICS[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<{ confirmationId?: string; message?: string }>({});
  const [error, setError] = useState("");

  const service = services.find((s) => s.slug === serviceSlug)!;
  const drip = getDrip(dripSlug);
  const showDripPicker = serviceSlug === "iv-therapy";

  const canAdvance = useMemo(() => {
    switch (step) {
      case 0:
        return !!serviceSlug;
      case 1:
        return mode === "mobile" ? address.trim().length > 4 : !!location;
      case 2:
        return !!date && !!time;
      case 3:
        return (
          form.name.trim() &&
          /\S+@\S+\.\S+/.test(form.email) &&
          form.phone.trim().length >= 7
        );
      default:
        return true;
    }
  }, [step, serviceSlug, mode, address, location, date, time, form]);

  async function submit() {
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceSlug,
          drip: showDripPicker && drip ? drip.name : undefined,
          mode,
          address: mode === "mobile" ? address : undefined,
          location: mode === "clinic" ? location : undefined,
          date,
          time,
          ...form,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setResult(data);
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-xl2)] bg-card border border-line p-10 sm:p-14 text-center flex flex-col items-center gap-5">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-mint-100 text-spruce-800">
          <PartyPopper className="size-8" />
        </span>
        <h2 className="font-display text-3xl text-spruce-950">You&apos;re all set!</h2>
        <p className="text-ink-soft max-w-md">{result.message}</p>
        {result.confirmationId && (
          <p className="eyebrow text-spruce-700">
            Reference: {result.confirmationId}
          </p>
        )}
        <div className="mt-2 w-full max-w-sm rounded-2xl bg-paper-2/60 border border-line p-5 text-left text-sm flex flex-col gap-2">
          <Row label="Service" value={service.name} />
          {showDripPicker && drip && <Row label="Drip" value={drip.name} />}
          <Row label="Where" value={mode === "mobile" ? address : location} />
          <Row label="When" value={`${date} · ${time}`} />
          <Row label="Name" value={form.name} />
        </div>
        <ButtonLink href="/" variant="outline" className="mt-3">
          Back to home
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-xl2)] bg-card border border-line overflow-hidden">
      {/* Stepper */}
      <div className="flex items-center gap-1 border-b border-line px-5 py-4 sm:px-8 overflow-x-auto">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-1 shrink-0">
            <div
              className={cn(
                "flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors",
                i === step
                  ? "bg-spruce-900 text-paper"
                  : i < step
                    ? "text-spruce-700"
                    : "text-ink-soft/50",
              )}
            >
              <span
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-full text-xs",
                  i < step ? "bg-mint-500 text-spruce-950" : "border border-current",
                )}
              >
                {i < step ? <Check className="size-3" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="h-px w-4 bg-line sm:w-6" aria-hidden />
            )}
          </div>
        ))}
      </div>

      <div className="p-6 sm:p-10">
        {/* STEP 0 — service (+ drip picker for IV therapy) */}
        {step === 0 && (
          <Fieldset legend="Which service would you like?">
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon;
                const active = s.slug === serviceSlug;
                return (
                  <button
                    key={s.slug}
                    onClick={() => {
                      setServiceSlug(s.slug);
                      if (s.slug !== "iv-therapy") setDripSlug("");
                    }}
                    className={cn(
                      "flex flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all",
                      active
                        ? "border-mint-500 bg-mint-100/50 ring-1 ring-mint-500"
                        : "border-line hover:border-mint-400",
                    )}
                  >
                    <Icon className="size-7 text-spruce-800" />
                    <span className="font-medium text-spruce-950">{s.name}</span>
                    <span className="text-xs text-ink-soft">{s.startingPrice}</span>
                  </button>
                );
              })}
            </div>

            {showDripPicker && (
              <div className="mt-6">
                <p className="eyebrow text-ink-soft mb-3">
                  Choose your drip <span className="normal-case tracking-normal text-ink-soft/70">(optional — we can recommend one)</span>
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {drips.map((d) => {
                    const active = d.slug === dripSlug;
                    return (
                      <button
                        key={d.slug}
                        onClick={() => setDripSlug(active ? "" : d.slug)}
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                          active
                            ? "border-mint-500 bg-mint-100/50 ring-1 ring-mint-500"
                            : "border-line hover:border-mint-400",
                        )}
                      >
                        <span className="flex items-center gap-2.5">
                          <d.icon className="size-5 text-spruce-800 shrink-0" />
                          <span className="text-sm text-spruce-950">{d.name}</span>
                        </span>
                        <span className="text-xs text-ink-soft shrink-0">{d.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </Fieldset>
        )}

        {/* STEP 1 — where */}
        {step === 1 && (
          <Fieldset legend="Where should we meet you?">
            <div className="grid gap-3 sm:grid-cols-2">
              <ModeCard
                active={mode === "mobile"}
                onClick={() => setMode("mobile")}
                icon={<Home className="size-6" />}
                title="Come to me"
                detail="A clinician visits your home, office, or gym."
              />
              <ModeCard
                active={mode === "clinic"}
                onClick={() => setMode("clinic")}
                icon={<Building2 className="size-6" />}
                title="Visit a clinic"
                detail="Stop by one of our partner locations."
              />
            </div>
            <div className="mt-6">
              {mode === "mobile" ? (
                <Field label="Your address">
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street, city, ZIP"
                    className={inputCls}
                  />
                </Field>
              ) : (
                <Field label="Choose a location">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={inputCls}
                  >
                    {CLINICS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
              )}
            </div>
          </Fieldset>
        )}

        {/* STEP 2 — time */}
        {step === 2 && (
          <Fieldset legend="Pick a day and time">
            <p className="eyebrow text-ink-soft mb-3">Select a day</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {days.map((d) => (
                <button
                  key={d.iso}
                  onClick={() => setDate(d.iso)}
                  className={cn(
                    "flex shrink-0 flex-col items-center gap-0.5 rounded-2xl border px-4 py-3 transition-all",
                    date === d.iso
                      ? "border-mint-500 bg-mint-100/60 ring-1 ring-mint-500"
                      : "border-line hover:border-mint-400",
                  )}
                >
                  <span className="text-xs text-ink-soft">{d.weekday}</span>
                  <span className="font-display text-xl text-spruce-950">{d.day}</span>
                  <span className="text-xs text-ink-soft">{d.month}</span>
                </button>
              ))}
            </div>
            <p className="eyebrow text-ink-soft mt-6 mb-3">Available times</p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  disabled={!date}
                  className={cn(
                    "rounded-xl border py-2.5 text-sm transition-all disabled:opacity-40",
                    time === t
                      ? "border-mint-500 bg-mint-100/60 text-spruce-900 font-medium"
                      : "border-line text-ink-soft hover:border-mint-400",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </Fieldset>
        )}

        {/* STEP 3 — details */}
        {step === 3 && (
          <Fieldset legend="Your details">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                  placeholder="Jordan Avery"
                />
              </Field>
              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputCls}
                  placeholder="(765) 555-0123"
                />
              </Field>
              <Field label="Email" className="sm:col-span-2">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputCls}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Anything we should know? (optional)" className="sm:col-span-2">
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className={cn(inputCls, "min-h-24 py-3 resize-y")}
                  placeholder="Goals, accessibility needs, parking notes…"
                />
              </Field>
            </div>
          </Fieldset>
        )}

        {/* STEP 4 — confirm */}
        {step === 4 && (
          <Fieldset legend="Review &amp; confirm">
            <div className="rounded-2xl bg-paper-2/50 border border-line p-6 flex flex-col gap-3">
              <Row label="Service" value={service.name} />
              {showDripPicker && drip && <Row label="Drip" value={`${drip.name} · ${drip.price}`} />}
              <Row label="Where" value={mode === "mobile" ? `Mobile · ${address}` : location} />
              <Row label="When" value={`${date} · ${time}`} />
              <Row label="Name" value={form.name} />
              <Row label="Email" value={form.email} />
              <Row label="Phone" value={form.phone} />
              {form.notes && <Row label="Notes" value={form.notes} />}
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              We&apos;ll confirm availability and finalize payment by phone or
              email. No charge is made now.
            </p>
            {status === "error" && (
              <p className="mt-3 text-sm text-red-500">{error}</p>
            )}
          </Fieldset>
        )}

        {/* Nav */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-spruce-900 disabled:opacity-0"
          >
            <ChevronLeft className="size-4" /> Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canAdvance}
              className="inline-flex items-center gap-2 rounded-full bg-spruce-800 px-7 h-12 text-paper text-sm font-medium hover:bg-spruce-700 transition-colors disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-mint-500 px-7 h-12 text-spruce-950 text-sm font-medium hover:bg-mint-400 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Booking…
                </>
              ) : (
                <>
                  <CalendarCheck className="size-4" /> Confirm booking
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-paper/40 px-4 h-12 text-sm text-ink outline-none focus:border-mint-400 focus:bg-card transition-colors";

function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="font-display text-2xl text-spruce-950 mb-6">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-sm text-ink-soft">{label}</span>
      {children}
    </label>
  );
}

function ModeCard({
  active,
  onClick,
  icon,
  title,
  detail,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-start gap-2 rounded-2xl border p-5 text-left transition-all",
        active
          ? "border-mint-500 bg-mint-100/50 ring-1 ring-mint-500"
          : "border-line hover:border-mint-400",
      )}
    >
      <span className="text-spruce-800">{icon}</span>
      <span className="font-medium text-spruce-950">{title}</span>
      <span className="text-sm text-ink-soft">{detail}</span>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-ink-soft">{label}</span>
      <span className="text-spruce-950 font-medium text-right">{value}</span>
    </div>
  );
}

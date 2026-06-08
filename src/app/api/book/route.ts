import { NextResponse } from "next/server";
import { z } from "zod";

const BookingSchema = z.object({
  serviceSlug: z.string().min(1),
  drip: z.string().optional(),
  mode: z.enum(["mobile", "clinic"]),
  address: z.string().optional(),
  location: z.string().optional(),
  date: z.string().min(1),
  time: z.string().min(1),
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = BookingSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid booking details." },
      { status: 400 },
    );
  }

  // --- MOCK ---------------------------------------------------------------
  // TODO(integration): create the appointment in a real scheduling backend
  // (e.g. Cal.com API), trigger a deposit/payment via Stripe, and send a
  // confirmation email (e.g. Resend). For now we simulate success.
  await new Promise((r) => setTimeout(r, 700));
  const confirmationId =
    "SSL-" + parsed.data.email.slice(0, 2).toUpperCase() + parsed.data.date.replace(/\D/g, "").slice(-4);
  // ------------------------------------------------------------------------

  return NextResponse.json({
    ok: true,
    confirmationId,
    message:
      "Your request is in! Our team will reach out shortly to confirm your appointment and finalize payment.",
  });
}

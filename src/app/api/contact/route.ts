import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  message: z.string().min(5, "Please tell us a little more."),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = ContactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid details." },
      { status: 400 },
    );
  }

  // --- MOCK ---------------------------------------------------------------
  // TODO(integration): forward this message to a real inbox / CRM and send
  // an auto-reply (e.g. Resend, or a Vercel + email provider integration).
  await new Promise((r) => setTimeout(r, 600));
  // ------------------------------------------------------------------------

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out! We'll get back to you within one business day.",
  });
}

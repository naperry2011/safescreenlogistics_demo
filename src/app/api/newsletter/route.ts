import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Schema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid email." },
      { status: 400 },
    );
  }

  // --- MOCK ---------------------------------------------------------------
  // TODO(integration): add this address to a real list (e.g. Mailchimp,
  // Resend audiences, ConvertKit) and trigger a welcome email.
  await new Promise((r) => setTimeout(r, 500));
  // ------------------------------------------------------------------------

  return NextResponse.json({
    ok: true,
    message: "You're on the list! Watch your inbox for wellness updates.",
  });
}

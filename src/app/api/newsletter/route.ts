import { NextResponse } from "next/server";
import { newsletterSchema, registerNewsletter } from "@/lib/newsletter";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = newsletterSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message ?? "Invalid email address.",
      },
      { status: 400 },
    );
  }

  await registerNewsletter(parsed.data.email);

  return NextResponse.json({
    message: "You're subscribed. We'll send the next growth note your way.",
  });
}

import { NextResponse } from "next/server";
import { contactSchema, handleLeadSubmission } from "@/lib/contact";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
      },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({
      message: "Thanks. We received your request.",
    });
  }

  await handleLeadSubmission(parsed.data);

  return NextResponse.json({
    message:
      "Thanks. Your inquiry is in. We will follow up with a recommended next step soon.",
  });
}

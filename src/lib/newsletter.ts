import { z } from "zod";
import { Resend } from "resend";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export async function registerNewsletter(email: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationTo = process.env.LEAD_NOTIFICATION_TO;

  if (apiKey && notificationTo) {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Nexora Digital <hello@nexoradigital.com>",
      to: [notificationTo],
      subject: `New Nexora newsletter subscriber: ${email}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>Source: website footer newsletter form.</p>`,
    });
  } else {
    console.info("[newsletter] subscriber captured", email);
  }
}

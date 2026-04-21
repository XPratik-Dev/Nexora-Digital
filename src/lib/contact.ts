import { Resend } from "resend";
import { z } from "zod";
import { budgetRanges } from "@/data/site";
import { services } from "@/data/services";

const serviceSlugs = services.map((service) => service.slug) as [string, ...string[]];
const budgetOptions = budgetRanges as [string, ...string[]];

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Please enter your company name."),
  serviceNeeded: z.enum(serviceSlugs),
  budgetRange: z.enum(budgetOptions),
  goals: z.string().max(1200).optional(),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

async function sendLeadEmail(input: ContactInput) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationTo = process.env.LEAD_NOTIFICATION_TO;

  if (!resendApiKey || !notificationTo) {
    return false;
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Nexora Digital <hello@nexoradigital.com>",
    to: [notificationTo],
    subject: `New Nexora lead: ${input.company}`,
    html: `
      <h1>New website lead</h1>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Company:</strong> ${input.company}</p>
      <p><strong>Service:</strong> ${input.serviceNeeded}</p>
      <p><strong>Budget:</strong> ${input.budgetRange}</p>
      <p><strong>Goals:</strong> ${input.goals || "Not provided"}</p>
    `,
  });

  return true;
}

async function saveLeadToNotion(input: ContactInput) {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!token || !databaseId) {
    return false;
  }

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [{ text: { content: input.name } }],
        },
        Email: {
          email: input.email,
        },
        Company: {
          rich_text: [{ text: { content: input.company } }],
        },
        Service: {
          select: { name: input.serviceNeeded },
        },
        Budget: {
          select: { name: input.budgetRange },
        },
        Goals: {
          rich_text: [{ text: { content: input.goals || "Not provided" } }],
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to save lead to Notion.");
  }

  return true;
}

export async function handleLeadSubmission(input: ContactInput) {
  const sinks: string[] = [];

  const emailSent = await sendLeadEmail(input);
  if (emailSent) {
    sinks.push("resend");
  }

  const notionSaved = await saveLeadToNotion(input);
  if (notionSaved) {
    sinks.push("notion");
  }

  if (sinks.length === 0) {
    console.info("[lead]", input);
    sinks.push("console");
  }

  return sinks;
}

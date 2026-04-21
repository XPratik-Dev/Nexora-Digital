# Nexora Digital Website

Full-stack marketing website for Nexora Digital, built from the roadmap in
`NexoraDigital_Website_Roadmap.docx`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Resend-ready lead notifications
- Notion-ready lead capture scaffolding

## Included in the build

- Home, Services, About, Case Studies, Blog, Contact, Privacy, Terms, and Cookie Policy pages
- Dynamic routes for services, case studies, and blog posts
- Server-side contact form route
- Footer newsletter form route
- SEO metadata, sitemap, robots, FAQ schema, Organization schema, and article schema
- Cookie banner and consent-gated tracking script hooks
- Calendly embed placeholder plus floating CTA

## Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the integrations you want to enable.

- `NEXT_PUBLIC_SITE_URL`: canonical production URL
- `NEXT_PUBLIC_CALENDLY_URL`: live booking link for the Contact page and floating CTA
- `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`: analytics and attribution hooks
- `RESEND_API_KEY`, `RESEND_FROM`, `LEAD_NOTIFICATION_TO`: email notifications for contact and newsletter submissions
- `NOTION_TOKEN`, `NOTION_DATABASE_ID`: optional Notion database storage for lead submissions

## Notes

- If Resend and Notion are not configured, forms still succeed locally and log submissions to the server console.
- The Contact page shows a Calendly placeholder until `NEXT_PUBLIC_CALENDLY_URL` is set.
- The Notion integration expects a database with properties named `Name`, `Email`, `Company`, `Service`, `Budget`, and `Goals`.

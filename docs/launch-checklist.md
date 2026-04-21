# Nexora Digital Launch Checklist

This file maps the original roadmap into two buckets:

- Implemented in the repository
- Still requires external accounts, credentials, or launch-time execution

## Implemented in code

- Branded Next.js marketing site with Home, Services, About, Case Studies, Blog, Contact, Privacy, Terms, and Cookie Policy pages
- Dynamic service detail routes
- Dynamic case study routes
- Dynamic blog post routes with category filter, search, author bios, and read time
- SEO metadata on every page
- Organization, FAQ, and Article schema
- `sitemap.xml` and `robots.txt`
- Contact form API route with validation
- Newsletter form API route with validation
- Cookie consent banner
- Consent-gated analytics hooks for GTM, GA4, Meta Pixel, LinkedIn Insight Tag, and Plausible
- Calendly CTA and Contact-page embed placeholder
- Resend-ready and Notion-ready form integration scaffolding
- Brand tokens, reusable layout, and responsive design system

## External setup still needed

### Forms and CRM

- Add `RESEND_API_KEY`, `RESEND_FROM`, and `LEAD_NOTIFICATION_TO` in `.env.local`
- Add `NOTION_TOKEN` and `NOTION_DATABASE_ID` if you want lead submissions stored in Notion
- If you prefer HubSpot instead of Notion, swap the lead sink in `src/lib/contact.ts`

### Booking

- Add `NEXT_PUBLIC_CALENDLY_URL` to activate the live booking embed on `/contact`

### Analytics and tracking

- Add any IDs you want to enable:
  - `NEXT_PUBLIC_GTM_ID`
  - `NEXT_PUBLIC_GA_ID`
  - `NEXT_PUBLIC_META_PIXEL_ID`
  - `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- Configure conversion events after the IDs are live

### CMS

- The blog is currently file-backed for launch speed and reliability
- If you want live editorial editing, replace the local post source with Sanity or Contentful in a follow-up pass

### Error monitoring

- Sentry is not wired yet because it requires project credentials
- Recommended next step: add `@sentry/nextjs` and environment variables once the Sentry project exists

### Domain and deployment

- Point `nexoradigital.com` DNS to the final host
- Set `NEXT_PUBLIC_SITE_URL` to the production domain
- Connect the repo to Vercel if you want preview deployments and production hosting

### Launch QA

- Cross-browser test in Chrome, Safari, Firefox, and Edge
- Mobile test on iOS Safari and Chrome Android
- Run accessibility checks with axe DevTools
- Run performance checks with Lighthouse or PageSpeed Insights
- Load test the deployment with k6 or Loader.io
- Submit the sitemap to Google Search Console once the production domain is live

## Assumptions used in this build

- `hello@nexoradigital.com` is the primary inbox
- `nexoradigital.com` is the intended production domain
- Bengaluru is used as the map anchor until a final city or office location is confirmed
- Social profile URLs are placeholders and should be replaced with the real brand profiles

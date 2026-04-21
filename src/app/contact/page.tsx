import Link from "next/link";
import { CalendarClock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

const contactFaqs = [
  {
    question: "How quickly will you respond?",
    answer:
      "The site is set up to route submissions through the built-in API layer so we can review new leads quickly. For production use, connect Resend and your CRM for instant internal notifications.",
  },
  {
    question: "Do you work on one-off projects or retainers?",
    answer:
      "Both. Website design and build projects can run as fixed-scope engagements, while channel optimization work typically operates as a monthly sprint.",
  },
  {
    question: "What should I prepare before booking a call?",
    answer:
      "The most helpful inputs are your current growth goals, your biggest bottleneck, the channels you already use, and the budget range you are comfortable exploring.",
  },
];

export const metadata = buildMetadata({
  title: "Contact Nexora Digital",
  description:
    "Book a strategy call, send a growth inquiry, or connect with Nexora Digital about SEO, PPC, content, lifecycle, or web design.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="container-shell section-space">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="panel p-7 sm:p-10">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 text-5xl font-bold sm:text-6xl">
              Start with one clear goal. We will help map the path.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-charcoal/76">
              The roadmap specified a lead form, contact details, budget range,
              and Calendly booking. This page is set up to capture all of that in
              one place.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="metric-card">
                <Mail className="h-5 w-5 text-brand-accent" />
                <p className="mt-3 text-sm text-brand-charcoal/60">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-base font-semibold text-brand-navy">
                  {siteConfig.email}
                </a>
              </div>
              <div className="metric-card">
                <Phone className="h-5 w-5 text-brand-accent" />
                <p className="mt-3 text-sm text-brand-charcoal/60">Phone</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-2 block text-base font-semibold text-brand-navy"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="metric-card">
                <MapPin className="h-5 w-5 text-brand-accent" />
                <p className="mt-3 text-sm text-brand-charcoal/60">Location</p>
                <p className="mt-2 text-base font-semibold text-brand-navy">
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="panel-dark p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
              What happens next
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "We review your current growth context and the service area you selected.",
                "We identify the likely bottlenecks and the fastest opportunities for leverage.",
                "We recommend a next-step sprint, scope, or technical setup based on fit.",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-sm text-white/76">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/6 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Need a faster route?
              </p>
              <p className="mt-3 text-sm text-white/76">
                Use the booking block below to reserve a 30-minute discovery call
                once your Calendly URL is connected.
              </p>
              <Link
                href="#book-call"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Jump to booking
                <CalendarClock className="h-4 w-4 text-brand-accent" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="panel p-7 sm:p-9">
            <h2 className="text-3xl font-semibold">Tell us what you need</h2>
            <p className="mt-4 text-sm text-brand-charcoal/76">
              The form includes the fields defined in the roadmap and posts to a
              server-side route handler ready for Resend and Notion integration.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.05} className="panel p-7 sm:p-9">
            <h2 className="text-3xl font-semibold">FAQs before you reach out</h2>
            <div className="mt-6">
              <FaqAccordion items={contactFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="book-call" className="container-shell pb-20">
        <Reveal className="panel-dark overflow-hidden p-7 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Discovery call
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Book a 30-minute strategy session
              </h2>
              <p className="mt-4 text-sm text-white/76">
                Connect your live scheduling link with the
                NEXT_PUBLIC_CALENDLY_URL environment variable to replace this
                placeholder with an embedded booking experience.
              </p>
            </div>
            {siteConfig.calendlyUrl ? (
              <iframe
                src={`${siteConfig.calendlyUrl}?hide_gdpr_banner=1`}
                title="Calendly booking widget"
                className="min-h-[700px] w-full rounded-[1.8rem] border border-white/10 bg-white"
              />
            ) : (
              <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  Booking embed pending
                </p>
                <p className="mt-4 text-sm text-white/76">
                  Until Calendly is connected, visitors can use the form above or
                  email hello@nexoradigital.com directly.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}

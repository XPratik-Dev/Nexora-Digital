import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { pricingTiers } from "@/data/site";
import { services } from "@/data/services";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

const pageFaqs = services.flatMap((service) => service.faqs).slice(0, 5);

export const metadata = buildMetadata({
  title: "Growth Marketing Services",
  description:
    "Explore Nexora Digital services for SEO, PPC, social media, content strategy, email marketing, and web design.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(pageFaqs)) }}
      />
      <section className="container-shell section-space">
        <Reveal className="panel-dark overflow-hidden px-7 py-10 text-white sm:px-10 sm:py-12">
          <span className="eyebrow border-white/15 bg-white/6 text-white">
            Services
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold text-white sm:text-6xl">
                Full-funnel growth services built to create measurable movement.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/74">
                The roadmap called for six launch services, a clear three-step
                process, pricing guidance, and FAQs. This page delivers each one
                in a way that helps prospects self-select into the right next step.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "SEO and content systems that compound",
                "Paid acquisition with cleaner signal",
                "Lifecycle and site experience aligned to conversion",
                "Starting price guidance plus a custom option",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.7rem] border border-white/10 bg-white/6 p-5 text-sm text-white/76"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 0.05}
              className="card-link flex h-full flex-col"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Starting {service.startingPrice}
              </span>
              <h2 className="mt-4 text-3xl font-semibold">{service.title}</h2>
              <p className="mt-4 text-sm text-brand-charcoal/76">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3">
                {service.outcomes.slice(0, 2).map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                    <p className="text-sm text-brand-charcoal/74">{outcome}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
              >
                View service details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Process"
          title="Audit -> Strategy -> Execute"
          description="Every service in the roadmap uses the same operating rhythm so clients always know what is happening, why it matters, and what happens next."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Audit",
              detail:
                "We review the current funnel, diagnose leaks, and identify the constraints holding back results.",
            },
            {
              title: "Strategy",
              detail:
                "We translate findings into channel priorities, conversion improvements, and a sequencing plan for the next 90 days.",
            },
            {
              title: "Execute",
              detail:
                "We launch the work, iterate quickly, and report on outcomes that matter to the business, not just surface metrics.",
            },
          ].map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.05}
              className="panel p-6"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                {step.title}
              </span>
              <p className="mt-4 text-sm text-brand-charcoal/76">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-12">
        <SectionHeading
          eyebrow="Pricing"
          title="Three pricing paths so visitors never have to guess"
          description="The roadmap called out pricing as a major conversion driver, so the services page includes a clear entry point, a growth tier, and a custom partnership option."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal
              key={tier.name}
              delay={index * 0.05}
              className={`rounded-[2rem] border p-7 ${
                tier.featured
                  ? "border-brand-accent bg-brand-navy text-white shadow-[0_26px_80px_rgba(26,26,46,0.24)]"
                  : "border-brand-silver bg-white text-brand-charcoal shadow-[0_18px_48px_rgba(26,26,46,0.08)]"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                  tier.featured ? "text-brand-accent" : "text-brand-accent"
                }`}
              >
                {tier.name}
              </p>
              <h3
                className={`mt-4 text-4xl font-semibold ${
                  tier.featured ? "text-white" : "text-brand-navy"
                }`}
              >
                {tier.price}
              </h3>
              <p className={`mt-4 text-sm ${tier.featured ? "text-white/72" : "text-brand-charcoal/72"}`}>
                {tier.audience}
              </p>
              <div className="mt-6 grid gap-3">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                    <p className={`text-sm ${tier.featured ? "text-white/78" : "text-brand-charcoal/74"}`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions buyers usually ask before reaching out"
          description="FAQ schema is included here to support search visibility and reduce friction for first-time visitors."
        />
        <div className="mt-8">
          <FaqAccordion items={pageFaqs} />
        </div>
      </section>

      <section className="container-shell pb-20">
        <Reveal className="panel-dark px-7 py-10 text-white sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                Need help choosing the right service mix?
              </h2>
              <p className="mt-4 max-w-2xl text-white/74">
                We can map your current funnel, recommend the fastest leverage
                points, and show what a 90-day sprint could look like.
              </p>
            </div>
            <Link href="/contact" className="cta-primary hover:cta-primary-hover">
              Start the conversation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

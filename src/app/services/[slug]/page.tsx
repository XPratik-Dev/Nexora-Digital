import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/services";
import { getServiceBySlug } from "@/lib/content";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The requested service page could not be found.",
      path: `/services/${slug}`,
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(service.faqs)) }}
      />
      <section className="container-shell section-space">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>
        <Reveal className="mt-6 panel p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <span className="eyebrow">Service Detail</span>
              <h1 className="mt-5 text-5xl font-bold sm:text-6xl">{service.title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-brand-charcoal/76">
                {service.hero}
              </p>
              <p className="mt-5 max-w-2xl text-base text-brand-charcoal/72">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="cta-primary hover:cta-primary-hover">
                  Get a proposal
                </Link>
                <Link href="/case-studies" className="cta-secondary hover:cta-secondary-hover">
                  View case studies
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="metric-card">
                <p className="text-sm text-brand-charcoal/60">Who it is for</p>
                <p className="mt-3 text-sm text-brand-charcoal/78">
                  {service.whoItsFor}
                </p>
              </div>
              <div className="metric-card">
                <p className="text-sm text-brand-charcoal/60">Expected result</p>
                <p className="mt-3 text-sm text-brand-charcoal/78">
                  {service.expectedResult}
                </p>
              </div>
              <div className="metric-card">
                <p className="text-sm text-brand-charcoal/60">Starting investment</p>
                <p className="mt-3 text-3xl font-semibold text-brand-navy">
                  {service.startingPrice}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal className="panel p-7">
            <h2 className="text-3xl font-semibold">What is included</h2>
            <div className="mt-6 grid gap-3">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                  <p className="text-sm text-brand-charcoal/76">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05} className="panel p-7">
            <h2 className="text-3xl font-semibold">What success should feel like</h2>
            <div className="mt-6 grid gap-3">
              {service.outcomes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                  <p className="text-sm text-brand-charcoal/76">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="grid gap-6 md:grid-cols-3">
          {service.process.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.05}
              className="panel-dark p-6 text-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                {step.title}
              </p>
              <p className="mt-4 text-sm text-white/76">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <Reveal className="panel p-7 sm:p-9">
          <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion items={service.faqs} />
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <Reveal className="panel-dark px-7 py-10 text-white sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold text-white">
                Want to see how {service.title.toLowerCase()} fits into your 90-day plan?
              </h2>
              <p className="mt-4 max-w-2xl text-white/74">
                We can show the likely quick wins, the required foundations, and
                what success should look like before you commit to a full sprint.
              </p>
            </div>
            <Link href="/contact" className="cta-primary hover:cta-primary-hover">
              Book a strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

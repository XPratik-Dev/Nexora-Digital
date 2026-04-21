import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/data/case-studies";
import { getCaseStudyBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return buildMetadata({
      title: "Case study not found",
      description: "The requested case study does not exist.",
      path: `/case-studies/${slug}`,
    });
  }

  return buildMetadata({
    title: `${study.clientName} case study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <section className="container-shell section-space">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to case studies
        </Link>
        <Reveal className="mt-6 panel p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="eyebrow">{study.service}</span>
              <h1 className="mt-5 text-5xl font-bold sm:text-6xl">{study.clientName}</h1>
              <p className="mt-5 max-w-2xl text-lg text-brand-charcoal/76">
                {study.summary}
              </p>
            </div>
            <div className="grid gap-4">
              <div className="metric-card">
                <p className="text-sm text-brand-charcoal/56">Industry</p>
                <p className="mt-2 text-xl font-semibold text-brand-navy">
                  {study.industry}
                </p>
              </div>
              <div className="metric-card">
                <p className="text-sm text-brand-charcoal/56">Duration</p>
                <p className="mt-2 text-xl font-semibold text-brand-navy">
                  {study.duration}
                </p>
              </div>
              <div className="metric-card">
                <p className="text-sm text-brand-charcoal/56">Hero result</p>
                <p className="mt-2 text-3xl font-semibold text-brand-navy">
                  {study.heroMetric}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {study.metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.05} className="panel p-6">
              <p className="text-sm text-brand-charcoal/56">{metric.label}</p>
              <p className="mt-3 text-4xl font-semibold text-brand-navy">
                {metric.value}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="panel p-7">
            <h2 className="text-3xl font-semibold">Challenge</h2>
            <div className="mt-5 grid gap-3">
              {study.challenge.map((item) => (
                <p key={item} className="text-sm text-brand-charcoal/76">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05} className="panel p-7">
            <h2 className="text-3xl font-semibold">Strategy</h2>
            <div className="mt-5 grid gap-3">
              {study.strategy.map((item) => (
                <p key={item} className="text-sm text-brand-charcoal/76">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="panel-dark p-7 text-white">
            <h2 className="text-3xl font-semibold text-white">Results</h2>
            <div className="mt-5 grid gap-3">
              {study.results.map((item) => (
                <p key={item} className="text-sm text-white/78">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-12">
        <Reveal className="panel p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
            Client quote
          </p>
          <p className="mt-5 max-w-4xl text-3xl font-medium leading-relaxed text-brand-navy">
            &ldquo;{study.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm text-brand-charcoal/70">{study.contactOutcome}</p>
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <Reveal className="panel-dark px-7 py-10 text-white sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold text-white">
                Want a growth plan grounded in the same level of clarity?
              </h2>
              <p className="mt-4 max-w-2xl text-white/74">
                We can look at your current funnel and show where the strongest
                gains are likely to come from first.
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

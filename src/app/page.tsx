import Link from "next/link";
import { ArrowRight, BarChart3, CalendarClock, CheckCircle2, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { blogPosts } from "@/data/blog";
import { caseStudies } from "@/data/case-studies";
import { serviceCards, siteStats, testimonials } from "@/data/site";
import { buildMetadata, organizationSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing Agency for Results-Led Growth",
  description:
    "Nexora Digital helps e-commerce, SaaS, and service brands grow with SEO, paid media, content strategy, email automation, and high-converting web design.",
  path: "/",
});

const featuredPosts = blogPosts.slice(0, 3);
const featuredCaseStudies = caseStudies.slice(0, 3);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <section className="container-shell section-space relative">
        <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-brand-silver/70 bg-brand-navy px-7 py-8 text-white shadow-[0_32px_90px_rgba(26,26,46,0.24)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid-overlay absolute inset-0 opacity-10" aria-hidden="true" />
            <div
              aria-hidden="true"
              className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-brand-accent/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <span className="eyebrow border-white/15 bg-white/8 text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Performance marketing for ambitious brands
              </span>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.96] text-white sm:text-6xl xl:text-7xl">
                We Turn Clicks
                <br />
                Into Clients.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/82 sm:text-xl">
                Nexora Digital is a performance-driven marketing agency that helps
                ambitious brands grow faster with SEO, paid ads, and content that
                converts.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="cta-primary hover:cta-primary-hover"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="cta-secondary border-white/20 bg-white/6 text-white hover:cta-secondary-hover hover:bg-white/10"
                >
                  View Our Results
                </Link>
              </div>
              <div className="mt-8 grid gap-4 rounded-[2rem] border border-white/12 bg-white/6 p-5 text-sm text-white/82 md:grid-cols-3">
                <div>
                  <p className="text-white/55">Trusted by</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    50+ growing businesses
                  </p>
                </div>
                <div>
                  <p className="text-white/55">Revenue influenced</p>
                  <p className="mt-2 text-xl font-semibold text-white">$4M+</p>
                </div>
                <div>
                  <p className="text-white/55">Average ROI</p>
                  <p className="mt-2 text-xl font-semibold text-white">3.2x</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={0.08}
            className="panel relative overflow-hidden p-6 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-accent via-brand-navy to-brand-accent"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
              90-Day Growth Snapshot
            </p>
            <div className="mt-6 grid gap-4">
              {siteStats.map((stat) => (
                <div key={stat.label} className="metric-card">
                  <p className="text-sm text-brand-charcoal/70">{stat.label}</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div className="text-3xl font-bold text-brand-navy">
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </div>
                    <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                      {stat.subtext}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.75rem] bg-brand-paper p-5">
              <div className="flex items-center gap-3 text-brand-navy">
                <BarChart3 className="h-5 w-5 text-brand-accent" />
                <p className="font-semibold">What the roadmap asked for</p>
              </div>
              <p className="mt-3 text-sm text-brand-charcoal/80">
                Bold positioning, measurable results, one clear CTA per page,
                and SEO baked in from day one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-12">
        <Reveal className="panel px-6 py-6 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-[1.75rem] border border-brand-silver/70 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-accent/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                    {service.icon}
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-charcoal/40 transition group-hover:text-brand-accent" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm text-brand-charcoal/75">
                  {service.summary}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Core Services"
          title="A full-funnel growth stack built for speed, signal, and conversion"
          description="The roadmap asked for six launch services. Each offer here has its own detail page, starting point, and business outcome so visitors know exactly where to begin."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 0.05}
              className="card-link flex h-full flex-col"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white">
                {service.icon}
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-brand-charcoal/78">
                {service.summary}
              </p>
              <p className="mt-5 text-sm font-semibold text-brand-accent">
                Starting {service.startingAt}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
              >
                See deliverables
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-8">
        <Reveal className="panel-dark px-6 py-7 text-white sm:px-8 sm:py-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow border-white/15 bg-white/6 text-white">
                Revenue Process
              </span>
              <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
                Audit. Strategy. Execute.
              </h2>
              <p className="mt-4 max-w-xl text-white/74">
                The services page in the roadmap required a clear three-step
                process. We use a sprint-based system that surfaces leaks fast,
                aligns channel priorities, and compounds performance.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Audit",
                  detail:
                    "We map your funnel, benchmark paid and organic channels, and isolate the moments where demand is leaking.",
                },
                {
                  title: "Strategy",
                  detail:
                    "We turn the data into channel priorities, campaign themes, landing-page upgrades, and a pacing plan for the next 90 days.",
                },
                {
                  title: "Execute",
                  detail:
                    "We launch, iterate, and report against business metrics so every experiment is tied to revenue, not vanity stats.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-white/12 bg-white/6 p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
                    {step.title}
                  </p>
                  <p className="mt-3 text-sm text-white/78">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Proof"
          title="Recent results across SEO, paid media, and conversion design"
          description="Case studies matter more than generic praise, so the homepage leads with numbers, timeline, and service context."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {featuredCaseStudies.map((study, index) => (
            <Reveal
              key={study.slug}
              delay={index * 0.05}
              className="card-link flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                      {study.service}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                      {study.clientName}
                    </h3>
                  </div>
                  <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                    {study.industry}
                  </span>
                </div>
                <p className="mt-4 text-sm text-brand-charcoal/76">
                  {study.summary}
                </p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-brand-charcoal/65">Headline metric</p>
                  <p className="mt-1 text-3xl font-bold text-brand-navy">
                    {study.heroMetric}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
                >
                  Read case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-10">
        <SectionHeading
          eyebrow="Client Voice"
          title="Testimonials still matter when they anchor real outcomes"
          description="The roadmap called for a carousel on the homepage. This one rotates automatically, stays keyboard-friendly, and keeps the focus on measurable business impact."
        />
        <div className="mt-8">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="container-shell section-space">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="panel p-7 sm:p-9">
            <SectionHeading
              eyebrow="Why Brands Stay"
              title="What clients get beyond campaign management"
              description="The site tone is bold, data-driven, results-focused, and still approachable, so the differentiators are framed around trust, velocity, and transparency."
              align="left"
              compact
            />
            <div className="mt-8 grid gap-4">
              {[
                "A senior strategist involved in every engagement.",
                "Channel reporting tied to pipeline and revenue, not vanity metrics.",
                "Tighter landing-page, CRM, and paid-media coordination.",
                "Fast iteration cycles with weekly action items and next-step clarity.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-brand-silver/80 bg-brand-paper p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <p className="text-sm text-brand-charcoal/78">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="panel p-7 sm:p-9">
            <SectionHeading
              eyebrow="Insights"
              title="Launch-day blog content that doubles as an SEO foundation"
              description="The roadmap called for category filtering, author bios, estimated read time, and three launch articles. Those are all wired into the blog architecture."
              align="left"
              compact
            />
            <div className="mt-8 grid gap-4">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-[1.6rem] border border-brand-silver/80 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-accent/45"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                    <span>{post.category}</span>
                    <span className="text-brand-charcoal/50">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{post.title}</h3>
                  <p className="mt-3 text-sm text-brand-charcoal/76">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-20">
        <Reveal className="panel-dark relative overflow-hidden px-7 py-10 text-white sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-60 w-60 rounded-full bg-brand-accent/18 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow border-white/15 bg-white/6 text-white">
                Ready to build momentum?
              </span>
              <h2 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">
                Book a 30-minute discovery call and leave with a growth priority map.
              </h2>
              <p className="mt-4 max-w-2xl text-white/76">
                Whether you need SEO, paid media, lifecycle automation, or a
                higher-converting website, we&apos;ll show you where the fastest wins
                are hiding.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact#book-call"
                className="cta-primary hover:cta-primary-hover"
              >
                <CalendarClock className="h-4 w-4" />
                Book a discovery call
              </Link>
              <Link
                href="/services"
                className="cta-secondary border-white/20 bg-white/6 text-white hover:cta-secondary-hover hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { partnerLogos, teamMembers, timeline, values } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { getInitials } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "About Nexora Digital",
  description:
    "Meet the team, values, timeline, and founder story behind Nexora Digital.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="container-shell section-space">
        <Reveal className="panel p-7 sm:p-10">
          <span className="eyebrow">About</span>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h1 className="text-5xl font-bold sm:text-6xl">
                Built for brands that want senior-level thinking without agency fog.
              </h1>
              <p className="mt-5 text-lg text-brand-charcoal/76">
                Nexora Digital exists to help ambitious teams scale with clearer
                strategy, stronger execution, and reporting they can actually use.
              </p>
            </div>
            <div className="grid gap-4 text-brand-charcoal/76">
              <p>
                Nexora started after years of seeing the same pattern: fast-growing
                brands were buying campaigns, content, and websites as separate
                line items, then wondering why none of it compounded. The work
                looked busy but the customer journey still felt disjointed.
              </p>
              <p>
                We built Nexora to close those gaps. That means treating SEO,
                paid acquisition, site experience, lifecycle messaging, and proof
                assets as one system instead of a stack of disconnected tactics.
                It also means giving clients direct access to senior strategy
                rather than hiding the thinking behind layers of account management.
              </p>
              <p>
                Our tone is bold because clarity matters. Our process is
                data-driven because confidence needs evidence. And our delivery is
                intentionally approachable because good partners reduce friction
                instead of adding it. The result is a team that can move quickly,
                make decisions with context, and help clients see what is really
                driving growth.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <SectionHeading
          eyebrow="Mission"
          title="Give growth-stage teams a sharper digital operator at the table"
          description="We help clients find the highest-leverage moves across acquisition, conversion, and retention, then turn them into a practical sprint plan."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="panel p-7">
            <h2 className="text-3xl font-semibold">Core values</h2>
            <div className="mt-6 grid gap-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-[1.5rem] bg-brand-paper p-5">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm text-brand-charcoal/76">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05} className="panel-dark p-7 text-white">
            <h2 className="text-3xl font-semibold text-white">How we work</h2>
            <div className="mt-6 grid gap-4">
              {[
                "We start with diagnosis before tactics so effort follows signal.",
                "We build systems that create compounding value, not one-off spikes.",
                "We make reporting readable enough to support real decisions.",
                "We stay collaborative while still leading with a strong point of view.",
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4 text-sm text-white/76">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Team"
          title="A small senior team with hands-on ownership"
          description="The roadmap asked for team bios and a founder story, so the About page leans into credibility without sounding corporate."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 0.05}
              className="card-link flex gap-5"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-brand-navy text-xl font-bold text-white">
                {getInitials(member.name)}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-accent">
                  {member.role}
                </p>
                <p className="mt-4 text-sm text-brand-charcoal/76">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pb-12">
        <SectionHeading
          eyebrow="Timeline"
          title="How Nexora evolved"
          description="A compact timeline gives the brand a clear point of view and a track record without overcomplicating the page."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.05} className="panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                {item.year}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm text-brand-charcoal/76">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-space">
        <Reveal className="panel p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Partners"
                title="Brands and teams we support"
                description="The strip below stands in for the partner logo band requested in the roadmap while keeping the build lightweight."
                align="left"
                compact
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {partnerLogos.map((partner) => (
                <div
                  key={partner}
                  className="rounded-[1.4rem] border border-brand-silver/80 bg-brand-paper px-5 py-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="panel p-7">
            <h2 className="text-3xl font-semibold">Where we work</h2>
            <p className="mt-4 text-sm text-brand-charcoal/76">
              Nexora works with clients remotely, with operating coverage across
              North America and India. The map below gives the About page the
              physical anchor requested in the roadmap without limiting the brand
              to a single local market.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="overflow-hidden rounded-[2rem] border border-brand-silver/80 bg-white shadow-[0_18px_48px_rgba(26,26,46,0.08)]">
            <iframe
              title="Nexora Digital location map"
              src="https://www.google.com/maps?q=Bengaluru%2C%20Karnataka&output=embed"
              className="h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-shell pb-20">
        <Reveal className="panel-dark px-7 py-10 text-white sm:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold text-white">
                Want to see how this thinking applies to your funnel?
              </h2>
              <p className="mt-4 max-w-2xl text-white/74">
                Let us map your current acquisition, site experience, and lead
                follow-up into a focused set of next steps.
              </p>
            </div>
            <Link href="/contact" className="cta-primary hover:cta-primary-hover">
              Talk to Nexora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

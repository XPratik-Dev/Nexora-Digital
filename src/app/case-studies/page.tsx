import { CaseStudiesFilter } from "@/components/case-studies-filter";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/data/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketing Case Studies",
  description:
    "Explore Nexora Digital case studies across SEO, PPC, email marketing, and web design.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="container-shell section-space">
        <Reveal className="panel-dark px-7 py-10 text-white sm:px-10 sm:py-12">
          <span className="eyebrow border-white/15 bg-white/6 text-white">
            Case Studies
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold text-white sm:text-6xl">
                Results stories grounded in numbers, not slogans.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/74">
                The roadmap emphasized data-backed proof. This page uses a
                filterable card grid so prospects can quickly find examples that
                match the service they care about most.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Studies", value: caseStudies.length.toString() },
                { label: "Services covered", value: "4" },
                { label: "Highest lift", value: "+240%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5"
                >
                  <p className="text-sm text-white/56">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <SectionHeading
          eyebrow="Filter by service"
          title="Proof grouped by the business problem each client solved"
          description="Each study is structured so visitors can scan the challenge, strategy, and metric lift quickly before diving deeper."
        />
        <div className="mt-10">
          <CaseStudiesFilter studies={caseStudies} />
        </div>
      </section>
    </>
  );
}

import { Reveal } from "@/components/reveal";
import { termsSections } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the Nexora Digital terms of service for site usage, intellectual property, and liability limitations.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="container-shell section-space">
      <Reveal className="panel p-7 sm:p-10">
        <span className="eyebrow">Terms</span>
        <h1 className="mt-5 text-5xl font-bold sm:text-6xl">Terms of Service</h1>
        <div className="mt-10 grid gap-6">
          {termsSections.map((section) => (
            <div key={section.heading} className="rounded-[1.8rem] bg-brand-paper p-6">
              <h2 className="text-3xl font-semibold">{section.heading}</h2>
              <div className="mt-5 grid gap-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-brand-charcoal/76">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

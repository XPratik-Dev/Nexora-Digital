import { Reveal } from "@/components/reveal";
import { privacySections } from "@/data/legal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the Nexora Digital privacy policy covering form submissions, analytics, and data handling.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="container-shell section-space">
      <Reveal className="panel p-7 sm:p-10">
        <span className="eyebrow">Privacy Policy</span>
        <h1 className="mt-5 text-5xl font-bold sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 max-w-3xl text-lg text-brand-charcoal/76">
          This implementation includes a privacy policy page so the launch site
          has the compliance foundation called for in the roadmap.
        </p>
        <div className="mt-10 grid gap-6">
          {privacySections.map((section) => (
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

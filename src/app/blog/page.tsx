import { BlogFilters } from "@/components/blog-filters";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { blogAuthors, blogPosts, keywordRoadmap } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { getInitials } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Growth Marketing Blog",
  description:
    "SEO, PPC, content strategy, lifecycle marketing, and website growth insights from Nexora Digital.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="container-shell section-space">
        <Reveal className="panel-dark px-7 py-10 text-white sm:px-10 sm:py-12">
          <span className="eyebrow border-white/15 bg-white/6 text-white">
            Blog
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-bold text-white sm:text-6xl">
                Search-ready insight built for thought leadership and demand capture.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/74">
                The roadmap called for a category filter, search, author bios,
                read-time estimates, and launch articles. This blog layer ships with
                all of that already wired in.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Launch keyword roadmap
              </p>
              <div className="mt-5 grid gap-2 text-sm text-white/76">
                {keywordRoadmap.map((keyword) => (
                  <div key={keyword} className="rounded-[1rem] bg-white/6 px-4 py-3">
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <BlogFilters posts={blogPosts} authors={blogAuthors} />
      </section>

      <section className="container-shell section-space">
        <SectionHeading
          eyebrow="Authors"
          title="Writers who also shape the work"
          description="The blog uses the same strategist profiles clients would actually work with, which keeps the voice credible and connected to delivery."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {blogAuthors.map((author, index) => (
            <Reveal key={author.slug} delay={index * 0.05} className="card-link">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-brand-navy text-lg font-bold text-white">
                {getInitials(author.name)}
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{author.name}</h2>
              <p className="mt-1 text-sm font-medium text-brand-accent">{author.role}</p>
              <p className="mt-4 text-sm text-brand-charcoal/76">{author.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

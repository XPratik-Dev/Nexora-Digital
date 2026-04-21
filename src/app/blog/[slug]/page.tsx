import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";
import { getAuthorBySlug, getPostBySlug } from "@/lib/content";
import { buildArticleSchema, buildMetadata } from "@/lib/seo";
import { formatDate, getInitials } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested article could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorBySlug(post.authorSlug);
  const relatedServices = services.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleSchema({
              title: post.title,
              description: post.description,
              publishedAt: post.publishedAt,
              path: `/blog/${post.slug}`,
              authorName: author?.name ?? "Nexora Digital",
            }),
          ),
        }}
      />
      <section className="container-shell section-space">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
        <Reveal className="mt-6 panel p-7 sm:p-10">
          <span className="eyebrow">{post.category}</span>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-brand-charcoal/76">
            {post.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-brand-charcoal/58">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-brand-navy text-sm font-bold text-white">
                {getInitials(author?.name ?? "Nexora Digital")}
              </div>
              <div>
                <p className="font-semibold text-brand-navy">{author?.name}</p>
                <p>{author?.role}</p>
              </div>
            </div>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime} min read</span>
            <span>Primary keyword: {post.keyword}</span>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="panel p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Key takeaways
            </p>
            <div className="mt-5 grid gap-4">
              {post.takeaways.map((takeaway) => (
                <div key={takeaway} className="rounded-[1.3rem] bg-brand-paper p-4 text-sm text-brand-charcoal/76">
                  {takeaway}
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-6">
            {post.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.04} className="panel p-7">
                <h2 className="text-3xl font-semibold">{section.heading}</h2>
                <div className="mt-5 grid gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base text-brand-charcoal/78">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list ? (
                  <div className="mt-5 grid gap-3">
                    {section.list.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.3rem] border border-brand-silver/80 bg-brand-paper px-4 py-3 text-sm text-brand-charcoal/76"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-12">
        <Reveal className="panel-dark p-7 text-white sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                About the author
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {author?.name ?? "Nexora Digital"}
              </h2>
              <p className="mt-2 text-sm text-white/62">{author?.role}</p>
              <p className="mt-5 text-sm text-white/76">
                {author?.bio}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Related services
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-[1.5rem] border border-white/10 bg-white/6 p-4 text-sm text-white/78 transition hover:border-white/18"
                  >
                    <p className="font-semibold text-white">{service.title}</p>
                    <p className="mt-3">{service.hero}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-20">
        <Reveal className="panel p-7 sm:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold">
                Want help turning these ideas into execution?
              </h2>
              <p className="mt-4 max-w-2xl text-brand-charcoal/76">
                Nexora builds the strategy, pages, and operating rhythm needed to
                convert insight into measurable growth.
              </p>
            </div>
            <Link href="/contact" className="cta-primary hover:cta-primary-hover">
              Talk to the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

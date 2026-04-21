"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useDeferredValue, useState } from "react";
import type { BlogAuthor, BlogPost } from "@/data/blog";
import { formatDate } from "@/lib/utils";

type BlogFiltersProps = {
  posts: BlogPost[];
  authors: BlogAuthor[];
};

export function BlogFilters({ posts, authors }: BlogFiltersProps) {
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = posts.filter((post) => {
    const categoryMatch = category === "All" || post.category === category;
    const queryMatch =
      deferredQuery.length === 0 ||
      post.title.toLowerCase().includes(deferredQuery) ||
      post.description.toLowerCase().includes(deferredQuery) ||
      post.keyword.toLowerCase().includes(deferredQuery);
    return categoryMatch && queryMatch;
  });

  return (
    <div>
      <div className="panel p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-charcoal/40" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by topic, keyword, or article title"
              className="w-full rounded-full border border-brand-silver bg-white px-12 py-3 text-sm text-brand-charcoal focus:border-brand-accent focus:outline-none"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-brand-navy text-white"
                    : "border border-brand-silver bg-white text-brand-charcoal/76"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {filtered.map((post) => {
          const author = authors.find((entry) => entry.slug === post.authorSlug);

          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-link block">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                  {post.category}
                </span>
                <span className="text-sm text-brand-charcoal/48">
                  {post.readTime} min read
                </span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold">{post.title}</h3>
              <p className="mt-4 text-sm text-brand-charcoal/76">
                {post.description}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3 text-sm text-brand-charcoal/58">
                <span>{author?.name ?? "Nexora Digital"}</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

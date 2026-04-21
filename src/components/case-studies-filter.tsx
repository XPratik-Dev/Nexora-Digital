"use client";

import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudiesFilterProps = {
  studies: CaseStudy[];
};

export function CaseStudiesFilter({ studies }: CaseStudiesFilterProps) {
  const categories = ["All", ...new Set(studies.map((study) => study.service))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? studies
      : studies.filter((study) => study.service === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === category
                ? "bg-brand-navy text-white"
                : "border border-brand-silver bg-white text-brand-charcoal/76"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {filtered.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="card-link block"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                  {study.service}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{study.clientName}</h3>
              </div>
              <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                {study.industry}
              </span>
            </div>
            <p className="mt-4 text-sm text-brand-charcoal/76">{study.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.25rem] border border-brand-silver/70 bg-brand-paper p-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-charcoal/48">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-brand-navy">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

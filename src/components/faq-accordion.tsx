"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="rounded-[1.6rem] border border-brand-silver/75 bg-white/92 p-5"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-brand-navy">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-accent transition ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen ? (
              <p className="mt-4 text-sm text-brand-charcoal/76">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

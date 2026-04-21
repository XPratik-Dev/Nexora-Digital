"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const stepForward = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      stepForward();
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <div className="panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-52 w-52 rounded-full bg-brand-accent/10 blur-3xl"
      />
      <div className="relative">
        <Quote className="h-8 w-8 text-brand-accent" />
        <div className="mt-6 min-h-[210px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="max-w-3xl text-2xl font-medium leading-relaxed text-brand-navy sm:text-3xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-brand-navy">
                  {active.name}
                </p>
                <p className="text-sm text-brand-charcoal/72">
                  {active.role}, {active.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-8 bg-brand-accent"
                    : "w-2.5 bg-brand-silver"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (current) =>
                    (current - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-silver bg-white text-brand-navy transition hover:border-brand-accent/40"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => (current + 1) % testimonials.length)
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-silver bg-white text-brand-navy transition hover:border-brand-accent/40"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

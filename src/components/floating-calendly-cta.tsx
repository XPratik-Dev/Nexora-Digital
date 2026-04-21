import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingCalendlyCta() {
  if (siteConfig.calendlyUrl) {
    return (
      <a
        href={siteConfig.calendlyUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(233,69,96,0.35)] transition hover:-translate-y-1 hover:bg-[#d33954]"
      >
        <CalendarClock className="h-4 w-4" />
        Book a 30-min call
      </a>
    );
  }

  return (
    <Link
      href="/contact#book-call"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(233,69,96,0.35)] transition hover:-translate-y-1 hover:bg-[#d33954]"
    >
      <CalendarClock className="h-4 w-4" />
      Book a 30-min call
    </Link>
  );
}

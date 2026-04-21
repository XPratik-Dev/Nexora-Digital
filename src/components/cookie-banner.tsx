"use client";

import { setCookieConsent, useCookieConsent } from "@/lib/consent";

export function CookieBanner() {
  const consent = useCookieConsent();

  if (consent !== "unset") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="pointer-events-auto fixed bottom-5 left-5 z-50 max-w-md rounded-[1.75rem] border border-brand-silver/90 bg-white/92 p-5 shadow-[0_18px_48px_rgba(26,26,46,0.16)] backdrop-blur-xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
        Cookie consent
      </p>
      <p className="mt-3 text-sm text-brand-charcoal/76">
        We use cookies for analytics, attribution, and a smoother booking flow.
        You can accept analytics cookies or keep only essential site behavior.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setCookieConsent("accepted")}
          className="cta-primary touch-manipulation hover:cta-primary-hover"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => setCookieConsent("declined")}
          className="cta-secondary touch-manipulation hover:cta-secondary-hover"
        >
          Essentials only
        </button>
      </div>
    </div>
  );
}

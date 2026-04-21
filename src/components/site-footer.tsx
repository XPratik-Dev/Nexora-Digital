import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";
import { siteConfig } from "@/data/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-10 bg-brand-navy pb-10 pt-14 text-white">
      <div className="container-shell">
        <div className="grid gap-10 rounded-[2.4rem] border border-white/10 bg-white/6 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xl text-white/72">
              Performance marketing for e-commerce, SaaS, and professional
              services brands that want sharper strategy, cleaner reporting, and
              stronger conversion systems.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-accent" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-accent" />
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-accent" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.socialLinks.map((item) => {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/76 transition hover:border-white/22 hover:bg-white/10"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-white/7 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Newsletter
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Growth notes worth opening.
            </h2>
            <p className="mt-4 text-sm text-white/72">
              Monthly insights on acquisition strategy, conversion UX, and
              channel optimization. No filler.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Explore
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/74">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-brand-accent" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Legal
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/74">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Response Promise
            </p>
            <p className="mt-4 max-w-sm text-sm text-white/74">
              New lead submissions route through the built-in API layer and are
              designed to trigger internal notifications within minutes.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/42">
          {siteConfig.name} | {siteConfig.tagline}
        </p>
      </div>
    </footer>
  );
}

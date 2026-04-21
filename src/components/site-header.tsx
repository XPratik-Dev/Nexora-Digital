"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="container-shell">
        <div className="flex items-center justify-between rounded-[1.75rem] border border-white/55 bg-white/75 px-4 py-3 shadow-[0_18px_48px_rgba(26,26,46,0.12)] backdrop-blur-xl sm:px-5">
          <Logo />
          <nav className="hidden items-center gap-2 lg:flex">
            {siteConfig.navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    active
                      ? "bg-brand-navy text-white"
                      : "text-brand-charcoal/78 hover:bg-brand-paper hover:text-brand-navy",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <Link href="/contact" className="cta-primary hover:cta-primary-hover">
              Book a Call
            </Link>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-silver bg-white text-brand-navy lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div
            id="mobile-nav"
            className="mt-3 rounded-[1.75rem] border border-white/55 bg-white/90 p-4 shadow-[0_18px_48px_rgba(26,26,46,0.12)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {siteConfig.navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-[1.2rem] px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-brand-navy text-white"
                        : "bg-brand-paper text-brand-charcoal/82",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 cta-primary hover:cta-primary-hover"
              >
                Book a Call
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

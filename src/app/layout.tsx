import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { FloatingCalendlyCta } from "@/components/floating-calendly-cta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackingScripts } from "@/components/tracking-scripts";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Nexora Digital",
  description:
    "Performance-driven digital marketing for e-commerce, SaaS, and service brands ready to turn clicks into qualified pipeline.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-brand-charcoal">
        <TrackingScripts />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(233,69,96,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(26,26,46,0.22),transparent_34%)]"
          />
          <SiteHeader />
          <main id="main-content" className="relative flex-1 pt-24">
            {children}
          </main>
          <SiteFooter />
          <FloatingCalendlyCta />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell section-space">
      <div className="panel mx-auto max-w-3xl p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
          Not found
        </p>
        <h1 className="mt-5 text-5xl font-bold">That page does not exist.</h1>
        <p className="mt-5 text-base text-brand-charcoal/76">
          Try going back to the homepage, services page, or case studies to pick
          up the right thread.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="cta-primary hover:cta-primary-hover">
            Go home
          </Link>
          <Link href="/services" className="cta-secondary hover:cta-secondary-hover">
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}

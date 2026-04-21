import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  dark?: boolean;
};

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Nexora Digital home"
    >
      <span
        className={cn(
          "relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border text-sm font-bold tracking-[0.16em]",
          dark
            ? "border-white/20 bg-white/8 text-white"
            : "border-brand-silver bg-brand-navy text-white",
        )}
      >
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(233,69,96,0.95),rgba(233,69,96,0.15))]" />
        <span className="absolute left-3 top-3 block h-5 w-1.5 rotate-45 rounded-full bg-white" />
        <span className="absolute right-[10px] top-[11px] block h-5 w-1.5 -rotate-[35deg] rounded-full bg-white" />
        <span className="relative">N</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold uppercase tracking-[0.24em]",
            dark ? "text-white" : "text-brand-navy",
          )}
        >
          Nexora
        </span>
        <span
          className={cn(
            "mt-1 text-[0.68rem] uppercase tracking-[0.26em]",
            dark ? "text-white/64" : "text-brand-charcoal/60",
          )}
        >
          Digital
        </span>
      </span>
    </Link>
  );
}

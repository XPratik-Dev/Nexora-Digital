import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  compact = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        align === "center" ? "max-w-3xl text-center" : "max-w-2xl text-left",
        compact ? "max-w-none" : "",
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">{title}</h2>
      <p className="mt-4 text-base text-brand-charcoal/78 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

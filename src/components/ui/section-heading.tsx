import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2 text-mint-500",
        className,
      )}
    >
      <span className="h-px w-6 bg-mint-500/60" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-2xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.05] text-spruce-950">
        {title}
      </Tag>
      {description && (
        <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

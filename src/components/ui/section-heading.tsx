import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center mx-auto max-w-2xl",
        className,
      )}
    >
      <Tag
        className={cn(
          "font-display leading-[1.02] text-spruce-950",
          Tag === "h1" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl",
        )}
      >
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

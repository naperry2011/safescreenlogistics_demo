import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-spruce-800 text-paper hover:bg-spruce-700 shadow-[0_8px_24px_-10px_rgba(14,58,54,0.7)] hover:shadow-[0_12px_30px_-10px_rgba(14,58,54,0.8)] hover:-translate-y-0.5",
  secondary:
    "bg-mint-500 text-spruce-950 hover:bg-mint-400 shadow-[0_8px_24px_-12px_rgba(26,174,159,0.9)] hover:-translate-y-0.5",
  outline:
    "border border-spruce-800/30 text-spruce-900 hover:border-spruce-800 hover:bg-spruce-800/[0.04]",
  ghost: "text-spruce-900 hover:bg-spruce-800/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 h-9",
  md: "text-sm px-6 h-11",
  lg: "text-base px-8 h-14",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className"
  >) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

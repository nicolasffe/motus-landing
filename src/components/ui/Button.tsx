import Link from "next/link";

type Props = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  type = "button",
  onClick,
  className = "",
}: Props) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/25";
  const styles =
    variant === "primary"
      ? "bg-brand-teal text-brand-ink shadow-[0_10px_24px_rgba(25,211,197,0.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(25,211,197,0.38)]"
      : "border border-white/16 bg-white/[0.045] text-white hover:border-white/28 hover:bg-white/[0.09]";

  if (href) {
    return (
      <Link className={`${base} ${styles} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}

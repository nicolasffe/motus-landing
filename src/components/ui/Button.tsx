import Link from "next/link";

type Props = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  children,
  type = "button",
  onClick,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";
  const styles =
    variant === "primary"
      ? "bg-brand-teal text-brand-ink hover:opacity-90"
      : "border border-white/10 bg-white/5 text-white hover:bg-white/10";

  if (href) {
    return (
      <Link className={`${base} ${styles}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

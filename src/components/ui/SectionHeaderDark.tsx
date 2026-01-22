import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "default" | "sm";
};

export function SectionHeaderDark({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "default",
}: Props) {
  const isCenter = align === "center";
  const sizeClasses =
    size === "sm"
      ? "text-3xl sm:text-4xl"
      : "text-4xl sm:text-5xl";

  return (
    <Container>
      <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow ? (
          <div
            className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 ${
              isCenter ? "justify-center" : "justify-start"
            }`}
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-white/80" />
            <span className="rounded-md bg-white/8 px-3 py-1 shadow-inner shadow-black/20">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          </div>
        ) : null}

        <h2
          className={`mt-4 text-balance font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text text-transparent drop-shadow-[0_14px_34px_rgba(0,0,0,0.38)] ${sizeClasses}`}
        >
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-3 text-base text-white/70 sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </Container>
  );
}

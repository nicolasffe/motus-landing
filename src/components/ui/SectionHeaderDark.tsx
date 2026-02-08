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
  const titleSize =
    size === "sm"
      ? "text-[clamp(1.85rem,1.45rem+1.35vw,2.6rem)]"
      : "text-[clamp(2.15rem,1.6rem+2vw,3.4rem)]";

  return (
    <Container>
      <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrow ? (
          <div
            className={`reveal flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 ${
              isCenter ? "justify-center" : "justify-start"
            }`}
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-white/80" />
            <span className="rounded-md bg-white/8 px-3 py-1 shadow-inner shadow-black/20">{eyebrow}</span>
            <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          </div>
        ) : null}

        <h2
          className={`reveal reveal-delay-1 mt-4 py-1 text-balance font-extrabold leading-[1.1] tracking-tight bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text text-transparent drop-shadow-[0_14px_34px_rgba(0,0,0,0.38)] ${titleSize}`}
        >
          {title}
        </h2>

        {subtitle ? (
          <p className={`reveal reveal-delay-2 section-subtitle mt-4 max-w-[64ch] text-white/72 ${isCenter ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </Container>
  );
}

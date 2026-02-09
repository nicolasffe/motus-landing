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
          <div className={`reveal flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}>
            <span className="h-4 w-1 rounded-full bg-brand-teal shadow-[0_0_18px_rgba(25,211,197,0.45)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/68">{eyebrow}</span>
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

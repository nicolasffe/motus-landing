import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeaderDark({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const isCenter = align === "center";

  return (
    <Container>
      <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            <span>{eyebrow}</span>
          </div>
        ) : null}

        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-3 text-base text-white/70 sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </Container>
  );
}


import { Container } from "@/components/ui/Container";
import { EOF } from "dns";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <Container>
      <div className={`${alignClass} mx-auto max-w-3xl`}>
        {eyebrow ? (
          <div className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
            {eyebrow}
          </div>
        ) : null}

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-4 text-base text-black/70 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </Container>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

function Step({
  index,
  title,
  desc,
}: {
  index: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-premium p-6 backdrop-blur-md">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal/35 via-white/10 to-black/60 text-sm font-bold text-white shadow-lg shadow-black/30 ring-1 ring-white/10">
          {index}
        </div>
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <p className="mt-2 text-sm text-white/75">{desc}</p>
        </div>
      </div>

      <div className="mt-5 h-1 w-full rounded-full bg-white/10">
        <div className="h-1 w-2/3 rounded-full bg-brand-teal" />
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="relative py-20">
      <SectionHeaderDark
        eyebrow="Como funciona"
        title="Do dado ao alerta em três passos"
        subtitle="Integre, acompanhe e ajuste sem burocracia."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Step
            index="01"
            title="Integra ou importa"
            desc="Suba dados do clube em um único padrão."
          />
          <Step
            index="02"
            title="Painéis prontos"
            desc="Leitura por atleta e microciclo com variações relevantes."
          />
          <Step
            index="03"
            title="Alertas em tempo real"
            desc="Sinais de risco e fadiga para agir no treino."
          />
        </div>
      </Container>
    </section>
  );
}

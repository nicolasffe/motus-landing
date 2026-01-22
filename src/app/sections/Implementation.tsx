import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

function Step({
  n,
  title,
  desc,
  bullets,
}: {
  n: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="card-premium p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-white/60">Etapa {n}</div>
          <div className="mt-1 text-base font-semibold text-white">{title}</div>
          <p className="mt-2 text-sm text-white/70">{desc}</p>
        </div>
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-white/10 bg-black/20 text-sm font-semibold text-white">
          {n}
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Implementation() {
  return (
    <section id="implantacao" className="relative py-20">
      <SectionHeaderDark
        eyebrow="Implantação"
        title="Rápida para começar, flexível para evoluir"
        subtitle="Primeiro valor imediato, depois integrações sob medida."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Step
            n="01"
            title="Mapeamento e setup"
            desc="Mapeamos a rotina e definimos indicadores-chave."
            bullets={[
              "Fontes de dados e cadência do staff",
              "Critérios básicos de prontidão",
            ]}
          />
          <Step
            n="02"
            title="Dashboards e cadência"
            desc="Painéis prontos com leitura semanal."
            bullets={[
              "Dashboards por microciclo e atleta",
              "Alertas e rituais de revisão",
            ]}
          />
          <Step
            n="03"
            title="MOTUS IA e evolução"
            desc="IA ativada com histórico do clube."
            bullets={[
              "Sinais preditivos de risco",
              "Ajustes contínuos por temporada",
            ]}
          />
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Quer ver ao vivo?
              </div>
              <p className="mt-2 text-sm text-white/70">
                Mostramos o fluxo, os alertas e próximos passos em menos de 20 minutos.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="#contato" variant="primary">
                Solicitar demonstração
              </Button>
              <Button href="#plataforma" variant="secondary">
                Ver dashboards
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

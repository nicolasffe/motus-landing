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
    <div className="card-premium p-6 backdrop-blur-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
            <span className="h-1 w-6 rounded-full bg-brand-teal/60" />
            Etapa {n}
          </div>
          <div className="text-base font-semibold text-white">{title}</div>
          <p className="text-sm text-white/75">{desc}</p>
        </div>
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal/35 via-white/10 to-black/60 text-sm font-bold text-white shadow-lg shadow-black/30 ring-1 ring-white/10">
          {n}
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-white/75">
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

        <div className="card-premium mt-10 p-8 backdrop-blur-md">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Quer ver ao vivo?
              </div>
              <p className="mt-2 text-sm text-white/75">
                Mostramos o fluxo, os alertas e próximos passos em menos de 20 minutos.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/60">
                <span className="rounded-full bg-white/5 px-3 py-1">Demo guiada 15-20 min</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Planilha ou API</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Checklist de rituais</span>
              </div>
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

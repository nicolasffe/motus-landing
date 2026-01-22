import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="card-premium p-6">
      <div className="text-base font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export function Credentials() {
  return (
    <section id="diferenciais" className="relative py-20">
      <SectionHeaderDark
        eyebrow="Diferenciais"
        title="Clareza, contexto e prevenção em um só lugar"
        subtitle="Menos ruído, mais decisão rápida para o clube."
        align="left"
      />

      <Container>
        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          <Pill>IA preditiva</Pill>
          <Pill>Leitura rápida</Pill>
          <Pill>Alertas de risco</Pill>
          <Pill>Staff alinhado</Pill>
        </div>

        {/* 3 blocos principais */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card
            title="Decisão com antecedência"
            desc="Sinais precoces para ajustar carga e recuperação."
          />
          <Card
            title="Unificação do que estava disperso"
            desc="Indicadores que antes estavam em planilhas e apps separados."
          />
          <Card
            title="Experiência visual e acionável"
            desc="Dashboards simples para fisiologia, preparação, DM e gestão."
          />
        </div>

        {/* “Para quem é” */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-8">
          <div className="text-sm font-semibold text-white">Para quem é</div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Fisiologia",
              "Preparação física",
              "Departamento médico",
              "Gestão / Diretoria",
            ].map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="text-sm font-semibold text-white">{role}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#plataforma" variant="secondary">
              Ver dashboards
            </Button>
            <Button href="#contato" variant="primary">
              Solicitar demonstração
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

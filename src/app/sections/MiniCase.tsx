import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

function Block({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-premium relative overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-brand-teal/10" />

      <div className="relative flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
          {label}
        </div>
        <div className="text-base font-semibold text-white">{title}</div>
        <p className="text-sm leading-relaxed text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export function MiniCase() {
  return (
    <section id="caso" className="relative py-20">
      <SectionHeaderDark
        eyebrow="Exemplo"
        title="Da fragmentação ao ajuste preventivo"
        subtitle="Um cenário simples para mostrar a leitura MOTUS."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Block
            label="Problema"
            title="Leitura fragmentada e lenta"
            desc="Dados soltos; decisão atrasada."
          />
          <Block
            label="Abordagem MOTUS"
            title="Leitura única e acionável"
            desc="Painel único, alertas claros com contexto."
          />
          <Block
            label="Resultado esperado"
            title="Ajuste antes do risco"
            desc="Staff ajusta carga antes do risco."
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-black/25 p-8">
            <div className="text-sm font-semibold text-white">O que muda na prática</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {[
                "Indicadores padronizados, sem ruído.",
                "Histórico do atleta sempre visível.",
                "Alertas chegam antes do treino.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold text-white">
              Quer ver com os dados do seu clube?
            </div>
            <p className="mt-2 text-sm text-white/70">
              Mostramos a leitura e os alertas já com sua rotina.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#contato" variant="primary">
                Solicitar demonstração
              </Button>
              <Button href="#ia" variant="secondary">
                Ver MOTUS IA
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

const layers = [
  {
    title: "Dados do clube",
    desc: "Carga, wellness, testes físicos, clínico e jogo em uma estrutura única.",
  },
  {
    title: "Camada MOTUS IA",
    desc: "Modelos preditivos com contexto do atleta para risco, fadiga e retorno seguro.",
  },
  {
    title: "Experiência para o staff",
    desc: "Dashboards, alertas e relatórios rápidos para reunião, treino e gestão.",
  },
];

const modules = [
  { title: "Carga", points: ["Exposição por atleta e microciclo", "Mudanças relevantes de volume/intensidade"] },
  { title: "Saúde e prontidão", points: ["Histórico clínico simplificado", "Prontidão diária e sinais de alerta"] },
  { title: "Performance", points: ["Resposta do atleta por sessão e jogo", "Tendência de esforço e output"] },
  { title: "Retorno ao jogo", points: ["Critérios claros por fase", "Comunicação unificada staff + DM"] },
  { title: "Relatórios", points: ["Resumo semanal/mensal em 1 clique", "Indicadores para gestão e campo"] },
  { title: "Integrações", points: ["Importação simples no início", "APIs conforme maturidade do clube"] },
];

const rituals = [
  { label: "Segunda", title: "Planejamento do microciclo", desc: "Alertas ativos + prontidão do elenco" },
  { label: "Pré-treino", title: "Ajuste de carga", desc: "Sinais de risco, fadiga e retorno" },
  { label: "Pós-treino", title: "Resposta ao esforço", desc: "Variação de carga interna/externa" },
  { label: "Revisão semanal", title: "Decisão com gestão", desc: "Relatório claro para próximos passos" },
];

export function PlatformDeepDive() {
  return (
    <section id="plataforma-detalhe" className="relative overflow-hidden py-16">
      <SectionHeaderDark
        eyebrow="Detalhes da plataforma"
        title="Tudo o que o staff precisa — do dado ao alerta"
        subtitle="Camadas claras, módulos práticos e uma cadência que funciona para o campo e para a gestão."
        align="center"
      />

      <Container>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.title} className="card-premium p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                {layer.title}
              </div>
              <p className="mt-3 text-sm text-white/75">{layer.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-premium mt-10 p-6 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Sneak peek
              </div>
              <div className="text-sm font-semibold text-white">Visão do produto</div>
            </div>
            <Button href="#contato" variant="secondary">
              Ver demo guiada
            </Button>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="card-premium p-5 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Microciclo • Semana 22</span>
                <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white">Live</span>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  { label: "Disponibilidade", value: "92%" },
                  { label: "Risco alto", value: "2 atletas" },
                  { label: "Retorno", value: "1 em revisão" },
                ].map((item) => (
                  <div key={item.label} className="card-premium px-3 py-2 backdrop-blur-md">
                    <div className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-24 rounded-xl border border-white/10 bg-gradient-to-r from-brand-teal/30 via-brand-blue/20 to-white/10">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(25,211,197,0.16),transparent_32%)]" />
              </div>
            </div>

            <div className="card-premium p-5 backdrop-blur-md">
              <div className="text-sm font-semibold text-white">Roteiro rápido</div>
              <p className="mt-2 text-xs text-white/60">
                Use a mesma leitura em reunião, treino e gestão.
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>Pré-treino</span>
                  <span className="text-white/60">Ver alertas + prontidão</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>Pós-treino</span>
                  <span className="text-white/60">Resposta ao esforço</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                  <span>Revisão semanal</span>
                  <span className="text-white/60">Relatório 1 clique</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="card-premium p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{module.title}</div>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {module.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card-premium mt-10 p-6 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Ritual recomendado</div>
              <p className="text-sm text-white/70">Uma cadência moderna para usar os dados no dia a dia.</p>
            </div>
            <Button href="#contato" variant="primary">
              Agendar demo
            </Button>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {rituals.map((r) => (
              <div key={r.label} className="card-premium px-4 py-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{r.label}</span>
                  <span className="h-2 w-2 rounded-full bg-brand-teal" />
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{r.title}</div>
                <p className="text-xs text-white/65">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

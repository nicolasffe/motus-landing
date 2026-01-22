import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const bullets = [
  { title: "Plataforma MOTUS", desc: "Tudo em um: carga, saúde, performance e retorno ao jogo." },
  { title: "IA preditiva", desc: "Alertas antes do treino para reduzir risco e fadiga." },
  { title: "Leitura rápida", desc: "Indicadores claros para staff e gestão na mesma visão." },
];

const impacts = [
  "Ajuste de carga no dia, sem esperar relatório.",
  "Retorno do atleta com contexto completo.",
  "Disponibilidade do elenco acima de 90%.",
];

export function PlatformIntro() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-white/80" />
              <span className="rounded-md bg-white/8 px-3 py-1 shadow-inner shadow-black/20">
                Plataforma
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
            </div>
            <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text text-transparent drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)] sm:text-5xl">
              Uma plataforma única para decidir rápido
            </h2>
            <p className="text-base text-white/75 sm:text-lg">
              A MOTUS organiza os dados do clube e transforma em sinais práticos. Menos ruído, mais ação preventiva.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {bullets.map((item) => (
                <div key={item.title} className="card-premium px-4 py-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    {item.title}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="#plataforma" variant="secondary">
                Ver dashboards
              </Button>
              <Button href="#contato" variant="primary">
                Agendar demo
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-premium p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                    Vista rápida
                  </div>
                  <div className="text-sm font-semibold text-white">Produto em ação</div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/70">
                  MOTUS IA
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="card-premium p-4 backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                    Carga
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/20">
                    <div className="h-2 w-2/3 rounded-full bg-brand-teal" />
                  </div>
                  <div className="mt-3 text-xs text-white/60">Microciclo</div>
                  <div className="text-sm font-semibold text-white">Estável</div>
                </div>

                <div className="card-premium p-4 backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                    Alertas
                  </div>
                  <div className="mt-2 space-y-2 text-xs text-white">
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1">
                      <span>Fadiga</span>
                      <span className="rounded-full bg-brand-teal/20 px-2 py-0.5 text-[11px] text-brand-teal">
                        Médio
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-1">
                      <span>Sobrecarga</span>
                      <span className="rounded-full bg-red-400/20 px-2 py-0.5 text-[11px] text-red-200">
                        Alto
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-premium p-4 backdrop-blur-md">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-white/50">
                    Retorno
                  </div>
                  <div className="mt-2 space-y-1 text-xs text-white/70">
                    <div className="flex items-center justify-between">
                      <span>Atleta 03</span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-white">
                        Revisão
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Atleta 09</span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-white">
                        Liberado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium p-6 backdrop-blur-md">
              <div className="text-sm font-semibold text-white">Como ajuda o time</div>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {impacts.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="card-premium mt-6 p-5 backdrop-blur-md">
                <div className="text-xs text-white/60">Ritual sugerido</div>
                <div className="mt-2 grid gap-2 text-sm text-white/75">
                  <div className="flex justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>Pré-treino</span>
                    <span className="text-white/60">Alertas + prontidão</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>Pós-treino</span>
                    <span className="text-white/60">Resposta ao esforço</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-white/5 px-3 py-2">
                    <span>Planejamento</span>
                    <span className="text-white/60">Microciclo seguinte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

function SignalCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card-premium p-6 backdrop-blur-md">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
        {title}
      </div>
      <p className="mt-3 text-sm text-white/75">{desc}</p>
    </div>
  );
}

export function MotusAI() {
  return (
    <section id="ia" className="relative overflow-hidden py-20">
      <SectionHeaderDark
        eyebrow="MOTUS IA"
        title="Alertas preditivos antes do treino começar"
        subtitle="Modelo treinado com o contexto do clube para antecipar risco e fadiga."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <SignalCard
                title="Sobrecarga"
                desc="Mudança brusca volume/intensidade."
              />
              <SignalCard
                title="Fadiga"
                desc="Queda de prontidão e recuperação lenta."
              />
              <SignalCard
                title="Performance"
                desc="Variação de output e esforço."
              />
              <SignalCard
                title="Risco individual"
                desc="Histórico + exposição para priorizar."
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#contato" variant="primary">
                Solicitar demonstração
              </Button>
              <Button href="#plataforma" variant="secondary">
                Ver dashboards
              </Button>
            </div>

            <div className="card-premium mt-6 p-5 backdrop-blur-md">
              <div className="text-sm font-semibold text-white">Exemplo de alerta</div>
              <p className="mt-2 text-sm text-white/70">
                Atleta 07 • Sobrecarga alta detectada (volume/intensidade ↑ em 3 sessões).
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {[
                  { k: "Ação imediata", v: "Reduzir 20% da carga no dia" },
                  { k: "Monitorar", v: "Sono + prontidão pré-treino" },
                  { k: "Próximo passo", v: "Reavaliar em 48h" },
                ].map((item) => (
                  <div key={item.k} className="card-premium px-3 py-2 backdrop-blur-md">
                    <div className="text-[11px] uppercase tracking-[0.08em] text-white/60">{item.k}</div>
                    <div className="text-sm font-semibold text-white">{item.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/65">
                <span className="rounded-full bg-white/5 px-3 py-1">Sugestão automática de ação</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Compartilhar com staff</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-premium p-6 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">Alertas da IA</div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-teal" />
                  <span className="text-xs text-white/70">Ativo</span>
                </div>
              </div>

              <div className="card-premium mt-6 p-4 backdrop-blur-md">
                <div className="text-xs text-white/60">Alertas recentes</div>

                <div className="mt-3 grid gap-3">
                  {[
                    { k: "Atleta 07", v: "Risco: sobrecarga", s: "Alto" },
                    { k: "Atleta 12", v: "Fadiga acumulada", s: "Médio" },
                    { k: "Atleta 03", v: "Recuperação lenta", s: "Médio" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="card-premium flex items-center justify-between px-3 py-2 backdrop-blur-md"
                    >
                      <div>
                        <div className="text-sm text-white">{row.k}</div>
                        <div className="text-xs text-white/60">{row.v}</div>
                      </div>
                      <div className="text-xs font-semibold text-white/80">{row.s}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <Image
                  src="/brand/motus-ia-white.png"
                  alt="MOTUS IA"
                  width={140}
                  height={36}
                  className="opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

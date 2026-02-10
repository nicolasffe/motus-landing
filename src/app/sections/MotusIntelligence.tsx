import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";
import { TacticalBoardPanel } from "@/components/ui/TacticalBoardPanel";

const riskBars = [32, 38, 35, 49, 58, 52, 63];
const riskLabels = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

export function MotusIntelligence() {
  return (
    <section id="ia" className="motus-ia section-shell relative overflow-hidden">
      <Container>
        <div className="relative">
          <SectionHeaderDark
            eyebrow="MOTUS IA"
            title="Camada de inteligência para prevenção e performance"
            subtitle="IA generativa para orientar o treino e IA preditiva para sinalizar risco antes da lesão."
            align="center"
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <div className="ia-label reveal inline-flex items-center gap-2 rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                IA Generativa
              </div>
              <h3 className="ia-title reveal reveal-delay-1 section-title-lg text-white">
                Incrementando a decisão: nossa <span className="ia-emphasis text-brand-teal">IA generativa</span> auxilia o treino
              </h3>
              <p className="ia-copy reveal reveal-delay-2 section-subtitle section-text text-white/82">
                Insights personalizados ajudam a comissão a escolher o foco de cada sessão, priorizar atletas e alinhar
                decisões com mais clareza ao longo da semana.
              </p>
              <ul className="reveal reveal-delay-3 section-bullets section-text text-base">
                {[
                  "Definir foco por atleta ou grupo antes do treino.",
                  "Consolidar prioridades com justificativa objetiva.",
                  "Compartilhar contexto rápido entre campo e departamento médico.",
                ].map((item) => (
                  <li key={item}>
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal reveal-delay-1">
              <TacticalBoardPanel />
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="motus-ia-chart editorial-media reveal reveal-delay-1">
              <div className="panel-surface panel-surface-strong relative overflow-hidden rounded-2xl p-4 sm:p-5">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(25,211,197,0.12),transparent_46%)]" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/14 bg-black/25 px-4 py-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/68">Painel diário de risco</p>
                      <p className="text-xs text-white/64">Atualizado há 2 min</p>
                    </div>
                    <div className="rounded-lg border border-brand-teal/40 bg-brand-teal/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal">
                      Ao Vivo
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="panel-surface rounded-xl p-3">
                      <div className="text-[11px] uppercase tracking-[0.1em] text-white/68">Disponíveis</div>
                      <div className="mt-1 text-3xl font-extrabold text-white">94%</div>
                    </div>
                    <div className="panel-surface rounded-xl p-3">
                      <div className="text-[11px] uppercase tracking-[0.1em] text-white/68">Em atenção</div>
                      <div className="mt-1 text-3xl font-extrabold text-amber-300">3</div>
                    </div>
                    <div className="panel-surface rounded-xl p-3">
                      <div className="text-[11px] uppercase tracking-[0.1em] text-white/68">Prontos</div>
                      <div className="mt-1 text-3xl font-extrabold text-brand-teal">28</div>
                    </div>
                  </div>

                  <div className="panel-surface panel-surface-strong rounded-xl p-3">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/68">Tendência semanal</div>
                      <div className="flex items-center gap-3 text-[11px] text-white/68">
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-brand-teal" />
                          Baixo
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                          Médio
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-rose-400" />
                          Alto
                        </span>
                      </div>
                    </div>

                    <div className="relative h-[176px]">
                      <div className="pointer-events-none absolute inset-0 grid grid-rows-4">
                        <span className="border-b border-white/8" />
                        <span className="border-b border-white/8" />
                        <span className="border-b border-white/8" />
                        <span />
                      </div>
                      <div className="absolute inset-0 flex items-end gap-2">
                        {riskBars.map((value, idx) => (
                          <div
                            key={`${value}-${idx}`}
                            className={`flex-1 rounded-sm ${
                              value >= 58
                                ? "bg-gradient-to-t from-[#a33245] via-[#d65067] to-[#ff7f95]"
                                : value >= 46
                                  ? "bg-gradient-to-t from-[#9a6a1d] via-[#cf9d2f] to-[#f4c658]"
                                  : "bg-gradient-to-t from-[#1d6b64] via-[#22a79b] to-[#5ad9ce]"
                            }`}
                            style={{ height: `${value}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-7 gap-2 text-center text-[11px] font-semibold text-white/64">
                      {riskLabels.map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                    <p className="mt-2 text-[11px] text-white/68">Escala relativa de risco semanal por grupo (0-100).</p>
                  </div>

                  <div className="panel-surface rounded-xl p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal">Recomendação da IA</div>
                    <p className="mt-1 text-sm text-white/78">
                      Reduzir volume do grupo ofensivo hoje e manter foco técnico/tático de baixa intensidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl space-y-4 lg:justify-self-end">
              <div className="ia-label reveal inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                IA Preditiva
              </div>
              <h3 className="ia-title reveal reveal-delay-1 section-title-lg text-white">
                <span className="ia-emphasis text-brand-teal">Prevenção proativa:</span> nosso modelo preditivo de IA
              </h3>
              <p className="ia-copy reveal reveal-delay-2 section-subtitle section-text text-white/82">
                Sensores, questionários e exames alimentam uma leitura contínua para indicar a
                <span className="ia-emphasis text-brand-teal"> possibilidade</span> de lesão antes que ocorra e orientar o ajuste correto.
              </p>
              <ul className="reveal reveal-delay-3 section-bullets section-text text-base">
                {[
                  "Sinalizar atenção com poucos alertas relevantes.",
                  "Ajustar carga com antecedência e critério técnico.",
                  "Registrar histórico para revisão semanal da equipe.",
                ].map((item) => (
                  <li key={item}>
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal reveal-delay-2 mt-12 flex justify-center">
            <div className="rounded-2xl border border-brand-teal/35 bg-gradient-to-r from-brand-teal/12 via-white/5 to-brand-blue/12 p-2 shadow-[0_16px_36px_rgba(25,211,197,0.2)] ring-1 ring-white/10">
              <Button
                href="#contato"
                variant="primary"
                className="h-12 px-8 text-base font-extrabold shadow-[0_10px_24px_rgba(25,211,197,0.36)] hover:shadow-[0_14px_30px_rgba(25,211,197,0.45)]"
              >
                Agendar demonstração
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

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
        title="IA que transforma dados em decisões seguras"
        subtitle="Modelos treinados com o contexto do clube para indicar sinais precoces, apoiar planejamento de carga e orientar o retorno do atleta."
        align="center"
      />

      <Container>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <SignalCard title="Sobrecarga" desc="Detecta mudanças relevantes de volume e intensidade antes do treino." />
              <SignalCard title="Fadiga" desc="Cruza prontidão, sono e recuperação para sugerir ajustes." />
              <SignalCard title="Performance" desc="Enxerga quedas de consistência para antecipar reforços ou rotação." />
              <SignalCard title="Retorno seguro" desc="Contextualiza histórico e progressão para apoiar a comissão e o DM." />
            </div>

            <div className="card-premium p-5 backdrop-blur-md">
              <div className="text-sm font-semibold text-white">Como a IA auxilia o staff</div>
              <ul className="mt-3 space-y-3 text-sm text-white/75">
                {[
                  "Sugere onde reduzir ou redistribuir carga no microciclo.",
                  "Aponta atletas que pedem atenção especial na recuperação.",
                  "Recomenda ritmo de retorno em conjunto com a comissão e o DM.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="#contato" variant="primary">
                  Solicitar demonstração
                </Button>
                <Button href="#plataforma" variant="secondary">
                  Ver plataformas
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card-premium overflow-hidden border border-white/12 bg-gradient-to-br from-brand-teal/14 via-black/70 to-black/90 px-4 py-4 shadow-[0_18px_42px_rgba(0,0,0,0.5)]">
              <div className="absolute -right-12 -top-12 h-14 w-24 rounded-full bg-brand-teal/18 blur-3xl" />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    Console da IA
                  </div>
                  <div className="text-sm font-semibold text-white">Sinais prontos para o staff</div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/70">
                  Insights
                </span>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Gestão do elenco", v: "Priorizar grupos e minutos" },
                  { k: "Planejamento de treino", v: "Ajustar microciclo com antecedência" },
                  { k: "Recuperação e retorno", v: "Acompanhar progressão com contexto" },
                  { k: "Comunicação", v: "Staff alinhado no mesmo sinal" },
                ].map((item) => (
                  <div key={item.k} className="rounded-xl border border-white/8 bg-white/5 px-4 py-3">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/65">
                      {item.k}
                    </div>
                    <div className="mt-1.5 text-sm font-semibold text-white/85 leading-snug">{item.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/30 p-3">
                {[
                  { k: "Carga", v: "estável", dot: "bg-brand-teal" },
                  { k: "Prontidão", v: "monitorar", dot: "bg-amber-300" },
                  { k: "Retorno", v: "em progresso", dot: "bg-sky-300" },
                ].map((row) => (
                  <div key={row.k} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <div className="flex items-center justify-between text-xs text-white/65">
                      <span>{row.k}</span>
                      <span className={`h-2 w-2 rounded-full ${row.dot}`} />
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">{row.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/70">
                Próximos passos sugeridos: revisar microciclo atual, alinhar comissão e DM, atualizar retorno em 48h.
              </div>

              <div className="mt-4 flex justify-center">
                <Image
                  src="/brand/motus-ia-white.png"
                  alt="MOTUS IA"
                  width={260}
                  height={96}
                  className="logo-dark h-18 w-auto opacity-95 drop-shadow-[0_16px_42px_rgba(25,211,197,0.4)]"
                />
                <Image
                  src="/brand/motus-ia-color.png"
                  alt="MOTUS IA"
                  width={260}
                  height={96}
                  className="logo-light hidden h-18 w-auto opacity-95 drop-shadow-[0_16px_42px_rgba(25,211,197,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const coreBullets = [
  "Previsibilidade: alertas automáticos baseados em variações musculares e sobrecargas.",
  "Integração: dados em uma única plataforma.",
  "Praticidade: dashboards em tempo real para tomada de decisão rápida.",
];

export function PlatformIntro() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Coluna de proposta */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-white/80" />
              <span className="rounded-md bg-white/8 px-3 py-1 shadow-inner shadow-black/20">
                Plataforma MOTUS
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
            </div>
            <h2 className="text-balance text-4xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text text-transparent drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)] sm:text-5xl">
              O que a MOTUS entrega desde o primeiro dia
            </h2>
            <p className="text-base text-white/75 sm:text-lg">
              Antecipar lesões e otimizar a performance dos atletas por meio de dados confiáveis, coletados e
              analisados em tempo real.
            </p>

            <div className="card-premium p-6 backdrop-blur-md">
              <div className="text-sm font-semibold text-white">Como entregamos valor</div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {coreBullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="#plataforma" variant="secondary">
                Ver fluxos
              </Button>
              <Button href="#contato" variant="primary">
                Agendar demo
              </Button>
            </div>
          </div>

          {/* Coluna de impacto real */}
          <div className="space-y-4 lg:self-stretch">
            <div className="card-premium relative flex flex-col gap-5 overflow-hidden border border-brand-teal/25 bg-gradient-to-br from-brand-teal/12 via-white/6 to-black/50 p-6 backdrop-blur-lg shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    Impacto real em campo
                  </div>
                  <div className="text-sm font-semibold text-white">Indicador de redução de casos</div>
                </div>
                <span className="rounded-full border border-brand-teal/30 bg-brand-teal/15 px-3 py-1 text-[11px] text-brand-teal">
                  Clube Guarani
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
                <div className="rounded-2xl border border-white/15 bg-black/30 px-4 py-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
                  <div className="text-xs uppercase tracking-[0.14em] text-white/60">Casos</div>
                  <div className="mt-2 flex items-center justify-center gap-4 text-4xl font-extrabold text-white">
                    <span className="text-red-200">31</span>
                    <span className="text-base text-white/60">→</span>
                    <span className="text-brand-teal">12</span>
                  </div>
                  <div className="mt-2 text-[11px] text-white/60">2023 → 2024</div>
                </div>

                <div className="space-y-3 text-sm text-white/80">
                  <p>
                    Redução de ocorrências em projeto com o Clube Guarani usando a metodologia Motus, aplicada
                    pelo fisiologista do clube.
                  </p>
                  <p className="text-white/70">
                    Somada à praticidade e aos insights preventivos da plataforma, a tendência é potencializar
                    resultados ao longo da temporada.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.12em] text-white/70">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Dados reais</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Metodologia Motus</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Temporada 2023-2024</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/common/DemoModalContext";

export function PlatformIntro() {
  const { open } = useDemoModal();

  return (
    <section id="plataforma-detalhe" className="section-shell relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="reveal flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-white/80" />
            <span className="rounded-md bg-white/8 px-3 py-1 shadow-inner shadow-black/20">Plataforma MOTUS</span>
            <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          </div>

          <div className="mt-10 grid gap-8">
            <h2 className="reveal reveal-delay-1 section-title-xl text-balance bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text font-extrabold tracking-tight text-transparent drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)] text-center">
              Plataforma que encaixa no dia a dia do clube
            </h2>

            <p className="reveal reveal-delay-2 section-subtitle section-text mx-auto text-white/78 text-center">
              A MOTUS reúne carga, wellness, testes e jogo em um painel único. A comissão visualiza riscos no início do
              dia, ajusta o microciclo com clareza e mantém técnico e departamento médico no mesmo contexto.
            </p>

            <ul className="reveal reveal-delay-3 section-bullets mx-auto w-full max-w-3xl text-base">
              {[
                "Priorizar atletas e grupos antes do treino.",
                "Ajustar carga com base em sinais relevantes.",
                "Fechar a semana com próximos passos claros.",
              ].map((item) => (
                <li key={item}>
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-3 section-actions justify-center">
              <Button variant="primary" onClick={open}>
                Agendar demonstração
              </Button>
              <Button href="#ia" variant="secondary">
                Ver fluxos
              </Button>
            </div>
          </div>

          <div className="mt-14 border-t border-white/12 pt-12">
            <div className="grid gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-4">
                <div className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                  Impacto real demonstrado
                </div>
                <h3 className="reveal reveal-delay-1 section-title-lg text-white">Menos casos, mais confiança no elenco</h3>
                <p className="reveal reveal-delay-2 section-subtitle section-text text-white/76">
                  No time profissional do Guarani Futebol Clube, a leitura única combinada a alertas preventivos reduziu
                  os casos de 31 para 12 na temporada seguinte, sem ampliar o staff e com decisões mais consistentes.
                </p>
                <ul className="reveal reveal-delay-3 section-bullets section-text text-sm">
                  {[
                    "Dados reais de rotina de campo.",
                    "Metodologia aplicada pela equipe MOTUS.",
                    "Revisão semanal para ajustes contínuos.",
                  ].map((item) => (
                    <li key={item}>
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="editorial-media reveal reveal-delay-1">
                <Image
                  src="/images/pexels-franco-monsalvo-252430633-30584997.jpg"
                  alt="Jogadores durante aquecimento em campo"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />
                <div className="editorial-overlay" />
                <div className="layer-panel absolute bottom-4 left-4 rounded-2xl px-4 py-3 text-sm text-white backdrop-blur">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                    Indicador de redução de casos
                  </div>
                  <p className="mt-1 text-2xl font-extrabold text-white">31 {"->"} 12</p>
                  <p className="text-xs text-white/75">Guarani Futebol Clube • 2023 {"->"} 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

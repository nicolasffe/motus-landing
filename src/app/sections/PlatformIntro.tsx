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
          <div className="reveal flex items-center justify-center gap-2">
            <span className="h-4 w-1 rounded-full bg-brand-teal shadow-[0_0_18px_rgba(25,211,197,0.45)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/68">Plataforma MOTUS</span>
          </div>

          <div className="mt-10 grid gap-8">
            <h2 className="reveal reveal-delay-1 section-title-xl text-balance bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text font-extrabold tracking-tight text-transparent drop-shadow-[0_12px_30px_rgba(0,0,0,0.4)] text-center">
              Plataforma que encaixa no dia a dia do clube
            </h2>

            <p className="reveal reveal-delay-2 section-subtitle section-text mx-auto text-white/78 text-center">
              A MOTUS reúne carga, wellness, testes, agenda de treino e plano tático em um painel único. A comissão
              visualiza riscos no início do dia, organiza a sessão com objetivos claros e mantém técnico, preparadores e
              departamento médico no mesmo contexto.
            </p>

            <ul className="reveal reveal-delay-3 section-bullets mx-auto w-full max-w-3xl text-base">
              {[
                "Priorizar atletas e grupos antes do treino, com alertas e prontidão.",
                "Organizar a sessão: carga planejada, objetivos técnicos/táticos e tarefas do staff.",
                "Fechar o dia e a semana com registro de execução, minutos e próximos passos claros.",
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
                  Em um clube profissional, a leitura única somada a alertas preventivos reduziu os afastamentos de 31
                  para 12 na temporada seguinte, sem aumentar o staff e com decisões mais consistentes.
                </p>
                <ul className="reveal reveal-delay-3 section-bullets section-text text-sm">
                  {[
                    "Dados diários do elenco centralizados.",
                    "Plano de sessão com carga, foco físico e tático no mesmo painel.",
                    "Alertas priorizados por risco e prontidão, revisados semanalmente com o staff.",
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

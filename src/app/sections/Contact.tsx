"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/common/DemoModalContext";

export function Contact() {
  const { open } = useDemoModal();

  return (
    <section id="contato" className="section-shell relative overflow-hidden">
      <SectionHeaderDark
        eyebrow="Contato"
        title="Fale com o time MOTUS"
        subtitle="Uma conversa objetiva para mostrar como a MOTUS se encaixa na rotina do clube."
        align="center"
      />

      <Container>
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <div className="reveal text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">
              O que você vê na demonstração
            </div>
            <h3 className="reveal reveal-delay-1 section-title-lg text-white">Operação integrada em um único fluxo</h3>
            <p className="reveal reveal-delay-2 section-subtitle section-text text-white/76">
              Mostramos a rotina diária da plataforma e como as decisões ficam mais rápidas entre comissão técnica,
              preparação física e departamento médico.
            </p>
            <ul className="reveal reveal-delay-3 section-bullets section-text text-base">
              {[
                "Painel diário de risco e prontidão.",
                "Ajustes de carga orientados por IA.",
                "Resumo semanal pronto para reunião.",
              ].map((text) => (
                <li key={text}>
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="layer-soft reveal reveal-delay-2 space-y-5 rounded-2xl p-6 lg:ml-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">Próximo passo</div>
            <h4 className="section-title-lg text-white">Pronto para agendar?</h4>
            <p className="section-subtitle text-white/72">
              Clique em agendar, preencha os dados no modal e retornamos para confirmar o horário.
            </p>
            <div className="section-actions pt-1">
              <Button onClick={open} variant="primary">
                Agendar demonstração
              </Button>
              <a
                href="https://wa.me/5512981373728?text=Ol%C3%A1%2C%20quero%20entender%20a%20MOTUS%20para%20meu%20clube."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>
            <p className="text-xs text-white/55">Ao enviar o formulário, você autoriza contato para agendamento.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

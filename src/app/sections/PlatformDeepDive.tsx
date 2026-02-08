import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

export function PlatformDeepDive() {
  return (
    <section id="plataforma-detalhe" className="relative overflow-hidden py-20">
      <SectionHeaderDark
        eyebrow="Prevenção proativa"
        title="Modelo preditivo de IA para sinalizar risco antes da lesão"
        subtitle="Análise em tempo real de sensores, questionários e exames para indicar a possibilidade de lesão antes que ocorra."
        align="center"
      />

      <Container>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4 max-w-3xl">
            <p className="text-base text-white/78">
              Unimos dados do clube e aplicamos um modelo preditivo que lê contexto de carga, prontidão e histórico
              clínico. O resultado são poucos alertas realmente relevantes, com a ação sugerida para o staff decidir no
              mesmo dia.
            </p>
            <p className="text-base text-white/78">
              Esse fluxo reduz ruído, antecipa risco antes da sessão e mantém DM e comissão técnica alinhados sobre quem
              monitorar e que ajuste aplicar.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Alertas curtos e acionáveis
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Contexto do atleta preservado
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/pexels-franco-monsalvo-252430633-30584997.jpg"
              alt="Visual abstrato representando análise preditiva"
              width={1400}
              height={900}
              className="h-full w-full object-cover opacity-60"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-black/35 to-black/60" />
          </div>
        </div>
      </Container>
    </section>
  );
}

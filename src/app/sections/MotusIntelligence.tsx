import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

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

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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

            <div className="motus-ia-figure editorial-media reveal reveal-delay-1">
              <Image
                src="/images/jogador_semfundo.png"
                alt="Visual analítico ilustrando atleta e dados"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <div className="motus-ia-athlete-overlay editorial-overlay" />
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="motus-ia-chart editorial-media reveal reveal-delay-1">
              <div className="block dark:hidden">
                <Image
                  src="/images/injury-probability-light.svg"
                  alt="Gráfico de probabilidade de lesão com linha e área"
                  width={1400}
                  height={900}
                  className="h-full w-full object-contain p-2"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/images/injury-probability-dark.svg"
                  alt="Gráfico de probabilidade de lesão com linha e área"
                  width={1400}
                  height={900}
                  className="h-full w-full object-cover"
                />
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

          <div className="reveal reveal-delay-2 section-actions mt-10 justify-center">
            <Button href="#contato" variant="primary">
              Agendar demonstração
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

export function Solution() {
  return (
    <section id="solucao" className="relative py-20">
      <SectionHeaderDark
        eyebrow="A solução MOTUS"
        title="Dados claros, decisões mais seguras"
        subtitle="Carga, wellness e jogo em um só lugar para orientar treino, recuperação e gestão."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Centralização imediata",
              desc: "Carga, saúde, performance e retorno em uma linha do tempo única.",
            },
            {
              title: "Insights acionáveis",
              desc: "Sinais precoces de risco, fadiga e queda de performance.",
            },
            {
              title: "Gestão por atleta",
              desc: "Histórico, prontidão e recomendações contextualizadas para o staff.",
            },
          ].map((item) => (
            <div key={item.title} className="card-premium p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Solução
              </div>
              <div className="mt-2 text-base font-semibold text-white">{item.title}</div>
              <p className="mt-2 text-sm text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-premium mt-10 p-8 backdrop-blur-md">
          <p className="text-sm text-white/75">
            Dashboards prontos; a IA sugere ajustes assim que os dados chegam. Sem etapas complexas ou curva de
            aprendizado.
          </p>
        </div>
      </Container>
    </section>
  );
}

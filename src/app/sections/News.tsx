import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

const updates = [
  {
    date: "Jan 2026",
    title: "Alertas de risco mais objetivos",
    desc: "Leitura diária com foco no que exige ajuste imediato.",
  },
  {
    date: "Dez 2025",
    title: "Wellness integrado ao painel",
    desc: "Sono e prontidão entram no fluxo sem depender de planilhas.",
  },
  {
    date: "Nov 2025",
    title: "Resumo semanal enxuto",
    desc: "Consolidado com os pontos-chave para staff e gestão.",
  },
];

export function News() {
  return (
    <section id="novidades" className="section-shell relative overflow-hidden">
      <SectionHeaderDark
        eyebrow="Novidades"
        title="Atualizações da plataforma"
        subtitle="Evoluções contínuas para manter decisão técnica, física e médica alinhadas."
        align="center"
        size="sm"
      />

      <Container>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="reveal flex items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-white/60">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-white/80" />
            Changelog editorial
            <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
          </div>

          <div className="mt-6 border-y border-white/10">
            {updates.map((item, index) => (
              <article
                key={item.title}
                className={`reveal grid gap-3 py-5 sm:grid-cols-[120px_1fr] sm:items-start sm:gap-5 ${
                  index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{item.date}</p>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

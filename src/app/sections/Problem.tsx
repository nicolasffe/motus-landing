import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

export function Problem() {
  return (
    <section className="relative py-20">
      <SectionHeaderDark
        eyebrow="Contexto"
        title="Sem leitura única, o risco vira afastamento"
        subtitle="Dados soltos atrasam a decisão e derrubam a disponibilidade."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Informação espalhada",
              desc: "Planilhas e apps sem padrão atrasam o staff.",
            },
            {
              title: "Pouco tempo para decidir",
              desc: "Sem sinal claro, ajustes de treino ficam inseguros.",
            },
            {
              title: "Elenco indisponível",
              desc: "Afastamentos quebram sequência e aumentam o custo.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-premium p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Contexto
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                {item.title}
              </div>
              <p className="mt-2 text-sm text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

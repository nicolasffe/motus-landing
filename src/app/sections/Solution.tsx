import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

export function Solution() {
  return (
    <section id="solucao" className="relative py-20">
      <SectionHeaderDark
        eyebrow="A solução MOTUS"
        title="Tudo o que importa em uma leitura simples"
        subtitle="Dados do clube centralizados com alertas que o staff usa no mesmo dia."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Centralização imediata",
              desc: "Carga, saúde e performance no mesmo painel.",
            },
            {
              title: "Alertas acionáveis",
              desc: "Sinais claros de risco, fadiga e retorno.",
            },
            {
              title: "Histórico por atleta",
              desc: "Contexto imediato para decidir em minutos.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-premium p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                Solução
              </div>
              <div className="mt-2 text-base font-semibold text-white">
                {item.title}
              </div>
              <p className="mt-2 text-sm text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="card-premium mt-10 p-8 backdrop-blur-md">
          <p className="text-sm text-white/75">
            Comece com dashboards prontos; a camada de IA entra assim que os dados chegam. Sem etapas complexas ou curvas de aprendizado.
          </p>
        </div>
      </Container>
    </section>
  );
}

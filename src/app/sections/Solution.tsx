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
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-base font-semibold text-white">
                {item.title}
              </div>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-8">
          <p className="text-sm text-white/75">
            Comece com dashboards prontos; a camada de IA entra assim que os dados chegam. Sem etapas complexas ou curvas de aprendizado.
          </p>
        </div>
      </Container>
    </section>
  );
}

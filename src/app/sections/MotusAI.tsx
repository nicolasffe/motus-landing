import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

export function MotusAI() {
  return (
    <section id="ia" className="relative overflow-hidden py-18">
      <SectionHeaderDark
        eyebrow="IA generativa para treino"
        title="Insights que otimizam a decisão da comissão"
        subtitle="Geramos insights personalizados e indicamos a valência a ser trabalhada para cada atleta."
        align="center"
      />

      <Container>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4 max-w-3xl">
            <p className="text-base text-white/78">
              A IA generativa cruza necessidades individuais dos atletas com o plano do clube. Ela otimiza a tomada de
              decisão da comissão técnica e indica qual valência deve ser trabalhada em cada sessão.
            </p>
            <p className="text-base text-white/78">
              Em minutos, você recebe um resumo com quem priorizar, ajustes propostos e o porquê, mantendo staff e DM na
              mesma página antes do treino começar.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Insights personalizados
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Foco na valência certa
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="#contato" variant="primary">
                Solicitar demonstração
              </Button>
              <Button href="#plataforma-detalhe" variant="secondary">
                Ver fluxos
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/pexels-han-798356342-31232676.jpg"
              alt="Representação gráfica de atleta e dados em movimento"
              width={1400}
              height={900}
              className="h-full w-full object-cover opacity-65"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-black/35 to-black/60" />
          </div>
        </div>
      </Container>
    </section>
  );
}

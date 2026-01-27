import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden hero-section">
      {/* Background mais conectado ao produto */}
      <div className="absolute inset-0 hero-bg">
        <Image
          src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1800&q=80"
          alt="Atletas de futebol em campo"
          fill
          priority
          className="object-cover brightness-[0.65] saturate-115"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/70 to-black/95" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#060c15] to-[#060c15]" />
      </div>

      <Container>
        <div className="relative min-h-screen max-w-6xl flex flex-col gap-8 pt-20 pb-10 lg:pt-24">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-white/80" />
            <span className="rounded-md bg-white/8 px-3 py-1 shadow-inner shadow-black/20">
              {site.hero.badge}
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          </div>

          <h1 className="max-w-3xl text-balance text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-white to-brand-teal/80 bg-clip-text text-transparent drop-shadow-[0_14px_38px_rgba(0,0,0,0.5)] sm:text-6xl">
            {site.hero.headline}
          </h1>

          <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
            {site.hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#contato" variant="primary">
              {site.hero.primaryCta}
            </Button>
            <Button href="#plataforma" variant="secondary">
              {site.hero.secondaryCta}
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 max-w-3xl">
            {[
              { k: "Leitura única", v: "Carga, saúde e performance" },
              { k: "IA preditiva", v: "Alertas antes do treino" },
              { k: "Retorno seguro", v: "Critérios claros para voltar ao jogo" },
            ].map((item) => (
              <div key={item.k} className="card-premium px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  {item.k}
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

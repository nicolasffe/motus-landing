import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background mais conectado ao produto */}
      <div className="absolute inset-0">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white/80">
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            <span>{site.hero.badge}</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:text-5xl">
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
              { k: "Disponibilidade", v: "Elenco acima de 90%" },
            ].map((item) => (
              <div key={item.k} className="card-premium border-white/15 bg-white/5 px-4 py-3">
                <div className="text-xs text-white/60">{item.k}</div>
                <div className="mt-1 text-sm font-semibold text-white">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

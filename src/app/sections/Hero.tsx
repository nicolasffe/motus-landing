"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/common/DemoModalContext";
import { site } from "@/content/site";

export function Hero() {
  const { open } = useDemoModal();

  const [leadWord, ...restWords] = site.hero.headline.split(" ");

  return (
    <section className="hero-section relative min-h-[108vh] overflow-hidden lg:min-h-[114vh]">
      <div className="hero-bg absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1800&q=80"
          alt="Jogo de futebol em campo"
          fill
          priority
          className="hero-img hero-img-dark object-cover brightness-[0.65] saturate-115"
          sizes="100vw"
        />
        <Image
          src="/images/imagemcampo.jpg"
          alt="Bola de futebol em campo de neve (modo claro)"
          fill
          priority
          className="hero-img hero-img-light hidden object-cover brightness-[0.95] saturate-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/70 to-black/70" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>

      <Container>
        <div className="relative flex min-h-[108vh] max-w-6xl flex-col gap-8 pb-14 pt-20 lg:min-h-[114vh] lg:pt-24">
          <h1 className="hero-title reveal reveal-delay-1 max-w-[16ch] py-2 text-[clamp(2.35rem,5.3vw,4.85rem)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white drop-shadow-[0_14px_38px_rgba(0,0,0,0.5)]">
            <span className="text-brand-teal">{leadWord}</span>{" "}
            {restWords.join(" ")}
          </h1>

          <p className="hero-subtitle reveal reveal-delay-2 max-w-[58ch] text-[clamp(1.02rem,1.1vw,1.25rem)] leading-[1.68] text-white/84">
            {site.hero.subheadline}
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
            <Button
              variant="primary"
              onClick={open}
              className="h-12 px-7 text-base shadow-[0_10px_28px_rgba(25,211,197,0.2)] hover:shadow-[0_0_30px_rgba(25,211,197,0.35)]"
            >
              Agendar demonstração
            </Button>
          </div>

          <p className="reveal reveal-delay-3 max-w-2xl text-xs font-semibold uppercase tracking-[0.16em] text-white/68 sm:text-sm">
            Leitura única • IA preditiva • Decisão diária
          </p>
        </div>
      </Container>
    </section>
  );
}

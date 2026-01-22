"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { PlaceholderPanel } from "@/components/ui/PlaceholderPanel";
import { Button } from "@/components/ui/Button";

type TabKey = "carga" | "saude" | "performance" | "relatorios";

export function PlatformTabs() {
  const tabs = useMemo(
    () =>
      [
        {
          key: "carga",
          label: "Carga",
          title: "Carga sem ruído",
          bullets: [
            "Exposição por atleta e período",
            "Mudanças relevantes no microciclo",
            "Apoio imediato ao treino",
          ],
        },
        {
          key: "saude",
          label: "Saúde",
          title: "Saúde integrada",
          bullets: [
            "Registro simples por atleta",
            "Retorno ao jogo com contexto",
            "Prontidão ao alcance do staff",
          ],
        },
        {
          key: "performance",
          label: "Performance",
          title: "Resposta do atleta",
          bullets: [
            "Evolução por sessão e jogo",
            "Tendência de esforço e output",
            "Leitura clara para ajustes",
          ],
        },
        {
          key: "relatorios",
          label: "Relatórios",
          title: "Relatórios em 1 clique",
          bullets: [
            "Resumo semanal/mensal",
            "Indicadores chave para reuniões",
            "Histórico guardado para auditoria",
          ],
        },
      ] as const,
    []
  );

  const [active, setActive] = useState<TabKey>("carga");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section id="plataforma" className="relative py-20">
      <SectionHeaderDark
        eyebrow="Plataforma"
        title="Painéis feitos para decidir rápido"
        subtitle="Visual direto para comissão e gestão."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="grid grid-cols-2 gap-2">
              {tabs.map((t) => {
                const isActive = t.key === active;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={[
                      "rounded-xl px-3 py-2 text-sm font-semibold transition",
                      isActive
                        ? "bg-white text-brand-ink"
                        : "bg-black/20 text-white hover:bg-white/10 border border-white/10",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <div className="text-lg font-semibold text-white">{current.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {current.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#contato" variant="primary">
                  Solicitar demonstração
                </Button>
                <Button href="#ia" variant="secondary">
                  Ver MOTUS IA
                </Button>
              </div>
            </div>
          </div>

          <div>
            <PlaceholderPanel
              title={`Preview: ${current.label}`}
              subtitle="Troque por um print real quando quiser."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

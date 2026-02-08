"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

const faqs = [
  {
    q: "A MOTUS substitui as ferramentas que o clube já usa?",
    a: "Não. Centralizamos o que já existe; começamos por importação e evoluímos para integrações.",
  },
  {
    q: "Como a MOTUS IA funciona na prática?",
    a: "Analisa histórico e comportamento dos dados para apontar risco, fadiga e queda de performance com contexto.",
  },
  {
    q: "Quais perfis usam a plataforma no dia a dia?",
    a: "Fisiologia, preparação física, departamento médico e gestão, em uma interface simples.",
  },
  {
    q: "Quanto tempo leva para começar a usar?",
    a: "Com dados prontos, dashboards rodam em poucos dias; integrações vêm depois.",
  },
  {
    q: "A MOTUS é somente para futebol?",
    a: "Nasce no futebol, mas a lógica se aplica a outras modalidades com ajustes de contexto.",
  },
];

function Item({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card-premium backdrop-blur-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="text-sm font-semibold text-white">{q}</div>
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal/30 via-white/10 to-black/60 text-white shadow-lg shadow-black/30 ring-1 ring-white/10">
          {open ? "–" : "+"}
        </div>
      </button>

      {open ? (
        <div className="px-5 pb-5">
          <p className="text-sm text-white/70">{a}</p>
        </div>
      ) : null}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20">
      <SectionHeaderDark
        eyebrow="FAQ"
        title="Dúvidas rápidas antes da demonstração"
        subtitle="Respostas objetivas para acelerar a decisão."
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-3">
          {faqs.map((f, idx) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

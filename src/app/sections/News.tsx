"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Category = "Ciencia" | "Imprensa" | "Aplicacao";
type ContentType = "Estudo" | "Revisao" | "Materia";

type Update = {
  date: string;
  title: string;
  desc: string;
  url: string;
  source: string;
  lang?: "EN" | "BR";
  relevance: number;
  category: Category;
  type: ContentType;
  practicalImpact: string;
  readTime: string;
};

const updates: Update[] = [
  {
    date: "Nov 2025",
    title:
      "Exames ajudam a prevenir lesões esportivas antes mesmo da dor surgir | CNN Brasil",
    desc: "Visão clínica sobre biomarcadores (CK, cortisol, PCR) para ajustar treino antes da dor aparecer.",
    url: "https://www.cnnbrasil.com.br/saude/exames-ajudam-a-prevenir-lesoes-esportivas-antes-mesmo-da-dor-surgir/",
    source: "CNN Brasil",
    lang: "BR",
    relevance: 4,
    category: "Imprensa",
    type: "Materia",
    practicalImpact:
      "Antecipar ajuste de carga e recuperação antes de sinais clínicos mais graves.",
    readTime: "4 min",
  },
  {
    date: "Out 2024",
    title:
      "IA centrada em dados para prever lesões sem contato no futebol profissional",
    desc: "Estudo SBBD propõe modelo de Data-Centric AI para prever lesões na semana, com AUC-ROC de 79,8%.",
    url: "https://sol.sbc.org.br/index.php/sbbd/article/view/30691/30494",
    source: "SBBD / SBC",
    lang: "EN",
    relevance: 5,
    category: "Ciencia",
    type: "Estudo",
    practicalImpact:
      "Criar alerta semanal de risco para decisões de treino e rotação de atletas.",
    readTime: "7 min",
  },
  {
    date: "Jan 2023",
    title:
      "Aplicação de aprendizado de máquina no futebol: revisão sistemática",
    desc: "Revisão da Biology of Sport sobre uso de ML no futebol, incluindo blocos de lesões, performance e talento.",
    url: "https://pubmed.ncbi.nlm.nih.gov/36636183/",
    source: "PubMed",
    lang: "EN",
    relevance: 3,
    category: "Ciencia",
    type: "Revisao",
    practicalImpact:
      "Definir quais variáveis de performance e lesão têm maior retorno analítico.",
    readTime: "6 min",
  },
  {
    date: "Mai 2016",
    title:
      "Marcadores bioquímicos na síndrome de overtraining em jogadores de futebol masculino",
    desc: "Revisão dos principais marcadores (CK, cortisol, ureia) para detectar overtraining no futebol.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/419/360",
    source: "RBFF",
    lang: "BR",
    relevance: 4,
    category: "Aplicacao",
    type: "Revisao",
    practicalImpact:
      "Ajustar microciclo com base em CK, cortisol e ureia em momentos de congestão.",
    readTime: "5 min",
  },
  {
    date: "Fev 2018",
    title:
      "Monitoramento de eletrólitos e danos musculares em atletas de futebol de elite",
    desc: "Estudo longitudinal com eletrólitos, CK, LDH e função renal para decisões de carga na temporada.",
    url: "https://www.rbne.com.br/index.php/rbne/article/view/960?utm_source=chatgpt.com",
    source: "RBNE",
    lang: "BR",
    relevance: 5,
    category: "Aplicacao",
    type: "Estudo",
    practicalImpact:
      "Reduzir risco de queda de performance com monitoramento laboratorial contínuo.",
    readTime: "5 min",
  },
  {
    date: "Nov 2012",
    title:
      "Biomarcadores de estresse no futebol: dosagem sanguínea de creatina quinase",
    desc: "Uso prático da CK como indicador de microlesão e ajuste de volume no microciclo.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/127?utm_source=chatgpt.com",
    source: "RBFF",
    lang: "BR",
    relevance: 2,
    category: "Aplicacao",
    type: "Materia",
    practicalImpact:
      "Usar CK como sinal de microlesão para modular volume e intensidade do treino.",
    readTime: "3 min",
  },
];

const filters: Array<{ id: "Todos" | Category; label: string }> = [
  { id: "Todos", label: "Todos" },
  { id: "Ciencia", label: "Ciência" },
  { id: "Imprensa", label: "Imprensa" },
  { id: "Aplicacao", label: "Aplicação no campo" },
];

const monthOrder: Record<string, number> = {
  Jan: 1,
  Fev: 2,
  Mar: 3,
  Abr: 4,
  Mai: 5,
  Jun: 6,
  Jul: 7,
  Ago: 8,
  Set: 9,
  Out: 10,
  Nov: 11,
  Dez: 12,
};

function toDateKey(value: string) {
  const [month, year] = value.split(" ");
  const y = Number(year) || 0;
  const m = monthOrder[month] || 0;
  return y * 100 + m;
}

export function News() {
  const [activeFilter, setActiveFilter] = useState<"Todos" | Category>("Todos");

  const sortedUpdates = useMemo(
    () =>
      [...updates].sort((a, b) => {
        if (b.relevance !== a.relevance) return b.relevance - a.relevance;
        return toDateKey(b.date) - toDateKey(a.date);
      }),
    [],
  );

  const filteredUpdates = useMemo(
    () =>
      activeFilter === "Todos"
        ? sortedUpdates
        : sortedUpdates.filter((item) => item.category === activeFilter),
    [activeFilter, sortedUpdates],
  );

  const [featured, ...secondary] = filteredUpdates;

  const sectionTag =
    activeFilter === "Todos"
      ? "Leituras selecionadas por impacto prático"
      : `Leituras em ${filters.find((item) => item.id === activeFilter)?.label.toLowerCase()}`;

  return (
    <section id="novidades" className="section-shell relative overflow-hidden">
      <SectionHeaderDark
        eyebrow="Evidências"
        title="Radar editorial de performance e prevenção"
        subtitle="Curadoria de ciência, imprensa e aplicação prática para decisões mais seguras na rotina do clube."
        align="center"
        size="sm"
      />

      <Container>
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="reveal flex items-center justify-center">
            <span className="h-px w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <div className="reveal reveal-delay-1 mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`inline-flex h-9 items-center rounded-full border px-4 text-xs font-semibold uppercase tracking-[0.08em] transition-colors sm:text-[11px] ${
                    isActive
                      ? "border-brand-teal/60 bg-brand-teal/15 text-white"
                      : "border-white/16 bg-black/20 text-white/72 hover:border-white/28 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="relative mt-10 space-y-8">
            {featured ? (
              <article className="reveal border-y border-white/16 py-6 sm:py-8">
                <div className="grid gap-7 lg:grid-cols-[1.35fr_0.85fr] lg:gap-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-7 items-center rounded-full border border-brand-teal/35 bg-brand-teal/12 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                        Destaque
                      </span>
                    </div>

                    <h3 className="text-[1.28rem] font-semibold leading-snug text-white sm:text-[1.48rem]">
                      {featured.title}
                    </h3>
                    <p className="max-w-[80ch] text-sm leading-relaxed text-white/78 sm:text-base">
                      {featured.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-7 items-center rounded-full border border-brand-teal/35 bg-brand-teal/12 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                        {featured.source}
                      </span>
                      <span className="inline-flex h-7 items-center rounded-full border border-white/18 bg-black/30 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/82">
                        {featured.date}
                      </span>
                      {featured.lang ? (
                        <span className="inline-flex h-7 items-center rounded-full border border-white/18 bg-black/30 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/82">
                          {featured.lang}
                        </span>
                      ) : null}
                    </div>

                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-brand-teal transition-colors hover:text-white"
                    >
                      Ler fonte
                      <span aria-hidden>↗</span>
                    </a>
                  </div>

                  <aside className="space-y-4 border-l border-white/14 pl-5 sm:pl-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-teal">
                      Por que importa
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/84">
                      {featured.practicalImpact}
                    </p>

                    <div className="mt-4 border-t border-white/12 pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/72">
                        Trilha
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {
                          filters.find((item) => item.id === featured.category)
                            ?.label
                        }
                      </p>
                    </div>

                    <div className="mt-4 border-t border-white/12 pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/72">
                        Curadoria
                      </p>
                      <p className="mt-1 text-sm text-white/82">{sectionTag}</p>
                    </div>
                  </aside>
                </div>
              </article>
            ) : null}

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/62">
                Trilhas editoriais
              </p>

              <ol className="divide-y divide-white/12 border-y border-white/12">
                {secondary.map((item, index) => (
                  <li
                    key={item.title}
                    className={`reveal py-5 sm:py-6 ${
                      index === 0
                        ? "reveal-delay-1"
                        : index === 1
                          ? "reveal-delay-2"
                          : "reveal-delay-3"
                    }`}
                  >
                    <article className="grid gap-4 sm:grid-cols-[56px_1fr] sm:gap-5">
                      <div className="text-2xl font-semibold leading-none tracking-tight text-brand-teal/85">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/68">
                          <span>{item.source}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                          {item.lang ? (
                            <>
                              <span>•</span>
                              <span>{item.lang}</span>
                            </>
                          ) : null}
                        </div>

                        <h3 className="text-[1.06rem] font-semibold leading-snug text-white sm:text-[1.12rem]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/78">
                          {item.desc}
                        </p>
                        <p className="text-sm leading-relaxed text-brand-teal/90">
                          {item.practicalImpact}
                        </p>

                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-white"
                        >
                          Ler fonte
                          <span aria-hidden>↗</span>
                        </a>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

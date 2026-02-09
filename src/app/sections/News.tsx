import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Update = {
  date: string;
  title: string;
  desc: string;
  url: string;
  source: string;
  sourceAbbr: string;
  highlight?: boolean;
  lang?: "EN" | "BR";
};

const updates: Update[] = [
  {
    date: "Nov 2025",
    title: "Exames ajudam a prevenir lesões esportivas antes mesmo da dor surgir | CNN Brasil",
    desc: "Visão clínica sobre biomarcadores (CK, cortisol, PCR) para ajustar treino antes da dor aparecer.",
    url: "https://www.cnnbrasil.com.br/saude/exames-ajudam-a-prevenir-lesoes-esportivas-antes-mesmo-da-dor-surgir/",
    source: "CNN Brasil",
    sourceAbbr: "CNN",
    highlight: true,
    lang: "BR",
  },
  {
    date: "Out 2024",
    title: "IA centrada em dados para prever lesões sem contato no futebol profissional",
    desc: "Estudo SBBD propõe modelo de Data-Centric AI para prever lesões na semana, com AUC-ROC de 79,8%.",
    url: "https://sol.sbc.org.br/index.php/sbbd/article/view/30691/30494",
    source: "SBBD / SBC",
    sourceAbbr: "SBC",
    lang: "EN",
  },
  {
    date: "Jan 2023",
    title: "Aplicação de aprendizado de máquina no futebol: revisão sistemática",
    desc: "Revisão da Biology of Sport sobre uso de ML no futebol, incluindo blocos de lesões, performance e talento.",
    url: "https://pubmed.ncbi.nlm.nih.gov/36636183/",
    source: "PubMed",
    sourceAbbr: "PM",
    lang: "EN",
  },
  {
    date: "Mai 2016",
    title: "Marcadores bioquímicos na síndrome de overtraining em jogadores de futebol masculino",
    desc: "Revisão dos principais marcadores (CK, cortisol, ureia) para detectar overtraining no futebol.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/419/360",
    source: "RBFF",
    sourceAbbr: "RB",
    lang: "BR",
  },
  {
    date: "Fev 2018",
    title: "Monitoramento de eletrólitos e danos musculares em atletas de futebol de elite",
    desc: "Estudo longitudinal com eletrólitos, CK, LDH e função renal para decisões de carga na temporada.",
    url: "https://www.rbne.com.br/index.php/rbne/article/view/960?utm_source=chatgpt.com",
    source: "RBNE",
    sourceAbbr: "RN",
    lang: "BR",
  },
  {
    date: "Nov 2012",
    title: "Biomarcadores de estresse no futebol: dosagem sanguínea de creatina quinase",
    desc: "Uso prático da CK como indicador de microlesão e ajuste de volume no microciclo.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/127?utm_source=chatgpt.com",
    source: "RBFF",
    sourceAbbr: "RB",
    lang: "BR",
  },
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
  const sortedUpdates = [...updates].sort((a, b) => toDateKey(b.date) - toDateKey(a.date));

  return (
    <section id="novidades" className="section-shell relative overflow-hidden">
      <SectionHeaderDark
        eyebrow="Evidências"
        title="O que a ciência e a imprensa mostram"
        subtitle="Estudos e matérias que embasam decisões de treino, carga e recuperação."
        align="center"
        size="sm"
      />

      <Container>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="reveal flex items-center justify-center">
            <span className="h-px w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <div className="relative mt-10">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-teal/50 via-white/10 to-transparent" />
            <div className="space-y-5">
              {sortedUpdates.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative reveal flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  } ${item.highlight ? "border-brand-teal/60 shadow-[0_12px_40px_rgba(25,211,197,0.22)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.35)]"}`}
                >
                  {item.lang ? (
                    <div className="absolute right-4 top-4 flex items-center">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-center text-[11px] font-bold uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
                        style={{
                          backgroundImage:
                            item.lang === "EN"
                              ? "url('/images/united-states-flat-rounded-flag-icon-with-transparent-background-free-png.png')"
                              : "url('/images/brazil-circular-removebg-preview.png')",
                          backgroundColor: "#ffffff",
                          backgroundSize: item.lang === "BR" ? "contain" : "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      >
                        {item.lang}
                      </span>
                    </div>
                  ) : null}
                  <div className="relative flex w-28 flex-none items-start pt-0.5">
                    <div className="absolute left-[14px] top-0 h-full w-px bg-gradient-to-b from-brand-teal/40 via-white/10 to-transparent" />
                    <span className="relative z-10 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-teal">
                      {item.date}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 pr-12">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-2.5 py-1">
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-teal/15 px-1 text-[10px] font-bold uppercase tracking-[0.08em] text-brand-teal">
                          {item.sourceAbbr}
                        </span>
                        <span className="text-xs font-semibold text-white/82">{item.source}</span>
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60">
                        Publicado em {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-white/72">{item.desc}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal hover:text-white"
                    >
                      Ler matéria
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

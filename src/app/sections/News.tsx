import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Update = {
  date: string;
  title: string;
  desc: string;
  url: string;
  source: string;
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
    highlight: true,
    lang: "BR",
  },
  {
    date: "Out 2024",
    title: "IA centrada em dados para prever lesões sem contato no futebol profissional",
    desc: "Estudo SBBD propõe modelo de Data-Centric AI para prever lesões na semana, com AUC-ROC de 79,8%.",
    url: "https://sol.sbc.org.br/index.php/sbbd/article/view/30691/30494",
    source: "SBBD / SBC",
    lang: "EN",
  },
  {
    date: "Jan 2023",
    title: "Aplicação de aprendizado de máquina no futebol: revisão sistemática",
    desc: "Revisão da Biology of Sport sobre uso de ML no futebol, incluindo blocos de lesões, performance e talento.",
    url: "https://pubmed.ncbi.nlm.nih.gov/36636183/",
    source: "PubMed",
    lang: "EN",
  },
  {
    date: "Mai 2016",
    title: "Marcadores bioquímicos na síndrome de overtraining em jogadores de futebol masculino",
    desc: "Revisão dos principais marcadores (CK, cortisol, ureia) para detectar overtraining no futebol.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/419/360",
    source: "RBFF",
    lang: "BR",
  },
  {
    date: "Fev 2018",
    title: "Monitoramento de eletrólitos e danos musculares em atletas de futebol de elite",
    desc: "Estudo longitudinal com eletrólitos, CK, LDH e função renal para decisões de carga na temporada.",
    url: "https://www.rbne.com.br/index.php/rbne/article/view/960?utm_source=chatgpt.com",
    source: "RBNE",
    lang: "BR",
  },
  {
    date: "Nov 2012",
    title: "Biomarcadores de estresse no futebol: dosagem sanguínea de creatina quinase",
    desc: "Uso prático da CK como indicador de microlesão e ajuste de volume no microciclo.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/127?utm_source=chatgpt.com",
    source: "RBFF",
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
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="reveal flex items-center justify-center">
            <span className="h-px w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          </div>

          <div className="relative mt-12">
            <div className="space-y-5">
              {sortedUpdates.map((item, index) => (
                <article
                  key={item.title}
                  className={`panel-surface panel-surface-strong relative reveal flex gap-4 rounded-2xl p-4 sm:p-5 ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  } ${item.highlight ? "ring-1 ring-brand-teal/50 shadow-[0_18px_44px_rgba(25,211,197,0.22)]" : ""}`}
                >
                  {item.lang ? (
                    <div className="absolute right-4 top-4 flex items-center">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-center text-[10px] font-extrabold uppercase tracking-[0.12em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
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
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-2 pr-12">
                      <span className="inline-flex h-7 items-center rounded-full border border-brand-teal/35 bg-brand-teal/12 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                        {item.source}
                      </span>
                      <span className="inline-flex h-7 items-center rounded-full border border-white/18 bg-black/30 px-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/82">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-[1.06rem] font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/78">{item.desc}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-white"
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

import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Update = {
  date: string;
  title: string;
  desc: string;
  url: string;
  highlight?: boolean;
  lang?: "EN" | "BR";
};

const updates: Update[] = [
  {
    date: "15 Nov 2025",
    title: "Exames ajudam a prevenir lesões esportivas antes mesmo da dor surgir | CNN Brasil",
    desc: "Visão clínica sobre biomarcadores (CK, cortisol, PCR) para ajustar treino antes da dor aparecer.",
    url: "https://www.cnnbrasil.com.br/saude/exames-ajudam-a-prevenir-lesoes-esportivas-antes-mesmo-da-dor-surgir/",
    highlight: true,
    lang: "BR",
  },
  {
    date: "14 Out 2024",
    title: "IA centrada em dados para prever lesões sem contato no futebol profissional",
    desc: "Estudo SBBD propõe modelo de Data-Centric AI para prever lesões na semana, com AUC-ROC de 79,8%.",
    url: "https://sol.sbc.org.br/index.php/sbbd/article/view/30691/30494",
    lang: "EN",
  },
  {
    date: "Jan 2023",
    title: "Aplicação de aprendizado de máquina no futebol: revisão sistemática",
    desc: "Revisão da Biology of Sport sobre uso de ML no futebol, incluindo blocos de lesões, performance e talento.",
    url: "https://pubmed.ncbi.nlm.nih.gov/36636183/",
    lang: "EN",
  },
  {
    date: "14 Mai 2016",
    title: "Marcadores bioquímicos na síndrome de overtraining em jogadores de futebol masculino",
    desc: "Revisão dos principais marcadores (CK, cortisol, ureia) para detectar overtraining no futebol.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/419/360",
    lang: "BR",
  },
  {
    date: "06 Fev 2018",
    title: "Monitoramento de eletrólitos e danos musculares em atletas de futebol de elite",
    desc: "Estudo longitudinal com eletrólitos, CK, LDH e função renal para decisões de carga na temporada.",
    url: "https://www.rbne.com.br/index.php/rbne/article/view/960?utm_source=chatgpt.com",
    lang: "BR",
  },
  {
    date: "20 Nov 2012",
    title: "Biomarcadores de estresse no futebol: dosagem sanguínea de creatina quinase",
    desc: "Uso prático da CK como indicador de microlesão e ajuste de volume no microciclo.",
    url: "https://www.rbff.com.br/index.php/rbff/article/view/127?utm_source=chatgpt.com",
    lang: "BR",
  },
];

export function News() {
  return (
    <section id="novidades" className="section-shell relative overflow-hidden">
      <SectionHeaderDark
        eyebrow="Notícias e comprovações científicas"
        title="Notícias e comprovações científicas"
        subtitle="Curadoria de matérias e estudos que embasam prevenção, treino e decisão integrada."
        align="center"
        size="sm"
      />

      <Container>
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="reveal flex items-center justify-center gap-3 text-xs uppercase tracking-[0.14em] text-white/60">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-white/80" />
            Changelog editorial
            <span className="h-px w-10 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
          </div>

          <div className="relative mt-10">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-teal/50 via-white/10 to-transparent" />
            <div className="space-y-5">
              {updates.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative reveal flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  } ${item.highlight ? "border-brand-teal/60 shadow-[0_12px_40px_rgba(25,211,197,0.22)]" : "shadow-[0_10px_30px_rgba(0,0,0,0.35)]"}`}
                >
                  {item.lang ? (
                    <div className="absolute right-4 top-4 flex items-center">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-center bg-cover text-[11px] font-bold uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
                        style={{
                          backgroundImage:
                            item.lang === "EN"
                              ? "url('/images/united-states-flat-rounded-flag-icon-with-transparent-background-free-png.png')"
                              : "url('/images/brazil-circular-removebg-preview.png')",
                          backgroundColor: item.lang === "BR" ? "#0b4f2f" : undefined,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        {item.lang}
                      </span>
                    </div>
                  ) : null}
                  <div className="relative flex w-20 flex-none flex-col items-center gap-1">
                    <div className="absolute left-[14px] top-0 h-full w-px bg-gradient-to-b from-brand-teal/40 via-white/10 to-transparent" />
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-teal">
                      {item.date.split(" ")[0]}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/55">
                      {item.date.split(" ")[1]}
                    </span>
                  </div>

                  <div className="space-y-2">
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

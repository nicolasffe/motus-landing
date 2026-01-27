import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

const layers = [
  {
    title: "Dados do clube",
    desc: "Carga, wellness, testes físicos, clínico e jogo em uma estrutura única.",
  },
  {
    title: "Camada MOTUS IA",
    desc: "Modelos com contexto do atleta para sinais de risco, fadiga e retorno seguro.",
  },
  {
    title: "Experiência para o staff",
    desc: "Dashboards, alertas e relatórios rápidos para reunião, treino e gestão.",
  },
];

const modules = [
  { title: "Carga e planejamento", points: ["Tendências de volume e intensidade", "Sugestões de ajuste por grupo ou atleta"] },
  { title: "Saúde e prontidão", points: ["Histórico clínico e prontidão diária", "Sinais precoces de sobrecarga ou fadiga"] },
  { title: "Performance", points: ["Resposta do atleta por sessão e jogo", "Queda de consistência sinalizada"] },
  { title: "Retorno e relatórios", points: ["Critérios de progressão compartilhados", "Relatórios rápidos para comissão e gestão"] },
];

const rituals = [
  { label: "Segunda", title: "Planejar microciclo", desc: "Priorizar grupos e ajustar carga" },
  { label: "Pré-treino", title: "Ajustar no dia", desc: "Sinais de risco e fadiga visíveis" },
  { label: "Pós-treino", title: "Responder ao esforço", desc: "Registro de sensação e carga interna" },
  { label: "Revisão semanal", title: "Decisão com gestão", desc: "Relatório enxuto com próximos passos" },
];

const insightTiles = [
  { title: "Carga crônica", hint: "Tendência semanal por grupo", type: "line" },
  { title: "Alertas por tipo", hint: "Distribuição de categorias", type: "bar" },
  { title: "Mapa de calor", hint: "Regiões com maior atenção", type: "donut" },
];

function InsightTile({ title, hint, type }: { title: string; hint: string; type: string }) {
  return (
    <div className="card-premium flex flex-col gap-3 border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-white">{title}</div>
          <div className="text-xs text-white/55">{hint}</div>
        </div>
        <span className="h-2 w-2 rounded-full bg-brand-teal" />
      </div>

      {type === "line" && (
        <div className="relative h-44 rounded-xl border border-white/10 bg-black/30 p-4">
          <svg viewBox="0 0 100 70" className="h-full w-full">
            <polyline fill="none" stroke="rgba(25,211,197,0.85)" strokeWidth="2.8" points="5,50 35,48 65,44 95,46" />
            <polyline fill="none" stroke="rgba(255,94,94,0.88)" strokeWidth="2.8" points="5,34 35,35 65,33 95,34" />
            {[5, 35, 65, 95].map((x, idx) => (
              <circle key={x} cx={x} cy={[50, 48, 44, 46][idx]} r="3.2" fill="rgba(25,211,197,0.95)" />
            ))}
            {[5, 35, 65, 95].map((x, idx) => (
              <circle key={x + 100} cx={x} cy={[34, 35, 33, 34][idx]} r="3.2" fill="rgba(255,94,94,0.95)" />
            ))}
            <line x1="0" x2="100" y1="56" y2="56" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <line x1="0" x2="100" y1="28" y2="28" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            {["Sem 1", "Sem 2", "Sem 3", "Sem 4"].map((label, i) => (
              <text key={label} x={[5, 35, 65, 95][i]} y="66" fontSize="8" textAnchor="middle" fill="rgba(255,255,255,0.6)">
                {label}
              </text>
            ))}
          </svg>
          <div className="absolute top-3 right-3 flex gap-2 text-[11px] text-white/70">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-brand-teal" />
              Interna
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-rose-300" />
              Externa
            </span>
          </div>
        </div>
      )}

      {type === "bar" && (
        <div className="relative h-44 rounded-xl border border-white/10 bg-black/30 p-4">
          <svg viewBox="0 0 100 70" className="h-full w-full">
            {[
              { x: 12.5, h: 42, label: "Lesão" },
              { x: 37.5, h: 32, label: "PSR" },
              { x: 62.5, h: 38, label: "PSE" },
              { x: 87.5, h: 26, label: "Hidr." },
            ].map((item) => (
              <g key={item.label}>
                <rect
                  x={item.x - 7}
                  y={70 - item.h}
                  width="14"
                  height={item.h}
                  rx="3"
                  fill="rgba(25,211,197,0.78)"
                  stroke="rgba(25,211,197,0.35)"
                  strokeWidth="0.7"
                />
                <text x={item.x} y="66" fontSize="8" textAnchor="middle" fill="rgba(255,255,255,0.68)">
                  {item.label}
                </text>
              </g>
            ))}
            <line x1="0" x2="100" y1="52" y2="52" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
            <line x1="0" x2="100" y1="36" y2="36" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          </svg>
          <div className="absolute top-2 right-3 rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/70">
            Últimas 4 semanas
          </div>
        </div>
      )}

      {type === "donut" && (
        <div className="flex h-40 items-center justify-center">
          <div
            className="relative h-34 w-34 rounded-full bg-[conic-gradient(var(--c1)_0_32%,var(--c2)_32%_56%,var(--c3)_56%_78%,var(--c4)_78%_100%)]"
            style={{
              ["--c1" as string]: "#22c55e",
              ["--c2" as string]: "#f97316",
              ["--c3" as string]: "#2563eb",
              ["--c4" as string]: "#f43f5e",
            }}
          >
            <div className="absolute inset-5 rounded-full bg-[#0b1220]" />
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 text-[11px] text-white/65">
        {type === "line" && <span className="rounded-full bg-white/5 px-2 py-1">Carga interna x externa</span>}
        {type === "bar" && (
          <>
            <span className="rounded-full bg-white/5 px-2 py-1">Lesão</span>
            <span className="rounded-full bg-white/5 px-2 py-1">PSR</span>
            <span className="rounded-full bg-white/5 px-2 py-1">PSE</span>
            <span className="rounded-full bg-white/5 px-2 py-1">Hidratação</span>
          </>
        )}
        {type === "donut" && (
          <>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#22c55e" }} />
              Joelho
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#f97316" }} />
              Panturrilha
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#2563eb" }} />
              Quadríceps
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/5 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#f43f5e" }} />
              Tornozelo
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export function PlatformDeepDive() {
  return (
    <section id="plataforma-detalhe" className="relative overflow-hidden py-16">
      <SectionHeaderDark
        eyebrow="Detalhes da plataforma"
        title="Do dado bruto ao insight acionável"
        subtitle="Camadas claras e módulos práticos para treino, recuperação e retorno ao jogo."
        align="center"
      />

      <Container>
        {/* Camadas */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.title} className="card-premium p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                {layer.title}
              </div>
              <p className="mt-3 text-sm text-white/75">{layer.desc}</p>
            </div>
          ))}
        </div>

        {/* Dashboards e insights — sem card de fundo */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Dashboards e insights
              </div>
              <div className="text-sm font-semibold text-white">Visão direta, pronta para prints reais</div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] text-white/70">MOTUS IA</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insightTiles.map((tile) => (
              <InsightTile key={tile.title} {...tile} />
            ))}
          </div>
        </div>

        {/* Módulos */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <div key={module.title} className="card-premium p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">{module.title}</div>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {module.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ritual */}
        <div className="card-premium mt-10 p-6 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">Ritual recomendado</div>
              <p className="text-sm text-white/70">Uma cadência simples para usar os dados no dia a dia.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {rituals.map((r) => (
              <div key={r.label} className="card-premium px-4 py-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{r.label}</span>
                  <span className="h-2 w-2 rounded-full bg-brand-teal" />
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{r.title}</div>
                <p className="text-xs text-white/65">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

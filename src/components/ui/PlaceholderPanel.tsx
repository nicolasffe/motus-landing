type Props = {
  title?: string;
  subtitle?: string;
};

export function PlaceholderPanel({ title, subtitle }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="h-1 w-full bg-gradient-to-r from-brand-teal via-brand-blue to-transparent" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white">
              {title ?? "Preview da Plataforma"}
            </div>
            <div className="mt-1 text-xs text-white/60">
              {subtitle ?? "Placeholder temporário — substitua por prints depois"}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/60">
            <span className="h-2 w-2 rounded-full bg-brand-teal" />
            <span>Live</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs font-semibold text-white/70">Indicador</div>
            <div className="mt-3 h-24 rounded-lg bg-white/5" />
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs font-semibold text-white/70">Tendência</div>
            <div className="mt-3 h-24 rounded-lg bg-white/5" />
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 md:col-span-2">
            <div className="text-xs font-semibold text-white/70">Tabela / Alertas</div>
            <div className="mt-3 h-28 rounded-lg bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

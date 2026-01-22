export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/55 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-white">MOTUS</div>
          <div className="truncate text-xs text-white/70">
            Demo guiada em poucos minutos
          </div>
        </div>

        <a
          href="#contato"
          className="inline-flex flex-none items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Ver demo
        </a>
      </div>
    </div>
  );
}

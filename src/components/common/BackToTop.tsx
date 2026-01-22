"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold text-white/80 backdrop-blur transition hover:bg-black/55"
      aria-label="Voltar ao topo"
    >
      ↑ Topo
    </button>
  );
}

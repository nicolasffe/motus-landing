"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Plataforma", href: "#plataforma-detalhe" },
  { label: "MOTUS IA", href: "#ia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-black/70 shadow-lg shadow-black/25 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black/30 to-black/80" />
        <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-brand-teal/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
      </div>
      <Container>
        <div className="relative flex h-20 items-center justify-between gap-6">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal/25 via-white/10 to-black/50 shadow-lg shadow-black/30 ring-1 ring-white/10">
              <Image
                src="/brand/motus-white.png"
                alt="MOTUS"
                width={34}
                height={34}
                className="h-7 w-auto opacity-95 drop-shadow-[0_8px_22px_rgba(25,211,197,0.45)]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white group-hover:text-white">
                  MOTUS
                </span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
                  IA
                </span>
              </div>
              <div className="text-xs text-white/60">Performance preditiva</div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="#contato" variant="primary" className="hidden sm:inline-flex">
              Agendar demo
            </Button>
            <button
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            >
              {open ? "×" : "≡"}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"} transition-opacity`}
        >
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/85 p-4 shadow-lg shadow-black/30">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>{l.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                </a>
              ))}
            </div>
            <div className="mt-3 grid gap-2">
              <Button href="#contato" variant="primary" className="w-full justify-center">
                Agendar demo
              </Button>
              <Button href="#plataforma-detalhe" variant="secondary" className="w-full justify-center">
                Ver plataforma
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Plataforma", href: "#plataforma-detalhe" },
  { label: "MOTUS IA", href: "#ia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

function ThemeToggle() {
  const [mode, setMode] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const stored = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    document.documentElement.setAttribute("data-theme", stored);
    return stored;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    if (typeof localStorage !== "undefined") localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  };

  return (
    <button
      aria-label="Alterar tema"
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-white/30 hover:bg-white/10"
    >
      {mode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

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
          <a href="#" className="group inline-flex items-center gap-3">
            <Image
              src="/brand/motus-white.png"
              alt="MOTUS"
              width={200}
              height={60}
              className="logo-dark h-14 w-auto opacity-95 drop-shadow-[0_16px_40px_rgba(25,211,197,0.42)] transition group-hover:scale-[1.04]"
              priority
            />
            <Image
              src="/brand/motus-color.png"
              alt="MOTUS"
              width={200}
              height={60}
              className="logo-light hidden h-14 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.10)] transition group-hover:scale-[1.03]"
              priority
            />
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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/85 transition hover:border-white/30 hover:bg-white/10"
            >
              <svg aria-hidden="true" className="h-4 w-4 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 8.5Zm0 2a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 10.5Zm4.25-4.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/85 transition hover:border-white/30 hover:bg-white/10"
            >
              <svg aria-hidden="true" className="h-4 w-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2a10 10 0 0 0-8.7 15.1L2 22l5-1.3A10 10 0 1 0 12.04 2Zm0 1.8A8.2 8.2 0 0 1 19 17.05l-.13.2a8.2 8.2 0 0 1-7.7 3.2l-.22-.04-3.1.8.8-3.1-.04-.22A8.2 8.2 0 0 1 12.04 3.8Zm-3.2 3a.9.9 0 0 0-.7.4c-.4.5-1 1.3-1 2.2 0 1.3.8 2.5 1 2.9.3.4 1.6 2.5 4 3.4 2 .8 2.4.7 2.8.7.4 0 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1a.9.9 0 0 0-.7-.4l-1.3-.2c-.2 0-.6 0-.8.4l-.6 1c-.1.1-.2.2-.5 0-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.8-1.6-2-.1-.2 0-.3.1-.4l.4-.5c.2-.2.2-.4.3-.6.1-.2.1-.3 0-.5l-.6-1.5a.9.9 0 0 0-.7-.5Z" />
              </svg>
            </a>
            <ThemeToggle />
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
            <div className="mt-6 grid gap-4">
              <Button href="#contato" variant="primary" className="w-full justify-center py-3">
                Agendar demo
              </Button>
              <Button href="#plataforma-detalhe" variant="secondary" className="w-full justify-center py-3">
                Ver plataforma
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

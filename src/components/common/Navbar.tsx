"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/common/DemoModalContext";

const links = [
  { label: "Plataforma", href: "#plataforma-detalhe" },
  { label: "MOTUS IA", href: "#ia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

function ThemeToggle() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const preferred = (() => {
      if (typeof window === "undefined") return "dark";
      const stored = localStorage.getItem("theme") as "dark" | "light" | null;
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    })();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
    setReady(true);
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  const icon = !ready ? "◎" : mode === "dark" ? "☀" : "🌙";
  const title = !ready ? "Alternar tema" : mode === "dark" ? "Modo claro" : "Modo escuro";

  return (
    <button
      aria-label="Alterar tema"
      title={title}
      onClick={toggle}
      className="site-theme-toggle flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-white/30 hover:bg-white/10"
    >
      {icon}
    </button>
  );
}

export function Navbar() {
  const { open: openDemo } = useDemoModal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-navbar relative sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="site-navbar-layer pointer-events-none absolute inset-0">
        <div className="site-navbar-gradient absolute inset-0 bg-gradient-to-b from-white/8 via-black/35 to-black/85" />
        <div className="site-navbar-glow absolute -left-24 top-0 h-48 w-48 rounded-full bg-brand-teal/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
      </div>

      <Container>
        <div className="relative flex h-24 items-center justify-between gap-8">
          <a href="#" className="group inline-flex items-center gap-4">
            <Image
              src="/brand/motus-white.png"
              alt="MOTUS"
              width={280}
              height={84}
              className="logo-dark h-16 w-auto opacity-100 drop-shadow-[0_18px_38px_rgba(25,211,197,0.36)] transition group-hover:scale-[1.05]"
              priority
            />
            <Image
              src="/brand/motus-color.png"
              alt="MOTUS"
              width={280}
              height={84}
              className="logo-light hidden h-16 w-auto drop-shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition group-hover:scale-[1.05]"
              priority
            />
            <span className="hidden text-lg font-semibold tracking-[0.16em] text-white/90 sm:inline-block">MOTUS</span>
          </a>

          <nav className="hidden items-center gap-3 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="site-navbar-link rounded-full px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <Button onClick={openDemo} variant="primary" className="hidden sm:inline-flex">
              Agendar demonstração
            </Button>

            <a
              href="https://www.instagram.com/sportsmotus/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="site-social flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_0_0_rgba(0,0,0,0)] transition hover:border-brand-teal/70 hover:shadow-[0_0_0_10px_rgba(25,211,197,0.18)]"
            >
              <svg aria-hidden="true" className="h-5 w-5 text-[#E4405F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 8.5Zm0 2a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 10.5Zm4.25-4.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
              </svg>
            </a>

            <a
              href="https://wa.me/5512981373728?text=Ol%C3%A1%2C%20quero%20entender%20a%20MOTUS%20para%20meu%20clube."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="site-social flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90 shadow-[0_0_0_0_rgba(0,0,0,0)] transition hover:border-brand-teal/70 hover:shadow-[0_0_0_10px_rgba(25,211,197,0.18)]"
            >
              <svg aria-hidden="true" className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2a10 10 0 0 0-8.7 15.1L2 22l5-1.3A10 10 0 1 0 12.04 2Zm0 1.8A8.2 8.2 0 0 1 19 17.05l-.13.2a8.2 8.2 0 0 1-7.7 3.2l-.22-.04-3.1.8.8-3.1-.04-.22A8.2 8.2 0 0 1 12.04 3.8Zm-3.2 3a.9.9 0 0 0-.7.4c-.4.5-1 1.3-1 2.2 0 1.3.8 2.5 1 2.9.3.4 1.6 2.5 4 3.4 2 .8 2.4.7 2.8.7.4 0 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1a.9.9 0 0 0-.7-.4l-1.3-.2c-.2 0-.6 0-.8.4l-.6 1c-.1.1-.2.2-.5 0-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.8-1.6-2-.1-.2 0-.3.1-.4l.4-.5c.2-.2.2-.4.3-.6.1-.2.1-.3 0-.5l-.6-1.5a.9.9 0 0 0-.7-.5Z" />
              </svg>
            </a>

            <ThemeToggle />

            <button
              aria-label="Abrir menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="site-menu-toggle flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
            >
              {menuOpen ? "×" : "≡"}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"} transition-opacity`}>
          <div className="site-mobile-panel mt-2 rounded-2xl border border-white/10 bg-black/85 p-4 shadow-lg shadow-black/30">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>{l.label}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                </a>
              ))}
            </div>
            <div className="mt-6 grid gap-4">
              <Button
                onClick={() => {
                  openDemo();
                  setMenuOpen(false);
                }}
                variant="primary"
                className="w-full justify-center py-3"
              >
                Agendar demonstração
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

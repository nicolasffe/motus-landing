import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Produto", href: "#plataforma" },
  { label: "IA preditiva", href: "#ia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Implantação", href: "#implantacao" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-black/90 via-black/75 to-black/55 shadow-lg shadow-black/20 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/brand/motus-white.png"
              alt="MOTUS"
              width={110}
              height={28}
              className="opacity-95"
              priority
            />
            <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-white/60 md:block">
              IA para prevenção e performance
            </span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-brand-teal"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="#contato" variant="primary">
              Agendar demo
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

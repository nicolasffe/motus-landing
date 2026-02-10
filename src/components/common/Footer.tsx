import Image from "next/image";
import { Container } from "@/components/ui/Container";

const links = [
  { label: "Plataforma", href: "#plataforma-detalhe" },
  { label: "MOTUS IA", href: "#ia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Evidências", href: "#novidades" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/brand/motus-white.png" alt="MOTUS" width={116} height={30} className="logo-dark opacity-95" />
              <Image src="/brand/motus-color.png" alt="MOTUS" width={116} height={30} className="logo-light hidden opacity-95" />
            </div>

            <p className="mt-4 max-w-xl text-sm text-white/72">
              A MOTUS conecta dados de treino, wellness e exames em uma leitura única para apoiar decisões mais
              rápidas e reduzir indisponibilidade no elenco.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Navegação</p>
            <nav className="mt-4 grid gap-2">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <p className="text-xs text-white/58">© {new Date().getFullYear()} MOTUS. Todos os direitos reservados.</p>
          <p className="text-xs uppercase tracking-[0.1em] text-white/48">Sporttech | Performance | Prevenção</p>
        </div>
      </Container>
    </footer>
  );
}

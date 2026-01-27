import Image from "next/image";
import { Container } from "@/components/ui/Container";

const links = [
  { label: "Plataforma", href: "#plataforma-detalhe" },
  { label: "MOTUS IA", href: "#ia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/motus-white.png"
                alt="MOTUS"
                width={110}
                height={28}
                className="logo-dark opacity-95"
              />
              <Image
                src="/brand/motus-color.png"
                alt="MOTUS"
                width={110}
                height={28}
                className="logo-light hidden opacity-95"
              />
              <span className="text-xs text-white/60 logo-dark">Sporttech • Performance • Prevenção</span>
              <span className="hidden text-xs text-brand-ink/70 logo-light">Sporttech • Performance • Prevenção</span>
            </div>

            <p className="mt-4 max-w-md text-sm text-white/60 logo-dark">
              A MOTUS mantém o elenco disponível com dados do clube e IA preditiva — tudo em uma leitura simples.
            </p>
            <p className="mt-4 max-w-md text-sm text-brand-ink/70 logo-light">
              A MOTUS mantém o elenco disponível com dados do clube e IA preditiva — tudo em uma leitura simples.
            </p>

            <p className="mt-6 text-xs text-white/45 logo-dark">
              © {new Date().getFullYear()} MOTUS. Todos os direitos reservados.
            </p>
            <p className="mt-6 hidden text-xs text-brand-ink/60 logo-light">
              © {new Date().getFullYear()} MOTUS. Todos os direitos reservados.
            </p>
          </div>

          <div className="md:justify-self-end">
            <div className="text-xs font-semibold text-white/60 logo-dark">Navegação</div>
            <div className="hidden text-xs font-semibold text-brand-ink/70 logo-light">Navegação</div>
            <div className="mt-3 grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-white logo-dark"
                >
                  {l.label}
                </a>
              ))}
              {links.map((l) => (
                <a
                  key={`${l.href}-light`}
                  href={l.href}
                  className="hidden text-sm text-brand-ink/80 transition hover:text-brand-ink logo-light"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

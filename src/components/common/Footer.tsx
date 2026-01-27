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
                className="opacity-95"
              />
              <span className="text-xs text-white/60">
                Sporttech • Performance • Prevenção
              </span>
            </div>

            <p className="mt-4 max-w-md text-sm text-white/60">
              A MOTUS mantém o elenco disponível com dados do clube e IA preditiva — tudo em uma leitura simples.
            </p>

            <p className="mt-6 text-xs text-white/45">
              © {new Date().getFullYear()} MOTUS. Todos os direitos reservados.
            </p>
          </div>

          <div className="md:justify-self-end">
            <div className="text-xs font-semibold text-white/60">Navegação</div>
            <div className="mt-3 grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-8 card-premium p-5">
              <div className="text-sm font-semibold text-white">
                Quer ver em 20 minutos?
              </div>
              <p className="mt-2 text-sm text-white/70">
                Fazemos um tour rápido e alinhamos próximos passos.
              </p>
              <a
                href="#contato"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Agendar demo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

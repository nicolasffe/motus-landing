import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Client = {
  name: string;
  logo?: string;
};

const clients: Client[] = [
  { name: "São José E.C.", logo: "/images/cliente-1.png" },
  { name: "Guarani F.C.", logo: "/images/cliente-2.png" },
  { name: "E.C. São Bernardo", logo: "/images/cliente-3.png" },
];

function ClientCard({ client }: { client: Client }) {
  const initials = client.name
    .split(" ")
    .filter((w) => w[0])
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="group flex flex-col items-center gap-2 text-center">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={180}
          height={90}
          loading="lazy"
          className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
        />
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white/5 text-xl font-bold text-white/80 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
          {initials}
        </div>
      )}
      <span className="text-base font-semibold tracking-[0.08em] text-white/90">
        {client.name}
      </span>
      <span className="h-0.5 w-10 rounded-full bg-white/15 transition-all duration-500 group-hover:bg-brand-teal" />
    </div>
  );
}

export function SocialProof() {
  return (
    <section id="clientes" className="relative overflow-hidden py-16">
      <Container>
        <SectionHeaderDark
          eyebrow="Parceiros"
          title="Clubes com a MOTUS"
          subtitle="Parcerias que priorizam decisões ágeis e seguras"
          align="center"
          size="sm"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </Container>
    </section>
  );
}

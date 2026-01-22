"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Client = {
  name: string;
  logo: string;
};

const clients: Client[] = [
  {
    name: "Clube parceiro",
    logo: "/images/cliente-1.png",
  },
];

export function SocialProof() {
  return (
    <section id="clientes" className="relative overflow-hidden py-16">
      <Container>
        <SectionHeaderDark
          eyebrow="Clientes"
          title="Times que operam com a MOTUS"
          subtitle=""
          align="center"
          size="sm"
        />

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0f1a] via-[#0a0f1a]/90 to-transparent" />

          <div className="flex gap-4 animate-[logo-scroll_18s_linear_infinite]">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="card-premium flex h-24 min-w-[160px] items-center justify-center px-4 backdrop-blur-md"
              >
                <Image
                  src={client.logo}
                  alt={`Escudo do ${client.name}`}
                  width={160}
                  height={80}
                  className="h-14 w-auto object-contain drop-shadow-[0_10px_30px_rgba(25,211,197,0.35)]"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

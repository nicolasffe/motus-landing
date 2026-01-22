"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";

type Client = {
  logo: string;
};

const clients: Client[] = [
  {
    logo: "/images/cliente-1.png",
  },
];

export function SocialProof() {
  return (
    <section id="clientes" className="relative overflow-hidden py-16">
      <Container>
        <SectionHeaderDark
          eyebrow="Clientes"
          title="Utilizado por clubes de elite"
          subtitle=""
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <Image
            src={clients[0].logo}
            alt="Escudo do clube"
            width={200}
            height={200}
            className="h-20 w-auto object-contain grayscale"
          />
        </div>
      </Container>
    </section>
  );
}

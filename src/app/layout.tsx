import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOTUS",
  description:
    "Sporttech para antecipação de lesões e alta performance com IA preditiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-screen">
          {/* FUNDO GLOBAL LIMPO (SEM QUADRICULADO) */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25" />
            <div className="absolute -top-48 left-[-160px] h-[560px] w-[560px] rounded-full bg-brand-teal/10 blur-3xl" />
            <div className="absolute -bottom-64 right-[-220px] h-[680px] w-[680px] rounded-full bg-brand-blue/10 blur-3xl" />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}

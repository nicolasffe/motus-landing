"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeaderDark } from "@/components/ui/SectionHeaderDark";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  org: string;
  role: string;
  message: string;
};

const roles = [
  "Diretoria / Gestão",
  "Preparação Física",
  "Fisiologia",
  "Departamento Médico",
  "Comissão Técnica",
  "Outro",
];

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    org: "",
    role: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const isValid = useMemo(() => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email.trim());
    return (
      form.name.trim().length >= 2 &&
      emailOk &&
      form.org.trim().length >= 2 &&
      form.role.trim().length >= 2
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!isValid) {
      setError("Preencha nome, e-mail, instituição e cargo.");
      return;
    }

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
  }

  return (
    <section id="contato" className="relative overflow-hidden py-20">

      <SectionHeaderDark
        eyebrow="Contato"
        title="Fale com o time MOTUS"
        subtitle="Envie seus dados e retornamos para agendar. (Formulário em modo teste.)"
        align="left"
      />

      <Container>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold text-white">O que você recebe na demo</div>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {[
                "Tour rápido pelos painéis.",
                "Como os alertas funcionam na sua rotina.",
                "Próximos passos e implantação.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-teal" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {status === "sent" ? (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-sm font-semibold text-white">
                  Solicitação enviada (modo teste)
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Ao conectar o envio real, você receberá a confirmação por e-mail.
                </p>
                <div className="mt-6">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", org: "", role: "", message: "" });
                    }}
                  >
                    Enviar outra solicitação
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <div>
                  <label className="text-xs text-white/60">Nome</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">E-mail</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@clube.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Clube / Instituição</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="Nome do clube"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Cargo</label>
                  <select
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  >
                    <option value="">Selecione</option>
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-white/60">Mensagem (opcional)</label>
                  <textarea
                    className="mt-1 min-h-[96px] w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte um pouco sobre sua necessidade."
                  />
                </div>

                {error ? (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-white/80">
                    {error}
                  </div>
                ) : null}

                <Button type="submit" variant="primary">
                  {status === "sending" ? "Enviando..." : "Solicitar demonstração"}
                </Button>

                <p className="text-xs text-white/55">Autorizo contato para agendar a demonstração.</p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  org: string;
  role: string;
  email: string;
  whatsapp: string;
  message: string;
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  const area = digits.slice(0, 2);
  const first = digits.slice(2, 7);
  const last = digits.slice(7, 11);
  if (digits.length <= 2) return `(${area}`;
  if (digits.length <= 7) return `(${area})${first}`;
  return `(${area})${first}-${last}`;
}

export function DemoModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    org: "",
    role: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError(null);
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const isValid =
    form.name.trim().length > 1 &&
    form.org.trim().length > 1 &&
    form.role.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(form.email.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === "loading") return;

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Falha ao enviar. Tente novamente.");
      }

      setStatus("success");
      setForm({ name: "", org: "", role: "", email: "", whatsapp: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Falha ao enviar. Tente novamente.";
      setError(message);
    }
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8">
      <div className="demo-overlay absolute inset-0 bg-black/70 backdrop-blur" onClick={onClose} />
      <div
        className="demo-modal relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-brand-ink via-black to-black/95 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-teal">MOTUS IA</div>
            <h2 id="demo-modal-title" className="mt-1 text-2xl font-extrabold text-white">
              Agendar demonstração
            </h2>
            <p className="text-sm text-white/70">Preencha os dados para marcarmos uma conversa rápida sobre a plataforma.</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome*" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} inputRef={firstFieldRef} />
            <Field label="Clube / Instituição*" value={form.org} onChange={(v) => setForm((f) => ({ ...f, org: v }))} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cargo*" value={form.role} onChange={(v) => setForm((f) => ({ ...f, role: v }))} />
            <Field label="E-mail*" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
          </div>
          <Field
            label="WhatsApp (opcional)"
            value={form.whatsapp}
            onChange={(v) => setForm((f) => ({ ...f, whatsapp: formatPhone(v) }))}
            maxLength={14}
            inputMode="tel"
            pattern="^\\(\\d{2}\\)\\d{5}-\\d{4}$"
          />
          <Field
            label="Mensagem / Objetivo (opcional)"
            textarea
            value={form.message}
            onChange={(v) => setForm((f) => ({ ...f, message: v }))}
          />

          {error ? (
            <div className="rounded-xl border border-rose-400/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-50">{error}</div>
          ) : null}

          {status === "success" ? (
            <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-50">
              Pedido enviado. Entraremos em contato para agendar.
            </div>
          ) : null}

          <div className="flex flex-wrap justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!isValid || status === "loading"}
              className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-4 py-2 text-sm font-semibold text-brand-ink transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Enviar pedido"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  textarea,
  type = "text",
  inputRef,
  maxLength,
  inputMode,
  pattern,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  maxLength?: number;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  pattern?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm text-white/70">
      <span>{label}</span>
      {textarea ? (
        <textarea
          className="min-h-[110px] rounded-xl border border-white/12 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Conte rapidamente o objetivo da demonstração"
        />
      ) : (
        <input
          ref={inputRef}
          type={type}
          className="rounded-xl border border-white/12 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-teal/40"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=""
          maxLength={maxLength}
          inputMode={inputMode}
          pattern={pattern}
        />
      )}
    </label>
  );
}

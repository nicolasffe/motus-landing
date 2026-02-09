import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = process.env.DEMO_TO_EMAIL;

export async function POST(request: Request) {
  if (!toEmail || !resend) {
    return NextResponse.json({ error: "Envio não configurado" }, { status: 500 });
  }

  const data = await request.json();
  const { name, org, role, email, whatsapp, message } = data || {};

  if (!name || !org || !role || !email) {
    return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 });
  }

  try {
    await resend.emails.send({
  from: "onboarding@resend.dev",
  to: toEmail,
  subject: "🚀 Novo Pedido de Demo - MOTUS",
  html: `
    <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
      <h2 style="color: #333;">Novo pedido de demonstração</h2>
      <p>Um novo lead acabou de preencher o formulário no site:</p>
      <hr />
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Instituição:</strong> ${org}</p>
      <p><strong>Cargo:</strong> ${role}</p>
      <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>WhatsApp:</strong> ${whatsapp || "-"}</p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
        <strong>Mensagem:</strong><br/>
        ${message || "-"}
      </div>
    </div>
  `,
});

    return NextResponse.json({ ok: true });
  }
   catch (err: unknown) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Falha ao enviar";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

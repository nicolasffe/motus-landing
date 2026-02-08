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
      from: "MOTUS <demo@motus.ai>",
      to: toEmail,
      subject: "Pedido de demonstração - MOTUS",
      text: `
Novo pedido de demonstração

Nome: ${name}
Clube/Instituição: ${org}
Cargo: ${role}
Email: ${email}
WhatsApp: ${whatsapp || "-"}
Mensagem: ${message || "-"}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Falha ao enviar";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

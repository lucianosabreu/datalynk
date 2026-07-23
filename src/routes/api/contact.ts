import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ContactSchema = z.object({
  nome: z.string().trim().min(2).max(100),
  empresa: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  telefone: z.string().trim().min(6).max(30),
  assunto: z.string().trim().min(2).max(150).optional().default("Contato via site"),
  mensagem: z.string().trim().min(5).max(3000),
  // honeypot
  website: z.string().max(0).optional(),
});

// Simple in-memory rate limit (per worker instance)
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_PER_WINDOW) return false;
  entry.count++;
  return true;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          "unknown";

        if (!rateLimit(ip)) {
          return Response.json(
            { ok: false, error: "Muitas tentativas. Tente novamente em alguns instantes." },
            { status: 429 },
          );
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Payload inválido." }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Preencha todos os campos corretamente." },
            { status: 400 },
          );
        }

        // Honeypot triggered
        if (parsed.data.website && parsed.data.website.length > 0) {
          return Response.json({ ok: true });
        }

        const { nome, empresa, email, telefone, assunto, mensagem } = parsed.data;
        const now = new Date();
        const dataHora = now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          console.error("[contact] Missing email credentials");
          return Response.json(
            { ok: false, error: "Serviço de e-mail indisponível." },
            { status: 500 },
          );
        }

        const html = `
          <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:600px;">
            <h2 style="color:#123B66;">Novo contato pelo site DataLynk</h2>
            <table cellpadding="6" style="border-collapse:collapse;font-size:14px;">
              <tr><td><b>Nome</b></td><td>${escapeHtml(nome)}</td></tr>
              <tr><td><b>Empresa</b></td><td>${escapeHtml(empresa)}</td></tr>
              <tr><td><b>E-mail</b></td><td>${escapeHtml(email)}</td></tr>
              <tr><td><b>Telefone</b></td><td>${escapeHtml(telefone)}</td></tr>
              <tr><td><b>Assunto</b></td><td>${escapeHtml(assunto)}</td></tr>
              <tr><td valign="top"><b>Mensagem</b></td><td>${escapeHtml(mensagem).replace(/\n/g, "<br/>")}</td></tr>
              <tr><td><b>Data/Hora</b></td><td>${escapeHtml(dataHora)} (America/Sao_Paulo)</td></tr>
              <tr><td><b>IP</b></td><td>${escapeHtml(ip)}</td></tr>
            </table>
          </div>
        `;

        const text = `Novo contato pelo site DataLynk

Nome: ${nome}
Empresa: ${empresa}
E-mail: ${email}
Telefone: ${telefone}
Assunto: ${assunto}
Data/Hora: ${dataHora} (America/Sao_Paulo)
IP: ${ip}

Mensagem:
${mensagem}
`;

        try {
          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({
              from: "DataLynk Site <onboarding@resend.dev>",
              to: ["contato@datalynk.com.br"],
              reply_to: email,
              subject: `[Site] ${assunto} — ${nome} (${empresa})`,
              html,
              text,
            }),
          });

          if (!res.ok) {
            const body = await res.text();
            console.error(`[contact] Resend failed [${res.status}]: ${body}`);
            return Response.json(
              { ok: false, error: "Não foi possível enviar. Tente novamente." },
              { status: 502 },
            );
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("[contact] Send error:", err);
          return Response.json(
            { ok: false, error: "Falha inesperada ao enviar." },
            { status: 500 },
          );
        }
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Calendar, Linkedin, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com um Especialista | DataLynk" },
      {
        name: "description",
        content:
          "Fale com um especialista DataLynk. Diagnóstico gratuito, WhatsApp, LinkedIn e Calendly.",
      },
    ],
  }),
  component: ContatoPage,
});

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

const INITIAL: FormState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  assunto: "",
  mensagem: "",
};

function ContatoPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;

    // Basic client-side checks
    if (
      !form.nome.trim() ||
      !form.empresa.trim() ||
      !form.email.trim() ||
      !form.telefone.trim() ||
      !form.mensagem.trim()
    ) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)
      ?.value;

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          assunto: form.assunto.trim() || "Contato via site",
          website: honeypot ?? "",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Falha no envio.");
      }
      setSent(true);
      setForm(INITIAL);
      toast.success("Mensagem enviada com sucesso. Em breve nossa equipe entrará em contato.");
    } catch (err) {
      console.error(err);
      toast.error(
        err instanceof Error && err.message
          ? err.message
          : "Não foi possível enviar. Tente novamente.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Vamos <span className="text-accent-orange">conversar</span>
          </>
        }
        description="Preencha o formulário ou fale por qualquer canal. Nossos especialistas retornam em até 1 dia útil."
      />
      <section className="py-24 bg-white">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-3xl bg-surface p-8 md:p-10 border border-border/60 shadow-elegant">
            <h2 className="font-display font-bold text-2xl text-brand">
              Solicite um diagnóstico gratuito
            </h2>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-brand text-white p-6">
                Mensagem enviada com sucesso. Em breve nossa equipe entrará em contato.
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="rounded-full bg-accent-orange text-white font-display font-semibold px-5 py-2.5 hover:brightness-110 transition"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <label className="flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">Nome</span>
                  <input
                    required
                    type="text"
                    value={form.nome}
                    onChange={update("nome")}
                    maxLength={100}
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">Empresa</span>
                  <input
                    required
                    type="text"
                    value={form.empresa}
                    onChange={update("empresa")}
                    maxLength={150}
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">E-mail corporativo</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    maxLength={255}
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <label className="flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">Telefone</span>
                  <input
                    required
                    type="tel"
                    value={form.telefone}
                    onChange={update("telefone")}
                    maxLength={30}
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <label className="md:col-span-2 flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">Assunto</span>
                  <input
                    type="text"
                    value={form.assunto}
                    onChange={update("assunto")}
                    maxLength={150}
                    placeholder="Ex.: Consultoria em BI"
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <label className="md:col-span-2 flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">Como podemos ajudar?</span>
                  <textarea
                    required
                    value={form.mensagem}
                    onChange={update("mensagem")}
                    rows={5}
                    maxLength={3000}
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange text-white font-display font-semibold py-4 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar solicitação"
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Endereço", d: "Rua Paes Leme, 215 — Pinheiros, São Paulo, SP" },
              { icon: Phone, t: "Telefone", d: "+55 (79) 9 8882-0278" },
              { icon: Mail, t: "E-mail", d: "contato@datalynk.com.br" },
              { icon: MessageCircle, t: "WhatsApp", d: "+55 (79) 9 8882-0278" },
              { icon: Calendar, t: "Calendly", d: "Agende uma reunião online" },
              { icon: Linkedin, t: "LinkedIn", d: "linkedin.com/in/luciano-abreu16/" },
            ].map((c) => (
              <div
                key={c.t}
                className="flex gap-4 items-start rounded-2xl bg-surface p-5 border border-border/60"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-brand">{c.t}</div>
                  <div className="text-sm text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Calendar, Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fale com um Especialista | DataLynk" },
      {
        name: "description",
        content: "Fale com um especialista DataLynk. Diagnóstico gratuito, WhatsApp, LinkedIn e Calendly.",
      },
    ],
    links: [{ rel: "mailto:contato@datalynk.com.br", href: "mailto:contato@datalynk.com.br" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

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
            <h2 className="font-display font-bold text-2xl text-brand">Solicite um diagnóstico gratuito</h2>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-brand text-white p-6">
                Obrigado! Recebemos sua solicitação e retornaremos em breve.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-6 grid gap-4 md:grid-cols-2"
              >
                {[
                  { l: "Nome", n: "nome", t: "text" },
                  { l: "Empresa", n: "empresa", t: "text" },
                  { l: "E-mail corporativo", n: "email", t: "email" },
                  { l: "Telefone", n: "telefone", t: "tel" },
                ].map((f) => (
                  <label key={f.n} className="flex flex-col text-sm">
                    <span className="font-medium text-ink mb-1.5">{f.l}</span>
                    <input
                      required
                      type={f.t}
                      name={f.n}
                      className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                    />
                  </label>
                ))}
                <label className="md:col-span-2 flex flex-col text-sm">
                  <span className="font-medium text-ink mb-1.5">Como podemos ajudar?</span>
                  <textarea
                    required
                    name="mensagem"
                    rows={5}
                    className="rounded-xl border border-border bg-white px-4 py-3 focus:outline-none focus:border-brand"
                  />
                </label>
                <button className="md:col-span-2 rounded-full bg-accent-orange text-white font-display font-semibold py-4 hover:brightness-110 transition">
                  Enviar solicitação
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
              <div key={c.t} className="flex gap-4 items-start rounded-2xl bg-surface p-5 border border-border/60">
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

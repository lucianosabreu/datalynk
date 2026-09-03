import type { ComponentType, ReactNode } from "react";
import { ArrowRight, CheckCircle2, Link2, LifeBuoy, Rocket } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";

export interface TotvsServicePageProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  intro: string;
  url: string;
  serviceName: string;
  serviceType: string;
  breadcrumbs: Crumb[];
  benefits: string[];
  sections: { title: string; desc: string; icon?: ComponentType<{ className?: string }> }[];
  faqs: { q: string; a: string }[];
  related: { title: string; desc: string; to: "/totvs" | "/totvs-rm" | "/totvs-protheus" | "/totvs-fluig" | "/consultoria-totvs" | "/consultoria-totvs-rm" | "/implantacao-totvs-rm" | "/suporte-totvs-rm" | "/solucoes/bi" }[];
}

export function TotvsServicePage({
  eyebrow,
  title,
  description,
  intro,
  url,
  serviceName,
  serviceType,
  breadcrumbs,
  benefits,
  sections,
  faqs,
  related,
}: TotvsServicePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-white font-display hover:brightness-110">
          Fale com um especialista <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <div className="bg-white border-b border-border/60">
        <div className="container-page py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-3xl text-brand leading-tight">Como a DataLynk pode ajudar</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </div>
          <aside className="rounded-3xl bg-surface p-8 border border-border/60">
            <div className="text-xs uppercase tracking-widest text-accent-orange font-semibold">O que você encontra</div>
            <ul className="mt-4 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-ink">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" /> {benefit}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand leading-tight">Serviços relacionados a {serviceName}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon ?? Link2;
              return (
                <article key={section.title} className="rounded-2xl bg-white p-6 border border-border/60 shadow-elegant">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/5 text-brand mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-brand">{section.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{section.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-brand">Perguntas frequentes</h2>
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-brand">
                  {faq.q}<span className="text-accent-orange group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container-page">
          <h2 className="font-display font-bold text-3xl text-brand">Continue explorando</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.title} to={item.to} className="group rounded-2xl bg-white p-6 border border-border/60 shadow-elegant hover:-translate-y-1 transition">
                <h3 className="font-display font-semibold text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange">Saber mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceName,
            description,
            url,
            serviceType,
            provider: { "@type": "Organization", name: "DataLynk", url: "https://datalynk.com.br" },
            areaServed: { "@type": "Country", name: "Brasil" },
          }),
        }}
      />

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="rounded-3xl gradient-cta p-10 md:p-14 text-white flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Vamos falar sobre o seu cenário?</h2>
              <p className="text-white/80 mt-2">Converse com um especialista da DataLynk.</p>
            </div>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3 font-semibold font-display hover:bg-accent-orange hover:text-white transition">
              Solicitar avaliação <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

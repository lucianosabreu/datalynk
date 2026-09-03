import type { ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LinkProps } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";

export interface SolutionSection {
  title: string;
  items: { icon?: ComponentType<{ className?: string }>; title: string; desc?: string }[];
}

export interface SolutionDetailProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  intro: string;
  benefits: string[];
  sections: SolutionSection[];
  process?: { step: string; title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
  breadcrumbs?: Crumb[];
  related?: { title: string; desc: string; to: LinkProps["to"] }[];
  service?: { name: string; description: string; url: string; serviceType?: string };
}

export function SolutionDetail({
  eyebrow,
  title,
  description,
  intro,
  benefits,
  sections,
  process,
  faqs,
  breadcrumbs,
  related,
  service,
}: SolutionDetailProps) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-white font-display hover:brightness-110">
            Falar com um Especialista <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/cases" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 font-display">
            Ver Cases
          </Link>
        </div>
      </PageHero>

      {breadcrumbs && (
        <div className="bg-white border-b border-border/60">
          <div className="container-page py-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      )}

      <section className="py-20 bg-white">
        <div className="container-page grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-3xl text-brand leading-tight">Visão Geral</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{intro}</p>
          </div>
          <aside className="rounded-3xl bg-surface p-8 border border-border/60">
            <div className="text-xs uppercase tracking-widest text-accent-orange font-semibold">Benefícios</div>
            <ul className="mt-4 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {sections.map((sec, i) => (
        <section key={sec.title} className={`py-20 ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}>
          <div className="container-page">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand max-w-2xl leading-tight">{sec.title}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sec.items.map((it) => (
                <div key={it.title} className="rounded-2xl bg-white p-6 border border-border/60 shadow-elegant hover:-translate-y-1 transition">
                  {it.icon && (
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/5 text-brand mb-4">
                      <it.icon className="h-5 w-5" />
                    </div>
                  )}
                  <div className="font-display font-semibold text-brand">{it.title}</div>
                  {it.desc && <div className="mt-1 text-sm text-muted-foreground">{it.desc}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {process && (
        <section className="py-20 bg-brand text-white">
          <div className="container-page">
            <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Metodologia</div>
            <h2 className="font-display font-bold text-3xl md:text-4xl max-w-2xl leading-tight">Como conduzimos a implantação</h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.title} className="glass-card bg-white/5 border-white/10 rounded-2xl p-6">
                  <div className="font-display font-bold text-accent-orange text-3xl">{p.step}</div>
                  <div className="mt-3 font-display font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-white/70">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && (
        <section className="py-20 bg-white">
          <div className="container-page max-w-3xl">
            <h2 className="font-display font-bold text-3xl text-brand">Perguntas Frequentes</h2>
            <div className="mt-8 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer font-display font-semibold text-brand">
                    {f.q}
                    <span className="text-accent-orange group-open:rotate-45 transition">＋</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              }}
            />
          </div>
        </section>
      )}

      {related && related.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container-page">
            <h2 className="font-display font-bold text-3xl text-brand leading-tight">Conteúdos e serviços relacionados</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.title}
                  to={r.to}
                  className="group rounded-2xl bg-white p-6 border border-border/60 shadow-elegant hover:-translate-y-1 transition"
                >
                  <div className="font-display font-semibold text-brand">{r.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{r.desc}</div>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange">
                    Saber mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              description: service.description,
              url: service.url,
              ...(service.serviceType ? { serviceType: service.serviceType } : {}),
              provider: { "@type": "Organization", name: "DataLynk", url: "https://datalynk.com.br" },
              areaServed: { "@type": "Country", name: "Brasil" },
            }),
          }}
        />
      )}

      <section className="py-16 bg-surface">
        <div className="container-page">
          <div className="rounded-3xl gradient-cta p-10 md:p-14 text-white flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl">Vamos conversar sobre o seu projeto?</h3>
              <p className="text-white/80 mt-2">Diagnóstico gratuito com nossos especialistas.</p>
            </div>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3 font-semibold font-display hover:bg-accent-orange hover:text-white transition">
              Solicitar Contato <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

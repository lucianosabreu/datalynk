import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Building2, Workflow, BarChart3, Database, LifeBuoy, Rocket, GraduationCap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

const TITLE = "Consultoria TOTVS | Soluções, Implantação e Suporte | DataLynk";
const DESC =
  "Consultoria TOTVS especializada em TOTVS RM, Protheus e Fluig: implantação, suporte, integrações, dados e BI para empresas e instituições de ensino.";

export const Route = createFileRoute("/totvs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://datalynk.com.br/totvs" },
    ],
    links: [{ rel: "canonical", href: "https://datalynk.com.br/totvs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESC,
          url: "https://datalynk.com.br/totvs",
          isPartOf: { "@type": "WebSite", name: "DataLynk", url: "https://datalynk.com.br" },
          about: { "@type": "Thing", name: "TOTVS" },
        }),
      },
    ],
  }),
  component: TotvsHub,
});

const products = [
  { icon: Boxes, title: "TOTVS RM", desc: "ERP TOTVS RM para Educação, RH, Backoffice e Financeiro — implantação, sustentação e evolução.", to: "/totvs-rm" as const },
  { icon: Building2, title: "TOTVS Protheus", desc: "Consultoria Protheus: implantação, customização AdvPL, integrações e sustentação.", to: "/totvs-protheus" as const },
  { icon: Workflow, title: "TOTVS Fluig", desc: "Automação de processos, workflows e portais corporativos integrados ao ERP.", to: "/totvs-fluig" as const },
];

const services = [
  { icon: Rocket, title: "Implantação TOTVS RM", desc: "Diagnóstico, blueprint, parametrização, migração de dados e go-live.", to: "/implantacao-totvs-rm" as const },
  { icon: LifeBuoy, title: "Suporte TOTVS RM", desc: "Sustentação funcional e técnica com SLA e portal de chamados.", to: "/suporte-totvs-rm" as const },
  { icon: Boxes, title: "Consultoria TOTVS RM", desc: "Especialistas por módulo para destravar processos e evoluir o ERP.", to: "/consultoria-totvs-rm" as const },
  { icon: Building2, title: "Consultoria TOTVS", desc: "Por que escolher a DataLynk como parceira no ecossistema TOTVS.", to: "/consultoria-totvs" as const },
  { icon: BarChart3, title: "Business Intelligence", desc: "Power BI sobre dados do TOTVS: indicadores confiáveis e governados.", to: "/solucoes/bi" as const },
  { icon: Database, title: "Engenharia de Dados", desc: "Pipelines, integrações e arquitetura de dados a partir do ERP.", to: "/solucoes/engenharia-dados" as const },
];

function TotvsHub() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Ecossistema TOTVS"
        title={
          <>
            Consultoria <span className="text-accent-orange">TOTVS</span> | Soluções, Implantação, Suporte e Capacitação
          </>
        }
        description="A DataLynk é uma consultoria em tecnologia especializada no ecossistema TOTVS — RM, Protheus e Fluig — unindo ERP, dados, BI e inteligência artificial."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-white font-display hover:brightness-110">
            Fale com a DataLynk <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/totvs-rm" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 font-display">
            Consultoria TOTVS RM
          </Link>
        </div>
      </PageHero>

      <div className="bg-white border-b border-border/60">
        <div className="container-page py-4">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "TOTVS" }]} />
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-brand leading-tight">Quem é a DataLynk</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A DataLynk é uma consultoria em tecnologia focada em ERP, Business Intelligence, Engenharia de Dados e
            Inteligência Artificial. Atuamos ao lado de empresas e instituições de ensino que utilizam soluções TOTVS,
            apoiando desde a implantação até a sustentação evolutiva — sempre conectando o ERP aos dados que sustentam a
            tomada de decisão.
          </p>
          <h2 className="mt-12 font-display font-bold text-3xl text-brand leading-tight">
            Nossa especialização no ecossistema TOTVS
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabalhamos com os principais produtos do ecossistema TOTVS, com times organizados por módulo e prática
            consolidada em integrações. Escolha o produto para conhecer nossos serviços em detalhe.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand leading-tight">Produtos TOTVS que atendemos</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <Link key={p.title} to={p.to} className="group rounded-3xl bg-white p-8 border border-border/60 shadow-elegant hover:-translate-y-1 transition">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/5 text-brand mb-5">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-xl text-brand">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange">
                  Conhecer <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand leading-tight">Serviços DataLynk para TOTVS</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="rounded-2xl bg-white p-6 border border-border/60 shadow-elegant hover:-translate-y-1 transition">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/5 text-brand mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-brand">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="font-display font-bold text-3xl text-brand leading-tight">Dados, BI e IA sobre o TOTVS</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Um ERP bem implantado gera dados valiosos. A DataLynk conecta o TOTVS a pipelines de dados, modelos
            semânticos e dashboards em Power BI, criando uma camada analítica confiável para gestão acadêmica,
            financeira, de pessoas e de operações.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link to="/solucoes/bi" className="rounded-full border border-border bg-white px-4 py-2 font-medium text-brand hover:border-accent-orange">
              Business Intelligence
            </Link>
            <Link to="/solucoes/engenharia-dados" className="rounded-full border border-border bg-white px-4 py-2 font-medium text-brand hover:border-accent-orange">
              Engenharia de Dados
            </Link>
            <Link to="/solucoes/desenvolvimento" className="rounded-full border border-border bg-white px-4 py-2 font-medium text-brand hover:border-accent-orange">
              Desenvolvimento e IA
            </Link>
          </div>

          <h2 className="mt-12 font-display font-bold text-3xl text-brand leading-tight">Capacitação e carreira TOTVS</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Além dos projetos de consultoria, a DataLynk desenvolve pessoas. Nossa frente de capacitação apoia
            profissionais que desejam atuar com TOTVS RM, Protheus e Fluig, e times internos de clientes que precisam
            ganhar autonomia no dia a dia do ERP.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/carreiras" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white font-display hover:brightness-110">
              <GraduationCap className="h-4 w-4" /> Carreira na DataLynk
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-brand font-display hover:border-accent-orange">
              Central de conteúdos
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="rounded-3xl gradient-cta p-10 md:p-14 text-white flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl">Precisa de uma consultoria TOTVS?</h2>
              <p className="text-white/80 mt-2">Fale com um especialista da DataLynk e avalie o seu cenário.</p>
            </div>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-white text-brand px-6 py-3 font-semibold font-display hover:bg-accent-orange hover:text-white transition">
              Fale com um Especialista <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

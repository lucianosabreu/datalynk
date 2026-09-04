import { createFileRoute, Link } from "@tanstack/react-router";
import { Workflow, Boxes, Building2, BarChart3, Database, Code2, Cloud, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/solucoes/")({
  head: () => ({
    meta: [
      { title: "Soluções — Consultoria em Tecnologia | DataLynk" },
      { name: "description", content: "Portfólio DataLynk: TOTVS RM, Protheus, BI, Engenharia de Dados, Desenvolvimento e Suporte em Tecnologia para transformação digital." },
      { property: "og:title", content: "Soluções — Consultoria em Tecnologia | DataLynk" },
      { property: "og:description", content: "Portfólio DataLynk: TOTVS RM, Protheus, BI, Engenharia de Dados, Desenvolvimento e Suporte em Tecnologia para transformação digital." },
      { property: "og:url", content: "https://datalynk.com.br/solucoes" },
    ],
    links: [{ rel: "canonical", href: "https://datalynk.com.br/solucoes" }],
  }),
  component: SolucoesPage,
});

const solutions = [
  { icon: Boxes, title: "TOTVS RM", desc: "Implantação e sustentação em Educação, RH e Backoffice.", to: "/totvs-rm" },
  { icon: Building2, title: "TOTVS Protheus", desc: "Implantação, customização, integração e melhorias.", to: "/totvs-protheus" },
  { icon: Workflow, title: "TOTVS Fluig", desc: "Automação de processos, workflows e portais corporativos.", to: "/totvs-fluig" },
  { icon: BarChart3, title: "Business Intelligence", desc: "Power BI, dashboards, analytics e KPIs.", to: "/solucoes/bi" },
  { icon: Database, title: "Engenharia de Dados", desc: "Data Lake, DW, ETL, governança e integrações.", to: "/solucoes/engenharia-dados" },
  { icon: Code2, title: "Desenvolvimento", desc: "Web, Apps, APIs, integrações, IA e automação.", to: "/solucoes/desenvolvimento" },
  { icon: Cloud, title: "Suporte em Tecnologia", desc: "Infraestrutura, Cloud, Service Desk, monitoramento.", to: "/solucoes/suporte" },
];

function SolucoesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfólio"
        title={<>Soluções para <span className="text-accent-orange">transformação digital</span></>}
        description="Um portfólio integrado que cobre a jornada completa da sua empresa em ERP, dados, desenvolvimento e operação."
      />
      <section className="py-24 bg-surface">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <Link key={s.to} to={s.to} className="group rounded-3xl bg-white p-8 shadow-elegant border border-border/60 hover:-translate-y-1 transition">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-display font-bold text-xl text-brand">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:text-accent-orange">
                Explorar <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

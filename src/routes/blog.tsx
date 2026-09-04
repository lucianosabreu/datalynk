import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog DataLynk — ERP, TOTVS, BI, Dados, IA e Cloud" },
      { name: "description", content: "Conteúdo técnico e estratégico sobre TOTVS, Power BI, Engenharia de Dados, IA e Cloud para líderes de tecnologia." },
      { property: "og:title", content: "Blog DataLynk — ERP, TOTVS, BI, Dados, IA e Cloud" },
      { property: "og:description", content: "Conteúdo técnico e estratégico sobre TOTVS, Power BI, Engenharia de Dados, IA e Cloud para líderes de tecnologia." },
      { property: "og:url", content: "https://datalynk.com.br/blog" },
    ],
    links: [{ rel: "canonical", href: "https://datalynk.com.br/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { cat: "TOTVS", title: "5 sinais de que seu TOTVS RM precisa de uma revisão", date: "12 Jun 2026", excerpt: "Como identificar sintomas de um ERP subutilizado e o caminho para destravá-lo." },
  { cat: "Power BI", title: "Governança de indicadores no Power BI: por onde começar", date: "28 Mai 2026", excerpt: "Modelos semânticos, catálogo e ciclos de vida para uma cultura data-driven." },
  { cat: "Dados", title: "Lakehouse: o novo padrão para dados corporativos", date: "10 Mai 2026", excerpt: "Como unir o melhor do Data Lake e do Data Warehouse em uma única plataforma." },
  { cat: "IA", title: "Agentes de IA no ERP: hype ou realidade?", date: "02 Mai 2026", excerpt: "Casos práticos de aplicação de LLMs em processos de Backoffice." },
  { cat: "Cloud", title: "FinOps: como reduzir custos em Cloud sem perder performance", date: "18 Abr 2026", excerpt: "Métricas, cultura e automação para otimizar sua fatura mensal." },
  { cat: "Tecnologia", title: "Como preparar sua empresa para a Transformação Digital", date: "05 Abr 2026", excerpt: "Um guia executivo com os passos essenciais." },
];

const categories = [
  { label: "TOTVS", to: "/totvs" as const },
  { label: "TOTVS RM", to: "/totvs-rm" as const },
  { label: "TOTVS Protheus", to: "/totvs-protheus" as const },
  { label: "TOTVS Fluig", to: "/totvs-fluig" as const },
  { label: "Consultoria TOTVS", to: "/consultoria-totvs" as const },
  { label: "Implantação TOTVS RM", to: "/implantacao-totvs-rm" as const },
  { label: "Suporte TOTVS RM", to: "/suporte-totvs-rm" as const },
  { label: "Business Intelligence", to: "/solucoes/bi" as const },
  { label: "Engenharia de Dados", to: "/solucoes/engenharia-dados" as const },
  { label: "Carreira TOTVS", to: "/carreiras" as const },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title={<>Conteúdo que gera <span className="text-accent-orange">inteligência</span></>}
        description="Insights, tendências e boas práticas em tecnologia corporativa."
      />
      <section className="py-16 bg-white border-b border-border/60">
        <div className="container-page">
          <h2 className="font-display font-bold text-2xl text-brand">Categorias</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Navegue pelos temas que a DataLynk domina e acesse as páginas de especialidade.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {categories.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="rounded-full border border-border bg-white px-4 py-2 font-medium text-brand transition hover:border-accent-orange hover:text-accent-orange"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-3xl bg-white p-6 border border-border/60 shadow-elegant hover:-translate-y-1 transition cursor-pointer">
              <div className="aspect-[16/9] rounded-2xl gradient-brand mb-5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Tag className="h-3 w-3" /> {p.cat}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
              </div>
              <h2 className="mt-3 font-display font-semibold text-brand leading-tight">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

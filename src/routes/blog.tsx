import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Tag } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog DataLynk — ERP, TOTVS, BI, Dados, IA e Cloud" },
      { name: "description", content: "Conteúdo técnico e estratégico sobre TOTVS, Power BI, Engenharia de Dados, IA e Cloud." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
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

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title={<>Conteúdo que gera <span className="text-accent-orange">inteligência</span></>}
        description="Insights, tendências e boas práticas em tecnologia corporativa."
      />
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
              <h3 className="mt-3 font-display font-semibold text-brand leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

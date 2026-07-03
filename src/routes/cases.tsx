import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases de Sucesso | DataLynk" },
      { name: "description", content: "Cases reais de clientes DataLynk em TOTVS, BI, Dados e Transformação Digital." },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: CasesPage,
});

const cases = [
  { tag: "Educação", title: "Instituição de ensino reduz 40% do tempo de fechamento contábil", problem: "Processos manuais e integrações frágeis atrasavam o fechamento mensal.", solution: "Reengenharia do RM Backoffice, integrações via API e automações.", result: "-40% no ciclo contábil e visibilidade em tempo real.", quote: "A DataLynk trouxe método e resultado ao nosso backoffice." },
  { tag: "Indústria", title: "Indústria multiplanta ganha visão única com Data Warehouse", problem: "Dados fragmentados em três ERPs impediam análise consolidada.", solution: "DW corporativo + Power BI + governança de indicadores.", result: "12 unidades integradas em um único painel executivo.", quote: "Ganhamos velocidade e confiança nas decisões da diretoria." },
  { tag: "Varejo", title: "Rede varejista automatiza reposição com IA", problem: "Rupturas e excesso de estoque em SKUs.", solution: "Modelo preditivo integrado ao Protheus.", result: "-28% em ruptura e -12% em capital de giro.", quote: "IA aplicada de verdade ao nosso dia a dia." },
  { tag: "Saúde", title: "Rede hospitalar unifica indicadores assistenciais", problem: "Falta de visão consolidada por unidade.", solution: "Data Lake + dashboards de KPIs assistenciais.", result: "Redução de 22% no tempo de atendimento.", quote: "Nossos gestores ganharam autonomia analítica." },
];

function CasesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cases"
        title={<>Resultados que <span className="text-accent-orange">falam por si</span></>}
        description="Uma seleção de projetos que demonstram como transformamos desafios reais em resultados mensuráveis."
      />
      <section className="py-24 bg-surface">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.title} className="rounded-3xl bg-white p-8 border border-border/60 shadow-elegant">
              <div className="text-xs uppercase tracking-widest text-accent-orange font-semibold">{c.tag}</div>
              <h3 className="mt-3 font-display font-bold text-2xl text-brand leading-tight">{c.title}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "Problema", v: c.problem },
                  { k: "Solução", v: c.solution },
                  { k: "Resultado", v: c.result },
                ].map((b) => (
                  <div key={b.k}>
                    <div className="text-xs uppercase text-muted-foreground">{b.k}</div>
                    <div className="text-sm text-ink mt-1">{b.v}</div>
                  </div>
                ))}
              </div>
              <blockquote className="mt-6 pl-4 border-l-4 border-accent-orange italic text-muted-foreground">
                “{c.quote}”
              </blockquote>
            </article>
          ))}
        </div>
        <div className="container-page mt-12 text-center">
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 font-semibold font-display hover:bg-accent-orange transition">
            Quero um resultado como esse <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

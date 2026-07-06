import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Users2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import teamImg from "@/assets/team-collab.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a DataLynk — Consultoria em Tecnologia" },
      { name: "description", content: "Conheça a história, missão, visão, valores, equipe e parceiros da DataLynk Consultoria em Tecnologia." },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sobre nós"
        title={<>Consultoria com <span className="text-accent-orange">método, gente</span> e tecnologia.</>}
        description="Há mais de duas décadas ajudando grandes empresas a transformar dados em resultados de negócio."
      />
      <section className="py-24 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <img src={teamImg} alt="Equipe DataLynk" loading="lazy" className="rounded-3xl shadow-elegant w-full" width={1400} height={900} />
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Nossa história</div>
            <h2 className="font-display font-bold text-4xl text-brand leading-tight">Construída por especialistas, movida por resultados.</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              A DataLynk nasceu da união de consultores seniores em TOTVS, dados e transformação
              digital. Ao longo de mais de 20 anos, entregamos +300 projetos para clientes de
              Educação, Indústria, Saúde, Varejo e Serviços.
            </p>
            <p className="mt-4 text-muted-foreground text-lg">
              Hoje somos referência em consultoria estratégica de tecnologia, sempre com o
              cliente no centro e o resultado como métrica.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Missão", desc: "Transformar dados em decisões inteligentes, gerando valor real ao negócio." },
            { icon: Eye, title: "Visão", desc: "Ser a consultoria de tecnologia mais confiável do Brasil em ERP e Dados." },
            { icon: Heart, title: "Valores", desc: "Ética, excelência técnica, colaboração e obsessão por resultados." },
          ].map((v) => (
            <div key={v.title} className="rounded-3xl bg-white p-8 border border-border/60 shadow-elegant">
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl text-brand">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Linha do tempo</div>
          <h2 className="font-display font-bold text-4xl text-brand max-w-2xl">Nossa jornada em movimento</h2>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { y: "2003", t: "Fundação", d: "Início das operações em consultoria TOTVS." },
              { y: "2012", t: "Expansão BI", d: "Prática de Business Intelligence e Power BI." },
              { y: "2018", t: "Dados", d: "Prática de Engenharia de Dados e Cloud." },
              { y: "2024", t: "IA", d: "Squad de Inteligência Artificial e Agentes." },
            ].map((m) => (
              <div key={m.y} className="relative rounded-2xl bg-surface p-6 border border-border/60">
                <div className="font-display font-bold text-3xl text-accent-orange">{m.y}</div>
                <div className="mt-2 font-display font-semibold text-brand">{m.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container-page text-center">
          <Users2 className="h-10 w-10 mx-auto text-brand" />
          <h2 className="mt-4 font-display font-bold text-4xl text-brand">Nosso time</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Especialistas em TOTVS, Dados, Power BI, Cloud e IA, distribuídos em
            squads dedicadas por prática e cliente.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

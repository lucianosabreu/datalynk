import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/carreiras")({
  head: () => ({
    meta: [
      { title: "Carreiras — Trabalhe na DataLynk" },
      { name: "description", content: "Faça parte de uma equipe de especialistas em ERP, dados, cloud e IA. Vagas abertas na DataLynk." },
    ],
    links: [{ rel: "canonical", href: "/carreiras" }],
  }),
  component: CarreirasPage,
});

const jobs = [
  { title: "Consultor TOTVS RM Sênior", area: "Consultoria", city: "São Paulo · Híbrido" },
  { title: "Desenvolvedor AdvPL Protheus", area: "Software", city: "Remoto" },
  { title: "Engenheiro de Dados Sênior", area: "Data", city: "Remoto" },
  { title: "Especialista Power BI", area: "BI", city: "São Paulo · Híbrido" },
  { title: "Arquiteto Cloud AWS/Azure", area: "Cloud", city: "Remoto" },
  { title: "Engenheiro de IA / LLM", area: "IA", city: "Remoto" },
];

function CarreirasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Carreiras"
        title={<>Faça parte da <span className="text-accent-orange">DataLynk</span></>}
        description="Um lugar para consultores e engenheiros que gostam de resolver problemas grandes com tecnologia."
      />
      <section className="py-24 bg-surface">
        <div className="container-page grid gap-4 md:grid-cols-2">
          {jobs.map((j) => (
            <div key={j.title} className="group rounded-2xl bg-white p-6 border border-border/60 shadow-elegant flex items-center justify-between gap-4 hover:-translate-y-1 transition">
              <div>
                <div className="text-xs uppercase text-accent-orange font-semibold tracking-widest">{j.area}</div>
                <div className="mt-1 font-display font-semibold text-brand text-lg">{j.title}</div>
                <div className="mt-1 text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.city}</div>
              </div>
              <button className="shrink-0 rounded-full bg-brand text-white px-5 py-2.5 text-sm font-display font-semibold group-hover:bg-accent-orange transition">
                Candidatar-se
              </button>
            </div>
          ))}
        </div>
        <div className="container-page mt-14 text-center">
          <Briefcase className="h-8 w-8 mx-auto text-brand" />
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Não encontrou a vaga ideal? Envie seu currículo para{" "}
            <a href="mailto:carreiras@datalynk.com.br" className="text-brand hover:text-accent-orange">carreiras@datalynk.com.br</a>.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

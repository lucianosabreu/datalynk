import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, HeartPulse, Factory, ShoppingBag, Building2, Wheat } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/segmentos")({
  head: () => ({
    meta: [
      { title: "Segmentos que atendemos | DataLynk" },
      { name: "description", content: "Educação, Saúde, Indústria, Varejo, Serviços e Agronegócio — experiência real em setores estratégicos com times especialistas." },
      { property: "og:title", content: "Segmentos que atendemos | DataLynk" },
      { property: "og:description", content: "Educação, Saúde, Indústria, Varejo, Serviços e Agronegócio — experiência real em setores estratégicos com times especialistas." },
      { property: "og:url", content: "https://datalynk.com.br/segmentos" },
    ],
    links: [{ rel: "canonical", href: "https://datalynk.com.br/segmentos" }],
  }),
  component: SegmentosPage,
});

const items = [
  { icon: GraduationCap, title: "Educação", desc: "Instituições de ensino, universidades e grupos educacionais. Especialistas em TOTVS Educacional." },
  { icon: HeartPulse, title: "Saúde", desc: "Hospitais, clínicas e operadoras. BI assistencial e integração com sistemas hospitalares." },
  { icon: Factory, title: "Indústria", desc: "Manufatura discreta e de processo. Protheus, PCP, PPCP e Data Warehouse multiplanta." },
  { icon: ShoppingBag, title: "Varejo", desc: "Redes físicas e e-commerce. Integrações omnichannel e analytics de vendas." },
  { icon: Building2, title: "Serviços", desc: "Consultorias, franquias e prestadores. Backoffice financeiro e projetos." },
  { icon: Wheat, title: "Agronegócio", desc: "Trading, cooperativas e produtores. Governança de dados e integrações fiscais." },
];

function SegmentosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Segmentos"
        title={<>Conhecemos o seu <span className="text-accent-orange">setor</span></>}
        description="Metodologia adaptada por segmento, com casos reais e times especialistas."
      />
      <section className="py-24 bg-surface">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="rounded-3xl bg-white p-8 border border-border/60 shadow-elegant hover:-translate-y-1 transition">
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-display font-bold text-xl text-brand">{s.title}</h2>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

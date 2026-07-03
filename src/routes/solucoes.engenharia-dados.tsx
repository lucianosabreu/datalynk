import { createFileRoute } from "@tanstack/react-router";
import { Database, Waves, Cog, ShieldCheck, GitMerge, Activity } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

export const Route = createFileRoute("/solucoes/engenharia-dados")({
  head: () => ({
    meta: [
      { title: "Engenharia de Dados — Data Lake, DW, ETL | DataLynk" },
      { name: "description", content: "Data Lake, Data Warehouse, ETL, governança e integrações. Arquitetura moderna de dados para grandes volumes e Big Data." },
    ],
    links: [{ rel: "canonical", href: "/solucoes/engenharia-dados" }],
  }),
  component: () => (
    <SolutionDetail
      eyebrow="Data Platform"
      title={<>Engenharia de <span className="text-accent-orange">Dados</span> em escala</>}
      description="Arquiteturas modernas de dados: Data Lake, Data Warehouse, ETL, Streaming e Governança para dar velocidade e confiança ao seu negócio."
      intro="Projetamos e construímos plataformas de dados corporativas modernas, unindo boas práticas de engenharia, governança e cloud para viabilizar analytics, IA e integrações em larga escala."
      benefits={[
        "Data Lakehouse moderno",
        "ETL/ELT robusto e observável",
        "Governança e catálogo de dados",
        "Integrações em tempo real",
        "Otimização de custos em Cloud",
      ]}
      sections={[
        {
          title: "Nossas capacidades",
          items: [
            { icon: Database, title: "Data Warehouse", desc: "Modelagem dimensional e Lakehouse." },
            { icon: Waves, title: "Data Lake", desc: "Camadas raw, refined e curated." },
            { icon: Cog, title: "ETL / ELT", desc: "Pipelines confiáveis e monitorados." },
            { icon: Activity, title: "Streaming", desc: "Kafka, Event Hubs e CDC em tempo real." },
            { icon: ShieldCheck, title: "Governança", desc: "Qualidade, linhagem e catálogo." },
            { icon: GitMerge, title: "Integrações", desc: "APIs, EDI e conectores corporativos." },
          ],
        },
      ]}
    />
  ),
});

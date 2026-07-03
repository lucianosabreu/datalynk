import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, LineChart, PieChart, Gauge, Brain, Database } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

export const Route = createFileRoute("/solucoes/bi")({
  head: () => ({
    meta: [
      { title: "Business Intelligence e Power BI | DataLynk" },
      { name: "description", content: "Consultoria em Business Intelligence: Power BI, dashboards, analytics, KPIs e Machine Learning aplicados ao negócio." },
    ],
    links: [{ rel: "canonical", href: "/solucoes/bi" }],
  }),
  component: () => (
    <SolutionDetail
      eyebrow="Analytics"
      title={<>Business <span className="text-accent-orange">Intelligence</span> que gera decisão</>}
      description="Dashboards executivos, Power BI, indicadores estratégicos e Machine Learning para transformar dados em vantagem competitiva."
      intro="Ajudamos organizações a construir uma cultura data-driven do C-Level ao chão de fábrica, com Power BI, arquitetura moderna de dados e modelos analíticos aplicados aos processos de negócio."
      benefits={[
        "Especialistas Power BI e Microsoft Fabric",
        "Governança de indicadores",
        "Dashboards executivos e operacionais",
        "Modelos de Machine Learning",
        "Analytics em tempo real",
      ]}
      sections={[
        {
          title: "O que entregamos",
          items: [
            { icon: BarChart3, title: "Dashboards", desc: "Painéis executivos, táticos e operacionais." },
            { icon: LineChart, title: "Power BI", desc: "Desenvolvimento, workspaces e Fabric." },
            { icon: PieChart, title: "Analytics", desc: "Análises avançadas e storytelling de dados." },
            { icon: Gauge, title: "KPIs & Indicadores", desc: "Modelagem e governança de indicadores." },
            { icon: Brain, title: "Machine Learning", desc: "Modelos preditivos e prescritivos." },
            { icon: Database, title: "Semantic Model", desc: "Modelo semântico corporativo confiável." },
          ],
        },
      ]}
    />
  ),
});

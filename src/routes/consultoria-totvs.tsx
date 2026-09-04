import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Building2, Workflow, BarChart3, Database, LifeBuoy } from "lucide-react";
import { TotvsServicePage } from "@/components/site/TotvsServicePage";

const TITLE = "Consultoria TOTVS | Empresa Especializada no Ecossistema TOTVS | DataLynk";
const DESC =
  "Empresa de consultoria TOTVS especializada em RM, Protheus e Fluig, unindo ERP, integrações, engenharia de dados e Business Intelligence.";
const URL = "https://datalynk.com.br/consultoria-totvs";

export const Route = createFileRoute("/consultoria-totvs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: () => (
    <TotvsServicePage
      eyebrow="Consultoria TOTVS"
      title={<>Por que escolher a <span className="text-accent-orange">DataLynk</span> como consultoria TOTVS</>}
      description="Consultoria TOTVS com especialistas em RM, Protheus e Fluig, integrada a engenharia de dados e Business Intelligence."
      intro="A DataLynk é uma consultoria em tecnologia que atua no ecossistema TOTVS desde a implantação até a sustentação evolutiva. O diferencial está na combinação de duas competências que normalmente ficam separadas: especialistas de ERP que conhecem os módulos por dentro e um time de dados que transforma as informações do sistema em indicadores confiáveis para a gestão."
      url={URL}
      serviceName="Consultoria TOTVS"
      serviceType="Consultoria em ERP TOTVS"
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "TOTVS", to: "/totvs" }, { label: "Consultoria TOTVS" }]}
      benefits={[
        "Especialistas por módulo e por linha de produto",
        "Atuação em RM, Protheus e Fluig",
        "Integrações com sistemas legados",
        "Camada de dados e BI sobre o ERP",
        "Atendimento empresarial com SLA",
      ]}
      sections={[
        { icon: Boxes, title: "Consultoria TOTVS RM", desc: "Educacional, RH, Financeiro e Backoffice com especialistas por módulo." },
        { icon: Building2, title: "Consultoria TOTVS Protheus", desc: "Implantação, customização AdvPL, integrações e sustentação." },
        { icon: Workflow, title: "Consultoria TOTVS Fluig", desc: "Automação de processos, workflows e portais corporativos." },
        { icon: LifeBuoy, title: "Sustentação e suporte", desc: "Atendimento funcional e técnico com prazos acordados." },
        { icon: Database, title: "Engenharia de dados", desc: "Pipelines e integrações a partir das bases do ERP." },
        { icon: BarChart3, title: "Business Intelligence", desc: "Modelos e dashboards em Power BI sobre dados do TOTVS." },
      ]}
      faqs={[
        { q: "O que faz uma consultoria TOTVS?", a: "Uma consultoria TOTVS apoia a empresa na implantação, parametrização, customização, integração, suporte e evolução dos sistemas TOTVS, alinhando o software aos processos de negócio." },
        { q: "Quanto custa uma consultoria TOTVS?", a: "O investimento varia conforme escopo, módulos envolvidos, volume de integrações e formato de atendimento (projeto ou sustentação contínua). Fazemos uma avaliação do cenário antes de apresentar a proposta." },
        { q: "A DataLynk trabalha com TOTVS RM?", a: "Sim. O TOTVS RM é uma das nossas principais frentes, com atuação nos módulos Educacional, RH, Financeiro, Compras, Fiscal e Contábil." },
        { q: "A DataLynk oferece suporte TOTVS?", a: "Sim. Oferecemos sustentação funcional e técnica, com equipes dedicadas, prazos de atendimento acordados e registro de chamados." },
        { q: "Como contratar uma consultoria TOTVS?", a: "O caminho é iniciar por uma conversa de diagnóstico: entendemos o cenário atual, prioridades e restrições e, a partir disso, propomos o formato de atendimento mais adequado." },
      ]}
      related={[
        { title: "Consultoria TOTVS RM", desc: "Serviços dedicados à linha RM.", to: "/consultoria-totvs-rm" },
        { title: "TOTVS Protheus", desc: "Consultoria na linha Protheus.", to: "/totvs-protheus" },
        { title: "TOTVS Fluig", desc: "Automação de processos com Fluig.", to: "/totvs-fluig" },
        { title: "Implantação TOTVS RM", desc: "Do diagnóstico ao go-live.", to: "/implantacao-totvs-rm" },
        { title: "Suporte TOTVS RM", desc: "Sustentação com prazos acordados.", to: "/suporte-totvs-rm" },
        { title: "Ecossistema TOTVS", desc: "Hub com todas as frentes TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

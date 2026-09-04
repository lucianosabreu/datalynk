import { createFileRoute } from "@tanstack/react-router";
import { Settings, Boxes, LinkIcon, LifeBuoy, TrendingUp, Rocket } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

const TITLE = "Consultoria TOTVS Protheus | DataLynk";
const DESC =
  "Consultoria TOTVS Protheus: implantação, customização AdvPL, integrações, sustentação e camada de dados e BI sobre o ERP.";
const URL = "https://datalynk.com.br/totvs-protheus";

export const Route = createFileRoute("/totvs-protheus")({
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
    <SolutionDetail
      eyebrow="ERP · TOTVS Protheus"
      title={<>Consultoria <span className="text-accent-orange">TOTVS Protheus</span> | Soluções e Serviços</>}
      description="Implantação, customização, integração, sustentação e melhorias contínuas em Protheus para indústrias, varejo e serviços."
      intro="O TOTVS Protheus é o ERP da TOTVS mais adotado por indústrias, varejo e empresas de serviços. A DataLynk atua como parceira estratégica de organizações que usam o Protheus como espinha dorsal da operação, cobrindo módulos de Backoffice, Fiscal, Suprimentos e Manufatura, além de integrações e da camada analítica de dados."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "TOTVS", to: "/totvs" }, { label: "TOTVS Protheus" }]}
      service={{
        name: "Consultoria TOTVS Protheus",
        description: DESC,
        url: URL,
        serviceType: "Consultoria e implantação de ERP TOTVS Protheus",
      }}
      benefits={[
        "Consultores especializados em Protheus",
        "Desenvolvimento AdvPL e integrações via APIs",
        "Roll-outs multiempresa",
        "Sustentação com SLA definido",
        "Integração com BI, dados e automações",
      ]}
      sections={[
        {
          title: "Nossos serviços em Protheus",
          items: [
            { icon: Rocket, title: "Implantação", desc: "Projetos completos com metodologia estruturada." },
            { icon: Settings, title: "Customização", desc: "Desenvolvimento AdvPL sob medida." },
            { icon: LinkIcon, title: "Integração", desc: "APIs, EDI, e-commerce e sistemas legados." },
            { icon: LifeBuoy, title: "Sustentação", desc: "Suporte técnico e funcional com SLA." },
            { icon: TrendingUp, title: "Melhorias", desc: "Roadmap evolutivo e otimização de processos." },
            { icon: Boxes, title: "Módulos", desc: "Financeiro, Faturamento, Estoque, Compras, Fiscal, PCP e RH." },
          ],
        },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "Diagnóstico e alinhamento estratégico." },
        { step: "02", title: "Design", desc: "Desenho funcional e técnico." },
        { step: "03", title: "Build & Test", desc: "Parametrização, desenvolvimento AdvPL e validação." },
        { step: "04", title: "Go-live & Care", desc: "Cutover, acompanhamento e sustentação." },
      ]}
      faqs={[
        { q: "O que é o TOTVS Protheus?", a: "O TOTVS Protheus é a linha de ERP da TOTVS voltada à gestão corporativa, com módulos de financeiro, suprimentos, faturamento, fiscal, contábil, manufatura e recursos humanos." },
        { q: "Qual a diferença entre TOTVS RM e Protheus?", a: "São duas linhas de ERP da TOTVS. O RM é mais adotado em gestão educacional, RH e backoffice, enquanto o Protheus é comum em indústria, varejo e serviços. A escolha depende dos processos, do segmento e do cenário de integrações." },
        { q: "Vocês desenvolvem customizações em AdvPL?", a: "Sim. Desenvolvemos customizações, relatórios e integrações em AdvPL, sempre priorizando aderência ao padrão para não comprometer atualizações." },
        { q: "É possível integrar o Protheus a dashboards?", a: "Sim. Construímos pipelines de dados e modelos em Power BI a partir das bases do Protheus." },
      ]}
      related={[
        { title: "Consultoria TOTVS", desc: "Visão geral dos serviços TOTVS da DataLynk.", to: "/consultoria-totvs" },
        { title: "TOTVS RM", desc: "Consultoria especializada na linha RM.", to: "/totvs-rm" },
        { title: "TOTVS Fluig", desc: "Automação de processos e workflows.", to: "/totvs-fluig" },
        { title: "Business Intelligence", desc: "Indicadores confiáveis sobre os dados do ERP.", to: "/solucoes/bi" },
        { title: "Engenharia de Dados", desc: "Pipelines e integrações a partir do Protheus.", to: "/solucoes/engenharia-dados" },
        { title: "Ecossistema TOTVS", desc: "Hub com todas as frentes TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

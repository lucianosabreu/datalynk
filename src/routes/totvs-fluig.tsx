import { createFileRoute } from "@tanstack/react-router";
import { Workflow, FileSignature, LinkIcon, Users, Bot, LayoutDashboard } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

const TITLE = "Consultoria TOTVS Fluig | DataLynk";
const DESC =
  "Consultoria TOTVS Fluig: automação de processos, workflows, portais corporativos e integrações com o ERP TOTVS e com a camada de dados.";
const URL = "https://datalynk.com.br/totvs-fluig";

export const Route = createFileRoute("/totvs-fluig")({
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
      eyebrow="Processos · TOTVS Fluig"
      title={<>Consultoria <span className="text-accent-orange">TOTVS Fluig</span> | Soluções e Serviços</>}
      description="Automação de processos, workflows, gestão de documentos e portais corporativos integrados ao ecossistema TOTVS."
      intro="O TOTVS Fluig é a plataforma da TOTVS para automação de processos, gestão de documentos e portais corporativos. A DataLynk apoia empresas que desejam padronizar fluxos de aprovação, reduzir retrabalho e integrar essas rotinas ao ERP e à camada de dados — conectando processos, pessoas e indicadores."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "TOTVS", to: "/totvs" }, { label: "TOTVS Fluig" }]}
      service={{
        name: "Consultoria TOTVS Fluig",
        description: DESC,
        url: URL,
        serviceType: "Consultoria em automação de processos com TOTVS Fluig",
      }}
      benefits={[
        "Mapeamento e redesenho de processos",
        "Workflows de aprovação padronizados",
        "Integração com ERP TOTVS",
        "Indicadores de processo em BI",
        "Time multidisciplinar de dados e ERP",
      ]}
      sections={[
        {
          title: "Frentes de atuação em Fluig",
          items: [
            { icon: Workflow, title: "Automação de processos", desc: "Fluxos de aprovação, alçadas e prazos." },
            { icon: FileSignature, title: "Gestão de documentos", desc: "Versionamento, guarda e rastreabilidade." },
            { icon: Users, title: "Portais e comunicação", desc: "Áreas internas de autoatendimento e avisos." },
            { icon: LinkIcon, title: "Integrações", desc: "Conexão com TOTVS RM, Protheus e sistemas próprios." },
            { icon: LayoutDashboard, title: "Indicadores", desc: "Métricas de tempo, gargalos e volume por fluxo." },
            { icon: Bot, title: "Automação inteligente", desc: "Uso de dados e IA para apoiar decisões nos fluxos." },
          ],
        },
      ]}
      faqs={[
        { q: "O que é o TOTVS Fluig?", a: "O TOTVS Fluig é a plataforma da TOTVS para automação de processos de negócio (BPM), gestão eletrônica de documentos e criação de portais corporativos, com integração ao ecossistema TOTVS." },
        { q: "O Fluig substitui o ERP?", a: "Não. O Fluig complementa o ERP: os fluxos de aprovação, documentos e comunicação acontecem no Fluig, enquanto os registros transacionais permanecem no ERP." },
        { q: "É possível integrar o Fluig ao TOTVS RM ou Protheus?", a: "Sim. As integrações são um dos pontos centrais dos projetos, permitindo que aprovações no Fluig reflitam nos processos do ERP." },
        { q: "Como começar um projeto de Fluig com a DataLynk?", a: "O primeiro passo é uma conversa de diagnóstico para entender os processos atuais, o cenário do ERP e as prioridades de automação." },
      ]}
      related={[
        { title: "Consultoria TOTVS", desc: "Nossa atuação no ecossistema TOTVS.", to: "/consultoria-totvs" },
        { title: "TOTVS RM", desc: "Consultoria na linha RM.", to: "/totvs-rm" },
        { title: "TOTVS Protheus", desc: "Consultoria na linha Protheus.", to: "/totvs-protheus" },
        { title: "Desenvolvimento e IA", desc: "Automação e integrações sob medida.", to: "/solucoes/desenvolvimento" },
        { title: "Business Intelligence", desc: "Indicadores de processos e operação.", to: "/solucoes/bi" },
        { title: "Ecossistema TOTVS", desc: "Hub com todas as frentes TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

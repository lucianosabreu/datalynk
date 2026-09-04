import { createFileRoute } from "@tanstack/react-router";
import {
  Workflow,
  FileSignature,
  LinkIcon,
  Users,
  Bot,
  LayoutDashboard,
  ClipboardList,
  FileInput,
  Code2,
  LifeBuoy,
  ScanLine,
  Boxes,
  Lightbulb,
  Puzzle,
  RefreshCw,
} from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

const TITLE = "TOTVS Fluig | Consultoria, Automação e Integrações | DataLynk";
const DESC =
  "Consultoria TOTVS Fluig especializada em automação de processos, workflows, gestão documental, integrações e desenvolvimento de soluções sob medida.";
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
      eyebrow="Automação, Processos e Gestão Documental"
      title={<>TOTVS <span className="text-accent-orange">Fluig</span></>}
      description="Transforme processos manuais em processos digitais, inteligentes e eficientes."
      intro="A DataLynk oferece soluções com TOTVS Fluig para automação de processos, gestão documental, workflows, formulários digitais e integração entre sistemas, proporcionando mais produtividade, controle e rastreabilidade para sua empresa. Atuamos da consultoria Fluig ao desenvolvimento Fluig, conectando a plataforma ao ERP TOTVS — inclusive TOTVS RM e Protheus — e à camada de dados e indicadores."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "TOTVS", to: "/totvs" }, { label: "TOTVS Fluig" }]}
      service={{
        name: "Consultoria TOTVS Fluig",
        description: DESC,
        url: URL,
        serviceType: "Consultoria, implantação e desenvolvimento TOTVS Fluig",
      }}
      benefits={[
        "Automação de processos Fluig ponta a ponta",
        "Workflow Fluig com alçadas e prazos",
        "Gestão documental Fluig com rastreabilidade",
        "Integração Fluig com ERP TOTVS e APIs",
        "Indicadores de processo em BI",
      ]}
      sections={[
        {
          title: "Serviços TOTVS Fluig",
          items: [
            { icon: Workflow, title: "Automação de Processos", desc: "Processos manuais transformados em fluxos digitais." },
            { icon: ClipboardList, title: "Workflows e Fluxos de Aprovação", desc: "Alçadas, prazos e notificações padronizadas." },
            { icon: FileSignature, title: "Gestão Eletrônica de Documentos", desc: "Versionamento, guarda e rastreabilidade." },
            { icon: FileInput, title: "Formulários Digitais", desc: "Captura de dados estruturada e sem retrabalho." },
            { icon: ScanLine, title: "Digitalização de Processos", desc: "Fim do papel e das planilhas paralelas." },
            { icon: Boxes, title: "Integração com ERP TOTVS", desc: "Fluig integrado ao TOTVS RM e ao Protheus." },
            { icon: LinkIcon, title: "Integração com outros sistemas e APIs", desc: "Conexões via APIs, webservices e filas." },
            { icon: Code2, title: "Desenvolvimento e Customização", desc: "Widgets, datasets e soluções sob medida." },
            { icon: Users, title: "Consultoria TOTVS Fluig", desc: "Diagnóstico, redesenho e roadmap de automação." },
            { icon: LifeBuoy, title: "Sustentação e Evolução de Soluções", desc: "Acompanhamento e melhorias contínuas." },
          ],
        },
        {
          title: "Diferenciais DataLynk em Fluig",
          items: [
            { icon: Lightbulb, title: "Consultoria Especializada", desc: "Análise dos processos atuais e identificação das melhores oportunidades de automação." },
            { icon: Bot, title: "Automação Inteligente", desc: "Transformação de processos manuais em fluxos digitais mais rápidos e seguros." },
            { icon: Puzzle, title: "Integração de Sistemas", desc: "Conectamos o Fluig ao ERP TOTVS e a outros sistemas utilizados pela empresa." },
            { icon: LayoutDashboard, title: "Soluções Sob Medida", desc: "Desenvolvimento e customização de soluções de acordo com as necessidades do negócio." },
            { icon: RefreshCw, title: "Melhoria Contínua", desc: "Acompanhamento, sustentação e evolução das soluções implantadas." },
          ],
        },
      ]}
      faqs={[
        { q: "O que é o TOTVS Fluig?", a: "O TOTVS Fluig é a plataforma da TOTVS para automação de processos de negócio (BPM), gestão eletrônica de documentos e criação de portais corporativos, com integração ao ecossistema TOTVS." },
        { q: "O que envolve uma implantação Fluig?", a: "Mapeamento dos processos atuais, desenho dos fluxos digitais, construção de formulários e workflows, integrações com o ERP e demais sistemas, testes, treinamento e acompanhamento pós-go-live." },
        { q: "O Fluig substitui o ERP?", a: "Não. O Fluig complementa o ERP: os fluxos de aprovação, documentos e comunicação acontecem no Fluig, enquanto os registros transacionais permanecem no ERP." },
        { q: "É possível integrar o Fluig ao TOTVS RM ou Protheus?", a: "Sim. As integrações entre Fluig e ERP TOTVS são um dos pontos centrais dos projetos, permitindo que aprovações no Fluig reflitam nos processos do ERP." },
        { q: "A DataLynk faz desenvolvimento Fluig?", a: "Sim. Desenvolvemos e customizamos widgets, datasets, formulários e integrações, sempre alinhados às boas práticas da plataforma." },
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

import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Wallet, ShoppingCart, FileText, Calculator, UserCircle, BookOpen } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

const TITLE = "Consultoria TOTVS RM | Especialistas em RM | DataLynk";
const DESC =
  "Consultoria TOTVS RM: implantação, suporte, integrações e evolução dos módulos Educacional, RH, Backoffice, Financeiro e Portais com especialistas DataLynk.";
const URL = "https://datalynk.com.br/totvs-rm";

export const Route = createFileRoute("/totvs-rm")({
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
      eyebrow="ERP · TOTVS RM"
      title={<>Consultoria <span className="text-accent-orange">TOTVS RM</span> | Especialistas em TOTVS RM</>}
      description="Implantação, sustentação e evolução do TOTVS RM para Educação, RH e Backoffice, com especialistas dedicados por módulo."
      intro="O TOTVS RM é o ERP da TOTVS mais utilizado por instituições de ensino e por empresas com forte demanda de RH, Financeiro e Backoffice. A DataLynk apoia organizações em todo o ciclo do TOTVS RM — do diagnóstico e implantação à sustentação evolutiva — conectando o ERP a integrações, dados e Business Intelligence. Atendemos instituições educacionais, indústrias, varejo, serviços e saúde que precisam extrair mais valor do sistema TOTVS RM."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "TOTVS", to: "/totvs" }, { label: "TOTVS RM" }]}
      service={{
        name: "Consultoria TOTVS RM",
        description: DESC,
        url: URL,
        serviceType: "Consultoria e implantação de ERP TOTVS RM",
      }}
      benefits={[
        "Especialistas TOTVS RM por módulo",
        "Metodologia de implantação comprovada",
        "Sustentação evolutiva com SLA",
        "Integrações com sistemas legados",
        "Camada de dados e BI sobre o RM",
      ]}
      sections={[
        {
          title: "Módulos do TOTVS RM que atendemos",
          items: [
            { icon: GraduationCap, title: "Educacional", desc: "Secretaria, matrículas, avaliações e portais." },
            { icon: Users, title: "RH e Folha", desc: "Admissão, folha, ponto, benefícios e eSocial." },
            { icon: Wallet, title: "Financeiro", desc: "Contas a pagar/receber, tesouraria e fluxo." },
            { icon: ShoppingCart, title: "Compras", desc: "Cotações, contratos, homologação e SLA." },
            { icon: FileText, title: "Fiscal", desc: "Notas, obrigações acessórias, SPED." },
            { icon: Calculator, title: "Contábil", desc: "Contabilidade, patrimônio, ativos e balanços." },
            { icon: UserCircle, title: "Portal do Aluno", desc: "Autoatendimento acadêmico e financeiro." },
            { icon: BookOpen, title: "Portal do Professor", desc: "Diário, avaliações e comunicação." },
          ],
        },
        {
          title: "Para quem o TOTVS RM é indicado",
          items: [
            { icon: GraduationCap, title: "Instituições de ensino", desc: "Gestão acadêmica, financeira e portais integrados." },
            { icon: Users, title: "Áreas de RH e DP", desc: "Folha, ponto e obrigações trabalhistas em um só ambiente." },
            { icon: Wallet, title: "Backoffice corporativo", desc: "Financeiro, compras, fiscal e contábil integrados." },
          ],
        },
      ]}
      process={[
        { step: "01", title: "Diagnóstico", desc: "Mapeamento de processos e cenário atual." },
        { step: "02", title: "Blueprint", desc: "Desenho da solução e roadmap." },
        { step: "03", title: "Implantação", desc: "Parametrização, integrações e go-live." },
        { step: "04", title: "Sustentação", desc: "Evolução contínua e suporte especializado." },
      ]}
      faqs={[
        { q: "O que é o TOTVS RM?", a: "O TOTVS RM é a linha de ERP da TOTVS voltada a gestão educacional, recursos humanos e backoffice corporativo, composta por módulos que cobrem processos acadêmicos, financeiros, fiscais, contábeis e de pessoas." },
        { q: "Vocês atendem apenas instituições de ensino?", a: "Não. Atendemos qualquer organização que utilize o TOTVS RM, com especialização também em Backoffice, RH e Financeiro." },
        { q: "É possível migrar de outro ERP para o TOTVS RM?", a: "Sim. Conduzimos projetos de migração com metodologia de conversão de dados, execução em paralelo e validação antes do go-live." },
        { q: "Vocês oferecem sustentação após o go-live?", a: "Sim, com times dedicados, SLA definido e portal de chamados." },
        { q: "É possível integrar o TOTVS RM com BI?", a: "Sim. Construímos pipelines de dados e modelos em Power BI a partir das bases do TOTVS RM, com indicadores acadêmicos, financeiros e de pessoas." },
      ]}
      related={[
        { title: "Consultoria TOTVS RM", desc: "Especialistas por módulo para destravar processos do RM.", to: "/consultoria-totvs-rm" },
        { title: "Implantação TOTVS RM", desc: "Do diagnóstico ao go-live com metodologia estruturada.", to: "/implantacao-totvs-rm" },
        { title: "Suporte TOTVS RM", desc: "Sustentação funcional e técnica com SLA.", to: "/suporte-totvs-rm" },
        { title: "TOTVS Protheus", desc: "Consultoria completa no ERP Protheus.", to: "/totvs-protheus" },
        { title: "Business Intelligence", desc: "Indicadores confiáveis sobre os dados do RM.", to: "/solucoes/bi" },
        { title: "Ecossistema TOTVS", desc: "Visão geral dos nossos serviços TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

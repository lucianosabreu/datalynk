import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Wallet, LinkIcon, BarChart3, Settings } from "lucide-react";
import { TotvsServicePage } from "@/components/site/TotvsServicePage";

const TITLE = "Consultoria TOTVS RM | Especialista e Consultor TOTVS RM | DataLynk";
const DESC =
  "Consultoria TOTVS RM com especialistas por módulo: Educacional, RH, Financeiro, Compras, Fiscal e Contábil, além de integrações e BI.";
const URL = "https://datalynk.com.br/consultoria-totvs-rm";

export const Route = createFileRoute("/consultoria-totvs-rm")({
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
      eyebrow="Serviço · TOTVS RM"
      title={<>Consultoria <span className="text-accent-orange">TOTVS RM</span> por especialistas de módulo</>}
      description="Consultores TOTVS RM dedicados a Educacional, RH, Financeiro, Compras, Fiscal e Contábil, com foco em processos e integrações."
      intro="A consultoria TOTVS RM da DataLynk atua no dia a dia de quem usa o sistema. Nossos consultores revisam parametrizações, corrigem desvios de processo, apoiam fechamentos, conduzem melhorias e treinam os times internos. Quando o cenário exige, ampliamos a atuação para integrações e para a construção de indicadores sobre as bases do RM."
      url={URL}
      serviceName="Consultoria TOTVS RM"
      serviceType="Consultoria funcional em TOTVS RM"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "TOTVS", to: "/totvs" },
        { label: "TOTVS RM", to: "/totvs-rm" },
        { label: "Consultoria TOTVS RM" },
      ]}
      benefits={[
        "Consultores por módulo do RM",
        "Revisão de parametrizações",
        "Apoio em fechamentos e rotinas críticas",
        "Treinamento de times internos",
        "Integrações e indicadores sob demanda",
      ]}
      sections={[
        { icon: GraduationCap, title: "Módulo Educacional", desc: "Secretaria, matrículas, avaliações, portais e rotinas acadêmicas." },
        { icon: Users, title: "RH e Folha", desc: "Admissão, folha, ponto, benefícios e obrigações trabalhistas." },
        { icon: Wallet, title: "Financeiro e Backoffice", desc: "Contas a pagar e receber, compras, fiscal e contábil." },
        { icon: Settings, title: "Revisão de parametrização", desc: "Ajuste de configurações que geram retrabalho e inconsistência." },
        { icon: LinkIcon, title: "Integrações", desc: "Conexão do RM a sistemas próprios e plataformas de terceiros." },
        { icon: BarChart3, title: "Indicadores", desc: "Modelos de BI sobre dados acadêmicos, financeiros e de pessoas." },
      ]}
      faqs={[
        { q: "O que faz um consultor TOTVS RM?", a: "O consultor TOTVS RM traduz as necessidades do negócio em configurações e rotinas do sistema, apoia usuários, revisa parametrizações, conduz melhorias e garante que os processos rodem de forma consistente no ERP." },
        { q: "Preciso trocar de ERP para resolver meus problemas no RM?", a: "Na maior parte dos casos, não. Muitos problemas vêm de parametrização inadequada, processos não padronizados ou uso parcial dos módulos — e podem ser resolvidos com consultoria." },
        { q: "A consultoria pode ser contínua?", a: "Sim. Além de projetos pontuais, atuamos em formato de sustentação contínua, com horas acordadas e prioridades definidas em conjunto." },
        { q: "Vocês treinam a equipe interna?", a: "Sim. A transferência de conhecimento faz parte do trabalho, para que o time do cliente ganhe autonomia no uso do TOTVS RM." },
      ]}
      related={[
        { title: "TOTVS RM", desc: "Página principal da linha RM.", to: "/totvs-rm" },
        { title: "Implantação TOTVS RM", desc: "Projetos de implantação e migração.", to: "/implantacao-totvs-rm" },
        { title: "Suporte TOTVS RM", desc: "Sustentação com prazos acordados.", to: "/suporte-totvs-rm" },
        { title: "Consultoria TOTVS", desc: "Nossa atuação em todo o ecossistema.", to: "/consultoria-totvs" },
        { title: "Business Intelligence", desc: "Indicadores sobre os dados do RM.", to: "/solucoes/bi" },
        { title: "Ecossistema TOTVS", desc: "Hub com todas as frentes TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

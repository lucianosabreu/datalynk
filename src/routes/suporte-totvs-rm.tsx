import { createFileRoute } from "@tanstack/react-router";
import { LifeBuoy, Clock, Wrench, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { TotvsServicePage } from "@/components/site/TotvsServicePage";

const TITLE = "Suporte TOTVS RM | Sustentação e Atendimento Especializado | DataLynk";
const DESC =
  "Suporte TOTVS RM com atendimento funcional e técnico, prazos acordados, apoio em fechamentos e evolução contínua dos módulos.";
const URL = "https://datalynk.com.br/suporte-totvs-rm";

export const Route = createFileRoute("/suporte-totvs-rm")({
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
      title={<>Suporte <span className="text-accent-orange">TOTVS RM</span> para o dia a dia da operação</>}
      description="Sustentação funcional e técnica do TOTVS RM, com prazos acordados, apoio em fechamentos e melhorias contínuas."
      intro="Depois do go-live, o ERP precisa continuar acompanhando o negócio. O suporte TOTVS RM da DataLynk atende dúvidas de usuários, resolve incidentes, apoia rotinas críticas como fechamentos e folha, e encaminha melhorias sem interromper a operação. O atendimento é organizado por prioridade, com registro e histórico de cada solicitação."
      url={URL}
      serviceName="Suporte TOTVS RM"
      serviceType="Sustentação e suporte de ERP TOTVS RM"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "TOTVS", to: "/totvs" },
        { label: "TOTVS RM", to: "/totvs-rm" },
        { label: "Suporte TOTVS RM" },
      ]}
      benefits={[
        "Atendimento funcional e técnico",
        "Prazos de resposta acordados",
        "Registro e histórico de chamados",
        "Apoio em fechamentos e folha",
        "Fila de melhorias priorizada",
      ]}
      sections={[
        { icon: LifeBuoy, title: "Atendimento a usuários", desc: "Dúvidas de uso, orientação de rotinas e apoio operacional." },
        { icon: Wrench, title: "Resolução de incidentes", desc: "Análise e correção de erros funcionais e técnicos." },
        { icon: Clock, title: "Apoio a rotinas críticas", desc: "Acompanhamento de fechamentos, folha e obrigações." },
        { icon: TrendingUp, title: "Melhorias contínuas", desc: "Backlog priorizado de evoluções e ajustes de processo." },
        { icon: Users, title: "Capacitação do time", desc: "Orientações e treinamentos pontuais para ganhar autonomia." },
        { icon: ShieldCheck, title: "Boas práticas", desc: "Padronização de configurações e redução de riscos operacionais." },
      ]}
      faqs={[
        { q: "O que está incluído no suporte TOTVS RM?", a: "Atendimento a dúvidas de usuários, análise e correção de incidentes, apoio em rotinas críticas e encaminhamento de melhorias, conforme o escopo contratado." },
        { q: "Como os atendimentos são priorizados?", a: "Cada solicitação é registrada e classificada por impacto e urgência, com prazos de resposta definidos em contrato." },
        { q: "O suporte substitui o suporte da TOTVS?", a: "Não. Atuamos de forma complementar: cuidamos do uso, da parametrização e dos processos, acionando o fabricante quando a questão é de produto." },
        { q: "É possível contratar apenas horas de suporte?", a: "Sim. Trabalhamos com pacotes de horas e com contratos de sustentação contínua, dependendo do volume de demandas." },
      ]}
      related={[
        { title: "TOTVS RM", desc: "Página principal da linha RM.", to: "/totvs-rm" },
        { title: "Consultoria TOTVS RM", desc: "Especialistas por módulo do RM.", to: "/consultoria-totvs-rm" },
        { title: "Implantação TOTVS RM", desc: "Projetos de implantação e migração.", to: "/implantacao-totvs-rm" },
        { title: "Consultoria TOTVS", desc: "Nossa atuação em todo o ecossistema.", to: "/consultoria-totvs" },
        { title: "Business Intelligence", desc: "Indicadores sobre os dados do ERP.", to: "/solucoes/bi" },
        { title: "Ecossistema TOTVS", desc: "Hub com todas as frentes TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

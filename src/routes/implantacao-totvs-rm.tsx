import { createFileRoute } from "@tanstack/react-router";
import { Search, FileText, Settings, Database, Rocket, Users } from "lucide-react";
import { TotvsServicePage } from "@/components/site/TotvsServicePage";

const TITLE = "Implantação TOTVS RM | Projetos e Migração de ERP | DataLynk";
const DESC =
  "Implantação TOTVS RM com diagnóstico, blueprint, parametrização, migração de dados, testes, go-live e acompanhamento pós-implantação.";
const URL = "https://datalynk.com.br/implantacao-totvs-rm";

export const Route = createFileRoute("/implantacao-totvs-rm")({
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
      title={<>Implantação <span className="text-accent-orange">TOTVS RM</span> com método e previsibilidade</>}
      description="Projetos de implantação e migração para o TOTVS RM, do diagnóstico ao go-live, com acompanhamento após a virada."
      intro="A implantação do TOTVS RM envolve muito mais do que instalar um sistema: exige entender processos, definir parametrizações, migrar dados com qualidade e preparar as pessoas. A DataLynk conduz cada etapa com escopo claro, responsáveis definidos e validações antes da virada, reduzindo surpresas no go-live."
      url={URL}
      serviceName="Implantação TOTVS RM"
      serviceType="Implantação de ERP TOTVS RM"
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "TOTVS", to: "/totvs" },
        { label: "TOTVS RM", to: "/totvs-rm" },
        { label: "Implantação TOTVS RM" },
      ]}
      benefits={[
        "Escopo e cronograma definidos",
        "Migração de dados validada",
        "Testes integrados antes do go-live",
        "Treinamento dos usuários-chave",
        "Acompanhamento pós-virada",
      ]}
      sections={[
        { icon: Search, title: "Diagnóstico", desc: "Levantamento dos processos atuais, sistemas envolvidos e riscos." },
        { icon: FileText, title: "Blueprint", desc: "Desenho da solução, decisões de parametrização e roadmap." },
        { icon: Settings, title: "Parametrização", desc: "Configuração dos módulos conforme o desenho aprovado." },
        { icon: Database, title: "Migração de dados", desc: "Extração, tratamento, carga e conferência dos dados legados." },
        { icon: Users, title: "Treinamento e testes", desc: "Capacitação dos usuários e testes integrados por processo." },
        { icon: Rocket, title: "Go-live e estabilização", desc: "Virada acompanhada e apoio intensivo nos primeiros ciclos." },
      ]}
      faqs={[
        { q: "Como funciona a implantação do TOTVS RM?", a: "O projeto passa por diagnóstico, desenho da solução, parametrização dos módulos, migração de dados, testes integrados, treinamento dos usuários, go-live e um período de estabilização com apoio próximo." },
        { q: "Quanto tempo dura uma implantação TOTVS RM?", a: "O prazo depende dos módulos contratados, do volume de integrações e da disponibilidade das equipes. Esse dimensionamento é feito no diagnóstico, antes do início do projeto." },
        { q: "É possível migrar dados de outro ERP?", a: "Sim. Trabalhamos com extração, tratamento e carga dos dados legados, com conferências para validar saldos e cadastros antes da virada." },
        { q: "O que acontece depois do go-live?", a: "Há um período de estabilização com acompanhamento próximo e, em seguida, o cliente pode seguir com sustentação contínua." },
      ]}
      related={[
        { title: "TOTVS RM", desc: "Página principal da linha RM.", to: "/totvs-rm" },
        { title: "Consultoria TOTVS RM", desc: "Especialistas por módulo do RM.", to: "/consultoria-totvs-rm" },
        { title: "Suporte TOTVS RM", desc: "Sustentação após a implantação.", to: "/suporte-totvs-rm" },
        { title: "Consultoria TOTVS", desc: "Nossa atuação em todo o ecossistema.", to: "/consultoria-totvs" },
        { title: "Business Intelligence", desc: "Indicadores após a virada do ERP.", to: "/solucoes/bi" },
        { title: "Ecossistema TOTVS", desc: "Hub com todas as frentes TOTVS.", to: "/totvs" },
      ]}
    />
  ),
});

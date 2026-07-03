import { createFileRoute } from "@tanstack/react-router";
import { Globe, Smartphone, Plug, Workflow, Brain, Sparkles } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

export const Route = createFileRoute("/solucoes/desenvolvimento")({
  head: () => ({
    meta: [
      { title: "Desenvolvimento de Sistemas, Apps e APIs | DataLynk" },
      { name: "description", content: "Sistemas Web, Aplicativos, APIs, Integrações, IA e Automação sob medida para transformação digital." },
    ],
    links: [{ rel: "canonical", href: "/solucoes/desenvolvimento" }],
  }),
  component: () => (
    <SolutionDetail
      eyebrow="Software Factory"
      title={<>Desenvolvimento <span className="text-accent-orange">sob medida</span></>}
      description="Sistemas Web, aplicativos, APIs, integrações, IA e automações construídas por squads especializadas."
      intro="Do MVP ao produto digital em escala, nossas squads combinam engenharia moderna, UX e IA para entregar soluções que resolvem problemas de negócio reais."
      benefits={[
        "Squads full-stack senior",
        "Arquitetura em Cloud",
        "Design System próprio",
        "DevOps e CI/CD",
        "Segurança e LGPD",
      ]}
      sections={[
        {
          title: "O que construímos",
          items: [
            { icon: Globe, title: "Sistemas Web", desc: "Plataformas B2B, B2C e portais." },
            { icon: Smartphone, title: "Aplicativos", desc: "Apps iOS/Android nativos e híbridos." },
            { icon: Plug, title: "APIs", desc: "REST/GraphQL para integrações escaláveis." },
            { icon: Workflow, title: "Integrações", desc: "TOTVS, SAP, Salesforce e legados." },
            { icon: Brain, title: "IA", desc: "LLMs, RAG, visão computacional e NLP." },
            { icon: Sparkles, title: "Automação", desc: "RPA, workflows e orquestração." },
          ],
        },
      ]}
    />
  ),
});

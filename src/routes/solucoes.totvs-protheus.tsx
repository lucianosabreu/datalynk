import { createFileRoute } from "@tanstack/react-router";
import { Settings, Boxes, LinkIcon, LifeBuoy, TrendingUp, Rocket } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

export const Route = createFileRoute("/solucoes/totvs-protheus")({
  head: () => ({
    meta: [
      { title: "Consultoria TOTVS Protheus — Implantação e Customização | DataLynk" },
      { name: "description", content: "Implantação, customização, integração, sustentação e melhorias no TOTVS Protheus com especialistas certificados." },
    ],
    links: [{ rel: "canonical", href: "/solucoes/totvs-protheus" }],
  }),
  component: () => (
    <SolutionDetail
      eyebrow="ERP · TOTVS"
      title={<>TOTVS <span className="text-accent-orange">Protheus</span> com resultado real</>}
      description="Implantação, customização, integração, sustentação e melhorias contínuas em Protheus para indústrias, varejo e serviços."
      intro="Somos parceiros estratégicos de empresas que utilizam o TOTVS Protheus como espinha dorsal de suas operações. Atuamos em todos os módulos e ciclos, com foco em produtividade, integrações e evolução tecnológica."
      benefits={[
        "Consultores certificados Protheus",
        "AdvPL e integrações via TOTVS APIs",
        "Roll-outs multiempresa e multipaís",
        "Suporte 8x5 ou 24x7",
        "Integração com BI, IA e RPA",
      ]}
      sections={[
        {
          title: "Nossos serviços em Protheus",
          items: [
            { icon: Rocket, title: "Implantação", desc: "Projetos completos com metodologia proprietária." },
            { icon: Settings, title: "Customização", desc: "Desenvolvimento AdvPL sob medida." },
            { icon: LinkIcon, title: "Integração", desc: "APIs, EDI, e-commerce e sistemas legados." },
            { icon: LifeBuoy, title: "Sustentação", desc: "Suporte técnico e funcional com SLA." },
            { icon: TrendingUp, title: "Melhorias", desc: "Roadmap evolutivo e otimização de processos." },
            { icon: Boxes, title: "Módulos", desc: "Financeiro, Faturamento, Estoque, Compras, Fiscal, PCP, RH." },
          ],
        },
      ]}
      process={[
        { step: "01", title: "Discovery", desc: "Diagnóstico e alinhamento estratégico." },
        { step: "02", title: "Design", desc: "Desenho funcional e técnico." },
        { step: "03", title: "Build & Test", desc: "Parametrização, dev AdvPL e validação." },
        { step: "04", title: "Go-live & Care", desc: "Cutover, hipercuidado e sustentação." },
      ]}
    />
  ),
});

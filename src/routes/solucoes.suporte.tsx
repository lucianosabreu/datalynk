import { createFileRoute } from "@tanstack/react-router";
import { Server, Cloud, Headphones, Eye, ShieldCheck, Activity } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

export const Route = createFileRoute("/solucoes/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte em Tecnologia, Cloud e Service Desk | DataLynk" },
      { name: "description", content: "Infraestrutura, Cloud, Service Desk e monitoramento 24/7 para manter sua operação sempre no ar." },
    ],
    links: [{ rel: "canonical", href: "/solucoes/suporte" }],
  }),
  component: () => (
    <SolutionDetail
      eyebrow="IT Operations"
      title={<>Suporte em <span className="text-accent-orange">Tecnologia</span> 24/7</>}
      description="Infraestrutura, Cloud, Service Desk e monitoramento com SLA garantido, para manter sua operação sempre no ar."
      intro="Cuidamos da tecnologia para você focar no negócio. Do ambiente on-premise à Cloud, oferecemos operação, monitoramento proativo e evolução da sua infraestrutura."
      benefits={[
        "NOC/SOC 24x7",
        "Cloud AWS, Azure e GCP",
        "Service Desk multicanal",
        "Monitoramento proativo",
        "Segurança e compliance",
      ]}
      sections={[
        {
          title: "Serviços de operação",
          items: [
            { icon: Server, title: "Infraestrutura", desc: "Servidores, redes e virtualização." },
            { icon: Cloud, title: "Cloud", desc: "Arquitetura, migração e FinOps." },
            { icon: Headphones, title: "Service Desk", desc: "N1, N2 e N3 com SLA." },
            { icon: Eye, title: "Monitoramento", desc: "Observabilidade e alertas 24/7." },
            { icon: ShieldCheck, title: "Segurança", desc: "SIEM, backup e continuidade." },
            { icon: Activity, title: "Performance", desc: "Capacity planning e tuning." },
          ],
        },
      ]}
    />
  ),
});

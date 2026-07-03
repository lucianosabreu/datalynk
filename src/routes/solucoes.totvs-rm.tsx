import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Wallet, ShoppingCart, FileText, Calculator, UserCircle, BookOpen } from "lucide-react";
import { SolutionDetail } from "@/components/site/SolutionDetail";

export const Route = createFileRoute("/solucoes/totvs-rm")({
  head: () => ({
    meta: [
      { title: "Consultoria TOTVS RM — Implantação e Sustentação | DataLynk" },
      { name: "description", content: "Consultoria especializada em TOTVS RM: implantação, suporte, integrações e evolução dos módulos Educacional, RH, Backoffice, Financeiro e Portais." },
    ],
    links: [{ rel: "canonical", href: "/solucoes/totvs-rm" }],
  }),
  component: () => (
    <SolutionDetail
      eyebrow="ERP · TOTVS"
      title={<>Consultoria <span className="text-accent-orange">TOTVS RM</span> de ponta a ponta</>}
      description="Implantação, sustentação e evolução do TOTVS RM para Educação, RH e Backoffice, com especialistas certificados."
      intro="A DataLynk apoia instituições de ensino e grandes empresas em todo o ciclo do TOTVS RM — do diagnóstico e implantação à sustentação evolutiva, com times dedicados por módulo e prática consolidada em integrações."
      benefits={[
        "Especialistas TOTVS certificados",
        "Metodologia de implantação comprovada",
        "Squads dedicadas por módulo",
        "Sustentação evolutiva e SLA",
        "Integrações com BI, IA e sistemas legados",
      ]}
      sections={[
        {
          title: "Módulos que atendemos",
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
      ]}
      process={[
        { step: "01", title: "Diagnóstico", desc: "Mapeamento de processos e cenário atual." },
        { step: "02", title: "Blueprint", desc: "Desenho da solução e roadmap." },
        { step: "03", title: "Implantação", desc: "Parametrização, integrações e go-live." },
        { step: "04", title: "Sustentação", desc: "Evolução contínua e suporte especializado." },
      ]}
      faqs={[
        { q: "Vocês atendem apenas instituições de ensino?", a: "Não. Atendemos qualquer organização que utilize o TOTVS RM, com forte especialização também em Backoffice, RH e Financeiro." },
        { q: "É possível migrar de outro ERP para o TOTVS RM?", a: "Sim. Conduzimos projetos de migração com metodologia própria de conversão de dados, paralelo e validação." },
        { q: "Vocês oferecem sustentação após o go-live?", a: "Sim, com times dedicados, SLA definido e portal de chamados." },
      ]}
    />
  ),
});

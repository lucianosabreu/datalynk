import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  BarChart3,
  Cpu,
  Cloud,
  Code2,
  Boxes,
  ShieldCheck,
  Sparkles,
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  ShoppingBag,
  Wheat,
  CheckCircle2,
  TrendingUp,
  Zap,
  Bot,
  Workflow,
  Brain,
  ChevronRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ClientsCarousel } from "@/components/site/ClientsCarousel";
import heroImg from "@/assets/hero-datalynk.jpg";
import dashImg from "@/assets/dashboard-bi.jpg";
import teamImg from "@/assets/team-collab.jpg";
import networkImg from "@/assets/pattern-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataLynk — Dados, TOTVS e IA para grandes empresas" },
      { name: "description", content: "Consultoria em TOTVS RM, Protheus, Power BI, Engenharia de Dados e IA. Diagnóstico gratuito com especialistas para acelerar sua transformação digital." },
      { property: "og:title", content: "DataLynk — Dados, TOTVS e IA para grandes empresas" },
      { property: "og:description", content: "Consultoria em TOTVS RM, Protheus, Power BI, Engenharia de Dados e IA. Diagnóstico gratuito com especialistas para acelerar sua transformação digital." },
      { property: "og:url", content: "https://datalynk.com.br/" },
    ],
    links: [{ rel: "canonical", href: "https://datalynk.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DataLynk",
          url: "https://datalynk.com.br",
        }),
      },
    ],
  }),
  component: HomePage,
});

const solutions = [
  { icon: Boxes, title: "TOTVS RM", desc: "Implantação, sustentação e evolução do TOTVS RM em Educação, RH e Backoffice.", to: "/totvs-rm" },
  { icon: Building2, title: "TOTVS Protheus", desc: "Consultoria completa em Protheus: implantação, customização e integrações.", to: "/totvs-protheus" },
  { icon: BarChart3, title: "Business Intelligence", desc: "Dashboards, Power BI, KPIs e analytics para decisões orientadas por dados.", to: "/solucoes/bi" },
  { icon: Database, title: "Engenharia de Dados", desc: "Data Lake, Data Warehouse, ETL, governança e integrações em escala.", to: "/solucoes/engenharia-dados" },
  { icon: Code2, title: "Desenvolvimento", desc: "Sistemas Web, aplicativos, APIs e automações sob medida.", to: "/solucoes/desenvolvimento" },
  { icon: Cloud, title: "Suporte em Tecnologia", desc: "Infraestrutura, Cloud, Service Desk e monitoramento 24/7.", to: "/solucoes/suporte" },
];

const segments = [
  { icon: GraduationCap, title: "Educação" },
  { icon: HeartPulse, title: "Saúde" },
  { icon: Factory, title: "Indústria" },
  { icon: ShoppingBag, title: "Varejo" },
  { icon: Building2, title: "Serviços" },
  { icon: Wheat, title: "Agronegócio" },
];

const cases = [
  {
    tag: "Educação",
    title: "Instituição de ensino reduz 40% do tempo de fechamento contábil",
    problem: "Processos manuais e integrações frágeis atrasavam o fechamento mensal.",
    result: "-40% no ciclo contábil e visibilidade em tempo real dos indicadores acadêmicos.",
    metric: "40%",
    metricLabel: "menos tempo",
  },
  {
    tag: "Indústria",
    title: "Indústria multiplanta ganha visão única com Data Warehouse",
    problem: "Dados fragmentados em três ERPs impediam análise consolidada.",
    result: "Data Warehouse corporativo com Power BI unificando 12 fábricas em uma visão.",
    metric: "12",
    metricLabel: "unidades integradas",
  },
  {
    tag: "Varejo",
    title: "Rede varejista automatiza reposição com IA",
    problem: "Rupturas frequentes e excesso de estoque em SKUs de baixa saída.",
    result: "Modelo preditivo integrado ao Protheus reduziu ruptura em 28%.",
    metric: "28%",
    metricLabel: "menos ruptura",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1080} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2547]/95 via-[#123B66]/85 to-[#123B66]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
        </div>

        {/* floating tech accents */}
        <div className="absolute top-1/4 right-10 hidden lg:block animate-float-slow">
          <div className="glass-card rounded-2xl p-4 w-56 text-white">
            <div className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-wider">
              <TrendingUp className="h-3.5 w-3.5 text-accent-orange" /> Receita YTD
            </div>
            <div className="mt-2 font-display font-bold text-2xl">R$ 48,2M</div>
            <div className="h-1.5 mt-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-accent-orange to-yellow-300" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 right-32 hidden lg:block animate-float-slow" style={{ animationDelay: "1.5s" }}>
          <div className="glass-card rounded-2xl p-4 w-48 text-white">
            <div className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-wider">
              <Bot className="h-3.5 w-3.5 text-accent-orange" /> Agente IA
            </div>
            <div className="mt-2 text-sm">Anomalia detectada em Compras — 3 pedidos revisados.</div>
          </div>
        </div>

        <div className="container-page relative pt-24 pb-16">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90 border border-white/20 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent-orange" />
              Consultoria em Tecnologia · TOTVS · Dados · IA
            </div>
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Transformando <span className="text-gradient-brand">Dados</span> em Decisões <span className="text-accent-orange">Inteligentes</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Consultoria especializada em ERP, Business Intelligence, Engenharia de Dados e IA
              para acelerar a transformação digital de grandes empresas.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-orange px-7 py-4 text-sm md:text-base font-semibold text-white shadow-elegant hover:brightness-110 transition font-display"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solucoes"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 text-sm md:text-base font-semibold text-white hover:bg-white/10 transition font-display"
              >
                Conheça Nossas Soluções
              </Link>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest">
          Role para explorar
        </div>
      </section>

      {/* Credibility strip */}
      <section className="bg-white border-b border-border">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { k: "+20", l: "anos de experiência" },
            { k: "+300", l: "projetos entregues" },
            { k: "98%", l: "clientes satisfeitos" },
            { k: "TOTVS", l: "especialistas certificados" },
            { k: "BI", l: "Power BI & Analytics" },
            { k: "Data", l: "Engenharia de Dados" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-bold text-3xl text-brand">{s.k}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <ClientsCarousel />


      {/* Solutions */}
      <section className="py-24 bg-surface">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Soluções</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand leading-tight">
              Um portfólio completo para acelerar sua jornada digital
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Da implantação de ERP à Inteligência Artificial aplicada aos negócios, unimos
              tecnologia, método e talento em cada entrega.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-elegant border border-border/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-light to-accent-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display font-bold text-xl text-brand">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand group-hover:text-accent-orange transition-colors">
                  Saiba mais <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section className="relative py-24 overflow-hidden bg-brand text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${networkImg})`, backgroundSize: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand/60" />
        <div className="container-page relative grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Inteligência Artificial</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              IA aplicada ao seu <span className="text-accent-orange">negócio</span>, integrada ao seu ERP.
            </h2>
            <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
              Da automação inteligente aos Agentes de IA, ajudamos você a extrair inteligência
              real dos seus dados corporativos.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Brain, title: "Modelos preditivos", desc: "Previsão de demanda, churn e evasão." },
                { icon: Bot, title: "Agentes IA", desc: "Assistentes para RH, Compras e Financeiro." },
                { icon: Workflow, title: "Automação inteligente", desc: "RPA + IA integrados ao TOTVS." },
                { icon: Zap, title: "IA no ERP", desc: "Copilotos dentro do Protheus e RM." },
              ].map((f) => (
                <div key={f.title} className="glass-card rounded-2xl p-5 bg-white/5 border-white/10">
                  <f.icon className="h-6 w-6 text-accent-orange" />
                  <div className="mt-3 font-display font-semibold">{f.title}</div>
                  <div className="text-sm text-white/70">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-white/10">
              <img src={dashImg} alt="Dashboard analítico DataLynk" loading="lazy" className="w-full" width={1400} height={900} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 w-64 bg-white/10 border-white/20 hidden md:block">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
                <CheckCircle2 className="h-4 w-4 text-accent-orange" /> Insight IA
              </div>
              <div className="mt-2 text-sm">
                Vendas no Sudeste com projeção de +14% no próximo trimestre.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Segmentos</div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brand leading-tight max-w-xl">
                Experiência real em quem entende do seu setor
              </h2>
            </div>
            <Link to="/segmentos" className="text-sm font-semibold text-brand inline-flex items-center gap-1 hover:text-accent-orange">
              Ver todos os segmentos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {segments.map((s) => (
              <div key={s.title} className="group relative rounded-2xl bg-surface p-6 text-center hover:bg-brand hover:text-white transition-colors cursor-pointer border border-border/60">
                <s.icon className="h-8 w-8 mx-auto text-brand group-hover:text-accent-orange transition-colors" />
                <div className="mt-3 font-display font-semibold text-sm">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 bg-surface">
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Cases de Sucesso</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand leading-tight max-w-2xl">
            Resultados que falam por si.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <article key={c.title} className="rounded-3xl bg-white p-8 shadow-elegant border border-border/60 flex flex-col">
                <div className="text-xs uppercase tracking-widest text-accent-orange font-semibold">{c.tag}</div>
                <h3 className="mt-3 font-display font-bold text-lg text-brand leading-tight">{c.title}</h3>
                <div className="mt-5 pb-5 border-b border-border">
                  <div className="text-xs uppercase text-muted-foreground">Problema</div>
                  <div className="text-sm text-ink mt-1">{c.problem}</div>
                </div>
                <div className="mt-4 flex-1">
                  <div className="text-xs uppercase text-muted-foreground">Resultado</div>
                  <div className="text-sm text-ink mt-1">{c.result}</div>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="font-display font-bold text-4xl text-brand">{c.metric}</div>
                    <div className="text-xs text-muted-foreground">{c.metricLabel}</div>
                  </div>
                  <Link to="/cases" className="text-sm font-semibold text-brand inline-flex items-center gap-1 hover:text-accent-orange">
                    Ver case <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={teamImg} alt="Equipe DataLynk" loading="lazy" className="rounded-3xl shadow-elegant w-full" width={1400} height={900} />
            <div className="absolute -bottom-6 -right-6 bg-brand text-white rounded-2xl p-6 max-w-xs shadow-elegant hidden md:block">
              <div className="font-display font-bold text-3xl text-accent-orange">98%</div>
              <div className="text-sm text-white/80 mt-1">de clientes que renovam contratos ano após ano</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-orange font-semibold mb-3">Por que DataLynk</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-brand leading-tight">
              Consultoria com método, gente e tecnologia.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Combinamos profundidade técnica em TOTVS, dados e IA com uma cultura consultiva
              focada em resultados de negócio mensuráveis.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, t: "Governança e segurança em primeiro lugar", d: "LGPD, segurança da informação e conformidade em cada projeto." },
                { icon: Cpu, t: "Squads especializadas por prática", d: "Times TOTVS, BI, Dados, Desenvolvimento e Cloud." },
                { icon: Sparkles, t: "Metodologia comprovada", d: "Diagnóstico, roadmap, execução ágil e sustentação evolutiva." },
              ].map((i) => (
                <li key={i.t} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/5 text-brand">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-brand">{i.t}</div>
                    <div className="text-sm text-muted-foreground">{i.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl gradient-cta p-10 md:p-16 shadow-elegant">
            <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${networkImg})`, backgroundSize: "cover" }} />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
                  Pronto para transformar dados em decisões?
                </h2>
                <p className="mt-4 text-white/80 text-lg max-w-lg">
                  Agende um diagnóstico gratuito com nossos especialistas e descubra o próximo
                  passo da sua transformação digital.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-7 py-4 text-base font-semibold text-white shadow-elegant hover:brightness-110 font-display">
                  Solicitar Diagnóstico <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/cases" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/10 font-display">
                  Ver Cases
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

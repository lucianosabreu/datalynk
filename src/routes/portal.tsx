import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/portal")({
  head: () => ({
    meta: [
      { title: "Portal do Cliente | DataLynk" },
      { name: "description", content: "Acesse o Portal do Cliente DataLynk: chamados, projetos, horas consumidas, dashboards e documentos." },
      { property: "og:title", content: "Portal do Cliente | DataLynk" },
      { property: "og:description", content: "Acesse o Portal do Cliente DataLynk: chamados, projetos, horas consumidas, dashboards e documentos." },
      { property: "og:url", content: "https://datalynk.com.br/portal" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://datalynk.com.br/portal" }],
  }),
  component: PortalPage,
});

function PortalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portal do Cliente"
        title={<>Acesso <span className="text-accent-orange">exclusivo</span> DataLynk</>}
        description="Chamados, projetos, horas consumidas, dashboards e documentos em um só lugar."
      />
      <section className="py-24 bg-surface">
        <div className="container-page max-w-md mx-auto rounded-3xl bg-white p-10 shadow-elegant border border-border/60">
          <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white mx-auto">
            <Lock className="h-6 w-6" />
          </div>
          <h2 className="mt-6 text-center font-display font-bold text-2xl text-brand">Entrar no portal</h2>
          <form className="mt-6 space-y-4">
            <input type="email" placeholder="E-mail corporativo" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:border-brand" />
            <input type="password" placeholder="Senha" className="w-full rounded-xl border border-border px-4 py-3 focus:outline-none focus:border-brand" />
            <button type="button" className="w-full rounded-full bg-brand text-white py-3 font-display font-semibold hover:bg-accent-orange transition">
              Entrar
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Esqueceu a senha? <a href="#" className="text-brand hover:text-accent-orange">Recuperar acesso</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

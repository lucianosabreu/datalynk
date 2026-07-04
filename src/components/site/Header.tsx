import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const nav = [
  { label: "Sobre", to: "/sobre" },
  {
    label: "Soluções",
    to: "/solucoes",
    children: [
      { label: "TOTVS RM", to: "/solucoes/totvs-rm" },
      { label: "TOTVS Protheus", to: "/solucoes/totvs-protheus" },
      { label: "Business Intelligence", to: "/solucoes/bi" },
      { label: "Engenharia de Dados", to: "/solucoes/engenharia-dados" },
      { label: "Desenvolvimento", to: "/solucoes/desenvolvimento" },
      { label: "Suporte em Tecnologia", to: "/solucoes/suporte" },
    ],
  },
  { label: "Segmentos", to: "/segmentos" },
  { label: "Cases", to: "/cases" },
  { label: "Blog", to: "/blog" },
  { label: "Carreiras", to: "/carreiras" },
  { label: "Contato", to: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
  <header
    className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(18,59,102,0.06)]"
        : "bg-transparent"
    }`}
  >
    <div className="container-page flex h-20 items-center justify-between py-4">

      {/* LOGO */}
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="DataLynk"
          className="h-14 w-auto"
        />
      </Link>

      {/* MENU DESKTOP */}
      <nav className="hidden lg:flex items-center gap-1">
 
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                  <div className="w-72 rounded-2xl bg-white shadow-elegant border border-border p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-surface hover:text-brand transition"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
                }`}
                activeProps={{ className: "text-accent-orange" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/portal"
            className={`text-sm font-medium ${scrolled ? "text-brand" : "text-white/90"} hover:opacity-80`}
          >
            Portal do Cliente
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center rounded-full bg-accent-orange px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:brightness-110 transition font-display"
          >
            Fale com um Especialista
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-brand" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border shadow-elegant">
          <div className="container-page py-4 flex flex-col">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setSubOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-3 text-ink font-medium"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition ${subOpen ? "rotate-180" : ""}`} />
                  </button>
                  {subOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-muted-foreground hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink font-medium border-b border-border/60"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center rounded-full bg-accent-orange px-5 py-3 text-sm font-semibold text-white"
            >
              Fale com um Especialista
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

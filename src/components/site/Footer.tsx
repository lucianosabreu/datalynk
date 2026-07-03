import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-brand text-white">
      <div className="container-page py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 backdrop-blur font-display font-bold text-xl">
              D
            </span>
            <div>
              <div className="font-display font-bold text-xl">DataLynk</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                Consultoria em Tecnologia
              </div>
            </div>
          </div>
          <p className="text-white/75 text-sm leading-relaxed max-w-sm">
            Transformamos dados em decisões inteligentes. Consultoria especializada em ERP,
            Business Intelligence, Engenharia de Dados e Transformação Digital.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-accent-orange transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
            Soluções
          </h4>
          <ul className="space-y-2.5 text-sm text-white/85">
            <li><Link to="/solucoes/totvs-rm" className="hover:text-accent-orange">TOTVS RM</Link></li>
            <li><Link to="/solucoes/totvs-protheus" className="hover:text-accent-orange">TOTVS Protheus</Link></li>
            <li><Link to="/solucoes/bi" className="hover:text-accent-orange">Business Intelligence</Link></li>
            <li><Link to="/solucoes/engenharia-dados" className="hover:text-accent-orange">Engenharia de Dados</Link></li>
            <li><Link to="/solucoes/desenvolvimento" className="hover:text-accent-orange">Desenvolvimento</Link></li>
            <li><Link to="/solucoes/suporte" className="hover:text-accent-orange">Suporte em TI</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
            Empresa
          </h4>
          <ul className="space-y-2.5 text-sm text-white/85">
            <li><Link to="/sobre" className="hover:text-accent-orange">Sobre Nós</Link></li>
            <li><Link to="/cases" className="hover:text-accent-orange">Cases</Link></li>
            <li><Link to="/segmentos" className="hover:text-accent-orange">Segmentos</Link></li>
            <li><Link to="/carreiras" className="hover:text-accent-orange">Carreiras</Link></li>
            <li><Link to="/blog" className="hover:text-accent-orange">Blog</Link></li>
            <li><Link to="/portal" className="hover:text-accent-orange">Portal do Cliente</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-orange" /> Av. Paulista, 1000 — São Paulo, SP</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent-orange" /> +55 (11) 4000-0000</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent-orange" /> contato@datalynk.com.br</li>
          </ul>
          <form className="mt-6 flex gap-2">
            <input
              type="email"
              placeholder="Assine nossa newsletter"
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:text-white/60 focus:outline-none focus:border-accent-orange"
            />
            <button className="rounded-full bg-accent-orange px-5 py-2.5 text-sm font-semibold font-display hover:brightness-110">
              OK
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} DataLynk Consultoria em Tecnologia. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import bomix from "@/assets/clients/bomix.png.asset.json";
import methasa from "@/assets/clients/holding_methasa_logo.jpg.asset.json";
import kpe from "@/assets/clients/kpe.png.asset.json";
import mks from "@/assets/clients/logo_MKS.png.asset.json";
import finvest from "@/assets/clients/logo-finvest-digital.png.asset.json";

/**
 * Para adicionar ou remover clientes, basta editar esta lista.
 * (faça o upload do logo e crie o pointer em src/assets/clients/)
 */
const clients = [
  { name: "Bomix", src: bomix.url },
  { name: "Metha Holding", src: methasa.url },
  { name: "KPE Engenharia", src: kpe.url },
  { name: "MKS Soluções Integradas", src: mks.url },
  { name: "Finvest Digital", src: finvest.url },
];

function LogoTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-24 lg:pr-24"
      aria-hidden={ariaHidden || undefined}
    >
      {clients.map((c) => (
        <li key={c.name} className="shrink-0">
          <img
            src={c.src}
            alt={ariaHidden ? "" : `Logotipo ${c.name}`}
            loading="lazy"
            draggable={false}
            className="h-8 w-auto max-w-[150px] select-none object-contain opacity-75 grayscale-[15%] transition-all duration-500 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_6px_16px_rgba(18,59,102,0.18)] sm:h-10 lg:h-12"
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientsCarousel() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="nossos-clientes">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-orange">
            Clientes
          </div>
          <h2
            id="nossos-clientes"
            className="font-display text-3xl font-bold leading-tight text-brand md:text-4xl"
          >
            Nossos Clientes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empresas que confiam na DataLynk para transformar tecnologia em resultados.
          </p>
        </div>
      </div>

      <div className="marquee-mask mt-14 lg:mt-20">
        <div className="marquee-track flex w-max items-center">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import patternNetwork from "@/assets/pattern-network.jpg";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden gradient-brand pt-32 pb-20 lg:pt-40 lg:pb-24">
      <div
        className="absolute inset-0 opacity-25 mix-blend-screen"
        style={{ backgroundImage: `url(${patternNetwork})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand/40" />
      <div className="container-page relative">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90 border border-white/20 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-orange" /> {eyebrow}
          </div>
        )}
        <h1 className="max-w-4xl font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

import { Link, type LinkProps } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: LinkProps["to"];
}

const BASE = "https://datalynk.com.br";

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `${BASE}${c.to === "/" ? "/" : c.to}` } : {}),
    })),
  };

  const base = tone === "dark" ? "text-white/70" : "text-muted-foreground";
  const active = tone === "dark" ? "text-white" : "text-brand";

  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${base}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 opacity-60" />}
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-accent-orange transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className={`font-medium ${active}`} aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}

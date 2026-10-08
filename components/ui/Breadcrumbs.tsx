import Link from "next/link";
import { SITE } from "@/lib/site";

type Crumb = { name: string; href: string };

/** Visible trail + BreadcrumbList JSON-LD. */
export function Breadcrumbs({ trail, tone = "canal" }: { trail: Crumb[]; tone?: "canal" | "bone" }) {
  const all = [{ name: "Home", href: "/" }, ...trail];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE.url}${c.href}` })),
  };
  return (
    <nav aria-label="Breadcrumb" className={`t-label ${tone === "bone" ? "text-graphite" : "text-slate"}`}>
      <ol className="flex flex-wrap gap-x-2 gap-y-1">
        {all.map((c, i) => (
          <li key={c.href} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < all.length - 1 ? <Link href={c.href} className="u-link hover:text-copper">{c.name}</Link> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  );
}

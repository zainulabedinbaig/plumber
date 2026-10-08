import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", ...SERVICES.map((s) => `/services/${s.slug}`), "/areas", "/about", "/contact", "/request-a-quote"];
  return paths.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : p.startsWith("/services/") ? 0.8 : 0.6 }));
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ServicePage } from "@/components/ServicePage";
import { SERVICES, serviceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription, alternates: { canonical: `/services/${s.slug}` } };
}

// Params are read inside Suspense (Cache Components: params are URL data).
async function Content({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  return <ServicePage s={s} />;
}

export default function Page(props: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={null}>
      <Content params={props.params} />
    </Suspense>
  );
}

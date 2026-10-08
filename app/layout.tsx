import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import { AREAS } from "@/lib/areas";
import { SERVICES } from "@/lib/services";
import { CopperRun } from "@/components/CopperRun";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz"], display: "swap" });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Plumbers in Manchester | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: "Local plumbers covering Manchester and Greater Manchester. Burst pipes, leaks, blocked drains, boilers and bathrooms. Call or request a quote.",
  openGraph: { type: "website", locale: "en_GB", siteName: SITE.name },
};

export const viewport: Viewport = { themeColor: "#14171a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: SITE.name,
  url: SITE.url,
  areaServed: AREAS.map((a) => ({ "@type": "AdministrativeArea", name: a.name })),
  makesOffer: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  telephone: "+447933013385",
  // address, openingHours, sameAs: add once confirmed by the client.
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable} h-full antialiased`}>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject attributes on <body> before hydration */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <a href="#top" className="sr-only z-50 bg-copper px-4 py-3 font-medium text-canal focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <Header />
        <main id="top" className="relative">
          <Suspense fallback={null}><CopperRun /></Suspense>
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false } };

export default function Page() {
  return <LegalPage title="Privacy Policy" path="/privacy" sections={["Who we are", "What information we collect", "How we use it", "How long we keep it", "Your rights", "Contact"]} />;
}

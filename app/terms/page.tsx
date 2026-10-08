import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms", robots: { index: false } };

export default function Page() {
  return <LegalPage title="Terms" path="/terms" sections={["About these terms", "Quotes and payment", "Cancellations", "Our work", "Complaints"]} />;
}

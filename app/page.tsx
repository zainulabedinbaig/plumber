import type { Metadata } from "next";
import { Advice } from "@/components/sections/Advice";
import { AreasTeaser } from "@/components/sections/AreasTeaser";
import { EmergencyBand } from "@/components/sections/EmergencyBand";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { FaqList } from "@/components/sections/FaqList";
import { HomeHero } from "@/components/sections/HomeHero";
import { Intro } from "@/components/sections/Intro";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Problems } from "@/components/sections/Problems";
import { ServiceStrip } from "@/components/sections/ServiceStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { GENERAL_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: { absolute: "Plumbers in Manchester | Emergency & Local Plumbing" },
  description: "Local plumbers for Manchester and Greater Manchester: burst pipes, leaks, blocked drains, boilers and bathrooms. Call now or request a quote.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <Intro />
      <ServiceStrip />
      <EmergencyBand />
      <WhyUs />
      <Problems />
      <Process
        title="From first call to fixed."
        steps={[
          { title: "Tell us what’s happening", text: "Call, or send the form. We’ll ask what you can see and tell you what to do while you wait." },
          { title: "We look, then we explain", text: "The problem, the fix and the cost, in plain English, before the work starts." },
          { title: "We fix it", text: "Done properly, tested, and the area left clean." },
          { title: "You know what happens next", text: "What we did, anything to watch for, and who to call if it comes back." },
        ]}
      />
      <PhotoBand image="mill" eyebrow="Manchester">
        Red brick, old pipes, wet weather. We know what these houses do.
      </PhotoBand>
      <Testimonials />
      <AreasTeaser />
      <Advice />
      <FaqList faqs={GENERAL_FAQS.slice(0, 7)} title="Before you call." />
      <EnquirySection />
    </>
  );
}

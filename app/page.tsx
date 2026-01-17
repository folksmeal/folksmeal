import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import type { Metadata } from "next";

import { MealShowcase } from "@/components/sections/MealShowcase";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <MealShowcase />
      <Features />
      <Comparison />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}

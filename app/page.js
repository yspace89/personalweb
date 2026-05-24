"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import ImpactStats from "@/components/ImpactStats";
import WorkShipped from "@/components/WorkShipped";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState("en");

  return (
    <>
      {/* Background decorations */}
      <div className="mesh-bg" />
      <div className="grid-overlay" />

      {/* Navigation */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main content */}
      <main>
        <Hero lang={lang} />
        <HowIWork />
        <ImpactStats />
        <WorkShipped />
        <Services />
        <UseCases />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

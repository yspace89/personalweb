"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LinkedInWidget from "@/components/LinkedInWidget";

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
        <About lang={lang} />
        <Services lang={lang} />
        {/* <Portfolio lang={lang} /> - Hidden in v1 */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Widgets */}
      <LinkedInWidget lang={lang} />
    </>
  );
}

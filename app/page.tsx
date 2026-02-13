"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-hero relative overflow-hidden text-white">

      {/* floating decor */}
      <div className="absolute top-24 left-10 h-20 w-20 rounded-full bg-sky-400/10 floating" />
      <div className="absolute bottom-20 right-16 h-28 w-28 rounded-full bg-cyan-300/10 floating delay" />

      {/* ================= HERO ================= */}
      <section className="min-h-[80vh] relative flex items-center">
        <div className="absolute inset-0 animate-gradient bg-hero" />

        <div className="relative max-w-5xl mx-auto px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-5 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            {["Data-led", "Business-oriented", "Technology-enabled"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 bullet" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 text-5xl md:text-6xl font-bold leading-tight heading-hover"
          >
            <span className="block">I connect data, business, and</span>
            <span className="block mt-2">technology</span>
            <span className="block mt-2 text-sky-300">
              to build impactful products.
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            I focus on aligning stakeholders, prioritizing with data, and delivering outcomes
            that move the business forward.
          </p>

          <button className="mt-10 px-8 py-3 rounded-xl bg-sky-400 text-black font-semibold shadow-lg ripple-btn">
            Email Me →
          </button>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="px-6 py-20 section-fade reveal">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-xl font-medium mb-4">About</h2>

            <p className="text-white/80 mb-4">
              Good products are built through clear judgment — not just execution.
            </p>

            <p className="text-white/70">
              My experience across operations and product leadership shaped how I
              approach decisions today: understanding constraints, aligning
              stakeholders, and making choices that optimize for business impact.
            </p>
          </div>

          <div className="space-y-3">
            <DecorItem>Data guides decisions — it doesn’t replace judgment.</DecorItem>
            <DecorItem>Business impact is the north star.</DecorItem>
            <DecorItem>Technology is leverage, not the goal.</DecorItem>
          </div>
        </div>
      </section>

      {/* ================= HOW I WORK ================= */}
      <section className="px-6 py-20 reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-medium mb-8">How I Work</h2>

          <p className="text-white/70 mb-8">
            I work by balancing clarity, collaboration, and execution.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card
              title="Clear Decision Making"
              text="I prioritize problems based on data, business impact, and constraints — not assumptions."
            />
            <Card
              title="Cross-functional Collaboration"
              text="I align stakeholders, designers, and engineers so teams move in the same direction."
            />
            <Card
              title="Outcome-focused Execution"
              text="I focus on outcomes that improve efficiency, growth, and sustainability."
            />
          </div>
        </div>
      </section>

      {/* ================= CAREER ================= */}
      <section className="px-6 py-20 reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-medium mb-10">Career Journey</h2>

          <Timeline
            role="Senior Product Manager"
            company="Kota Hati"
            text="Core member of product leadership — shaping OKRs, product roadmaps, and developing the product team."
            present
          />

          <Timeline
            role="Senior Product Manager"
            company="Maxxi Tani"
            text="Led sales and marketing product tools, improving distribution efficiency and performance."
          />

          <Timeline
            role="Product Manager"
            company="Agri Sparta"
            text="Led product development from scratch to digitize agricultural processes and build scalable workflows."
          />

          <Timeline
            role="Coordinator Trainee"
            company="Alfamart"
            text="Built foundations in operations, management discipline, and leadership in a large-scale organization."
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-24 text-center reveal">
        <h2 className="text-2xl font-semibold mb-3">
          Let’s build meaningful products.
        </h2>

        <p className="text-white/70 mb-8">
          Open to conversations around product leadership, strategy, and execution.
        </p>

        <motion.a
          href="mailto:ubaidillahym@gmail.com"
          whileHover={{ scale: 1.03 }}
          className="rounded-xl bg-white text-black px-7 py-3 text-sm font-medium"
        >
          Email Me
        </motion.a>
      </section>
    </main>
  );
}

/* helpers */

function DecorItem({ children }: { children: React.ReactNode }) {
  return <div className="border-l border-white/15 pl-4">{children}</div>;
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </motion.div>
  );
}

function Timeline({ role, company, text, present }: any) {
  return (
    <div className="border-l border-white/15 pl-5 pb-6 mb-6 relative">
      <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-cyan-400" />

      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium flex items-center gap-2">
          {role}
          {present && <span className="present-badge">● Present</span>}
        </h3>
        <span className="text-xs text-white/50">{company}</span>
      </div>

      <p className="text-sm text-white/70">{text}</p>
    </div>
  );
}

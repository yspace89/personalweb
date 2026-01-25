"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  /* scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in-view")
        ),
      { threshold: 0.18 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* mouse parallax for hero */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const bgX = useTransform(mx, [-50, 50], ["-4%", "4%"]);
  const bgY = useTransform(my, [-50, 50], ["-4%", "4%"]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - rect.left - rect.width / 2);
          my.set(e.clientY - rect.top - rect.height / 2);
        }}
      >
        {/* --- background layers --- */}

        {/* aurora base */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-0 -z-30 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(56,189,248,0.25),transparent),radial-gradient(900px_500px_at_80%_70%,rgba(34,197,94,0.18),transparent),#0a0f1f]"
        />

        {/* animated gradient veil */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-0 -z-20 animate-gradient bg-hero opacity-80"
        />

        {/* radial spotlight */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_50%_35%,rgba(255,255,255,0.08),transparent_70%)]" />

        {/* particle grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:22px_22px]" />

        {/* ================= CONTENT ================= */}
        <div className="relative max-w-5xl mx-auto px-6 py-28">
          {/* badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            {["Data-led", "Business-oriented", "Technology-enabled"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400 bullet" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              )
            )}
          </motion.div>

          {/* heading (CONTENT TIDAK DIUBAH) */}
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 text-5xl md:text-6xl font-bold tracking-tight leading-tight heading-hover"
          >
            <span className="block">I connect data, business, and</span>
            <span className="block mt-2">technology</span>
            <span className="block mt-2 text-sky-300">
              to build impactful products.
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl text-lg text-gray-300"
          >
            I focus on aligning stakeholders, prioritizing with data, and delivering outcomes
            that move the business forward.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-12 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-8 py-3 font-semibold text-black shadow-lg hover:shadow-cyan-400/40 transition ripple-btn"
          >
            Email Me →
          </motion.button>
        </div>
      </section>

      {/* ================= REST OF PAGE (UNCHANGED) ================= */}

      {/* ABOUT */}
      <section className="px-6 py-20 reveal">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-medium mb-5">About</h2>
            <p className="text-white/80 mb-4">
              Good products are built through clear judgment — not just execution.
            </p>
            <p className="text-white/70">
              My experience across operations and product leadership shaped how I
              approach decisions today: understanding constraints, aligning
              stakeholders, and making choices that optimize for business impact.
            </p>
          </div>

          <div className="space-y-4">
            <DecorItem>Data guides decisions — it doesn’t replace judgment.</DecorItem>
            <DecorItem>Business impact is the north star.</DecorItem>
            <DecorItem>Technology is leverage, not the goal.</DecorItem>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="px-6 py-20 reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-medium mb-8">How I Work</h2>
          <p className="text-white/70 mb-10">
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
    </main>
  );
}

/* helpers */

function DecorItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l border-white/15 pl-4 hover:border-cyan-400 transition">
      {children}
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10"
    >
      <h3 className="mb-2 font-medium">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </motion.div>
  );
}

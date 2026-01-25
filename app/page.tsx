"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in-view")
        ),
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* ===== PARALLAX BACKGROUND ===== */}
      <div className="parallax-layer bg-hero" />
      <div className="parallax-layer slow bg-hero opacity-70" />

      {/* floating decorative shapes */}
      <div className="floating-shape -top-20 -left-20 bg-cyan-400/10" />
      <div className="floating-shape top-40 right-10 bg-sky-400/10 delay" />

      {/* subtle tech grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-grid" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 animate-gradient bg-hero" />

        <div className="relative max-w-5xl mx-auto px-6 py-24">
          {/* badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            {["Data-led", "Business-oriented", "Technology-enabled"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 bullet" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              )
            )}
          </motion.div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-10 text-5xl md:text-6xl font-bold tracking-tight leading-tight heading-hover"
          >
            <span className="block">I connect data, business, and</span>
            <span className="block mt-2">technology</span>
            <span className="block mt-2 text-sky-300">
              to build impactful products.
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
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

      {/* ================= ABOUT ================= */}
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

      {/* ================= HOW I WORK ================= */}
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

      {/* ================= CAREER ================= */}
      <section className="px-6 py-20 reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-medium mb-12">Career Journey</h2>

          <Timeline
            role="Senior Product Manager (Present)"
            company="Kota Hati"
            text="Core member of product leadership — shaping OKRs, product roadmaps, and developing the product team."
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
        <h2 className="text-2xl font-semibold mb-4">
          Let’s build meaningful products.
        </h2>
        <p className="text-white/70 mb-10">
          Open to conversations around product leadership, strategy, and execution.
        </p>

        <motion.a
          href="mailto:ubaidillahym@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block rounded-xl bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
        >
          Email Me
        </motion.a>
      </section>
    </main>
  );
}

/* ===== helpers ===== */

function DecorItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="group border-l border-white/15 pl-4 transition hover:border-cyan-400">
      <p className="text-white/80 group-hover:text-white transition">
        {children}
      </p>
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

function Timeline({
  role,
  company,
  text,
}: {
  role: string;
  company: string;
  text: string;
}) {
  const isPresent = role.includes("(Present)");

  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="relative mb-6 border-l border-white/15 pl-6"
    >
      <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-400" />

      <div className="mb-1 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-medium">
          {role.replace(" (Present)", "")}
          {isPresent && (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Present
            </span>
          )}
        </h3>
        <span className="text-xs text-white/50">{company}</span>
      </div>

      <p className="text-sm text-white/70">{text}</p>
    </motion.div>
  );
}

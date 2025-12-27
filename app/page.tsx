"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#0a0f14] min-h-screen text-white">

      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[200px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[200px] bottom-[-150px] right-[-50px]" />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-28">

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-300"
        >
          Data-led • Business-oriented • Technology-enabled
        </motion.p>

        {/* HERO TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          I connect data, business, and <br />
          technology <br />
          <span className="text-cyan-400">
            to build impactful products.
          </span>
        </motion.h1>

        {/* HERO SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 max-w-2xl"
        >
          I focus on aligning stakeholders, prioritizing with data,
          and delivering outcomes that move the business forward.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex mt-8 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-500/30 transition"
        >
          Email Me →
        </motion.a>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <div className="space-y-8">

          <div>
            <h3 className="font-semibold">Principal Product Manager</h3>
            <p className="text-gray-300">Example Corp</p>
            <p className="text-gray-400 mt-2">
              Leading strategy across multiple product lines and aligning
              business objectives with user needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product Manager</h3>
            <p className="text-gray-300">Tech Startup</p>
            <p className="text-gray-400 mt-2">
              Delivered high-impact features that increased retention
              and reduced operational cost.
            </p>
          </div>

        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <h2 className="text-2xl font-semibold mb-6">Selected Work</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Agriplan ERP</h4>
            <p className="text-gray-400">
              Helped scale paddy farming operations from tens to hundreds of hectares.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Grower App</h4>
            <p className="text-gray-400">
              Guided agronomists with task automation and predictable execution.
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          © 2025 — Built with care and curiosity.
        </p>
      </section>
    </main>
  );
}

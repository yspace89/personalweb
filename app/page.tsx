'use client'

export default function Home() {
  return (
    <main className="bg-[#0B0F14] text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center px-6">

        {/* decorative glow */}
        <div className="absolute -top-24 -left-20 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 opacity-25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-purple-600 to-blue-400 opacity-20 blur-3xl" />

        {/* dot grid */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:18px_18px]" />

        <div className="relative max-w-5xl mx-auto animate-fadeUp">
          <span className="text-xs tracking-wider text-cyan-300/90 border border-cyan-500/30 px-3 py-1 rounded-full">
            Data-led • Business-oriented • Technology-enabled
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            I connect <span className="text-cyan-300">data</span>, business, and
            technology to build impactful products.
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            I focus on aligning stakeholders, prioritizing with data,
            and delivering outcomes that move the business forward.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="mailto:ubaidillahym@gmail.com"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
            >
              Email Me →
            </a>

            <a
              href="#work"
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/50 transition"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-medium mb-4">About</h2>

            <p className="text-white/80 mb-4">
              Good products are built through clear judgment — not just execution.
            </p>

            <p className="text-white/70">
              My experience across operations and product leadership shaped how I
              approach decisions today: understanding constraints, aligning stakeholders,
              and making choices that optimize for business impact.
            </p>
          </div>

          <div className="space-y-3">
            <div className="border-l border-white/15 pl-4">
              Data guides decisions — it doesn’t replace judgment.
            </div>
            <div className="border-l border-white/15 pl-4">
              Business impact is the north star.
            </div>
            <div className="border-l border-white/15 pl-4">
              Technology is leverage, not the goal.
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW I WORK ================= */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-medium mb-8">How I Work</h2>

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
      <section className="px-6 py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-medium mb-10">Career Journey</h2>

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
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Let’s build meaningful products.
        </h2>

        <p className="text-white/70 mb-8">
          Open to conversations around product leadership, strategy, and execution.
        </p>

        <a
          href="mailto:ubaidillahym@gmail.com"
          className="rounded-xl bg-white text-black px-7 py-3 text-sm font-medium hover:bg-white/90 transition"
        >
          Email Me
        </a>
      </section>

      {/* simple intro animation */}
      <style jsx global>{`
        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  )
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-white/70">{text}</p>
    </div>
  )
}

function Timeline({
  role,
  company,
  text,
}: {
  role: string
  company: string
  text: string
}) {
  return (
    <div className="border-l border-white/15 pl-5 pb-6 mb-4">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium">{role}</h3>
        <span className="text-xs text-white/50">{company}</span>
      </div>
      <p className="text-sm text-white/70">{text}</p>
    </div>
  )
}

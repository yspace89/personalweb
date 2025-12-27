'use client'

export default function Home() {
  return (
    <main className="bg-[#0B0F14] text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[88vh] flex items-center px-6">
        {/* Soft radial depth */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.12),transparent_60%)]" />

        <div className="max-w-5xl mx-auto animate-fadeUp">
          <p className="text-sm text-white/60 mb-4">
            Data-led • Business-oriented • Technology-enabled
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            I connect data, business, and technology<br/>
            to build impactful products.
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            I focus on aligning stakeholders, prioritizing with data,
            and delivering outcomes that move the business forward.
          </p>

          <a
            href="mailto:ubaidillahym@gmail.com"
            className="inline-block mt-10 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3 text-sm font-medium text-black hover:opacity-90 transition"
          >
            Email Me →
          </a>
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

      {/* simple animation */}
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

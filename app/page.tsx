'use client'

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">

        {/* Decorative gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,.18),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,.16),transparent_60%)]" />

        <div className="max-w-4xl animate-fadeUp">
          <p className="text-sm text-white/60 mb-3">
            Data-led • Business-oriented • Technology-enabled
          </p>

          <h1 className="text-5xl sm:text-6xl font-semibold leading-tight mb-6">
            I connect data, business, and technology
            <br />
            <span className="text-cyan-300">to build impactful products.</span>
          </h1>

          <p className="text-white/70 max-w-2xl mb-8">
            I focus on aligning stakeholders, prioritizing with data,
            and delivering outcomes that move the business forward.
          </p>

          <button className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition">
            Email Me →
          </button>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-20">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-5">
          <ExperienceItem
            role="Principal Product Manager"
            company="Example Corp"
            text="Leading strategy across multiple product lines and aligning business objectives with user needs."
          />
          <ExperienceItem
            role="Product Manager"
            company="Tech Startup"
            text="Delivered high-impact features that increased retention and reduced operational cost."
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-20">
        <h2 className="section-title">Selected Work</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card p-5">
            <h3 className="font-medium">Agriplan ERP</h3>
            <p className="text-sm text-white/70 mt-2">
              Helped scale paddy farming operations from tens to hundreds of hectares.
            </p>
          </div>

          <div className="card p-5">
            <h3 className="font-medium">Grower App</h3>
            <p className="text-sm text-white/70 mt-2">
              Guided agronomists with task automation and predictable execution.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 py-10 text-center text-white/50 text-sm">
        © 2025 — Built with care and curiosity.
      </footer>

    </main>
  )
}

function ExperienceItem({ role, company, text }) {
  return (
    <div className="border-l border-white/15 pl-5 pb-4">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium">{role}</h3>
        <span className="text-xs text-white/40">{company}</span>
      </div>
      <p className="text-sm text-white/70">{text}</p>
    </div>
  )
}

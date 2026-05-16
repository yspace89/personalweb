"use client";
import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const content = {
  en: {
    badge: "Collaboration",
    title: "How We Can <span>Work Together</span>",
    subtitle: "Looking for a strategic partner to build or scale your product? I'm ready to collaborate as your co-build partner.",
    services: [
      {
        icon: "🎯",
        title: "Product Strategy",
        desc: "I partner with startups and scale-ups to align business strategy with product execution. We'll work together from discovery to roadmap and delivery oversight.",
        tags: ["Roadmap", "PRD", "Strategy", "OKRs"],
        highlights: [
          "Product strategy & vision alignment",
          "Stakeholder management & alignment",
          "Discovery sprint facilitation",
          "Feature prioritization & roadmapping",
          "Execution & delivery oversight",
        ],
        cta: "Let's Talk Strategy",
        featured: false,
      },
      {
        icon: "🚀",
        title: "Head of Product · Co-Build",
        desc: "Building from the ground up? I join as your Head of Product partner at the C-level to co-build your company and bridge vision with traction.",
        tags: ["Founding Team", "Product Vision", "Leadership"],
        highlights: [
          "Define product vision & north star",
          "Structure & lead your first product team",
          "Co-build strategy as a C-level partner",
          "Bridge business goals and execution",
          "Validate ideas & move from MVP to Scale",
        ],
        cta: "Let's Co-Build",
        featured: false,
      },
      {
        icon: "⚡",
        title: "Automation Architecture",
        desc: "We design and deploy smart workflows using modern automation tools to eliminate repetitive tasks and give your team operational superpowers.",
        tags: ["Automation", "API", "Integration", "Odoo"],
        highlights: [
          "Automated pipeline design & deployment",
          "CRM / Lark / Notion automation",
          "Data sync & notification systems",
          "Custom webhook integrations",
          "Process optimization for scale",
        ],
        cta: "Let's Automate",
        featured: false,
      },
      {
        icon: "🤖",
        title: "AI-Native Product Build",
        desc: "I leverage AI-native tools to build internal dashboards and MVPs with you, delivering working products at 3x traditional speed.",
        tags: ["Vibe Coding", "Next.js", "AI Tools", "Supabase"],
        highlights: [
          "Internal tool & dashboard build",
          "Data visualization & reporting",
          "MVP prototyping & validation",
          "AI-accelerated feature delivery",
          "Iterative product evolution",
        ],
        cta: "Let's Build Together",
        featured: false,
      },
    ],
  },
  id: {
    badge: "Kolaborasi",
    title: "Bagaimana Kita Bisa <span>Berkolaborasi</span>",
    subtitle: "Cari partner strategis untuk membangun atau mengembangkan produk? Saya siap bermitra sebagai co-build partner Anda.",
    services: [
      {
        icon: "🎯",
        title: "Product Strategy",
        desc: "Saya bermitra dengan startup dan scale-up untuk menyelaraskan strategi bisnis dengan eksekusi produk. Kita bekerja bersama dari discovery hingga delivery.",
        tags: ["Roadmap", "PRD", "Strategi", "OKRs"],
        highlights: [
          "Penyelarasan strategi & visi produk",
          "Manajemen & alignment stakeholder",
          "Fasilitasi discovery sprint bersama",
          "Prioritas fitur & perencanaan roadmap",
          "Pengawasan eksekusi & delivery produk",
        ],
        cta: "Diskusi Strategi",
        featured: false,
      },
      {
        icon: "🚀",
        title: "Head of Product · Co-Build",
        desc: "Membangun dari nol? Saya hadir sebagai partner Head of Product Anda di level C untuk membangun perusahaan bersama dan menjembatani visi ke traksi.",
        tags: ["Founding Team", "Visi Produk", "Leadership"],
        highlights: [
          "Tentukan visi produk & north star bersama",
          "Struktur & pimpin tim produk pertama Anda",
          "Bermitra di level C untuk strategi produk",
          "Jembatan tujuan bisnis dan eksekusi tim",
          "Validasi ide & pindah dari MVP ke Skala",
        ],
        cta: "Mari Co-Build",
        featured: false,
      },
      {
        icon: "⚡",
        title: "Automation Architecture",
        desc: "Kita merancang dan menerapkan workflow cerdas menggunakan sistem otomasi untuk menghilangkan tugas berulang dan memberdayakan tim Anda.",
        tags: ["Automasi", "API", "Integrasi", "Odoo"],
        highlights: [
          "Desain & deployment pipeline otomasi",
          "Otomasi CRM / Lark / Notion",
          "Sistem sinkronisasi data & notifikasi",
          "Integrasi webhook kustom bersama",
          "Optimasi proses untuk skala bisnis",
        ],
        cta: "Mari Automasi",
        featured: false,
      },
      {
        icon: "🤖",
        title: "AI-Native Product Build",
        desc: "Saya menggunakan tools AI-native untuk membangun tools internal dan MVP bersama Anda, menghasilkan produk berfungsi 3x lebih cepat.",
        tags: ["Vibe Coding", "Next.js", "AI Tools", "Supabase"],
        highlights: [
          "Bangun tools internal & dashboard",
          "Visualisasi data & pelaporan bisnis",
          "Prototipe MVP & validasi pasar bersama",
          "Delivery fitur berbasis akselerasi AI",
          "Evolusi produk secara iteratif",
        ],
        cta: "Mari Bangun Bersama",
        featured: false,
      },
    ],
  },
};

export default function Services({ lang }) {
  const t = content[lang];
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="collaboration" className={`section ${styles.services}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t.title }}
          />
          <p className={`section-subtitle ${styles.subtitle}`}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.services.map((svc, i) => (
            <div
              key={i}
              className={`reveal card ${styles.serviceCard}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
            >
              <div className={styles.icon}>{svc.icon}</div>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.desc}</p>

              <div className={styles.tags}>
                {svc.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>

              <ul className={styles.highlights}>
                {svc.highlights.map((h, j) => (
                  <li key={j} className={styles.highlight}>
                    <span className={styles.check}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

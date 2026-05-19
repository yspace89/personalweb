"use client";
import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const content = {
  en: {
    badge: "Expertise & Value",
    title: "Dual-Purpose <span>Product Pillars</span>",
    subtitle: "Bringing high-impact strategic leadership to corporate teams and hands-on systems architecting to consulting projects.",
    services: [
      {
        icon: "🎯",
        title: "Product Strategy & Leadership",
        desc: "Aligning long-term product vision with core business objectives. I lead cross-functional teams, orchestrate high-level roadmap planning, and build robust frameworks for sustainable product growth.",
        tags: ["Product Vision", "Roadmapping", "Team Leadership", "GTM Strategy"],
        highlights: [
          "Aligning product vision with business goals",
          "Long-term roadmap planning & execution",
          "Cross-functional team leadership",
          "KPI & OKR framework design"
        ],
        cta: "Discuss Leadership Role",
        featured: false,
      },
      {
        icon: "🏗️",
        title: "End-to-End Product Architecture",
        desc: "Designing data-heavy internal systems, CRM, and ERP software from scratch. I draft robust, high-clarity PRDs/BRDs and rapidly translate complex business requirements into clean, scalable MVPs for any industry.",
        tags: ["ERP & CRM", "PRD/BRD Writing", "MVP Prototyping", "Systems Design"],
        highlights: [
          "Designing data-heavy operational systems",
          "Drafting clear, robust PRDs & BRDs",
          "Rapid MVP development & validation",
          "Agnostic software architecture design"
        ],
        cta: "Hire for a Project",
        featured: false,
      },
      {
        icon: "⚡",
        title: "AI & Workflow Automation",
        desc: "Eliminating operational bottlenecks and manual overhead. I deploy advanced automation pipelines using n8n, Lark, Odoo, and custom AI stacks to slash operational friction and reduce development timelines.",
        tags: ["n8n", "Lark Base", "API Integration", "AI Workflows"],
        highlights: [
          "Deploying advanced n8n automation pipelines",
          "Operational process optimization",
          "Custom integrations & webhook engineering",
          "AI-powered operation streamlining"
        ],
        cta: "Discuss Automation",
        featured: false,
      },
    ],
  },
  id: {
    badge: "Keahlian & Nilai",
    title: "Pilar <span>Produk Utama</span>",
    subtitle: "Membawa kepemimpinan strategis berdampak tinggi untuk tim korporat serta perancangan sistem langsung untuk proyek konsultasi.",
    services: [
      {
        icon: "🎯",
        title: "Product Strategy & Leadership",
        desc: "Menyelaraskan visi produk jangka panjang dengan tujuan bisnis utama. Saya memimpin tim lintas fungsi, merancang peta jalan (roadmap) tingkat tinggi, dan membangun kerangka kerja pertumbuhan produk.",
        tags: ["Visi Produk", "Roadmapping", "Kepemimpinan Tim", "Strategi GTM"],
        highlights: [
          "Penyelarasan visi produk dengan gol bisnis",
          "Perencanaan & eksekusi roadmap jangka panjang",
          "Kepemimpinan tim lintas fungsi",
          "Perancangan framework KPI & OKR"
        ],
        cta: "Diskusi Peran Kepemimpinan",
        featured: false,
      },
      {
        icon: "🏗️",
        title: "End-to-End Product Architecture",
        desc: "Merancang sistem internal padat data, software CRM, dan ERP dari nol. Saya menyusun PRD/BRD dengan kejelasan tinggi serta menerjemahkan kebutuhan bisnis yang rumit menjadi MVP yang bersih dan skalabel.",
        tags: ["ERP & CRM", "Penulisan PRD/BRD", "Prototipe MVP", "Desain Sistem"],
        highlights: [
          "Merancang sistem operasional padat data",
          "Menyusun PRD & BRD yang jelas & kuat",
          "Pengembangan & validasi cepat untuk MVP",
          "Desain arsitektur software yang agnostik"
        ],
        cta: "Hubungi untuk Proyek",
        featured: false,
      },
      {
        icon: "⚡",
        title: "AI & Workflow Automation",
        desc: "Menghilangkan hambatan operasional dan pekerjaan manual. Saya menerapkan pipeline otomasi canggih memakai n8n, Lark, Odoo, dan AI stack khusus untuk memangkas friksi dan mempercepat timeline development.",
        tags: ["n8n", "Lark Base", "Integrasi API", "Workflow AI"],
        highlights: [
          "Penerapan pipeline otomasi n8n canggih",
          "Optimasi proses operasional bisnis",
          "Integrasi kustom & rekayasa webhook",
          "Penyederhanaan operasi berbasis AI"
        ],
        cta: "Diskusikan Otomasi",
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

"use client";
import { useEffect, useRef } from "react";
import styles from "./About.module.css";

const content = {
  en: {
    badge: "About Me",
    title: "A Senior Product Manager who thinks in systems, builds them, delivers to users, and iterates.",
    body1:
      "With 4+ years of experience leading product in fast-moving companies, I've owned the full product lifecycle — from discovery and stakeholder alignment, to PRD writing, sprint planning, and delivery. My deepest expertise lives in Sales Tools, CRM, ERP, and internal business systems: products that directly move revenue and operational efficiency.",
    body2:
      "What sets me apart: AI-native isn't just a label, it's how I operate daily. I use AI to accelerate discovery, vibe coding to ship internal tools, and build intelligent automation. The result is meaningful output, delivered significantly faster.",
    stats: [
      { value: "4+", label: "Years in Product", icon: "💼" },
      { value: "B2B & B2C", label: "Domains Covered", icon: "🌐" },
      { value: "∞", label: "Automations Deployed", icon: "⚡" },
      { value: "End-to-End", label: "From PRD to Product", icon: "📦" },
    ],
    skillGroups: [
      {
        category: "Product & People Management",
        type: "product",
        skills: ["Product Roadmapping", "PRD & Spec Writing", "Discovery Sprint", "Sprint Planning", "Stakeholder Management", "Feature Prioritization", "Agile/Scrum", "Team Leadership"],
      },
      {
        category: "Business & Strategy",
        type: "strategy",
        skills: ["GTM Strategy", "Market Analysis", "Revenue Modeling", "Competitive Research", "Sales Tools & CRM", "ERP Systems", "Odoo"],
      },
      {
        category: "AI & Tools",
        type: "tech",
        skills: ["AI-Native Workflow", "Automation Architecture", "Vibe Coding", "API Integration", "Prompt Engineering", "Supabase", "ChatGPT", "Claude", "Antigravity"],
      },
      {
        category: "Leadership",
        type: "leadership",
        skills: ["Business Process Improvement", "Organizational Design", "Cross-functional Leadership", "Executive Communication", "Strategic Planning"],
      },
    ],
  },
  id: {
    badge: "Tentang Saya",
    title: "Senior Product Manager yang tidak berhenti di membangun sampai produknya dipakai, diterima, dan terus berkembang.",
    body1:
      "Sudah 4+ tahun Saya pegang product di perusahaan yang bergerak cepat — dari discovery, alignment stakeholder, nulis PRD, sprint planning, sampai delivery. Domain yang paling Saya kuasai adalah sales tools, CRM, ERP, dan internal business system: produk-produk yang langsung berpengaruh ke revenue dan efisiensi operasional.",
    body2:
      "Yang membedakan Saya: AI-native bukan sekadar label, itu cara Saya kerja sehari-hari. AI untuk mempercepat discovery, vibe coding untuk ship tools internal, dan otomasi cerdas untuk efisiensi workflow bisnis. Hasilnya: output yang meaningful, delivered jauh lebih cepat.",
    stats: [
      { value: "4+", label: "Tahun Pengalaman" },
      { value: "B2B & B2C", label: "Domain Produk" },
      { value: "∞", label: "Automasi Terpasang" },
      { value: "End-to-End", label: "Dari PRD ke Produk" },
    ],
    skillGroups: [
      {
        category: "Product & People Management",
        skills: ["Product Roadmapping", "PRD & Spec Writing", "Discovery Sprint", "Sprint Planning", "Stakeholder Management", "Feature Prioritization", "Agile/Scrum", "Team Leadership"],
      },
      {
        category: "Business & Strategy",
        skills: ["GTM Strategy", "Market Analysis", "Revenue Modeling", "Competitive Research", "Sales Tools & CRM", "ERP Systems", "Odoo"],
      },
      {
        category: "AI & Tools",
        skills: ["AI-Native Workflow", "Automation Architecture", "Vibe Coding", "API Integration", "Prompt Engineering", "Supabase", "ChatGPT", "Claude", "Antigravity"],
      },
      {
        category: "Leadership",
        skills: ["Business Process Improvement", "Organizational Design", "Cross-functional Leadership", "Executive Communication", "Strategic Planning"],
      },
    ],
  },
};

export default function About({ lang }) {
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

  return (
    <section id="about" className={`section ${styles.about}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.content}>
          {/* Header & Bio */}
          <div className={styles.textSide}>
            <h2 className={`reveal reveal-delay-1 section-title`}>{t.title}</h2>
            <div className="divider reveal reveal-delay-2" />
            
            <div className={`reveal reveal-delay-2 ${styles.bio}`}>
              <p className={styles.body}>{t.body1}</p>
              <p className={styles.body}>{t.body2}</p>
            </div>

            {/* Compact Stats Strip */}
            <div className={`reveal reveal-delay-3 ${styles.statsStrip}`}>
              {t.stats.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statIconWrapper}>
                    <span className={styles.statIcon}>{s.icon}</span>
                  </div>
                  <div className={styles.statText}>
                    <span className={styles.statVal}>{s.value}</span>
                    <span className={styles.statLab}>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className={`reveal reveal-delay-4 ${styles.highlights}`}>
              <div className={styles.highlight}>
                <span className={styles.hIcon}>🎯</span>
                <div className={styles.hText}>
                  <strong>Strategic Thinker</strong>
                  <p>{lang === 'en' ? 'GTM strategy and user insight-driven decisions' : 'Strategi GTM dan keputusan berbasis insight pengguna'}</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.hIcon}>⚡</span>
                <div className={styles.hText}>
                  <strong>Hands-on Executor</strong>
                  <p>{lang === 'en' ? 'From PRD to deployed product' : 'Dari PRD hingga produk yang dideploy'}</p>
                </div>
              </div>
              <div className={styles.highlight}>
                <span className={styles.hIcon}>🤖</span>
                <div className={styles.hText}>
                  <strong>AI-Native Operator</strong>
                  <p>{lang === 'en' ? 'Using AI tools to build and deliver faster' : 'Menggunakan AI tools untuk membangun dan deliver lebih cepat'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Skills Section */}
          <div className={`reveal reveal-delay-5 ${styles.skillsSide}`}>
            <h3 className={styles.skillsTitle}>{lang === 'en' ? 'What I Bring to the Table' : 'Apa yang Saya Tawarkan'}</h3>
            <div className={styles.skillGroups}>
              {t.skillGroups.map((group, gi) => (
                <div key={gi} className={`${styles.skillGroup} ${styles[group.type]}`}>
                  <h4 className={styles.groupLabel}>{group.category}</h4>
                  <div className={styles.skillChips}>
                    {group.skills.map((skill, si) => (
                      <span key={si} className={styles.skillChip}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

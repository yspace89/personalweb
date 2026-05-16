"use client";
import { useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const skillGroups = {
  en: [
    {
      icon: "👑",
      category: "Leadership & Business",
      color: "gold",
      skills: [
        "Business Strategy", "People Management", "Team Building", "Business Process Improvement",
        "Organizational Design", "Cross-functional Leadership", "P&L Awareness", "Executive Communication"
      ],
    },
    {
      icon: "🗺️",
      category: "Product Management",
      color: "purple",
      skills: [
        "Product Roadmapping", "PRD & Spec Writing", "Discovery Sprint", "Sprint Planning",
        "Stakeholder Management", "Feature Prioritization", "OKRs & KPIs", "Release Planning"
      ],
    },
    {
      icon: "📈",
      category: "Business & Strategy",
      color: "teal",
      skills: [
        "Go-to-Market Strategy", "Business Model Design", "Market Analysis", "Competitive Research",
        "Revenue Modeling", "Data-Driven Decisions", "Sales Tools & CRM", "ERP Systems", "Odoo"
      ],
    },
    {
      icon: "⚡",
      category: "AI & Modern Tools",
      color: "orange",
      skills: [
        "AI-Native Workflow", "Prompt Engineering", "Vibe Coding", "N8N Automation",
        "API Integration", "Antigravity", "Claude", "ChatGPT", "Supabase", "No-code Tools"
      ],
    },
    {
      icon: "🎨",
      category: "User Experience & Delivery",
      color: "pink",
      skills: [
        "User Research", "User Journey Mapping", "Wireframing", "Usability Testing",
        "Design System Collaboration", "Figma", "Miro", "UI Interaction Design", "Prototype Validation"
      ],
    },
  ],
  id: [
    {
      icon: "👑",
      category: "Leadership & Business",
      color: "gold",
      skills: [
        "Business Strategy", "People Management", "Team Building", "Business Process Improvement",
        "Organizational Design", "Cross-functional Leadership", "P&L Awareness", "Executive Communication"
      ],
    },
    {
      icon: "🗺️",
      category: "Product Management",
      color: "purple",
      skills: [
        "Product Roadmapping", "PRD & Spec Writing", "Discovery Sprint", "Sprint Planning",
        "Stakeholder Management", "Feature Prioritization", "OKRs & KPIs", "Release Planning"
      ],
    },
    {
      icon: "📈",
      category: "Bisnis & Strategi",
      color: "teal",
      skills: [
        "Go-to-Market Strategy", "Business Model Design", "Market Analysis", "Competitive Research",
        "Revenue Modeling", "Data-Driven Decisions", "Sales Tools & CRM", "ERP Systems", "Odoo"
      ],
    },
    {
      icon: "⚡",
      category: "AI & Modern Tools",
      color: "orange",
      skills: [
        "AI-Native Workflow", "Prompt Engineering", "Vibe Coding", "N8N Automation",
        "API Integration", "Antigravity", "Claude", "ChatGPT", "Supabase", "No-code Tools"
      ],
    },
    {
      icon: "🎨",
      category: "User Experience & UI",
      color: "pink",
      skills: [
        "User Research", "User Journey Mapping", "Wireframing", "Usability Testing",
        "Design System Collaboration", "Figma", "Miro", "UI Interaction Design", "Prototype Validation"
      ],
    },
  ],
};

export default function Skills({ lang }) {
  const groups = skillGroups[lang];
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
    <section id="skills" className={`section ${styles.skills}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <div className="section-badge"><span>◈</span> {lang === "en" ? "Skills" : "Keahlian"}</div>
          <h2 className="section-title">
            {lang === "en" ? "What I " : "Apa yang Saya "}
            <span>{lang === "en" ? "Bring to the Table" : "Tawarkan"}</span>
          </h2>
          <p className="section-subtitle">
            {lang === "en"
              ? "A rare blend of strategic thinking, business leadership, and technical execution."
              : "Perpaduan langka antara pemikiran strategis, kepemimpinan bisnis, dan eksekusi teknis."}
          </p>
        </div>

        <div className={styles.grid}>
          {groups.map((group, gi) => (
            <div
              key={gi}
              className={`reveal card ${styles.skillCard} ${styles[group.color]}`}
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{group.icon}</span>
                <h3 className={styles.category}>{group.category}</h3>
              </div>

              <div className={styles.skillList}>
                {group.skills.map((skill, si) => (
                  <span key={si} className={styles.skillChip}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

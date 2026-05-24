"use client";
import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const content = {
  title: "What I Actually Do",
  subtitle: "Three areas where I create the most impact — whether you're hiring for a leadership role or bringing me in as a consultant.",
  services: [
    {
      icon: "🎯",
      title: "Product Strategy & Leadership",
      tagline: "For companies that need a product leader, not just a PM.",
      desc: "I translate ambiguous business goals into clear product vision — then make sure the team actually executes against it. My approach: pair long-term roadmap thinking with the ruthless prioritization needed to ship in the real world.",
      highlights: [
        "Vision-to-roadmap alignment with business goals",
        "Cross-functional leadership (eng, design, ops, sales)",
        "OKR and KPI frameworks that teams actually use",
        "Stakeholder alignment without the politics spiral"
      ],
    },
    {
      icon: "🏗️",
      title: "End-to-End Product Architecture",
      tagline: "For businesses that need a system built, not just consulted on.",
      desc: "I design data-heavy operational systems — ERP, CRM, internal tools — from first principles. I write PRDs and BRDs that engineers can build directly from, and I validate MVPs fast before committing to full build scope.",
      highlights: [
        "ERP & CRM architecture for any industry",
        "PRDs and BRDs with engineering-ready clarity",
        "Rapid MVP development and scope validation",
        "Scalable system design, agnostic of tech stack"
      ],
    },
    {
      icon: "⚡",
      title: "AI & Workflow Automation",
      tagline: "For operations teams drowning in manual work.",
      desc: "I build automation pipelines that eliminate repetitive bottlenecks — using n8n, Lark, Odoo, and custom AI stacks. If a human is doing something a workflow could handle, that's a problem I can fix.",
      highlights: [
        "N8n automation pipelines (trigger → action → done)",
        "Cross-platform integrations via API and webhooks",
        "AI-powered process optimization",
        "Meaningful reduction in operational overhead"
      ],
    },
  ],
};

export default function Services() {
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
    <section id="services" className={`section ${styles.services}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title">{content.title}</h2>
          <p className={`section-subtitle ${styles.subtitle}`}>{content.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {content.services.map((svc, i) => (
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
              <div className={styles.tagline}>{svc.tagline}</div>
              <p className={styles.desc}>{svc.desc}</p>

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

"use client";
import { useEffect, useRef } from "react";
import styles from "./WorkShipped.module.css";

const content = {
  title: "Work I've Shipped",
  subtitle: "Three recent projects that show how I approach product problems — from discovery to deployment.",
  cases: [
    {
      title: "ERP System for Manufacturing Distributor",
      meta: "Discovery → Deployment in 4 months · 3 departments aligned",
      desc: "Built end-to-end ERP from scratch for a B2B distributor. Eliminated 70% of manual reporting overhead through N8N automation pipelines. System now handles inventory, purchase orders, and multi-department workflows in one unified platform.",
    },
    {
      title: "Sales CRM + Automation for B2C Startup",
      meta: "MVP in 6 weeks · AI-powered lead scoring",
      desc: "Designed and deployed a lightweight CRM with AI-native lead scoring and automated follow-up sequences. Reduced sales team's manual data entry by 60%, improved lead response time from 4 hours to 15 minutes.",
    },
    {
      title: "Internal Tool: AI-Powered Content Brief Generator",
      meta: "Vibe-coded in 3 days · Supabase + Claude API",
      desc: "Built an internal tool for a content agency to auto-generate SEO content briefs from competitor analysis. What used to take 2 hours per brief now takes 8 minutes. Team productivity up 3×.",
    },
  ],
};

export default function WorkShipped() {
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
    <section id="work-shipped" className={`section ${styles.workShipped}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title">{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {content.cases.map((item, i) => (
            <div key={i} className={`reveal ${styles.card}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.meta}>{item.meta}</div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

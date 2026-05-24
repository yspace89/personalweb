"use client";
import { useEffect, useRef } from "react";
import styles from "./UseCases.module.css";

const content = {
  title: "I can help if you're...",
  subtitle: "These are the situations where I create the most value — whether as a consultant, co-build partner, or product lead.",
  cases: [
    {
      title: "Building an MVP and need someone to own product end-to-end",
      desc: "I'll handle discovery, PRD, sprint planning, and delivery — so you can focus on fundraising, sales, or whatever needs your attention most.",
    },
    {
      title: "Drowning in manual ops work that should be automated",
      desc: "If your team is spending hours on repetitive tasks — data entry, report generation, cross-platform syncing — I'll build the automation pipeline that eliminates it.",
    },
    {
      title: "Need an ERP or CRM built from scratch for your business",
      desc: "Off-the-shelf software doesn't fit your workflow. I design custom systems that match how your business actually operates — not the other way around.",
    },
    {
      title: "Looking for a co-build partner to bring an idea to life",
      desc: "You have the vision and market insight. I bring the product execution and technical architecture. Let's build something together.",
    },
  ],
};

export default function UseCases() {
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
    <section id="use-cases" className={`section ${styles.useCases}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title">{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
        </div>

        <div className={styles.stack}>
          {content.cases.map((item, i) => (
            <div key={i} className={`reveal ${styles.item}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.title}>{item.title}</div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

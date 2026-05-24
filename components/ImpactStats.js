"use client";
import { useEffect, useRef } from "react";
import styles from "./ImpactStats.module.css";

const stats = [
  {
    value: "70% reduction",
    desc: "Manual reporting eliminated via N8N automation (ERP consulting project)",
  },
  {
    value: "4 months",
    desc: "From discovery to full ERP deployment, 3 departments aligned",
  },
  {
    value: "3× faster",
    desc: "Delivery speed improvement using AI-native workflow vs traditional PM process",
  },
];

export default function ImpactStats() {
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
    <section id="impact-stats" className={`section ${styles.impactStats}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={`reveal ${styles.card}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.desc}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

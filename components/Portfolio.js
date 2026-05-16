"use client";
import { useEffect, useRef } from "react";
import styles from "./Portfolio.module.css";

const content = {
  en: {
    badge: "Portfolio",
    title: "Work That <span>Speaks</span>",
    subtitle: "A selection of projects I've built or contributed to, spanning product, automation, and internal tooling.",
    projects: [
      {
        title: "NUP Management Portal",
        category: "Internal Product · Sales Dashboard",
        desc: "A comprehensive sales management portal with role-based access control, real-time Lark Base integration, multi-module reporting, and automated data workflows. Built with Next.js 14 and a custom design system.",
        tags: ["Next.js", "Lark API", "Dashboard", "RBAC", "N8N"],
        metrics: [
          { label: "Modules Built", value: "8+" },
          { label: "Data Sources", value: "Lark Base" },
          { label: "Users", value: "Multi-role" },
        ],
        status: "live",
        statusLabel: "Live",
        color: "purple",
        icon: "🏢",
      },
      {
        title: "Your Project Here",
        category: "Coming Soon",
        desc: "This slot is reserved for the next exciting project. Stay tuned for updates on new products, automations, and tools being built.",
        tags: ["TBD"],
        metrics: [],
        status: "soon",
        statusLabel: "Coming Soon",
        color: "teal",
        icon: "🚀",
      },
      {
        title: "Your Project Here",
        category: "Coming Soon",
        desc: "Another upcoming project is in the works. Whether it's an automation pipeline, an internal tool, or a product launch — watch this space.",
        tags: ["TBD"],
        metrics: [],
        status: "soon",
        statusLabel: "Coming Soon",
        color: "orange",
        icon: "⚡",
      },
    ],
  },
  id: {
    badge: "Portofolio",
    title: "Karya yang <span>Berbicara</span>",
    subtitle: "Kumpulan proyek yang telah saya bangun atau berkontribusi, mencakup produk, otomasi, dan tools internal.",
    projects: [
      {
        title: "NUP Management Portal",
        category: "Produk Internal · Sales Dashboard",
        desc: "Portal manajemen sales komprehensif dengan kontrol akses berbasis peran, integrasi real-time Lark Base, pelaporan multi-modul, dan workflow data otomatis. Dibangun dengan Next.js 14 dan design system kustom.",
        tags: ["Next.js", "Lark API", "Dashboard", "RBAC", "N8N"],
        metrics: [
          { label: "Modul Dibangun", value: "8+" },
          { label: "Sumber Data", value: "Lark Base" },
          { label: "Pengguna", value: "Multi-role" },
        ],
        status: "live",
        statusLabel: "Live",
        color: "purple",
        icon: "🏢",
      },
      {
        title: "Proyek Berikutnya",
        category: "Segera Hadir",
        desc: "Slot ini diperuntukkan bagi proyek menarik berikutnya. Nantikan pembaruan tentang produk, otomasi, dan tools baru yang sedang dibangun.",
        tags: ["TBD"],
        metrics: [],
        status: "soon",
        statusLabel: "Segera Hadir",
        color: "teal",
        icon: "🚀",
      },
      {
        title: "Proyek Berikutnya",
        category: "Segera Hadir",
        desc: "Proyek lain sedang dalam pengerjaan. Entah itu pipeline otomasi, tools internal, atau peluncuran produk — pantau terus.",
        tags: ["TBD"],
        metrics: [],
        status: "soon",
        statusLabel: "Segera Hadir",
        color: "orange",
        icon: "⚡",
      },
    ],
  },
};

export default function Portfolio({ lang }) {
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
    <section id="portfolio" className={`section ${styles.portfolio}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <div className="section-badge"><span>◈</span> {t.badge}</div>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.title }} />
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.projects.map((project, i) => (
            <div
              key={i}
              className={`reveal card ${styles.projectCard} ${styles[project.color]} ${project.status === "soon" ? styles.soon : ""}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Header */}
              <div className={styles.cardTop}>
                <div className={`${styles.projectIcon} ${styles[`icon-${project.color}`]}`}>
                  {project.icon}
                </div>
                <span className={`${styles.status} ${styles[`status-${project.status}`]}`}>
                  {project.status === "live" && <span className={styles.liveDot} />}
                  {project.statusLabel}
                </span>
              </div>

              <p className={styles.category}>{project.category}</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.desc}>{project.desc}</p>

              {/* Metrics */}
              {project.metrics.length > 0 && (
                <div className={styles.metrics}>
                  {project.metrics.map((m, j) => (
                    <div key={j} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className={styles.tags}>
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`tag ${project.status === "soon" ? "" : ""}`}
                    style={project.status === "soon" ? { opacity: 0.4 } : {}}
                  >
                    {tag}
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

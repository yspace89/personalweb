"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const content = {
  en: {
    kicker: "Senior Product Manager · ERP, CRM & AI Automation",
    title: "Yahya Ubaidillah",
    subHeadline: "I turn complex business operations into products that actually work.",
    bodyP1: "Most operational systems fail not because of bad engineering — but because no one truly understood the business problem first.",
    bodyP2: "I build scalable ERP & CRM systems that eliminate manual bottlenecks, streamline your operations, and align technical execution with your strategic goals. Whether it's setting up automated workflows or scaling a new product, I ensure the technology works for your revenue, not the other way around.",
    skills: ["ERP & CRM Architecture", "AI-Native Workflow", "N8N Automation", "Co-build Partnership", "Freelance Consulting"],
    stats: [
      { num: "0 to 1", label: "End-to-end execution. Leading cross-functional teams to ship scalable products." },
      { num: "AI & Ops", label: "Accelerating internal workflows and scaling productivity with advanced automations." },
      { num: "B2B & B2C", label: "Startup agility applied to enterprise-grade systems and consumer applications." },
    ],
    cta1: "Let's Talk Strategy",
  },
  id: {
    kicker: "Senior Product Manager · ERP, CRM & Otomasi AI",
    title: "Yahya Ubaidillah",
    subHeadline: "Saya mengubah operasional bisnis yang rumit menjadi produk yang benar-benar berfungsi.",
    bodyP1: "Sebagian besar sistem operasional gagal bukan karena rekayasa kode yang buruk — tetapi karena tidak ada yang benar-benar memahami masalah bisnisnya terlebih dahulu.",
    bodyP2: "Saya membangun sistem ERP & CRM terukur yang menghilangkan hambatan manual, menyederhanakan operasional Anda, dan menyelaraskan eksekusi teknis dengan tujuan strategis Anda. Baik untuk menyiapkan alur kerja otomatis atau menskalakan produk baru, saya memastikan teknologi bekerja untuk pendapatan Anda, bukan sebaliknya.",
    skills: ["Arsitektur ERP & CRM", "Alur Kerja AI-Native", "Otomasi N8N", "Kemitraan Co-build", "Konsultasi Freelance"],
    stats: [
      { num: "0 ke 1", label: "Eksekusi end-to-end. Memimpin tim lintas fungsi untuk merilis produk yang terukur." },
      { num: "AI & Ops", label: "Mempercepat alur kerja internal dan menskalakan produktivitas dengan otomatisasi canggih." },
      { num: "B2B & B2C", label: "Ketangkasan startup yang diterapkan pada sistem skala enterprise dan aplikasi konsumen." },
    ],
    cta1: "Mari Bicarakan Strategi",
  },
};

// Pre-defined Icons & Colors for Skills
const skillData = {
  "ERP & CRM Architecture": {
    color: "#6EE7B7",
    bg: "rgba(15, 110, 86, 0.15)",
    border: "rgba(52, 211, 153, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  "Arsitektur ERP & CRM": {
    color: "#6EE7B7",
    bg: "rgba(15, 110, 86, 0.15)",
    border: "rgba(52, 211, 153, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
  },
  "AI-Native Workflow": {
    color: "#C4B5FD",
    bg: "rgba(109, 40, 217, 0.15)",
    border: "rgba(167, 139, 250, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
  },
  "Alur Kerja AI-Native": {
    color: "#C4B5FD",
    bg: "rgba(109, 40, 217, 0.15)",
    border: "rgba(167, 139, 250, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
  },
  "N8N Automation": {
    color: "#FCA5A5",
    bg: "rgba(153, 27, 27, 0.15)",
    border: "rgba(248, 113, 113, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
  },
  "Otomasi N8N": {
    color: "#FCA5A5",
    bg: "rgba(153, 27, 27, 0.15)",
    border: "rgba(248, 113, 113, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
  },
  "Co-build Partnership": {
    color: "#FDE68A",
    bg: "rgba(120, 80, 4, 0.15)",
    border: "rgba(250, 204, 21, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  "Kemitraan Co-build": {
    color: "#FDE68A",
    bg: "rgba(120, 80, 4, 0.15)",
    border: "rgba(250, 204, 21, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  "Freelance Consulting": {
    color: "#93C5FD",
    bg: "rgba(29, 78, 216, 0.15)",
    border: "rgba(59, 130, 246, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
  "Konsultasi Freelance": {
    color: "#93C5FD",
    bg: "rgba(29, 78, 216, 0.15)",
    border: "rgba(59, 130, 246, 0.3)",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
};

// Pre-defined Icons for Stats
const statIcons = {
  "0 to 1": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradientPrimary)" strokeWidth="2"><path d="M2 20h20"/><path d="m5 16 6-6"/><path d="m11 10 3 3"/><path d="m14 13 5-5"/></svg>,
  "0 ke 1": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradientPrimary)" strokeWidth="2"><path d="M2 20h20"/><path d="m5 16 6-6"/><path d="m11 10 3 3"/><path d="m14 13 5-5"/></svg>,
  "AI & Ops": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradientPrimary)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  "B2B & B2C": <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#gradientPrimary)" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
};

export default function Hero({ lang }) {
  const t = content[lang];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero} id="home">
      {/* SVG Gradient Defs for icons */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#6C63FF" offset="0%" />
            <stop stopColor="#00D4AA" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={`container ${styles.inner}`}>
        {/* Left: Content */}
        <div className={`reveal ${styles.content}`}>
          <span className={styles.kicker}>{t.kicker}</span>
          <h1 className={styles.name}>{t.title}</h1>
          <p className={styles.subHeadline}>{t.subHeadline}</p>
          <p className={styles.desc}>{t.bodyP1}</p>
          <p className={styles.desc}>{t.bodyP2}</p>

          {/* Mobile Marquee Badges */}
          <div className={`${styles.mobileMarqueeWrapper} ${styles.mobileOnly}`}>
            <div className={styles.marqueeContent}>
              {/* Duplicate skills array to create seamless loop */}
              {[...t.skills, ...t.skills].map((skill, i) => {
                const data = skillData[skill] || { color: "#fff", icon: null };
                return (
                  <div 
                    key={i} 
                    className={`${styles.skillBadge} ${styles.marqueeBadge}`} 
                    style={{ 
                      "--badge-color": data.color,
                      "--badge-bg": data.bg,
                      "--badge-border": data.border,
                    }}
                  >
                    <span className={styles.skillBadgeIcon} style={{ color: data.color }}>
                      {data.icon}
                    </span>
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <a 
              href="mailto:ubaidillahym@gmail.com?subject=Strategic%20Consulting%20Inquiry" 
              className={styles.ctaPrimary}
            >
              <span>{t.cta1}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.orbitRing1} />
          <div className={styles.orbitRing2} />
          <div className={styles.orbitRing3} />
          <div className={styles.avatar}>
            <div className={styles.avatarImageWrapper}>
              <Image 
                src="/yahya.jpg" 
                alt="Yahya Ubaidillah" 
                fill 
                priority 
                className={styles.avatarImage}
                sizes="(max-width: 768px) 280px, 400px"
              />
            </div>
            <div className={styles.avatarGlow} />
          </div>

          {/* Desktop Floating Skill Badges */}
          <div className={`${styles.floatingBadgesWrapper} ${styles.desktopOnly}`}>
            {t.skills.map((skill, i) => {
              const data = skillData[skill] || { color: "#fff", icon: null };
              return (
                <div 
                  key={i} 
                  className={`${styles.skillBadge} ${styles.floatingBadge} ${styles[`badgePos${i}`]}`} 
                  style={{ 
                    "--badge-color": data.color,
                    "--badge-bg": data.bg,
                    "--badge-border": data.border,
                  }}
                >
                  <span className={styles.skillBadgeIcon} style={{ color: data.color }}>
                    {data.icon}
                  </span>
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-width Stats Banner */}
      <div className={`container ${styles.statsBanner}`}>
        {t.stats.map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statHeader}>
              <div className={styles.statIconWrapper}>
                {statIcons[stat.num] || <span />}
              </div>
              <span className={styles.statNum}>{stat.num}</span>
            </div>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>{lang === "en" ? "Scroll to explore" : "Scroll untuk menjelajahi"}</span>
      </div>
    </section>
  );
}

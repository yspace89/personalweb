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
    bodyP2Start: "I bridge that gap: ",
    bodyP2Highlight: "4+ years",
    bodyP2End: " designing ERP, CRM, and internal tools from discovery to deployment, now accelerated with AI-native workflows.",
    skills: ["ERP & CRM Architecture", "AI-Native Workflow", "N8N Automation", "Co-build Partnership", "Freelance Consulting"],
    stats: [
      { num: "4+", label: "Years shipping end-to-end products" },
      { num: "3x", label: "Faster delivery with AI workflows" },
      { num: "B2B+B2C", label: "Across industries & domains" },
    ],
    cta1: "Start a Consulting Project",
    cta2: "Explore Co-build",
  },
  id: {
    kicker: "Senior Product Manager · ERP, CRM & Otomasi AI",
    title: "Yahya Ubaidillah",
    subHeadline: "Saya mengubah operasional bisnis yang rumit menjadi produk yang benar-benar berfungsi.",
    bodyP1: "Sebagian besar sistem operasional gagal bukan karena rekayasa kode yang buruk — tetapi karena tidak ada yang benar-benar memahami masalah bisnisnya terlebih dahulu.",
    bodyP2Start: "Saya menjembatani celah tersebut: ",
    bodyP2Highlight: "4+ tahun",
    bodyP2End: " merancang ERP, CRM, dan internal tools dari tahap penemuan hingga penerapan, kini diakselerasi dengan alur kerja berbasis AI.",
    skills: ["Arsitektur ERP & CRM", "Alur Kerja AI-Native", "Otomasi N8N", "Kemitraan Co-build", "Konsultasi Freelance"],
    stats: [
      { num: "4+", label: "Tahun merilis produk end-to-end" },
      { num: "3x", label: "Lebih cepat dengan alur kerja AI" },
      { num: "B2B+B2C", label: "Di berbagai industri & domain" },
    ],
    cta1: "Mulai Proyek Konsultasi",
    cta2: "Jelajahi Co-build",
  },
};

export default function Hero({ lang }) {
  const t = content[lang];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero} id="home">
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
          <p className={styles.desc}>
            {t.bodyP2Start}
            <strong className={styles.descStrong}>{t.bodyP2Highlight}</strong>
            {t.bodyP2End}
          </p>

          {/* Skill badges */}
          <div className={styles.skillBadges}>
            {t.skills.map((skill, i) => (
              <span key={i} className={styles.skillBadge} style={{ animationDelay: `${i * 0.08}s` }}>
                {skill}
              </span>
            ))}
          </div>

          {/* Stats Section */}
          <div className={styles.statsContainer}>
            {t.stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={() => scrollTo("contact")}>
              <span>{t.cta1}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className={styles.ctaOutline} onClick={() => scrollTo("contact")}>
              {t.cta2}
            </button>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarRing} />
          <div className={styles.avatarRing2} />
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

          {/* Floating cards */}
          <div className={styles.floatCardsWrapper}>
            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <span className={styles.floatIcon}>🎯</span>
              <div>
                <div className={styles.floatTitle}>4+ Years</div>
                <div className={styles.floatSub}>Experience</div>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard2}`}>
              <span className={styles.floatIcon}>⚡</span>
              <div>
                <div className={styles.floatTitle}>Automation</div>
                <div className={styles.floatSub}>Scalable Workflow</div>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard3}`}>
              <span className={styles.floatIcon}>🤖</span>
              <div>
                <div className={styles.floatTitle}>AI Native</div>
                <div className={styles.floatSub}>Since day one</div>
              </div>
            </div>
          </div>
        </div>
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

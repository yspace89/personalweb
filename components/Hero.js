"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const content = {
  en: {
    badge: "Available for Freelance & Remote",
    greeting: "Hi, I'm",
    title: "Yahya Ubaidillah",
    role: "Senior Product Manager · AI Native",
    tagline: "Transforming business strategy and user needs into high impact products.",
    desc: "Helping startups and enterprises ship high impact products faster through sharp product strategy and intelligent workflow automation.",
    cta1: "Hire Me",
    cta2: "How We Collaborate",
    skills: ["AI-Native Workflow", "Business Strategy", "People Management", "Vibe Coding", "Automation", "PRD & Roadmap"],
  },
  id: {
    badge: "Tersedia untuk Freelance & Remote",
    greeting: "Halo, saya",
    title: "Yahya Ubaidillah",
    role: "Senior Product Manager · AI Native",
    tagline: "Mentransformasi kebutuhan bisnis dan pengguna menjadi produk nyata yang bernilai tinggi.",
    desc: "Membantu startup & enterprise meluncurkan produk unggulan lebih cepat melalui strategi produk yang tajam dan otomasi workflow cerdas.",
    cta1: "Hubungi Saya",
    cta2: "Cara Berkolaborasi",
    skills: ["AI-Native Workflow", "Business Strategy", "People Management", "Vibe Coding", "Automation", "PRD & Roadmap"],
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
          <span className={styles.greeting}>{t.greeting}</span>
          <h1 className={styles.name}>{t.title}</h1>

          <div className={styles.roleWrapper}>
            <span className={styles.roleIcon}>◆</span>
            <span className={styles.role}>{t.role}</span>
          </div>

          <p className={styles.tagline}>{t.tagline}</p>
          <p className={styles.desc}>{t.desc}</p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <button className={styles.ctaPrimary} onClick={() => scrollTo("contact")}>
              <span>{t.cta1}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className={styles.ctaOutline} onClick={() => scrollTo("collaboration")}>
              {t.cta2}
            </button>
          </div>

          {/* Skill badges */}
          <div className={styles.skillBadges}>
            {t.skills.map((skill, i) => (
              <span key={i} className={styles.skillBadge} style={{ animationDelay: `${i * 0.08}s` }}>
                {skill}
              </span>
            ))}
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

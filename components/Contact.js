"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0077B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const content = {
  en: {
    title: "Have a product problem? Let's define the solution.",
    subtitle: "Open for leadership roles, consulting engagements, and system architecture projects. I respond within 24 hours.",
    contacts: [
      { icon: <EmailIcon />, label: "DIRECT EMAIL", value: "ubaidillahym@gmail.com", href: "mailto:ubaidillahym@gmail.com" },
      { icon: <LinkedInIcon />, label: "LINKEDIN", value: "Yahya Ubaidillah", href: "https://www.linkedin.com/in/yahyaux" }
    ]
  },
  id: {
    title: "Punya masalah produk? Mari tentukan solusinya.",
    subtitle: "Terbuka untuk peran kepemimpinan, konsultasi, dan proyek arsitektur sistem. Saya membalas dalam waktu 24 jam.",
    contacts: [
      { icon: <EmailIcon />, label: "EMAIL LANGSUNG", value: "ubaidillahym@gmail.com", href: "mailto:ubaidillahym@gmail.com" },
      { icon: <LinkedInIcon />, label: "LINKEDIN", value: "Yahya Ubaidillah", href: "https://www.linkedin.com/in/yahyaux" }
    ]
  }
};

export default function Contact({ lang }) {
  const t = content[lang] || content.en;
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
    <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title">{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={`reveal reveal-delay-1 ${styles.hub}`}>
          <div className={styles.chipsContainer}>
            {t.contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.contactChip}>
                <div className={styles.chipIcon}>
                  {c.icon}
                </div>
                <div className={styles.chipText}>
                  <div className={styles.chipLabel}>{c.label}</div>
                  <div className={styles.chipValue}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

const content = {
  en: {
    badge: "Contact",
    title: "Let's Build Something <span>Great Together</span>",
    subtitle: "Looking for a strategic partner to build your product? I'm ready to help from strategy to execution.",
    name: "Full Name",
    email: "Email Address",
    subject: "Subject",
    subjectOptions: [
      "Product Consulting",
      "Head of Product · Co-Build",
      "Workflow Automation",
      "AI-Assisted Building",
      "Other Inquiry",
    ],
    message: "Tell me about your project...",
    send: "Send Message",
    sending: "Sending...",
    sent: "Got it! I'll get back to you within a few hours.",
    error: "Something went wrong. Please email me directly at ubaidillahym@gmail.com",
    availLabel: "Open to Freelance & Remote Full-time",
    responseTime: "Remote-first. Fast to respond.",
    connectTitle: "Or reach out directly",
    contacts: [
      { 
        icon: "✉️", 
        label: "Direct Email", 
        value: "Send an Email", 
        href: "mailto:ubaidillahym@gmail.com",
        desc: "Reach out for project inquiries or just to say hi."
      },
      { 
        icon: "🔗", 
        label: "LinkedIn Professional", 
        value: "Let's Connect", 
        href: "https://linkedin.com/in/yahya-ubaidillah",
        desc: "Check my professional network and latest updates."
      },
    ],
  },
  id: {
    badge: "Kontak",
    title: "Mari Bangun Sesuatu yang <span>Luar Biasa Bersama</span>",
    subtitle: "Cari partner strategis untuk membangun produk Anda? Saya siap membantu dari strategi hingga eksekusi.",
    name: "Nama Lengkap",
    email: "Alamat Email",
    subject: "Topik",
    subjectOptions: [
      "Product Consulting",
      "Head of Product · Co-Build",
      "Workflow Automation",
      "AI-Assisted Building",
      "Lainnya",
    ],
    message: "Ceritakan tentang proyek Anda...",
    send: "Kirim Pesan",
    sending: "Mengirim...",
    sent: "Pesan masuk! Saya akan segera membalasnya.",
    error: "Terjadi kesalahan. Silakan email Saya langsung di ubaidillahym@gmail.com",
    availLabel: "Terbuka untuk Freelance & Full-time Remote",
    responseTime: "Lebih suka kerja remote. Pesan masuk biasanya langsung dibalas.",
    connectTitle: "Atau hubungi langsung",
    contacts: [
      { 
        icon: "✉️", 
        label: "Email Langsung", 
        value: "Kirim Email", 
        href: "mailto:ubaidillahym@gmail.com",
        desc: "Hubungi Saya untuk diskusi proyek atau sekadar menyapa."
      },
      { 
        icon: "🔗", 
        label: "LinkedIn Profesional", 
        value: "Mari Terhubung", 
        href: "https://linkedin.com/in/yahya-ubaidillah",
        desc: "Lihat jaringan profesional dan update terbaru Saya."
      },
    ],
  },
};

export default function Contact({ lang }) {
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
    <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t.title }} />
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className={`reveal reveal-delay-1 ${styles.hub}`}>
          {/* Direct contacts grid */}
          <div className={styles.contactGrid}>
            {t.contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className={`${styles.contactCard}`}>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.contactIcon}>{c.icon}</span>
                  </div>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactLabel}>{c.label}</div>
                    <div className={styles.contactValue}>{c.value}</div>
                    <p className={styles.contactDesc}>{c.desc}</p>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.actionText}>{lang === 'en' ? 'Click to open' : 'Klik untuk buka'}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Quote card */}
          <div className={styles.quoteCard}>
            <p className={styles.quote}>
              {lang === 'en' 
                ? '"The best product decisions happen when strategy meets empathy and execution meets speed."'
                : '"Keputusan produk terbaik terjadi ketika strategi bertemu empati dan eksekusi bertemu kecepatan."'}
            </p>
            <p className={styles.quoteName}>— Yahya Ubaidillah</p>
          </div>
        </div>
      </div>
    </section>
  );
}

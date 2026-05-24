"use client";
import { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

const content = {
  title: "Have a product problem? Let's define the solution.",
  subtitle: "Whether you need a product leader to own roadmap and team, a consultant to architect your next system, or someone to automate what's slowing your ops down — I'm available to discuss.",
  body: "Send a brief description of what you're working on. I respond within 24 hours.",
  contacts: [
    { 
      icon: "✉️", 
      label: "Direct Email", 
      value: "ubaidillahym@gmail.com", 
      href: "mailto:ubaidillahym@gmail.com",
      desc: "Reach out for leadership roles, consulting gigs, or project proposals."
    },
    { 
      icon: "🔗", 
      label: "LinkedIn Professional", 
      value: "linkedin.com/in/yahya-ubaidillah", 
      href: "https://linkedin.com/in/yahya-ubaidillah",
      desc: "Check my professional network, endorsements, and career history."
    },
  ],
};

export default function Contact() {
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
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
          <p className="section-subtitle" style={{marginTop: '16px'}}>{content.body}</p>
        </div>

        <div className={`reveal reveal-delay-1 ${styles.hub}`}>
          {/* Direct contacts grid */}
          <div className={styles.contactGrid}>
            {content.contacts.map((c, i) => (
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
                  <span className={styles.actionText}>Click to open</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

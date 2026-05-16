"use client";
import styles from "./Footer.module.css";

export default function Footer({ lang }) {
  const year = new Date().getFullYear();

  const navLinks = [
    { id: "about", en: "About", id_lang: "Tentang" },
    { id: "collaboration", en: "Collaboration", id_lang: "Kolaborasi" },
    { id: "contact", en: "Contact", id_lang: "Kontak" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoMark}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 5L12 14" />
              <path d="M5 5L12 14L10 16.5L14 16.5L11 21" />
            </svg>
          </div>
          <div>
            <div className={styles.name}>Yahya<span>.</span></div>
            <div className={styles.role}>
              Product Strategy <span>·</span> AI Automation
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={styles.link}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
            >
              {lang === "en" ? link.en : link.id_lang}
            </button>
          ))}
        </nav>

        {/* Social */}
        <div className={styles.social}>
          <a href="mailto:ubaidillahym@gmail.com" className={styles.socialLink} title="Email" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 7L2 7"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/yahya-ubaidillah" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="LinkedIn" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} Yahya Ubaidillah. <span>Strategy Meets Speed.</span></p>
        </div>
      </div>
    </footer>
  );
}

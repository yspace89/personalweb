"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { id: "about", en: "About", id_lang: "Tentang" },
  { id: "collaboration", en: "Collaboration", id_lang: "Kolaborasi" },
  { id: "contact", en: "Contact", id_lang: "Kontak" },
];

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      let current = "";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className={styles.logoMark}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 5L12 14" />
              <path d="M5 5L12 14L10 16.5L14 16.5L11 21" />
            </svg>
          </div>
          <span className={styles.logoText}>Yahya<span>.</span></span>
        </button>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`${styles.link} ${activeSection === link.id ? styles.active : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {lang === "en" ? link.en : link.id_lang}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className={styles.controls}>
          {/* Language Toggle */}
          <button
            className={styles.langToggle}
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            title="Switch language"
          >
            <span className={lang === "en" ? styles.activeLang : ""}>EN</span>
            <span className={styles.separator}>/</span>
            <span className={lang === "id" ? styles.activeLang : ""}>ID</span>
          </button>

          {/* Hire Me CTA */}
          <button className={styles.hireCta} onClick={() => scrollTo("contact")}>
            <span>{lang === "en" ? "Hire Me" : "Hubungi Saya"}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {navLinks.map((link) => (
            <button key={link.id} className={styles.mobileLink} onClick={() => scrollTo(link.id)}>
              {lang === "en" ? link.en : link.id_lang}
            </button>
          ))}
          <div className={styles.mobileLangRow}>
            <span className={styles.mobileLangLabel}>{lang === "en" ? "Language" : "Bahasa"}</span>
            <button
              className={styles.mobileLangToggle}
              onClick={() => setLang(lang === "en" ? "id" : "en")}
            >
              <span className={lang === "en" ? styles.activeLang : ""}>EN</span>
              <span className={styles.separator}>/</span>
              <span className={lang === "id" ? styles.activeLang : ""}>ID</span>
            </button>
          </div>
          <button className={styles.mobileCta} onClick={() => scrollTo("contact")}>
            {lang === "en" ? "Hire Me" : "Hubungi Saya"}
          </button>
      </div>
    </nav>
  );
}

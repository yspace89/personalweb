"use client";
import styles from "./Footer.module.css";
import data from "../data/latest-post.json";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = data.en; // Using English as default for now

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Quote */}
        <div className={styles.quoteBlock}>
          <div className={styles.quoteMark}>"</div>
          <p className={styles.quoteText}>
            Strategy meets execution. Ideas become systems. Systems create value.
          </p>
        </div>

        {/* Brand & Copyright */}
        <div className={styles.bottom}>
          <div className={styles.brand}>
            <div className={styles.logoMark}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 5L12 14" />
                <path d="M5 5L12 14L10 16.5L14 16.5L11 21" />
              </svg>
            </div>
            <div className={styles.name}>Yahya Ubaidillah</div>
          </div>
          <div className={styles.copyright}>
            © {year} Yahya Ubaidillah
          </div>
        </div>
      </div>
    </footer>
  );
}

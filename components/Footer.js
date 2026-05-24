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

        {/* Latest Insight */}
        {data.active && (
          <div className={styles.insightBlock}>
            <div className={styles.insightBadge}>{t.badge}</div>
            <a href={t.url} target="_blank" rel="noopener noreferrer" className={styles.insightCard}>
              <div className={styles.insightIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className={styles.insightContent}>
                <h4 className={styles.insightTitle}>{t.title}</h4>
                <span className={styles.insightCta}>
                  {t.cta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        )}

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

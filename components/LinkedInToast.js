"use client";
import { useState, useEffect } from "react";
import styles from "./LinkedInToast.module.css";
import data from "../data/latest-post.json";

export default function LinkedInToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) {
      setIsVisible(false);
      return;
    }
    
    let hideTimer;
    let showTimer;

    const runCycle = () => {
      setIsVisible(true);
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        showTimer = setTimeout(runCycle, 10000); // Wait 10s before showing again
      }, 5000); // Show for 5s
    };

    // Initial start after 3 seconds
    const initialTimer = setTimeout(() => {
      runCycle();
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
    };
  }, [isDismissed]);

  if (!data.active) return null;

  return (
    <div className={`${styles.toastWrapper} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.toast}>
        <button 
          className={styles.closeBtn} 
          onClick={(e) => {
            e.preventDefault();
            setIsDismissed(true);
            setIsVisible(false);
          }}
          aria-label="Close notification"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <a href={data.en.url} target="_blank" rel="noopener noreferrer" className={styles.toastLink}>
          <div className={styles.iconContainer}>
            <div className={styles.linkedinIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div className={styles.onlineDot}></div>
            </div>
          </div>
          
          <div className={styles.content}>
            <span className={styles.badge}>{data.en.badge}</span>
            <p className={styles.title}>{data.en.title}</p>
            <span className={styles.cta}>Read on LinkedIn →</span>
          </div>
        </a>
      </div>
    </div>
  );
}

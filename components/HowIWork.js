"use client";
import { useEffect, useRef } from "react";
import styles from "./HowIWork.module.css";

const content = {
  title: "How I work",
  bodyP1: "Most PMs hand off a PRD and call it done. I don't stop there.",
  bodyP2: "I stay in the build — from discovery to deployment — because the best products come from leaders who understand what it actually takes to ship. My approach is strategic where it needs to be, and hands-on when execution demands it.",
  bodyP3: "The result: systems that teams actually use, automation that eliminates real bottlenecks, and products that directly impact the bottom line.",
};

export default function HowIWork() {
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
    <section id="how-i-work" className={`section ${styles.howIWork}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.content}>
          <div className={`reveal ${styles.header}`}>
            <h2 className="section-title">{content.title}</h2>
          </div>
          
          <div className={`reveal reveal-delay-1 ${styles.prose}`}>
            <p>{content.bodyP1}</p>
            <p>{content.bodyP2}</p>
            <p>{content.bodyP3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

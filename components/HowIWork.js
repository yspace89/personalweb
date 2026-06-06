"use client";
import { useEffect, useRef } from "react";
import styles from "./HowIWork.module.css";

const content = {
  en: {
    title: "How I work",
    bodyP1: "Most PMs hand off a PRD and call it done. I do not stop there.",
    bodyP2: "I do not simply build what is requested. I analyze operational workflows and recommend business improvements first, ensuring your processes are lean before technology takes over. Once the strategy is aligned, I bridge the gap with engineering reality. From mapping data architectures to building custom automations, I lead the product all the way to deployment.",
    bodyP3: "The result: technology that solves root causes instead of simply digitizing broken processes, high system adoption by the team, and products that directly impact your bottom line.",
  },
  id: {
    title: "Cara Saya Bekerja",
    bodyP1: "Kebanyakan PM menyerahkan PRD dan menganggap tugas selesai. Saya tidak berhenti di situ.",
    bodyP2: "Saya tidak sekadar membangun apa yang diminta. Saya menganalisis alur kerja operasional dan merekomendasikan perbaikan bisnis terlebih dahulu, memastikan proses Anda efisien sebelum teknologi mengambil alih. Setelah strategi selaras, saya menjembatani kesenjangan dengan realitas rekayasa teknik. Dari pemetaan arsitektur data hingga membangun otomatisasi kustom, saya memimpin produk sepenuhnya hingga peluncuran.",
    bodyP3: "Hasilnya: teknologi yang menyelesaikan akar masalah bukan sekadar mendigitalkan proses yang rusak, tingkat penggunaan sistem yang tinggi oleh tim, dan produk yang berdampak langsung pada pendapatan Anda.",
  }
};

export default function HowIWork({ lang }) {
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
    <section id="how-i-work" className={`section ${styles.howIWork}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.content}>
          <div className={`reveal ${styles.header}`}>
            <h2 className="section-title">{t.title}</h2>
          </div>
          
          <div className={`reveal reveal-delay-1 ${styles.prose}`}>
            <p>{t.bodyP1}</p>
            <p>{t.bodyP2}</p>
            <p>{t.bodyP3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import styles from "./UseCases.module.css";

const content = {
  en: {
    title: "I can help if you're...",
    subtitle: "These are the situations where I create the most value — whether as a consultant, co-build partner, or product lead.",
    cases: [
      { title: "Building an MVP and need someone to own product end-to-end", desc: "I'll handle discovery, PRD, sprint planning, and delivery — so you can focus on fundraising, sales, or whatever needs your attention most." },
      { title: "Drowning in manual ops work that should be automated", desc: "If your team is spending hours on repetitive tasks — data entry, report generation, cross-platform syncing — I'll build the automation pipeline that eliminates it." },
      { title: "Need an ERP or CRM built from scratch for your business", desc: "Off-the-shelf software doesn't fit your workflow. I design custom systems that match how your business actually operates — not the other way around." },
      { title: "Looking for a co-build partner to bring an idea to life", desc: "You have the vision and market insight. I bring the product execution and technical architecture. Let's build something together." }
    ]
  },
  id: {
    title: "Saya dapat membantu jika Anda...",
    subtitle: "Ini adalah situasi di mana saya menciptakan nilai paling tinggi — baik sebagai konsultan, mitra co-build, atau pemimpin produk.",
    cases: [
      { title: "Membangun MVP dan butuh seseorang untuk memimpin produk secara menyeluruh", desc: "Saya akan menangani penemuan, PRD, perencanaan sprint, dan pengiriman — sehingga Anda dapat fokus pada penggalangan dana, penjualan, atau hal lain yang paling membutuhkan perhatian Anda." },
      { title: "Tenggelam dalam pekerjaan operasional manual yang seharusnya bisa diotomatisasi", desc: "Jika tim Anda menghabiskan waktu berjam-jam untuk tugas berulang — entri data, pembuatan laporan, sinkronisasi lintas platform — saya akan membangun pipeline otomatisasi yang menghilangkannya." },
      { title: "Membutuhkan ERP atau CRM yang dibangun dari nol untuk bisnis Anda", desc: "Perangkat lunak yang ada di pasaran tidak sesuai dengan alur kerja Anda. Saya merancang sistem kustom yang cocok dengan cara bisnis Anda benar-benar beroperasi — bukan sebaliknya." },
      { title: "Mencari mitra co-build untuk mewujudkan sebuah ide", desc: "Anda memiliki visi dan wawasan pasar. Saya membawa eksekusi produk dan arsitektur teknis. Mari membangun sesuatu bersama." }
    ]
  }
};

export default function UseCases({ lang }) {
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
    <section id="use-cases" className={`section ${styles.useCases}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title">{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.stack}>
          {t.cases.map((item, i) => (
            <div key={i} className={`reveal ${styles.item}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.title}>{item.title}</div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

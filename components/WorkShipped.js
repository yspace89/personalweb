"use client";
import React, { useEffect, useRef } from "react";
import styles from "./WorkShipped.module.css";

const DatabaseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>;
const HubIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M21 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M3 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M12 3m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M12 21m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M5 12h5"/><path d="M14 12h5"/><path d="M12 5v5"/><path d="M12 14v5"/></svg>;
const ChipIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>;

const CashIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>;
const ReceiptIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 14h-8"/><path d="M16 10h-8"/></svg>;
const SwapIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v18"/><path d="m4 7 4-4 4 4"/><path d="M16 21V3"/><path d="m12 17 4 4 4-4"/></svg>;
const TrendingUpIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>;
const BarChartIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M7 17v-4"/><path d="M12 17v-8"/><path d="M17 17v-6"/></svg>;

const StoreIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.04-4.04c.14-.14.33-.22.53-.22h10.86c.2 0 .39.08.53.22L22 7"/><path d="M22 7v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7"/><path d="M2 7h20"/><path d="M6 7v6a2 2 0 0 0 4 0V7"/><path d="M10 7v6a2 2 0 0 0 4 0V7"/><path d="M14 7v6a2 2 0 0 0 4 0V7"/></svg>;
const UsersIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

const AtSignIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4.5 8.4"/></svg>;
const CalendarIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const DatabaseScrapeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>;
const BellIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const BranchIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>;

const content = {
  en: {
    title: "Work I've Shipped",
    subtitle: "Three core projects that reflect my approach to digital transformation — from system architecture to full operational deployment.",
    cases: [
      {
        id: "erp",
        title: "Integrated Operational ERP System",
        meta: "Complex MVP in ~6 months · Multi-industry",
        theme: "Green",
        icon: <DatabaseIcon />,
        desc: "Led the end-to-end build of an ERP ecosystem from the ground up — spanning discovery, system architecture, and full deployment within approximately 6 months. The platform unifies all business operations in a single, fully automated environment: product & inventory management, purchase order and sales order processing, and a comprehensive cross-departmental financial management system.",
        modulesTitle: "FINANCIAL MODULES COVERED",
        modules: [
          { name: "Cash advance", icon: <CashIcon /> },
          { name: "Expense monitoring", icon: <ReceiptIcon /> },
          { name: "Cash in / cash out", icon: <SwapIcon /> },
          { name: "Profit & revenue tracking", icon: <TrendingUpIcon /> },
          { name: "Financial reporting", icon: <BarChartIcon /> }
        ]
      },
      {
        id: "crm",
        title: "Scalable Sales CRM Platform",
        meta: "End-to-End Pipeline Management · B2B & B2C",
        theme: "Purple",
        icon: <HubIcon />,
        desc: "Led the development of a CRM platform built to support two distinct distribution models within a single architecture — each shipped as a functional MVP in approximately 6 months.",
        innerCards: [
          {
            title: "B2B MODEL",
            icon: <StoreIcon />,
            desc: "Manages multi-tier pipelines from principal to distributor to retail. Surfaces customer order patterns and helps sales teams prioritize prospects, track activity, and deliver timely offers."
          },
          {
            title: "B2C MODEL",
            icon: <UsersIcon />,
            desc: "Focuses on granular lead status analysis — from initial acquisition and lead classification through to data-driven decision-making on user handling and follow-up actions."
          }
        ]
      },
      {
        id: "automation",
        title: "Operational Automation & Business Intelligence",
        meta: "Smart Technology · Efficiency & Analytics",
        theme: "Yellow",
        icon: <ChipIcon />,
        desc: "Integrated a modern automation stack — n8n, Apify, and Lark Base — to eliminate repetitive manual work and generate actionable business intelligence across the organization. Solutions cover marketing performance scraping and analysis across Instagram and TikTok at multiple time horizons, competitor market data extraction, daily operational task orchestration, and real-time sales monitoring. All systems are fully deployed and run autonomously without manual intervention.",
        modulesTitle: "CAPABILITIES DELIVERED",
        modules: [
          { name: "Instagram & TikTok analytics", icon: <AtSignIcon /> },
          { name: "Daily · Monthly · Quarterly", icon: <CalendarIcon /> },
          { name: "Market data scraping", icon: <DatabaseScrapeIcon /> },
          { name: "Task orchestration", icon: <BellIcon /> },
          { name: "Real-time sales monitoring", icon: <BarChartIcon /> },
          { name: "n8n · Apify · Lark Base", icon: <BranchIcon /> }
        ]
      }
    ]
  },
  id: {
    title: "Karya yang Telah Dirilis",
    subtitle: "Tiga proyek inti yang mencerminkan pendekatan saya terhadap transformasi digital — dari arsitektur sistem hingga peluncuran operasional penuh.",
    cases: [
      {
        id: "erp",
        title: "Sistem ERP Operasional Terintegrasi",
        meta: "MVP Kompleks dalam ~6 bulan · Multi-industri",
        theme: "Green",
        icon: <DatabaseIcon />,
        desc: "Memimpin pembangunan ekosistem ERP end-to-end dari bawah ke atas — mencakup penemuan, arsitektur sistem, dan penerapan penuh dalam waktu sekitar 6 bulan. Platform ini menyatukan semua operasi bisnis dalam lingkungan tunggal yang sepenuhnya otomatis: manajemen produk & inventaris, pemrosesan pesanan pembelian dan penjualan, serta sistem manajemen keuangan lintas departemen yang komprehensif.",
        modulesTitle: "MODUL KEUANGAN TERCANGKUP",
        modules: [
          { name: "Kas bon", icon: <CashIcon /> },
          { name: "Pemantauan pengeluaran", icon: <ReceiptIcon /> },
          { name: "Kas masuk / keluar", icon: <SwapIcon /> },
          { name: "Pelacakan laba & pendapatan", icon: <TrendingUpIcon /> },
          { name: "Pelaporan keuangan", icon: <BarChartIcon /> }
        ]
      },
      {
        id: "crm",
        title: "Platform CRM Penjualan yang Skalabel",
        meta: "Manajemen Pipeline End-to-End · B2B & B2C",
        theme: "Purple",
        icon: <HubIcon />,
        desc: "Memimpin pengembangan platform CRM yang dibangun untuk mendukung dua model distribusi berbeda dalam satu arsitektur — masing-masing dikirim sebagai MVP fungsional dalam waktu sekitar 6 bulan.",
        innerCards: [
          {
            title: "MODEL B2B",
            icon: <StoreIcon />,
            desc: "Mengelola pipeline multi-tingkat dari prinsipal ke distributor hingga ritel. Menampilkan pola pesanan pelanggan dan membantu tim penjualan memprioritaskan prospek, melacak aktivitas, dan memberikan penawaran tepat waktu."
          },
          {
            title: "MODEL B2C",
            icon: <UsersIcon />,
            desc: "Berfokus pada analisis status prospek yang terperinci — dari akuisisi awal dan klasifikasi prospek hingga pengambilan keputusan berbasis data mengenai penanganan pengguna dan tindakan tindak lanjut."
          }
        ]
      },
      {
        id: "automation",
        title: "Otomatisasi Operasional & Business Intelligence",
        meta: "Teknologi Cerdas · Efisiensi & Analitik",
        theme: "Yellow",
        icon: <ChipIcon />,
        desc: "Mengintegrasikan stack otomatisasi modern — n8n, Apify, dan Lark Base — untuk menghilangkan pekerjaan manual berulang dan menghasilkan intelijen bisnis yang dapat ditindaklanjuti di seluruh organisasi. Solusi mencakup pengikisan kinerja pemasaran dan analisis di Instagram dan TikTok pada berbagai horizon waktu, ekstraksi data pasar pesaing, orkestrasi tugas operasional harian, dan pemantauan penjualan waktu nyata. Semua sistem diterapkan sepenuhnya dan berjalan secara otonom tanpa campur tangan manual.",
        modulesTitle: "KEMAMPUAN YANG DIKIRIM",
        modules: [
          { name: "Analisis Instagram & TikTok", icon: <AtSignIcon /> },
          { name: "Harian · Bulanan · Kuartalan", icon: <CalendarIcon /> },
          { name: "Scraping data pasar", icon: <DatabaseScrapeIcon /> },
          { name: "Orkestrasi tugas", icon: <BellIcon /> },
          { name: "Pemantauan penjualan real-time", icon: <BarChartIcon /> },
          { name: "n8n · Apify · Lark Base", icon: <BranchIcon /> }
        ]
      }
    ]
  }
};

export default function WorkShipped({ lang }) {
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
    <section id="work-shipped" className={`section ${styles.workShipped}`} ref={sectionRef}>
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <h2 className="section-title">
            {t.title.split(" ").map((word, i, arr) => {
              if (i === arr.length - 1) {
                return <span key={i}>{word}</span>;
              }
              return <React.Fragment key={i}>{word} </React.Fragment>;
            })}
          </h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.cases.map((item, i) => (
            <div key={i} className={`reveal ${styles.card}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.cardHeader}>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles[`badge${item.theme}`]}>{item.meta}</div>
                </div>
                <div className={`${styles.iconBox} ${styles[`iconBox${item.theme}`]}`}>
                  {item.icon}
                </div>
              </div>
              
              <p className={styles.desc}>{item.desc}</p>
              
              {(item.modules || item.innerCards) && <div className={styles.divider}></div>}

              {item.modules && (
                <div className={styles.modulesSection}>
                  <div className={styles.modulesTitle}>{item.modulesTitle}</div>
                  <div className={styles.pillContainer}>
                    {item.modules.map((mod, j) => (
                      <div key={j} className={styles[`pill${item.theme}`]}>
                        {mod.icon}
                        <span>{mod.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.innerCards && (
                <div className={styles.innerCardsContainer}>
                  {item.innerCards.map((inner, k) => (
                    <div key={k} className={styles.innerCard}>
                      <div className={styles.innerCardTitle}>
                        {inner.icon}
                        <span>{inner.title}</span>
                      </div>
                      <p className={styles.innerCardDesc}>{inner.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

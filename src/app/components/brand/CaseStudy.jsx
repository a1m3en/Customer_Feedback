import React from "react";
import styles from "./caseStudy.module.css";

export default function CaseStudy() {
  return (
    <section data-aos="fade-up" className={styles.caseSection} aria-label="Case study - Notion">
      <div className={`container ${styles.grid}`}>
        <div className={styles.mediaCol}>
          <div className={styles.heroCard}>
            {/* inline SVG analytics line chart */}
            <svg viewBox="0 0 340 180" className={styles.chart} preserveAspectRatio="none" role="img" aria-label="Line chart">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6b5cff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ff7aa2" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* grid lines */}
              <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                <line x1="20" y1="30" x2="320" y2="30" />
                <line x1="20" y1="60" x2="320" y2="60" />
                <line x1="20" y1="90" x2="320" y2="90" />
                <line x1="20" y1="120" x2="320" y2="120" />
                <line x1="20" y1="150" x2="320" y2="150" />
              </g>

              {/* axis line */}
              <line x1="20" y1="160" x2="320" y2="160" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

              {/* data path */}
              <path d="M20 130 C60 110, 100 80, 140 100 C180 120, 220 90, 260 60 C300 30,320 20,320 20"
                fill="none" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

              {/* points */}
              <g fill="#fff">
                <circle cx="20" cy="130" r="3" fill="#6b5cff" />
                <circle cx="140" cy="100" r="4" fill="#6b5cff" />
                <circle cx="260" cy="60" r="4" fill="#ff7aa2" />
              </g>
            </svg>
          </div>

          <div data-aos="fade-left" className={styles.callout}>
            <div className={styles.calloutInner}>
              <div className={styles.alertTag}>#alerts-ux-issues</div>
              <p className={styles.calloutText}>
                Fans are experiencing significant issues with ticketing platform during high-demand events, such as the Taylor Swift concert pre-sale. These challenges include endless virtual queues, website crashes, and transaction failures.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div className={styles.kicker}>ANALYZE</div>
          <h2 className={styles.headline}>Know, don't guess</h2>
          <p className={styles.lead}>Uncover key insights at the speed of thought.</p>

          <blockquote className={styles.quote}>
            “Enterpret helps us have a holistic view. We can actually understand: “What are the broader sentiments? What are our users saying?”
          </blockquote>

          <div className={styles.signature}>
            <img src="/logo.svg" alt="author" className={styles.avatar} />
            <div>
              <div className={styles.author}>Emma Auscher</div>
              <div className={styles.role}>Global VP of Customer Experience</div>
            </div>
            <div className={styles.notation}>
              <img src="/brands/notion.svg" alt="Notion" className={styles.notationLogo} />
            </div>
          </div>

          <button className={styles.cta}>How Notion gets insights 70% faster</button>
        </div>
      </div>
    </section>
  );
}

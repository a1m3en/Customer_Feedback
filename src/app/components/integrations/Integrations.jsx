import React from "react";
import styles from "./integrations.module.css";

const LOGOS = [
  "slack.svg",
  "figma.svg",
  "canva.svg",
  "notion.svg",
  "perplexity.svg",
  "strava.svg",
  "slack.svg",
  "figma.svg",
  "canva.svg",
  "notion.svg",
  "perplexity.svg",
  "strava.svg",
];

export default function Integrations(){
  return (
    <section data-aos="fade-up" className={styles.integrations} aria-label="Integrations">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.kicker}>INTEGRATIONS</div>
          <h2 className={styles.title}>Integrate with all feedback channels</h2>
          <p className={styles.lead}>Enterpret connects to your existing channels, and more with our CSV importer and API.</p>

          <button className={styles.cta}>Integrations ▸</button>
        </div>

        <div className={styles.right}>
          <div className={styles.grid}>
            {LOGOS.map((file, idx) => (
              <div data-aos="fade-up" key={idx} className={`${styles.tile} ${idx===6?styles.heroTile:''}`}>
                <img src={`/brands/${file}`} alt="logo" className={styles.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import React from "react";
import styles from "./footer.module.css";

export default function Footer(){
  return (
    <footer data-aos="fade-up" className={styles.footer} aria-label="Site footer" role="contentinfo">
      {/* use container-fluid so footer area spans full viewport width */}
      <div className={`container-fluid ${styles.inner}`}>
        <div className={styles.leftCol}>
          <img src="/logo.svg" alt="Enterpret logo" className={styles.logoLarge} />
          <p className={styles.tagline}>Bridging the gap between customers and builders.</p>

          <div className={styles.socialRow}>
            <img src="/brands/slack.svg" alt="Slack" />
            <img src="/brands/figma.svg" alt="Figma" />
            <img src="/brands/canva.svg" alt="Canva" />
            <img src="/brands/notion.svg" alt="Notion" />
          </div>

          <div className={styles.copy}>© Enterpret Inc. 2025</div>
        </div>

        <nav className={styles.rightCols} aria-label="Footer navigation">
          <div className={styles.col}>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li><a className={styles.link} href="#">About Us</a></li>
              <li><a className={styles.link} href="#">Careers</a></li>
              <li><a className={styles.link} href="#">Press</a></li>
              <li><a className={styles.link} href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Product</h4>
            <ul className={styles.links}>
              <li><a className={styles.link} href="#">Changelog</a></li>
              <li><a className={styles.link} href="#">Integrations</a></li>
              <li><a className={styles.link} href="#">Product Tour</a></li>
              <li><a className={styles.link} href="#">Status Page</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Resources</h4>
            <ul className={styles.links}>
              <li><a className={styles.link} href="#">Templates</a></li>
              <li><a className={styles.link} href="#">Privacy Policy</a></li>
              <li><a className={styles.link} href="#">Security</a></li>
              <li><a className={styles.link} href="#">Commitment to Privacy</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}

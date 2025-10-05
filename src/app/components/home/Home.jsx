import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section data-aos="fade-up" className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.heading}>
            Customer Feedback is Everywhere
            <br />
            <span className={styles.gradient}>Customer Intelligence</span> is here.
          </h1>

          <p className={styles.sub}>
            The leading AI platform that unifies all feedback with business context—turning intelligence into customer love.
          </p>

          <div data-aos="fade-up" className={styles.ctas}>
            <a className={styles.btnOutline} href="#">Book a Demo</a>
            <a className={styles.btnFilled} href="#">Take Product Tour ▸</a>
          </div>
        </div>
      </div>
    </section>
  );
}

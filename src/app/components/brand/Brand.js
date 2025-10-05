import React from "react";
import Image from "next/image";
import styles from "./brand.module.css";

// Use remote CDN icons for a smaller footprint and easier updates
const LOGOS = [
  { url: "https://cdn.simpleicons.org/canva/ffffff", alt: "Canva" },
  { url: "https://cdn.simpleicons.org/strava/ffffff", alt: "Strava" },
  { url: "https://cdn.simpleicons.org/notion/ffffff", alt: "Notion" },
  { url: "https://cdn.simpleicons.org/atlassian/ffffff", alt: "Atlassian" },
  { url: "https://cdn.simpleicons.org/webflow/ffffff", alt: "Webflow" },
  { url: "https://cdn.simpleicons.org/linear/ffffff", alt: "Linear" },
  { url: "https://cdn.simpleicons.org/quizlet/ffffff", alt: "Quizlet" },
];

export default function Brand() {
  return (
    <section data-aos="fade-up" className={styles.brandSection} aria-label="Trusted by">
      <div className="container">
        <div className={styles.titleWrap}>
          <h3 className={styles.title}>
            Redefining how the best companies build with feedback
          </h3>
        </div>

        <div className={styles.grid}>
          {LOGOS.map((logo) => (
            <div key={logo.url} className={styles.logoItem}>
              <Image
                src={logo.url}
                alt={logo.alt}
                className={styles.logoImg}
                width={120}
                height={40}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

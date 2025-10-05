"use client";

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./opinions.module.css";

export default function Opinions() {
  const initial = [
    {
      brand: "FEELD",
      text:
        "Enterpret is one of the most powerful tools in our toolkit. It's very Member-friendly. We've been able to share how other teams can modify and self-serve in Enterpret. It's bridged a gap to getting access to Member feedback, and I see all our teams finding ways to use Enterpret to answer Member-related questions.",
      name: "Dina Mohammad-Laity",
      role: "VP of Data",
      avatar: "/logo.svg",
    },
    {
      brand: "ACME",
      text:
        "With Enterpret we reduced our discovery time by 3x. Our product and support teams now share a single source of truth for customer feedback.",
      name: "Carlos Rivera",
      role: "Head of Product",
      avatar: "/logo.svg",
    },
    {
      brand: "NOVUS",
      text:
        "The insights are concise and actionable — engineering and design actually use them in planning. We ship higher-impact features faster.",
      name: "Aisha Patel",
      role: "Director of UX",
      avatar: "/logo.svg",
    },
    {
      brand: "ACME",
      text:
        "With Enterpret we reduced our discovery time by 3x. Our product and support teams now share a single source of truth for customer feedback.",
      name: "Carlos Rivera",
      role: "Head of Product",
      avatar: "/logo.svg",
    },
  ];

  const [testimonials, setTestimonials] = useState(initial);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const hasMountedRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // guard against index out-of-range or children being removed by React
    const children = container.children || [];
    if (index < 0 || index >= children.length) return;
    const child = children[index];
    if (!child) return;
    // ensure nodes are still connected to DOM before attempting to scroll
    const safeScroll = () => {
      try {
        if (child.isConnected && container.isConnected && child.scrollIntoView) {
          child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          return;
        }

        // fallback: compute center position and perform container.scrollTo
        const childRect = child.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offsetLeft = child.offsetLeft - (container.clientWidth / 2 - child.clientWidth / 2);
        container.scrollTo({ left: offsetLeft, behavior: "smooth" });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("safeScroll failed", err);
      }
    };

    // skip scrolling on first mount to avoid forcing page jump on load
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    // only adjust scroll when we are on the homepage; avoid interfering when navigating back from other pages
    if (pathname !== "/") return;

    // run on the next animation frame to reduce chance of DOM mutations during render
    const id = requestAnimationFrame(safeScroll);
    return () => cancelAnimationFrame(id);
  }, [index]);

  function prev() {
    setIndex((i) => {
      const next = i - 1;
      return next < 0 ? Math.max(0, testimonials.length - 1) : next;
    });
  }

  function next() {
    setIndex((i) => {
      const next = i + 1;
      return next >= testimonials.length ? Math.max(0, testimonials.length - 1) : next;
    });
  }

  function loadMore() {
    const more = [
      {
        brand: "HUMM",
        text:
          "Enterpret helped us centralize feedback from email, in-app and interviews. The classification and trends save our team hours every week.",
        name: "Jonas Berg",
        role: "Customer Insights Lead",
        avatar: "/logo.svg",
      },
      {
        brand: "PULSE",
        text:
          "Clear summaries and aggregated trends let product managers make confident prioritization decisions.",
        name: "Maya Chen",
        role: "Product Manager",
        avatar: "/logo.svg",
      },
    ];
    setTestimonials((t) => [...t, ...more]);
  }

  return (
    <section className={styles.opinions} aria-label="User opinions">
      <div className={styles.topLine} />
      <div className={`container ${styles.wrap}`}>
        <div className={styles.navLeft}>
          <button
            className={styles.navBtn}
            aria-label="Previous testimonial"
            onClick={prev}
            disabled={testimonials.length <= 1}
          >
            <span className={styles.arrow}>&lt;</span>
          </button>
        </div>

        <div data-aos="fade-up" className={styles.cards} ref={containerRef} role="list">
          {testimonials.map((t, idx) => (
            <article data-aos="zoom-in" 
              key={`${t.name}-${idx}`}
              className={`${styles.card} ${idx === index ? styles.active : ""}`}
              role="listitem"
              tabIndex={0}
              onFocus={() => setIndex(idx)}
            >
              <div className={styles.quoteMark} aria-hidden>
                “
              </div>
              <h3 className={styles.brand}>{t.brand}</h3>
              <p className={styles.text}>{t.text}</p>

              <div className={styles.signature}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div className={styles.person}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.navRight}>
          <button
            className={styles.navBtn}
            aria-label="Next testimonial"
            onClick={next}
            disabled={testimonials.length <= 1}
          >
            <span className={styles.arrow}>&gt;</span>
          </button>
        </div>
      </div>

      <div className={`container ${styles.controls}`}>
        <button className={styles.loadMore} onClick={loadMore} aria-label="Load more testimonials">
          Show more messages
        </button>
      </div>

      <div className={styles.bottomLine} />
    </section>
  );
}


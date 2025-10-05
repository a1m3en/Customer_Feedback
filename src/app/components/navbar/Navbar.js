"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

const LINKS = [
  {
    label: "Product",
    href: "#",
    children: [
      { title: "Product Tour", icon: "/brands/webflow.svg" },
      { title: "Changelog", icon: "/brands/linear.svg" },
      { title: "Integrations", icon: "/brands/figma.svg" },
    ],
  },
  {
    label: "Customers",
    href: "#",
    children: [
      { title: "Canva", icon: "/brands/canva.svg" },
      { title: "Notion", icon: "/brands/notion.svg" },
      { title: "Apollo", icon: "/brands/perplexity.svg" },
      { title: "Figma", icon: "/brands/figma.svg" },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { title: "Product Teams", icon: "/brands/linear.svg" },
      { title: "Support", icon: "/brands/slack.svg" },
      { title: "Research", icon: "/brands/notion.svg" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { title: "Templates", icon: "/brands/canva.svg" },
      { title: "Docs", icon: "/brands/webflow.svg" },
      { title: "Community", icon: "/brands/perplexity.svg" },
    ],
  },
  { label: "Pricing", href: "#" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);
  const router = useRouter();

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);
  return (
    <>
      <header data-aos="fade-down" className={styles.header}>
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between" style={{ height: 76 }}>
            <div className="d-flex align-items-center gap-3" style={{ zIndex: 3 }}>
              <a
                role="button"
                onClick={async (e) => {
                  e.preventDefault();
                  // navigate and ensure we land at the top of the page
                  try {
                    await router.push('/');
                  } catch (err) {
                    // fallback: full reload
                    window.location.href = '/';
                    return;
                  }

                  // robustly reset scroll (cover documentElement/body differences)
                  try {
                    window.scrollTo({ top: 0, behavior: 'auto' });
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                  } catch (err) {
                    /* ignore */
                  }
                }}
                href="/"
                className="d-flex align-items-center gap-2"
              >
                <Image src="/logo.svg" alt="logo" width={36} height={36} />
                <div className={styles.brandText}>Enterprei</div>
              </a>
            </div>

            <nav data-aos="fade-down" className={`${styles.centerNav} d-none d-md-flex align-items-center gap-4`}>
              {LINKS.map((l) => (
                l.children && l.children.length ? (
                  <div
                    key={l.label}
                    className={`${styles.dropdown} text-white ${openMenu === l.label ? styles.open : ''}`}
                    onMouseEnter={() => {
                      clearTimeout(closeTimer.current);
                      setOpenMenu(l.label);
                    }}
                    onMouseLeave={() => {
                      clearTimeout(closeTimer.current);
                      closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
                    }}
                    onFocus={() => setOpenMenu(l.label)}
                    onBlur={() => {
                      clearTimeout(closeTimer.current);
                      closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
                    }}
                  >
                    <Link href={l.href} className="text-white">
                      {l.label}
                    </Link>
                    <div className={styles.dropdownMenu} role="menu" aria-hidden={openMenu !== l.label}>
                      <div className={styles.pointer} />
                      <ul className={styles.dropdownList}>
                        {l.children.map((c, i) => {
                          const slug = c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                          const href = `/${l.label.toLowerCase()}/${slug}`;
                          return (
                            <Link key={i} href={href} className={styles.dropdownItem} onClick={() => setOpenMenu(null)}>
                              {c.icon ? (
                                <img src={c.icon} alt={c.title} className={styles.dropdownIcon} />
                              ) : (
                                <div className={styles.dropdownIcon} />
                              )}
                              <span>{c.title}</span>
                              <span className={styles.chev}>&rsaquo;</span>
                            </Link>
                          );
                        })}
                      </ul>

                      <div className={styles.dropdownFooter}>
                        <a href="#">All {l.label}</a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a key={l.label} className="text-white" href={l.href}>{l.label}</a>
                )
              ))}
            </nav>

            <div className="d-flex align-items-center gap-3" style={{ zIndex: 3 }}>
              <a className="text-white d-none d-md-inline" href="/signin">Sign In</a>
              <a className={styles.ctaOutline} href="#">Book a Demo</a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}


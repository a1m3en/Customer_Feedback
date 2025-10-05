"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import AosInit from "../components/AosInit";
import Navbar from "../components/navbar/Navbar";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: replace with real auth call
    setMessage(`Signing in ${email}...`);
    console.log("Sign in attempt", { email, password });
    setTimeout(() => setMessage("Signed in (demo)"), 800);
  }

  return (
    <main>
      <AosInit />
      <Navbar/>
      <section className={styles.signin} aria-label="Sign in">
        <div className="container">
          <div className={styles.cardWrap} data-aos="fade-up">
            <div className={styles.visual} aria-hidden>
              <div className={styles.logoWrap}>
                <img src="/logo.svg" alt="logo" className={styles.logo} />
                <div className={styles.brand}>Enterpret</div>
              </div>
              <h3 className={styles.heading}>Welcome back</h3>
              <p className={styles.lead}>Sign in to continue and explore customer intelligence powered by AI.</p>

              <ul className={styles.benefits}>
                <li>Centralize feedback</li>
                <li>Discover trends faster</li>
                <li>Actionable insights for teams</li>
              </ul>
            </div>

            <div className={styles.formCol}>
              <h2 className={styles.title}>Sign in to Enterpret</h2>

              <div className={styles.socialRow}>
                <button className={styles.socialBtn} type="button">Continue with Google</button>
                <button className={styles.socialBtn} type="button">Continue with GitHub</button>
              </div>

              <div className={styles.or}>OR</div>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <label className={styles.label}>
                  Email
                  <input
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@company.com"
                  />
                </label>

                <label className={styles.label}>
                  Password
                  <input
                    className={styles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </label>

                <div className={styles.rowBetween}>
                  <label className={styles.checkbox}>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a className={styles.smallLink} href="#">Forgot password?</a>
                </div>

                <div className={styles.actions}>
                  <button className={styles.btn} type="submit">Sign In</button>
                </div>

                {message && <div className={styles.message}>{message}</div>}
              </form>

              <div className={styles.footerNote}>
                New here? <a href="#">Create an account</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

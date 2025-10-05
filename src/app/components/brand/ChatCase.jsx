import React from "react";
import styles from "./chatCase.module.css";

export default function ChatCase(){
  return (
    <section data-aos="fade-up" className={styles.chatSection} aria-label="Chat case study - Descript">
      <div className={`container ${styles.grid}`}>
        <div className={styles.mediaCol}>
          <div className={styles.chatMock}>
            <div className={styles.windowControls}>
              <span className={styles.dot} style={{background:'#ff5f56'}} />
              <span className={styles.dot} style={{background:'#ffbd2e'}} />
              <span className={styles.dot} style={{background:'#27c93f'}} />
            </div>

            <div className={styles.chatInner}>
              <div className={styles.brandIcon}>W</div>
              <div className={styles.inputBubble}>What do you want to know about your customers' feedback?</div>

              <div className={styles.prompts}>
                <div className={styles.prompt} />
                <div className={styles.prompt} />
                <div className={styles.prompt} />
                <div className={styles.prompt} />
              </div>
            </div>
          </div>
        </div>

  <div data-aos="fade-left" className={styles.contentCol}>
          <div className={styles.kicker}>COPILOT</div>
          <h2 className={styles.headline}>Chat your way to instant insights</h2>
          <p className={styles.lead}>"Wisdom saves me hours every week. I can condense feedback with a single click, replacing the tedious process of reading through hundreds of tickets. It's life-changing!"</p>

          <div className={styles.signature}>
            <img src="/logo.svg" alt="author" className={styles.avatar} />
            <div>
              <div className={styles.author}>Jill McKinney</div>
              <div className={styles.role}>Director of Customer Support</div>
            </div>
            <div className={styles.notation}>
              <img src="/brands/slack.svg" alt="Descript" className={styles.notationLogo} />
            </div>
          </div>

          <button className={styles.cta}>How Descript connects quant & qual</button>
        </div>
      </div>
    </section>
  )
}

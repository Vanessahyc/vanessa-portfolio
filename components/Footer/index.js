// components/Footer.jsx
import styles from "./Footer.module.css"; // or your preferred styling approach

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Left Column: Large heading */}
      <div className={styles.left}>
        <h2 className={styles.lets}>LET'S</h2>
        <h2 className={styles.getIn}>GET IN</h2>
        <h2 className={styles.touch}>TOUCH</h2>
      </div>

      {/* Right Column: Links */}
      <div className={styles.right}>
        <div className={styles.linkRow}>
          <a href="mailto:someone@example.com" target="_blank" rel="noreferrer">
            Email
          </a>
          <span className={styles.arrow}>&rarr;</span>
        </div>

        <div className={styles.linkRow}>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span className={styles.arrow}>&rarr;</span>
        </div>

        <div className={styles.linkRow}>
          <a href="/files/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <span className={styles.arrow}>&rarr;</span>
        </div>
      </div>
    </footer>
  );
}

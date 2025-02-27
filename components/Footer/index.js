import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2 className={styles.lets}>LET'S</h2>
        <h2 className={styles.getIn}>GET IN</h2>
        <h2 className={styles.touch}>TOUCH</h2>
      </div>

      <div className={styles.right}>
        <div className={styles.linkRow}>
          <a href="mailto:vanessa.designs88@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
          <span className={styles.arrow}>&rarr;</span>
        </div>

        <div className={styles.linkRow}>
          <a
            href="https://www.linkedin.com/in/vanessa-huang12"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span className={styles.arrow}>&rarr;</span>
        </div>

        <div className={styles.linkRow}>
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:1980b016-446a-4786-b713-a5c0d6c391d9" target="_blank" rel="noreferrer">
            Resume
          </a>
          <span className={styles.arrow}>&rarr;</span>
        </div>
      </div>
    </footer>
  );
}

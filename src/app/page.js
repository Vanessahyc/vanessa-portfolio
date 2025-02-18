import Header from "../../components/Header";
import styles from "@/app/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles["main-container"]}>
        <section className={styles["greeting-section"]}>
          <h1 className={styles["greeting-big"]}>Vanessa Huang</h1>
          <h3 className={styles["greeting-small"]}>UI/UX & Graphic Designer</h3>
          <Link
            className={styles["greeting-bottom"]}
            href="#projects"
          >
            <img
              src="/relay-images/btn_arrow.svg"
              alt="arrow icon"
              className={styles["icon24"]}
            />
            <span>Scroll to view recent projects</span>
          </Link>
        </section>
        <section id="projects" className={styles["projects-section"]}>
          <h2 className={styles["section-title"]}>Recent Projects</h2>
          <div className={styles["projects-container"]}>
            <Link href="/floom" className={styles["project-link"]}>
              <div className={styles["project-box"]}>
                <img
                  src="/floom-images/floom_mockup.jpg"
                  alt="floom packaging design"
                />
                <div className={styles["project-infobox"]}>
                  <div className={styles["project-name"]}>
                    <h3>Floom</h3>
                    <p>2024</p>
                  </div>
                  <div className={styles["project-tagbox"]}>
                    <p>Graphic Design</p>
                    <p>Packaging Design</p>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href="/fitquest" className={styles["project-link"]}> */}
            <div
              className={`${styles["project-box"]} ${styles["box-overlay"]}`}
            >
              <img src="/images/fitquest.png" alt="FitQuest UI/UX Design" />
              <div className={styles["project-infobox"]}>
                <div className={styles["project-name"]}>
                  <h3>FitQuest</h3>
                  <p>2024</p>
                </div>
                <div className={styles["project-tagbox"]}>
                  <p>UI/UX Design</p>
                  <p>App Development</p>
                </div>
              </div>
            </div>
            {/* </Link> */}
            <Link href="/relay" className={styles["project-link"]}>
              <div className={styles["project-box"]}>
                <img
                  src="/relay-images/home_mockup@1.5x.png"
                  alt="floom packaging design"
                />
                <div className={styles["project-infobox"]}>
                  <div className={styles["project-name"]}>
                    <h3>Relay</h3>
                    <p>2024</p>
                  </div>
                  <div className={styles["project-tagbox"]}>
                    <p>UI/UX Design</p>
                    <p>App Development</p>
                    <p>Case Study</p>
                  </div>
                </div>
              </div>
            </Link>
            {/* <Link href="/fitquest" className={styles["project-link"]}> */}
            <div
              className={`${styles["project-box"]} ${styles["box-overlay"]}`}
            >
              <img
                src="/ecospace-images/ecospace_mockup.jpg"
                alt="EcoSpace Magazine Design"
              />
              <div className={styles["project-infobox"]}>
                <div className={styles["project-name"]}>
                  <h3>Eco Space</h3>
                  <p>2024</p>
                </div>
                <div className={styles["project-tagbox"]}>
                  <p>Content Design</p>
                  <p>Graphic Design</p>
                </div>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </section>
      </div>
    </main>
  );
}

import Header from "../../components/Header";
import styles from "@/app/Home.module.css";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={styles["main-container"]}>
          <section className={styles["greeting-section"]}>
            <h1 className={styles["greeting-big"]}>Vanessa Huang</h1>
            <h3 className={styles["greeting-small"]}>
              UI/UX & Graphic Designer
            </h3>
            <Link className={styles["greeting-bottom"]} href="#projects">
              <img
                src="/relay-images/btn_arrow.svg"
                alt="arrow icon"
                className={styles["icon24"]}
              />
              <span>Scroll to view recent projects</span>
            </Link>
          </section>
          <section id="projects" className={`${styles["projects-section"]}`}>
            <h2 className={styles["section-title"]}>Recent Projects</h2>
            <div className={styles["projects-container"]}>
              <Link href="/floom" className={styles["project-link"]}>
                <div className={`${styles["project-box-big"]}`}>
                  <img
                    src="/floom-images/floom_mockup.jpg"
                    alt="floom packaging design"
                  />
                  <div className={styles["project-overlay"]}></div>
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
              <div className={styles["project-small-section"]}>
                <Link href="/relay" className={styles["project-link"]}>
                  <div className={styles["project-box-small"]}>
                    <div className={styles["project-infobox-b"]}>
                      <div className={styles["project-name"]}>
                        <h3>Relay</h3>
                        <p>2024</p>
                      </div>
                      <div className={styles["project-tagbox-b"]}>
                        <p>UI/UX Design</p>
                        <p>App Development</p>
                        <p>Case Study</p>
                      </div>
                    </div>
                    <div className={styles["project-imgbox"]}>
                      <img
                        src="/relay-images/home_mockup@1.5x.png"
                        alt="Relay App Development"
                      />
                    </div>
                  </div>
                </Link>
                <Link href="/fitquest" className={styles["project-link"]}>
                  <div className={styles["project-box-small"]}>
                    <div className={styles["project-infobox-b"]}>
                      <div className={styles["project-name"]}>
                        <h3>FitQuest</h3>
                        <p>2024</p>
                      </div>
                      <div className={styles["project-tagbox-b"]}>
                        <p>UI/UX Design</p>
                        <p>App Development</p>
                      </div>
                    </div>
                    <div className={styles["project-imgbox"]}>
                      <img
                        src="/images/fitquest.png"
                        alt="FitQuest Web App Development"
                      />
                    </div>
                  </div>
                </Link>
                <Link href="/ecospace" className={styles["project-link"]}>
                  <div className={styles["project-box-small"]}>
                    <div className={styles["project-infobox-b"]}>
                      <div className={styles["project-name"]}>
                        <h3>Eco Space</h3>
                        <p>2024</p>
                      </div>
                      <div className={styles["project-tagbox-b"]}>
                        <p>Content Design</p>
                        <p>Graphic Design</p>
                      </div>
                    </div>
                    <div className={styles["project-imgbox"]}>
                      <img
                        src="/ecospace-images/ecospace_mockup.jpg"
                        alt="Eco Space Magazine Design"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

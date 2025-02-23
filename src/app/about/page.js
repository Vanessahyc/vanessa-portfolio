import styles from "./About.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <div className={styles["img-container"]}>
          <img src="/images/vanessa_img.jpg" alt="Vanessa Profile Image" />
        </div>
        <div className={styles["info-container"]}>
          <h1>About</h1>
          <p>
            I am a Graphic designer based in Vancouver, driven by a passion for
            innovating unique, dynamic, and sustainable designs that are both
            energetic and aesthetically pleasing. I am skilled in Adobe Creative
            Suite, Figma and highly motivated in team collaboration while always
            being detail oriented. I believe that design has the power to
            transform experiences, and I am dedicated to using that power to its
            full potential in every project I undertake.
          </p>
          <Link
            className={styles["cta-btn"]}
            href="https://acrobat.adobe.com/id/urn:aaid:sc:US:1980b016-446a-4786-b713-a5c0d6c391d9"
            target="_blank"
          >
            <img
              src="/relay-images/btn_arrow.svg"
              alt="arrow icon"
              className={styles["icon24"]}
            />
            <span>View Resume</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

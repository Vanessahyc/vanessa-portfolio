import styles from "./Gallery.module.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
        <div className={styles["main-container"]}>
          <section className={styles["greeting-section"]}>
            <h1 className={styles["greeting-big"]}>
              This page is under construction
            </h1>
            <h3 className={styles["greeting-small"]}>
              Please check out other pages
            </h3>
            <Link className={styles["greeting-bottom"]} href="/projects">
              <img
                src="/relay-images/btn_arrow.svg"
                alt="arrow icon"
                className={styles["icon24"]}
              />
              <span>Checkout Projects</span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

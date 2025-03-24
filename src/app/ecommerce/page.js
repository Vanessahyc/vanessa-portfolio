"use client";
import Header from "../../../components/Header";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
import styles from "./Ecommerce.module.css";
import Image from "next/image";

export default function Ecommerce() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <HeroSection
          imageSrc="/ecommerce/ecommerce_hero.webp"
          imageAlt="Live Steam Shopping Scene"
          width={1500}
          height={844}
          title="Live Stream Shopping"
          year="2024"
          subtitle="After Effects | Graphic Design"
          overviewTitle="Overview"
          overviewText="This motion graphic, created using Adobe Illustrator and After Effects, highlights the advantages of live stream shopping over traditional online shopping. Featuring custom vector illustrations and smooth animations, the video demonstrates how live shopping enhances engagement, offers exclusive discounts, and provides a seamless, interactive experience. Viewers follow a buyer’s journey from browsing a website to interacting with a live host, making informed purchases, and enjoying a streamlined shopping process."
        />
        <section className={styles["dieline-container"]}>
          <video
            src="/ecommerce/ecommerce.mp4"
            className={styles.video}
            controls
            poster="/ecommerce/ecommerce_hero.webp"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

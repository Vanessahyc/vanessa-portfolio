"use client";
import Header from "../../../components/Header";
import styles from "@/app/relay/Relay.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Relay() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={`${styles.projectSection}`}>
            <img src="https://placehold.co/600x400"/>
          {/* <Image
            src={selectedImage}
            alt="Guava Can Design"
            className={`${styles.mockup}`}
            width={5000}
            height={4000}
          /> */}
          <div className={styles.projectInfo}>
            <h2>Floom</h2>
            <h3>Packaging Design</h3>
            <h4>Rationale</h4>
            <p>
              The Floom canned cocktail is designed to cater to a diverse and
              multilingual Canadian audience, particularly targeting adults aged
              19-30 who value quality, freshness, and natural ingredients in
              their beverages. This audience appreciates visually appealing and
              accessible products that align with their lifestyle, including
              casual gatherings, outdoor adventures, and celebratory moments. By
              focusing on bilingual labels and vibrant, nature-inspired designs,
              the product appeals to a wide demographic, including both English
              and French-speaking Canadians, ensuring inclusivity and a
              connection to the cultural diversity of the market.
            </p>
            <h4>Floom Flavor</h4>
          </div>
        </section>
        <section className={styles.packageContainer}>
          <h3>Package Design</h3>
          <div className={styles.packageDesign}>
            <img src="https://placehold.co/600x400"/>
            {/* <Image
              src={selectedColor}
              alt="Guava Can Design"
              className={`${styles.mockup}`}
              width={500}
              height={400}
            />
            <Image
              src={selectedDieline}
              alt="Guava Can Design"
              className={`${styles.mockup}`}
              width={500}
              height={400}
            /> */}
          </div>
        </section>
      </main>
    </>
  );
}

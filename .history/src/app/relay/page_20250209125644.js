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
          <Image
            src={selectedImage}
            alt="Guava Can Design"
            className={`${styles.mockup}`}
            width={5000}
            height={4000}
          />
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
            <div className={styles.flavorFilter}>
              <button
                onClick={() => {
                  setSelectedImage("/images/Guava_Mockup.jpg");
                  setSelectedDieline("/images/Guava_Dieline_New.png");
                  setSelectedColor("/images/Guava_Color.svg");
                }}
              >
                Guava
              </button>
              <button
                onClick={() => {
                  setSelectedImage("/images/Orange_Mockup.jpg");
                  setSelectedDieline("/images/Orange_Dieline_New.png");
                  setSelectedColor("/images/Guava_Color.svg");
                }}
              >
                Orange
              </button>
              <button
                onClick={() => {
                  setSelectedImage("/images/Mangosteen_Mockup.jpg");
                  setSelectedDieline("/images/Mangosteen_Dieline_New.png");
                  setSelectedColor("/images/Guava_Color.svg");
                }}
              >
                Mangosteen
              </button>
            </div>
          </div>
        </section>
        <section className={styles.packageContainer}>
          <h3>Package Design</h3>
          <div className={styles.packageDesign}>
            <Image
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
            />
          </div>
        </section>
      </main>
    </>
  );
}

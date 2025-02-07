"use client";
import Header from "../../../components/Header";
import styles from "@/app/floom/Floom.module.css";
import Image from "next/image";
import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { Carousel } from "react-responsive-carousel";
// import Link from "next/link";

export default function Floom() {
  const [selectedImage, setSelectedImage] = useState("/images/Guava_Mockup.jpg");
  const [selectedDieline, setSelectedDieline] = useState('/images/Guava_Dieline_New.png');

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
                onClick={() => {setSelectedImage("/images/Guava_Mockup.jpg"); setSelectedDieline('/images/Guava_Dieline.png');}}
              >
                Guava
              </button>
              <button
                onClick={() => {setSelectedImage("/images/Orange_Mockup.jpg"); setSelectedDieline('/images/Orange_Dieline.png');}}
              >
                Orange
              </button>
              <button
                onClick={() => {setSelectedImage("/images/Mangosteen_Mockup.jpg"); setSelectedDieline('/images/Mangosteen_Dieline.png');}}
              >
                Mangosteen
              </button>
            </div>
          </div>
        </section>
        <section>
          <h3>Package Dieline</h3>
          <div>
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

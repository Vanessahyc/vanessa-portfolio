"use client";
import Header from "../../../components/Header";
import styles from "@/app/floom/Floom.module.css";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

export default function Floom() {
  const [selectedImage, setSelectedImage] = useState(
    "/images/Guava_Mockup.jpg"
  );

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
                onClick={() => setSelectedImage("/images/Guava_Mockup.jpg")}
              >
                Guava
              </button>
              <button
                onClick={() => setSelectedImage("/images/Orange_Mockup.jpg")}
              >
                Orange
              </button>
              <button
                onClick={() =>
                  setSelectedImage("/images/Mangosteen_Mockup.jpg")
                }
              >
                Mangosteen
              </button>
            </div>
          </div>
        </section>
        <section>
          <h3>Package Dieline</h3>
          <Carousel>
            <Carousel.Item>
            <img
            src="/images/Guava_Dieline.png"
            alt="Guava Can Design"
            width={500}
            height={400}
            />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            src="/images/Orange_Dieline.png"
            alt="Guava Can Design"
            width={500}
            height={400}
            />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            src="/images/Mangosteen_Dieline.png"
            alt="Guava Can Design"
            />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </main>
    </>
  );
}

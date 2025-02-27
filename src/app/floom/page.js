"use client";
import Header from "../../../components/Header";
import styles from "@/app/floom/Floom.module.css";
import Footer from "../../../components/Footer";
import HeroSection from "../../../components/HeroSection";
import Image from "next/image";

export default function Floom() {

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <HeroSection
          imageSrc="/floom-images/floom_flavors_mockup.webp"
          imageAlt="floom flavors mockup"
          width={1500}
          height={1000}
          title="Floom"
          year="2024"
          subtitle="Graphic Design | Packaging Design"
          overviewTitle="Overview"
          overviewText="The Floom canned cocktail is designed to cater to a diverse and multilingual Canadian audience, particularly targeting adults aged 19-30 who value quality, freshness, and natural ingredients in their beverages. This audience appreciates visually appealing and accessible products that align with their lifestyle, including casual gatherings, outdoor adventures, and celebratory moments. By focusing on bilingual labels and vibrant, nature-inspired designs, the product appeals to a wide demographic, including both English and French-speaking Canadians, ensuring inclusivity and a connection to the cultural diversity of the market."
        />
        <section className={styles["dieline-container"]}>
          <Image src="/floom-images/guava_1500.webp" alt="Guava Dieline" width={1500} height={1000} />
          <Image src="/floom-images/mangosteen_1500.webp" alt="Mangosteen Dieline" width={1500} height={1000}/>
          <Image src="/floom-images/orange_1500.webp" alt="Orange Dieline" width={1500} height={1000}/>
        </section>
      </main>
      <Footer />
    </>
  );
}

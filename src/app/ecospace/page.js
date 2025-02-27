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
          imageSrc="/ecospace-images/ecospace_hero_mockup.webp"
          imageAlt="Eco Space Mockup"
          width={1500}
          height={1043}
          title="Eco Space"
          year="2024"
          subtitle="Graphic Design | Content Design"
          overviewTitle="Overview"
          overviewText="Eco Space Magazine highlights the importance of sustainable design in addressing urbanization, climate change, and resource depletion. It explores innovative approaches such as biophilic design, green architecture, and climate-resilient planning, showcasing how architecture can harmonize with nature to create healthier, more livable spaces. Designed to educate and inspire a broad audience, the magazine features case studies and forward-thinking solutions, presenting a vision of urban environments where human activity and the natural world coexist sustainably. Its clean, modern aesthetic reinforces its commitment to promoting a greener future."
        />
        <section className={styles["dieline-container"]}>
          <Image src="/ecospace-images/ecospace_p1.webp" alt="Eco Space - Sustainable Spaces" width={2500} height={1668}/>
          <Image src="/ecospace-images/ecospace_p2.webp" alt="Eco Space - Urban Parks " width={2500} height={1668}/>
          <Image src="/ecospace-images/ecospace_p3.webp" alt="Eco Space - Biophilic Design" width={2500} height={1668}/>
          <Image src="/ecospace-images/ecospace_p4.webp" alt="Eco Space - Future Environmental Design" width={2500} height={1668}/>
        </section>
      </main>
      <Footer />
    </>
  );
}

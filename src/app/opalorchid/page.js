"use client";
import Header from "../../../components/Header";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
import Image from "next/image";
import styles from "./OpalOrchid.module.css";


export default function OpalOrchid() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <HeroSection
          imageSrc="/opalorchid-images/opal_orchid_1500.webp"
          imageAlt="Opal Orchid Menu Mockup"
          width={1500}
          height={1001}
          title="Opal Orchid"
          year="2024"
          subtitle="Graphic Design | Product Design"
          overviewTitle="Overview"
          overviewText="Opal Orchid is a sophisticated brunch restaurant that blends elegance with comfort. Inspired by classic flavors and modern twists, the menu features handcrafted dishes made with high-quality ingredients, from indulgent bennies and stuffed French toast to gourmet brunch poutines. Designed to evoke a warm and inviting atmosphere, Opal Orchid is the perfect spot for families, friends, and brunch enthusiasts to enjoy a refined yet relaxed dining experience."
        />
        <section className={styles["dieline-container"]}>
          <Image
            src="/opalorchid-images/opal_orchid_single1.webp"
            alt="Opal Orchid Menu 1"
            width={1500}
            height={1001}
          />
          <Image
            src="/opalorchid-images/opal_orchid_single2.webp"
            alt="Opal Orchid Menu 2"
            width={1500}
            height={1001}
          />
          <Image
            src="/opalorchid-images/opal_orchid_single3.webp"
            alt="Opal Orchid Menu 3"
            width={1500}
            height={1001}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

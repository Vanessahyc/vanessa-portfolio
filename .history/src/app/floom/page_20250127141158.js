import Header from "../../../components/Header";
import styles from '@/app/floom/Floom.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Floom() {
  return (
    <>
      <Header/>
      <main className={styles.mainContainer}>
        <section className={`${styles.projectSection}`}>
          <Image src='/images/Guava_Mockup.jpg' alt="Guava Can Design" className={`${styles.mockup}`} width={5000} height={4000}/>
          <div className={styles.projectInfo}>
            <h2>Floom</h2>
            <h3>Packaging Design</h3>
            <h4>Rationale</h4>
            <p>The Floom canned cocktail is designed to cater to a diverse and multilingual Canadian audience, particularly targeting young adults aged 25–40 who value quality, freshness, and natural ingredients in their beverages. This audience appreciates visually appealing and accessible products that align with their lifestyle, including casual gatherings, outdoor adventures, and celebratory moments. By focusing on bilingual labels and vibrant, nature-inspired designs, the product appeals to a wide demographic, including both English and French-speaking Canadians, ensuring inclusivity and a connection to the cultural diversity of the market.</p>
            <h4>Floom Flavor</h4>
            <div className={styles.flavorFilter}>
              <button>Guava</button>
              <button>Orange</button>
              <button>Mangosteen</button>
            </div>
          </div>
        </section>
        <section>
          <h3>Package Dieline</h3>
          <Image src="/images/Guava_Dieline.png" alt="Guava Dieline" width={1384} height={980}/>
        </section>
      </main>
    </>
  );
}

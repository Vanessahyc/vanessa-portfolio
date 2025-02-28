"use client";
import Header from "../../../components/Header";
import styles from "@/app/fitquest/Fitquest.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import dynamic from "next/dynamic";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop";
//https://fitquest-d3.vercel.app/

export default function Fitquest() {
  // const Slider = dynamic(() => import('react-slick'), {ssr: false});
  // const settings = {dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, autoplay: false, autoplaySpeed: 3000, centerMode: false, centerPadding: '5px', varibleWidth: false};
  const images = ["/images/2.png", "/images/3.png", "/images/4.png"];
  const [modalImage, setModalImage] = useState(null);

  const buttonData = [
    {
      href: "https://fitquest-d3.vercel.app/",
      text: "FitQuest App",
      iconSrc: "/relay-images/btn_arrow.svg",
    },
  ];

  const openImg = (src, alt) => {
    setModalImage({ src, alt });
  };

  const closeImg = () => {
    setModalImage(null);
  };

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <HeroSection
          imageSrc="/fitquest-images/fitquest_hero_mockup.webp"
          imageAlt="FitQuest Hero Mockup"
          width={1500}
          height={700}
          title="FitQuest"
          year="2024"
          subtitle="UI/UX Design | Web App"
          overviewTitle="Overview"
          overviewText="FitQuest is a mobile web app designed to help adults and youth who struggle to meet the recommended weekly physical activity levels. By making fitness engaging and accessible, FitQuest empowers users to build and maintain healthier habits. Upon sign-up, users take a quiz to assess their current fitness level. Based on the results, FitQuest recommends personalized workout videos tailored to their needs. To enhance motivation, the app features an interactive reward system by completing workouts earns points, which can be redeemed for exclusive in-app rewards. FitQuest transforms exercise into a fun and rewarding journey through an interactive reward system."
          buttons={buttonData}
        />

        <section id="user-persona" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>User Persona</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              Based on our research findings, we developed four user personas to
              represent our target audiences.
            </p>
            <div className={styles["d-flex"]}>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/fitquest-images/persona_1.png"
                  alt="Primary persona"
                  width={1750}
                  height={1237}
                  onClick={() =>
                    openImg("/fitquest-images/persona_1.png", "Primary persona")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/fitquest-images/persona_2.png"
                  alt="Secondary persona"
                  width={1750}
                  height={1237}
                  onClick={() =>
                    openImg(
                      "/fitquest-images/persona_2.png",
                      "Secondary persona"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className={styles["d-flex"]}>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/fitquest-images/persona_3.png"
                  alt="Primary persona"
                  width={1750}
                  height={1237}
                  onClick={() =>
                    openImg("/fitquest-images/persona_3.png", "Primary persona")
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/fitquest-images/persona_4.png"
                  alt="Secondary persona"
                  width={1750}
                  height={1237}
                  onClick={() =>
                    openImg(
                      "/fitquest-images/persona_4.png",
                      "Secondary persona"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </section>

        {modalImage && (
          <div className={styles.modal} onClick={closeImg}>
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              width={2338}
              height={1650}
              style={{ objectFit: "contain" }}
            />
          </div>
        )}

        <section className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>Wireframes</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              The wireframes for FitQuest illustrate the app’s user-friendly
              layout and intuitive navigation, ensuring a seamless experience
              for users of all fitness levels. Each screen is designed to guide
              users effortlessly through the app, from taking the initial
              fitness quiz to accessing personalized workout videos, tracking
              progress, and redeeming rewards. The wireframes also showcase key
              features such as the homepage, workout vieos, rewards system,
              activity history, nutrition articles, and settings, all structured to keep users engaged and motivated on their fitness journey.
            </p>
            <iframe
              className={styles.figma}
              width="800"
              height="450"
              src="https://embed.figma.com/design/m4zSVwt850k88mEZLTOQtd/MDIA-2106-%E2%80%93-FitQuest-SET-G?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

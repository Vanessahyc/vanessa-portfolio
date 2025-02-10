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
          <img src="https://placehold.co/600x400" alt="placeholder image" />
          <div className={styles.projectInfo}>
            <h2>Relay</h2>
            <h3>App Design</h3>
            <h4>Summary</h4>
            <p>
            Relay is Canada’s first ridesharing app for parents, designed to make it 
                easy to arrange safe, reliable transportation for your children. Whether you’re a busy parent juggling 
                a hectic schedule or a new immigrant seeking to expand your network, Relay connects you with trusted 
                families in your community—no random drivers. With safety features such as GPS Tracking, Ride specific 
                pins and Ai powered notifications, Relay is the app that parents trust.
            </p>
            <h4>Floom Flavor</h4>
          </div>
        </section>
        <section className={styles.packageContainer}>
          <h3>Package Design</h3>
          <div className={styles.packageDesign}>
            <img src="https://placehold.co/600x400" alt="placeholder image" />
            <img src="https://placehold.co/600x400" alt="placeholder image" />
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

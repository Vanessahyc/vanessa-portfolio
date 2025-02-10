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
            <h4>Overview</h4>
            <p>
              Relay is Canada’s first ridesharing app for parents, designed to
              make it easy to arrange safe, reliable transportation for your
              children. Whether you’re a busy parent juggling a hectic schedule
              or a new immigrant seeking to expand your network, Relay connects
              you with trusted families in your community—no random drivers.
              With safety features such as GPS Tracking, Ride specific pins and
              Ai powered notifications, Relay is the app that parents trust.
            </p>
            <button>Visit our blog</button>
          </div>
        </section>
        <section className={styles.subSection}>
          <div className={styles.subContainer}>
            <h3>User Research</h3>
            <p>
              User research uncovered key challenges parents face in managing
              their children’s transportation. Three key insights emerged:
              Scheduling conflicts — 75% of parents struggle to arrange
              transportation due to conflicting schedules, and 67% report that
              transportation issues have disrupted their children’s
              participation in activities. Safety concerns —100% of parents
              agree that GPS tracking is essential, and 83% prefer private
              groups to organize carpools within trusted networks. Rideshare
              demand — 75% of parents struggle to arrange transportation due to
              conflicting schedules, and 67% report that transportation issues
              have disrupted their children’s participation in activities. These
              insights shaped a solution prioritizing safety, convenience, and
              trusted connections. Learn more from the User Findings Report.
            </p>
            <img src="https://placehold.co/600x400" alt="placeholder image" />
          </div>
          <div className={styles.subContainer}>
            <h3>User Persona</h3>
            <p>
              User research uncovered key challenges parents face in managing
              their children’s transportation. Three key insights emerged:
              Scheduling conflicts — 75% of parents struggle to arrange
              transportation due to conflicting schedules, and 67% report that
              transportation issues have disrupted their children’s
              participation in activities. Safety concerns —100% of parents
              agree that GPS tracking is essential, and 83% prefer private
              groups to organize carpools within trusted networks. Rideshare
              demand — 75% of parents struggle to arrange transportation due to
              conflicting schedules, and 67% report that transportation issues
              have disrupted their children’s participation in activities. These
              insights shaped a solution prioritizing safety, convenience, and
              trusted connections. Learn more from the User Findings Report.
            </p>
            <img src="https://placehold.co/600x400" alt="placeholder image" />
          </div>
        </section>
      </main>
    </>
  );
}

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
        <section className={styles.projectSection}>
          <img src="/relay-images/relay_landing.png" alt="relay app mockup" />
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
        <section className={styles.flexSection}>
          <div className={`${styles.leftBox} ${styles.bg}`}>
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
          </div>
          <div className={`${styles.rightBox} ${styles.bg}`}>
            <h3>Solution</h3>
            <p>
              Relay is an AI-powered ridesharing platform that connects parents
              within trusted communities, simplifying transportation with smart
              route matching, live GPS tracking, and real-time ride updates.
            </p>
          </div>
        </section>
        <section className={styles.subSection}>
          <div className={styles.subContainer}>
            <div className={styles.infoBox}>
              <h3>User Persona</h3>
              <p>Based on our research findings from interviews and surveys, we developed two user personas to represent our target audiences.</p>
              <figure>
                <figcaption>
                  <strong>Primary Persona - Joseph</strong>
                </figcaption>
                <p>
                  A full-time software engineer and father of a
                  10-year-old son, struggles to arrange reliable rides due to
                  his demanding schedule. He values a tech-driven ridesharing
                  solution with GPS tracking and reliable network.
                </p>
              </figure>
              <figure>
                <figcaption>
                  <strong>Secondary Persona - Sarah</strong>
                </figcaption>
                <p>
                  A part-time climate policy advisor, enjoys helping
                  her community by giving kids rides but finds it hard to
                  coordinate with busy parents. She seeks a platform that
                  simplifies scheduling, enhances communication, and builds
                  connection.
                </p>
              </figure>
            </div>
            <img className={styles.persona} src="/relay-images/primary_persona.png" alt="placeholder image" />
          </div>
        </section>
        <section className={styles.subSection}>
          <div className={styles.columnContainer}>
            <div className={styles.columnInfo}>
                <h3>App Workflow</h3>
                <p>
                In response to the needs of busy parent to schedule carpools for their kids. The design priority are: Home, Create carpool, Trips and Community pages. Tutorials, Landing page, Message and Setting pages are the secondary concerns.
                </p>
            </div>
            <img className={styles.workflowImg} src="/relay-images/temp_workflow.png" alt="placeholder image" />
          </div>
        </section>
        <section className={styles.flexSection}>
          <div className={styles.infoBox}>
            <h3>Design</h3>
            <p>
              The UI was designed to be simple and accessible, prioritizing
              quick access for busy parents.
            </p>
            <ul>
              <li>
                Navigation: A centralized 'New Ride' button in the nav bar
                ensures easy access to ride requests and offers.
              </li>
              <li>
                Buttons: Rounded shapes create a welcoming feel, with ample size
                and spacing for usability.
              </li>
              <li>Primary: Gradient with rounded edges for emphasis.</li>
              <li>
                Secondary: Solid color with rounded edges for clarity. Tertiary:
                Short, underlined text for multiple actions without clutter.
              </li>
              <li>
                Tertiary: Short, underlined text for multiple actions without
                clutter.
              </li>
              <li>
                Typography: Comfortaa, a rounded and modern typeface, enhances
                warmth, trust, and readability, aligning with the
                community-focused design.
              </li>
            </ul>
          </div>
            <img  className={styles.styleGuideImg} src="/relay-images/relay_styleguide.png" alt="placeholder image" />
        </section>
      </main>
    </>
  );
}

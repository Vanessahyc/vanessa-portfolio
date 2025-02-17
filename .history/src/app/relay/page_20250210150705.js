"use client";
import Header from "../../../components/Header";
import styles from "@/app/relay/Relay.module.css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Relay() {
  return (
    <>
      <Header/>
      <main>
        <section className={styles.projectSection}>
          <img src="/relay-images/relay_landing.png" alt="relay app mockup" />
          <div className={styles.projectInfo}>
            <h2>Relay</h2>
            <h3>App Design</h3>
            <h4>Overview</h4>
            <p>
              Relay is Canada's first ridesharing app designed to assist busy working parents in organizing safe and reliable transportation for their children. The platform connects parents within a trusted community to facilitate efficient and eco-friendly ridesharing. The project aimed to address scheduling challenges while ensuring security, convenience, and ease of use for parents.
            </p>
            <Link href="https://relay.arspera.com/">
              <button className={styles.btn}>
                Visit our blog
              </button>
            </Link>
          </div>
        </section>
        <div className={styles.mainContainer}>
        <section className={styles.flexSection}>
          <div className={`${styles.leftBox} ${styles.bg}`}>
            <h3>Problem</h3>
            <p>
              With 75% of Canadian families with children aged 6–12 having two
              working parents, struggle to balance work and their kids’ transportation needs due to limited reliable options.
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
              <p>
                Based on our research findings from interviews and surveys, we
                developed two user personas to represent our target audiences.
              </p>
              <div className={styles.personaBox}>
                <div className={styles.persona}>
                  <figcaption>
                    <strong>Primary Persona - Joseph</strong>
                  </figcaption>
                  {/* <p>
                    A full-time software engineer and father of a 10-year-old
                    son, struggles to arrange reliable rides due to his
                    demanding schedule. He values a tech-driven ridesharing
                    solution with GPS tracking and reliable network.
                  </p> */}
                  <img
                    className={styles.personaImg}
                    src="/relay-images/primary_persona.png"
                    alt="placeholder image"
                  />
                </div>
                <div className={styles.persona}>
                  <figcaption>
                    <strong>Secondary Persona - Sarah</strong>
                  </figcaption>
                  {/* <p>
                    A part-time climate policy advisor, enjoys helping her
                    community by giving kids rides but finds it hard to
                    coordinate with busy parents. She seeks a platform that
                    simplifies scheduling, enhances communication, and builds
                    connection.
                  </p> */}
                  <img
                    className={styles.personaImg}
                    src="/relay-images/secondary_persona.png"
                    alt="placeholder image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.subSection}>
          <div className={styles.columnContainer}>
            <div className={styles.columnInfo}>
              <h3>App Workflow</h3>
              <p>
                In response to the needs of busy parent to schedule carpools for
                their kids. The design priority are: Home, Create carpool, Trips
                and Community pages. Tutorials, Landing page, Message and
                Setting pages are the secondary concerns.
              </p>
            </div>
            {/* <img
              className={styles.workflowImg}
              src="/relay-images/workflow.png"
              alt="placeholder image"
            /> */}
            <iframe className={styles.figma} src="https://embed.figma.com/board/UQ8HVMw4achSHFZ8b8NcGr/Relay---App-Workflow?node-id=284-1439&embed-host=share" allowFullScreen></iframe>
          </div>
        </section>
        <section className={styles.subSection}>
          <div className={styles.columnContainer}>
            <div className={styles.columnInfo}>
              <h3>Wireframes</h3>
            </div>
            {/* <img
              className={styles.workflowImg}
              src="/relay-images/wireframes.png"
              alt="placeholder image"
            /> */}
            <iframe className={styles.figma} src="https://embed.figma.com/design/OPBMn5qhrbRMRWUSj1J58Q/Relay-Main-Screen?node-id=0-1&embed-host=share" allowFullScreen></iframe>
          </div>
        </section>
        <section className={styles.brandSection}>
          <div>
            <h3 className={styles["solution-box", "font-s"]}>Branding</h3>
            <p>
              Our logo incorporates the letter "R" from Relay, symbolizing
              connection while integrating eco-friendly elements like a leaf
              shape to represent a reduced carbon footprint. It also features
              design cues inspired by a radar and a side mirror, emphasizing
              safety and awareness in transportation.
            </p>
          </div>
          <img
            className={styles.styleGuideImg}
            src="/relay-images/relay_branding.png"
            alt="placeholder image"
          />
        </section>

        </div>
      </main>
    </>
  );
}

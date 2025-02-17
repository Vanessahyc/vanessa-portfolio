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
      <Header />
      <main className={styles["main-container"]}>
        <section className={styles["banner-section"]}>
          <img
            className={styles["banner-img"]}
            src="/relay-images/home_mockup@1.5x.png"
            alt="relay app homepage mockup"
          />
          <div className={styles["banner-info"]}>
            <div className={styles["banner-header"]}>
              <div className={styles["banner-title"]}>
                <h2>Relay Ride-Sharing</h2>
                <p>2024</p>
              </div>
              <p className={styles["banner-subtitle"]}>
                App Development Project | Case Study
              </p>
            </div>

            <div className={styles["banner-overview"]}>
              <h3>Overview</h3>
              <p>
                Relay is Canada's first ridesharing app designed to assist busy
                working parents in organizing safe and reliable transportation
                for their children. The platform connects parents within a
                trusted community to facilitate efficient and eco-friendly
                ridesharing. The project aimed to address scheduling challenges
                while ensuring security, convenience, and ease of use for
                parents.
              </p>
              <div className={styles["btn-group"]}>
                <Link
                  className={styles["cta-btn"]}
                  href="https://relay.arspera.com/"
                >
                  <img
                    src="/relay-images/btn_arrow.svg"
                    alt="arrow icon"
                    className={styles["icon24"]}
                  />
                  <span>View Blog</span>
                </Link>

                <Link
                  className={styles["cta-btn"]}
                  href="https://www.figma.com/design/OPBMn5qhrbRMRWUSj1J58Q/Relay-Main-Screen?node-id=0-1&t=b9rDVCiFZs6dfTC7-1"
                >
                  <img
                    src="/relay-images/btn_arrow.svg"
                    alt="arrow icon"
                    className={styles["icon24"]}
                  />
                  <span>View Prototype</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div className={styles["content-role"]}>
            <div className={styles["temp-img"]}></div>
            <div>
              <h4>My Role</h4>
              <p>UI/UX Designer</p>
            </div>
          </div>
          <div className={styles["content-box"]}>
            <h4>Content</h4>
            <div className={styles["content-list"]}>
              <ul>
                <li>User Research</li>
                <li>Problem | Solution</li>
                <li>User Persona</li>
              </ul>
              <ul>
                <li>App Workflow</li>
                <li>Wireframes</li>
                <li>Usability Test</li>
              </ul>
              <ul>
                <li>Branding</li>
                <li>Style Guides</li>
                <li>Marketing Collateral</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>User Research</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              User research uncovered key challenges parents face in managing
              their children’s transportation. Three key insights emerged:
              Scheduling conflicts — 75% of parents struggle to arrange
              transportation due to conflicting schedules, and 67% report that
              transportation issues have disrupted their children’s
              participation in activities. Safety concerns —100% of parents
              agree that GPS tracking is essential, and 83% prefer private
              groups to organize carpools within trusted networks. Rideshare
              demand — 75% of parents struggle to arrange transportation due to
              conflicting schedules, and 67% report that transportation issues
              have disrupted their children’s participation in activities. These
              insights shaped a solution prioritizing safety,
              convenience, and trusted connections.
            </p>
            <Link
              className={styles["cta-btn"]}
              href="https://drive.google.com/file/d/1AFnJPVDrIHCMcRFgdjcG65a-SkyHVtI9/view"
            >
              <img
                src="/relay-images/btn_arrow.svg"
                alt="arrow icon"
                className={styles["icon24"]}
              />
              <span>User Finding Report</span>
            </Link>
            <div className={styles["d-flex"]}>
              <div  className={styles["box50"]}>
                <div className={styles["temp-img"]}>
                  
                </div>
                <div className={styles["box-right"]}>
                  <h3>Problem</h3>
                  <p>
                    With 75% of Canadian families with children aged 6–12 having two
                    working parents, struggle to balance work and their kids’
                    transportation needs due to limited reliable options.
                  </p>
                </div>
              </div>
              <div className={styles["box50"]}>
                <h3>Solution</h3>
                <p>
                  Relay is an AI-powered ridesharing platform that connects
                  parents within trusted communities, simplifying transportation
                  with smart route matching, live GPS tracking, and real-time ride
                  updates.
                </p>
              </div>
            </div>
          </div>
        </section>


        <div className={styles.mainContainer}>
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
                  In response to the needs of busy parent to schedule carpools
                  for their kids. The design priority are: Home, Create carpool,
                  Trips and Community pages. Tutorials, Landing page, Message
                  and Setting pages are the secondary concerns.
                </p>
              </div>
              {/* <img
              className={styles.workflowImg}
              src="/relay-images/workflow.png"
              alt="placeholder image"
            /> */}
              <iframe
                className={styles.figma}
                src="https://embed.figma.com/board/UQ8HVMw4achSHFZ8b8NcGr/Relay---App-Workflow?node-id=284-1439&embed-host=share"
                allowFullScreen
              ></iframe>
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
              <iframe
                className={styles.figma}
                src="https://embed.figma.com/design/OPBMn5qhrbRMRWUSj1J58Q/Relay-Main-Screen?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <section className={styles.brandSection}>
            <div>
              <h3 className={styles[("solution-box", "font-s")]}>Branding</h3>
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

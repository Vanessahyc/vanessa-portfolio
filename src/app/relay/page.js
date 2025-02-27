"use client";
import { useState} from "react";
import Header from "../../../components/Header";
import styles from "@/app/relay/Relay.module.css";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/Footer";
import BackToTop from "../../../components/BackToTop"; 

export default function Relay() {
  const [modalImage, setModalImage] = useState(null);

  const buttonData = [
    {
      href: "https://relay.arspera.com/",
      text: "View Blog",
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
      <main className={styles["main-container"]}>
        <HeroSection
          imageSrc="/relay-images/relay_hero_image.webp"
          imageAlt="Relay Hero Image"
          width={1500}
          height={700}
          title="Relay Ride-Sharing"
          year="2024"
          subtitle="App Development Project | Case Study"
          overviewTitle="Overview"
          overviewText="Relay is Canada's first ridesharing app designed to assist busy working parents in organizing safe and reliable transportation for their children. The platform connects parents within a trusted community to facilitate efficient and eco-friendly ridesharing. The project aimed to address scheduling challenges while ensuring security, convenience, and ease of use for parents."
          buttons={buttonData}
        />

        <section className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3 className={styles["d-none"]}>Content</h3>
          </div>
          <div className={styles["content-section"]}>
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
                  <Link href="#user-research">
                    <li>User Research</li>
                  </Link>
                  <Link href="#user-persona">
                    <li>User Persona</li>
                  </Link>
                </ul>
                <ul>
                  <Link href="#branding">
                    <li>Branding</li>
                  </Link>
                  <Link href="#styleguide">
                    <li>Style Guide</li>
                  </Link>
                </ul>
                <ul>
                  <Link href="#app-workflow">
                    <li>App Workflow</li>
                  </Link>
                  <Link href="#wireframes">
                    <li>Wireframes</li>
                  </Link>
                </ul>
                <ul>
                  <Link href="#marketing-collateral">
                    <li>Marketing Collateral</li>
                  </Link>
                  <Link href="#video">
                    <li>Promotional Video</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="user-research" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>User Research</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              Many working parents struggle to coordinate their children’s
              transportation, often relying on last-minute solutions like asking
              friends or family for help. Our research found that 75% of parents
              face scheduling conflicts that make it difficult to arrange rides,
              and 67% say transportation issues have caused their children to
              miss activities. Safety is also a major concern, with all parents
              agreeing that GPS tracking is essential, and 83% preferring
              private groups to organize carpools with trusted people. Without a
              reliable system in place, many families are left with limited
              options, sometimes forcing children to wait, skip activities, or
              take public transit alone. Despite the growing need for a safe and
              convenient solution, no app in Canada currently provides an easy
              way for parents to organize carpools within a trusted community.
              These findings highlight the importance of creating a
              transportation solution that prioritizes security, reliability,
              and ease of use for families.
            </p>
            <Link
              className={styles["cta-btn"]}
              href="https://drive.google.com/file/d/1AFnJPVDrIHCMcRFgdjcG65a-SkyHVtI9/view"
              target="_blank"
            >
              <Image
                src="/relay-images/btn_arrow.svg"
                alt="arrow icon"
                className={styles["icon24"]}
                width={24}
                height={24}
              />
              <span>User Finding Report</span>
            </Link>
            <div className={styles["d-flex"]}>
              <div className={styles["box50-border"]}>
                <div className={styles["temp-img"]}></div>
                <div className={styles["box-right"]}>
                  <h4>Problem</h4>
                  <p>
                    With 75% of Canadian families with children aged 6–12 having
                    two working parents, struggle to balance work and their
                    kids’ transportation needs due to limited reliable options.
                  </p>
                </div>
              </div>
              <div className={styles["box50-border"]}>
                <div className={styles["temp-img"]}></div>
                <div className={styles["box-right"]}>
                  <h4>Solution</h4>
                  <p>
                    Relay is an AI-powered ridesharing platform that connects
                    parents within trusted communities, simplifying
                    transportation with smart route matching, live GPS tracking,
                    and real-time ride updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="user-persona" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>User Persona</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              Based on our research findings from interviews and surveys, we
              developed two user personas to represent our target audiences.
            </p>
            <div className={styles["d-flex"]}>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/relay-images/primary_persona.png"
                  alt="Primary persona"
                  width={2338}
                  height={1650}
                  onClick={() =>
                    openImg(
                      "/relay-images/primary_persona.png",
                      "Primary persona"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/relay-images/secondary_persona.png"
                  alt="Secondary persona"
                  width={2338}
                  height={1650}
                  onClick={() =>
                    openImg(
                      "/relay-images/secondary_persona.png",
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

        <section id="branding" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>Branding</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              Our logo incorporates the letter "R" from Relay, symbolizing
              connection while integrating eco-friendly elements like a leaf
              shape to represent a reduced carbon footprint. It also features
              design cues inspired by a radar and a side mirror, emphasizing
              safety and awareness in transportation.
            </p>
            <img
              className={styles.styleGuideImg}
              src="/relay-images/relay_branding.png"
              alt="placeholder image"
            />
          </div>
        </section>

        <section id="styleguide" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>Style Guide</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              The UI was designed to be simple and accessible, prioritizing
              quick access for busy parents. Navigation: A centralized 'New
              Ride' button in the nav bar ensures easy access to ride requests
              and offers. Buttons: Rounded shapes create a welcoming feel, with
              ample size and spacing for usability. Primary: Gradient with
              rounded edges for emphasis. Secondary: Solid color with rounded
              edges for clarity. Tertiary: Short, underlined text for multiple
              actions without clutter. Typography: Comfortaa, a rounded and
              modern typeface, enhances warmth, trust, and readability, aligning
              with the community-focused design.
            </p>
            <Image
              className={styles.styleGuideImg}
              src="/relay-images/relay_styleguide.png"
              alt="Relay Style Guide"
              width={1704}
              height={864}
            />
          </div>
        </section>

        <section id="app-workflow" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>App Workflow</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              In response to the needs of busy parent to schedule carpools for
              their kids. The design priority are: Home, Create carpool, Trips
              and Community pages. Tutorials, Landing page, Message and Setting
              pages are the secondary concerns.
            </p>
            <iframe
              className={styles.figma}
              src="https://embed.figma.com/board/UQ8HVMw4achSHFZ8b8NcGr/Relay---App-Workflow?node-id=284-1439&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="wireframes" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>Wireframes</h3>
          </div>
          <div className={styles["section-content"]}>
            <p>
              In response to the needs of busy parent to schedule carpools for
              their kids. The design priority are: Home, Create carpool, Trips
              and Community pages. Tutorials, Landing page, Message and Setting
              pages are the secondary concerns.
            </p>
            <iframe
              className={styles.figma}
              src="https://embed.figma.com/design/EEfmHSXnxCvv1vu5rzZjrH/Relay---HiFI-Wireframes?node-id=0-1&embed-host=share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section
          id="marketing-collateral"
          className={styles["section-container"]}
        >
          <div className={styles["section-title"]}>
            <h3>Marketing Collateral</h3>
          </div>
          <div className={styles["section-content"]}>
            <div className={styles["d-flex"]}>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/relay-images/bc_front_mockup.webp"
                  alt="Business Card Front"
                  width={2000}
                  height={1414}
                  onClick={() =>
                    openImg(
                      "/relay-images/bc_front_mockup.webp",
                      "Business Card Front View"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className={styles["width50"]}>
                <Image
                  className={styles.personaImg}
                  src="/relay-images/bc_angle_mockup.webp"
                  alt="Business Card Angle View"
                  width={2000}
                  height={1333}
                  onClick={() =>
                    openImg(
                      "/relay-images/bc_angle_mockup.webp",
                      "Business Card Angle View"
                    )
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <Image
              className={styles.styleGuideImg}
              src="/relay-images/brochure_mockup.webp"
              alt="Brochure Mockup"
              width={2000}
              height={1143}
              onClick={() =>
                openImg("/relay-images/brochure_mockup.webp", "Brochure Mockup")
              }
              style={{ cursor: "pointer" }}
            />
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

        <section id="video" className={styles["section-container"]}>
          <div className={styles["section-title"]}>
            <h3>Promotional Video</h3>
          </div>
          <div className={styles["section-content"]}>
            <iframe
              className={styles.figma}
              src="https://www.youtube.com/embed/iqs0Pss_1fc?si=EPphv7Y1iCxDHmS_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
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

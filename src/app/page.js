"use client";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import styles from "@/app/Home.module.css";
import Link from "next/link";
import Footer from "../../components/Footer";
import ProjectMedium from "../../components/ProjectMedium";
import ProjectLarge from "../../components/ProjectLarge";

export default function Home() {
  const [projectsData, setProjectsData] = useState([]);
  const [projects2024, setProjects2024] = useState([]);
  const [projects2023, setProjects2023] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedProjects = [...data].sort((a, b) => {
          if (b.year !== a.year) {
            return b.year - a.year;
          }
          return b.month - a.month;
        });

        setProjectsData(sortedProjects);
        setProjects2024(
          sortedProjects.filter((project) => project.year === 2024)
        );
        setProjects2023(
          sortedProjects.filter((project) => project.year === 2023)
        );
      })
      .catch((error) => console.error("Error loading projects", error));
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={styles["main-container"]}>
          <section className={styles["greeting-section"]}>
            <h1 className={styles["greeting-big"]}>Vanessa Huang</h1>
            <h3 className={styles["greeting-small"]}>
              UI/UX & Graphic Designer
            </h3>
            <Link className={styles["greeting-bottom"]} href="#projects">
              <img
                src="/relay-images/btn_arrow.svg"
                alt="arrow icon"
                className={styles["icon24"]}
              />
              <span>Scroll to view recent projects</span>
            </Link>
          </section>
          <section id="projects" className={`${styles["projects-section"]}`}>
            <h2 className={styles["section-title"]}>Recent Projects</h2>
            <div className={styles["projects-container"]}>
              {projects2024.length > 0 && (
                <ProjectLarge key={projects2024[0].id} {...projects2024[0]} />
              )}
              <div className={styles["project-small-section"]}>
                {projects2024.slice(1, 4).map((project) => (
                  <ProjectMedium key={project.id} {...project} />
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

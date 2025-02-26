"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Projects.module.css";
import ProjectSmall from "../../../components/ProjectSmall";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {

        const sortedProjects = data.sort((a, b) => {
          if (b.year !== a.year) return b.year - a.year;
          return b.month - a.month;
        });

        setProjects(sortedProjects);
        setFilteredProjects(sortedProjects); 
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);


  const handleFilterChange = (category) => {
    setSelectedFilter(category);

    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => {
          const projectCategories = Array.isArray(project.category)
            ? project.category
            : [project.category];
          return projectCategories.includes(category);
        })
      );
    }
  };

  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <section id="projects" className={styles["projects-section"]}>
          <h2 className={styles["section-title"]}>Recent Projects</h2>
          <div className={styles["filter-container"]}>
            {[
              "All",
              "Development",
              "UI/UX Design",
              "Graphic Design",
              "Motion Graphics",
            ].map((category) => (
              <button
                key={category}
                className={`${styles["filter-button"]} ${
                  selectedFilter === category ? styles["active"] : ""
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles["projects-container"]}>
            {filteredProjects.map((project) => (
              <ProjectSmall key={project.id} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

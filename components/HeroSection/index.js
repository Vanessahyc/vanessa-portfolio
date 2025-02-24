import Button from "../Button";
import styles from "./HeroSection.module.css";
import FilterButton from "../FilterButton";
import { useState } from "react";

export default function HeroSection({
  imageSrc,
  imageAlt,
  title,
  year,
  subtitle,
  overviewTitle,
  overviewText,
  buttons = [],
  filterOptions,
}) {

  return (
    <section className={styles["hero-section"]}>
      <img className={styles["hero-img"]} src={imageSrc} alt={imageAlt} />
      <div className={styles["hero-info"]}>
        <div className={styles["hero-header"]}>
          <div className={styles["hero-title"]}>
            <h2>{title}</h2>
            <p>{year}</p>
          </div>
          <p className={styles["hero-subtitle"]}>{subtitle}</p>
        </div>

        <div className={styles["hero-overview"]}>
          <h3>{overviewTitle}</h3>
          <p>{overviewText}</p>
          <div className={styles["btn-group"]}>
            {buttons.map((btn, index) => (
              <Button
                key={index}
                href={btn.href}
                text={btn.text}
                iconSrc={btn.iconSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

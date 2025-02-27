import Button from "../Button";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import FilterButton from "../FilterButton";
import { useState } from "react";

export default function HeroSection({
  imageSrc,
  imageAlt,
  width,
  height,
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
      <Image className={styles["hero-img"]} src={imageSrc} alt={imageAlt} width={width} height={height} />
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

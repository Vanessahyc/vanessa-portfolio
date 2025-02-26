import Link from "next/link";
import styles from "./ProjectLarge.module.css";
import Image from "next/image";

export default function ProjectLarge({
  href,
  imgSrc,
  altText,
  width,
  height,
  title,
  year,
  tags,
}) {
  return (
    <Link href={href} className={styles["project-link"]}>
      <div className={`${styles["project-box-big"]}`}>
        <Image src={imgSrc} alt={altText} width={width} height={height}/>{/* put the actual image size here (intrinsic size, maximum width 1500px(better) or 2000px), and style the size with css*/}
        <div className={styles["project-overlay"]}></div>
        <div className={styles["project-infobox"]}>
          <div className={styles["project-name"]}>
            <h3>{title}</h3>
            <p>{year}</p>
          </div>
          <div className={styles["project-tagbox-b"]}>
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

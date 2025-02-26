import Link from "next/link";
import styles from "./ProjectSmall.module.css";
import Image from "next/image";

export default function ProjectSmall({
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
      <div className={styles["project-box"]}>
        <Image src={imgSrc} alt={altText} width={width} height={height} />
        <div className={styles["project-infobox"]}>
          <div className={styles["project-name"]}>
            <h3>{title}</h3>
            <p>{year}</p>
          </div>
          <div className={styles["project-tagbox"]}>
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

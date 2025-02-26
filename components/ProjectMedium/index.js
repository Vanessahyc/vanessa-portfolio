import styles from "./ProjectMedium.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProjectMedium({
  href,
  title,
  year,
  tags,
  imgSrc,
  altText,
  width,
  height
}) {
  return (
    <Link href={href} className={styles["project-link"]}>
      <div className={styles["project-box-small"]}>
        <div className={styles["project-infobox-b"]}>
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
        <div className={styles["project-imgbox"]}>
          <Image src={imgSrc} alt={altText} width={width} height={height} className={styles["project-image"]} />
        </div>
      </div>
    </Link>
  );
}

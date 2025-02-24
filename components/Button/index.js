import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({ href, text, iconSrc }) {
  return (
    <Link className={styles["cta-btn"]} href={href} target="_blank">
      {iconSrc && (
        <img
          src={iconSrc}
          alt="icon"
          className={styles["icon24"]}
          width={24}
          height={24}
        />
      )}
      <span>{text}</span>
    </Link>
  );
}

import styles from "./FilterButton.module.css";

export default function FilterButton({options, setImage, setDieline, setColor, selectedImage}) {
  return (
    <div className={styles.flavorFilter}>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            setImage(option.image);
            setDieline(option.dieline);
            setColor(option.color);
          }}
          className={selectedImage === option.image ? styles.active : ""}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

import styles from "./Background.module.css";
import bgImage from "../../images/bg-desktop-light.jpg";

const Background = () => {
  return (
    <div className={styles.background}>
      <img
        className={styles["background-image"]}
        src={bgImage}
        alt="background"
      />
    </div>
  );
};

export default Background;

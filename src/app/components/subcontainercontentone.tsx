import React from "react";
import styles from "./styles/subcontainercontentone.module.css";
import PPImage from "./ppimage";

const SubContainerContentOne = () => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.imageWrapper}>
        <PPImage />
      </div>
      <div className={styles.textSection}>
        <h1>
          Hi I'm David Oh - I'm a Trader and Digital Builder in
          Chicago.
        </h1>
        <h2>
          Currently attending{" "}
          <span className={styles.highlight}>Depaul University</span>
        </h2>
        <p>
          With 8 years of experience as an options trader, I
          specialize in leveraging financial derivatives in
          information technology. Currently building tools that
          empower individuals to break barriers through technology.
        </p>
        <div className={styles.bubbles}>
          <div className={styles.bubble}></div>
          <div className={styles.bubble}></div>
        </div>
      </div>
    </div>
  );
};

export default SubContainerContentOne;

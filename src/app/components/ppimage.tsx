import React from "react";
import styles from "./styles/ppimage.module.css";
import Image from "next/image";

const PPImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/ppimage.svg"
        alt="DKO"
        width={169}
        height={169}
        className={styles.logo}
      />
    </div>
  );
};

export default PPImage;

// src/app/home/components/container.tsx

import React, { ReactNode } from "react";
import styles from "./styles/container.module.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

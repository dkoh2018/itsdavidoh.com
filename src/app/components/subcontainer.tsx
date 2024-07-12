import React, { ReactNode } from "react";
import styles from "../components/styles/subcontainer.module.css";

interface SubContainerProps {
  children: ReactNode;
}

const SubContainer: React.FC<SubContainerProps> = ({ children }) => {
  return <div className={styles.subContainer}>{children}</div>;
};

export default SubContainer;

import React, { ReactNode } from "react";
import { Container as RadixContainer } from "@radix-ui/themes";
import styles from "./styles/container.module.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <RadixContainer className={styles.container} size="4">
      {children}
    </RadixContainer>
  );
};

export default Container;

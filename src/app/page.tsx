import React from "react";
import styles from "./components/styles/homepage.module.css";
import Container from "./components/container";
import SubContainer from "./components/subcontainer";
import SubContainerContentOne from "./components/subcontainercontentone";
import SubContainerContentTwo from "./components/subcontainercontenttwo";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Container>
        <SubContainerContentOne />
        <SubContainerContentTwo />
      </Container>
    </div>
  );
};

export default HomePage;

import React from "react";
import styles from "./components/styles/homepage.module.css";
import Container from "./components/container";
import SubContainer from "./components/subcontainer";
import PPImage from "./components/ppimage";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Container>
        <SubContainer>
          <h2>Sub-Container 1</h2>
          <p>content goes here.</p>
        </SubContainer>
        <SubContainer>
          <h2>Sub-Container 2</h2>
          <p>content goes here.</p>
        </SubContainer>
        {/* <PPImage /> */}
        {/* Other content goes here */}
      </Container>
    </div>
  );
};

export default HomePage;

import React from "react";
import styles from "./components/styles/homepage.module.css";
import Container from "./components/container";
import SubContainer from "./components/subcontainer";
import SubContainerContentOne from "./components/subcontainercontentone";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Container>
        <SubContainer>
          <SubContainerContentOne />
        </SubContainer>
        {/* <SubContainer></SubContainer> */}
      </Container>
    </div>
  );
};

export default HomePage;

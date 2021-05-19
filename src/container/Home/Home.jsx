import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
    <section className={styles.home}>
      <img src="me-icon.svg" alt="tim starr" className={styles.icon}/>
    </section>
    </>
  );
};

export default Home;

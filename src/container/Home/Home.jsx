import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <article className={styles.homeContainer}>
          <div className={styles.image}></div>
          <section className={styles.title}>
            <h2>Hello!</h2>
            <h3>My name's Tim</h3>
            <h4>
              I'm a software engineer based in London with a background in
              design.
            </h4>
          </section>
        </article>
      </section>
    </>
  );
};

export default Home;

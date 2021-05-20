import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <>
    <div className={styles.break}></div>
      <header className={styles.header}>
        <article className={styles.text}>
          <h2>Projects</h2>
          <h3>Here are some things I've been working on recently.</h3>
        </article>
        <div className={styles.projectIcon}></div>
      </header>
      <main>
        <section>
          <h3 className={styles.project1}>Project One</h3>
        </section>
        <section>
          <h3 className={styles.project2}>Project Two</h3>
        </section>
      </main>
    </>
  );
};

export default Projects;

import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <div className={styles.break}></div>
      <main className={styles.about}>
        <section className={styles.text}>
          <h2>About</h2>
          <article className={styles.paragraph}>
            <p>
              I'm a London-based front-end developer and designer. I enjoy
              creating compelling front ends with elegant code. If you'd like to
              see what I'm working on lately, check out my{' '}
              <a href="#">projects</a> or my <a href="#">scribbles</a>.
            </p>
            <p>
              In my spare time I enjoy painting, sculpting and seeing anything
              art-related, as well as powerkiting, playing the jaws-harp and lifting the biggest
              weights I can.
            </p>
          </article>
        </section>
        <section className={styles.image}>
          <img src="profile-photo.png" alt="" />
          <p>Artist's rendering of the web developer.</p>
        </section>
      </main>
    </>
  );
};

export default About;

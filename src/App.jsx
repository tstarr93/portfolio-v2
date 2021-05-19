import React from 'react';
import './App.module.scss';
import Navbar from './component/Navbar';
import Home from './container/Home';
import Projects from './container/Projects';
import About from './container/About';
import Art from './container/Art';
import Contact from './container/Contact';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Art></Art>
      <Contact></Contact>
    </div>
  );
}

export default App;

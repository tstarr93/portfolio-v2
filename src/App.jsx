import React from 'react';
import './App.module.scss';
import Navbar from './component/Navbar';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Navbar></Navbar>
    </div>
  );
}

export default App;

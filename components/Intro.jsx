import React from 'react'

import styles from '../styles/Intro.module.css';
import Link from 'next/link';

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.gradientBox}>
      <div className={styles.introCard}>
        <img className={styles.logo} src="/img/logo.png" alt="" />
        <h1 className={styles.title}>Web.Dev</h1>
      </div>
      </div>
    </div>
  )
}

export default Intro
import React from 'react'

import styles from '../styles/Project.module.css';

function Project({img, imgTwo}) {
  return (
    <div className={styles.p}>
      <div className={styles.pBrowser}>
        <div className={`${styles.pCircle} ${styles.r}`}></div>
        <div className={`${styles.pCircle} ${styles.y}`}></div>
        <div className={`${styles.pCircle} ${styles.g}`}></div>
      </div>
      <span>
        <img src={img} alt="" className={styles.pImg}/>
        <img src={imgTwo} alt="" className={styles.pImgTwo}/>
      </span>
    </div>
  )
}

export default Project
import React from 'react'

import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.aboutImg} src="/img/me.png" alt="" />
        <div className={styles.imgShadow}></div>
      </div>
      <div className={styles.card}>
      <div className={styles.gradientBox}>
        <div className={styles.cardInfo}>
        <h1 className={styles.hover}>ABOUT ME:</h1>
          <h1 className={styles.title}>ABOUT ME:</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam, tempora rerum sunt dolorum excepturi natus quidem, ut veniam aliquam qui, aliquid dolores deserunt eaque? Debitis labore ut corporis dolores, quam temporibus quisquam architecto maiores expedita culpa nobis suscipit.</p>
          <br/>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam, tempora rerum sunt dolorum excepturi natus quidem, ut veniam aliquam qui, aliquid dolores deserunt eaque? Debitis labore ut corporis dolores, quam temporibus quisquam architecto maiores expedita culpa nobis suscipit.</p>
          <br/>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam iusto quos officia consequuntur pariatur!</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'

import styles from '../styles/Info.module.css';
import Link from 'next/link';

function Info() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.gradientBox}>
      <div className={styles.infoBoxes}>
        <div className={styles.box}>
          <img className={styles.infoLogo} src="/img/webdev.png" alt=""/>
           <h1 className={styles.infoTitle}>Front End Development</h1>
           <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus ut soluta culpa rerum. Eaque recusandae dicta sit deserunt saepe quod ipsum atque laborum culpa doloremque eveniet excepturi, ex rerum.</p>
           <Link href="/skills/frontenddevelopment"><button className={styles.btn}>See More</button></Link>
        </div>
        <div className={styles.box}>
          <img className={styles.infoLogo} src="/img/design.png" alt="" />
           <h1 className={styles.infoTitle}>UI/UX Design</h1>
           <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus ut soluta culpa rerum. Eaque recusandae dicta sit deserunt saepe quod ipsum atque laborum culpa doloremque eveniet excepturi, ex rerum.</p>
           <Link href="/skills/design"><button className={styles.btn}>See More</button></Link>
        </div>
        <div className={styles.box}>
          <img className={styles.infoLogo} src="/img/back.png" alt="" />
           <h1 className={styles.infoTitle}>Back End Development</h1>
           <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus ut soluta culpa rerum. Eaque recusandae dicta sit deserunt saepe quod ipsum atque laborum culpa doloremque eveniet excepturi, ex rerum.</p>
           <Link href="/skills/backenddevelopment"><button className={styles.btn}>See More</button></Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Info
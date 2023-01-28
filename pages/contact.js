import React from 'react'

import styles from '../styles/Contact.module.css';
import Link from 'next/link';

function contact() {
  return (
    <div className={styles.container}>

       <div className={styles.navbar}>
        <div className={styles.left}>
        <Link href="/"><img className={styles.logo} src="/img/logo.png" alt="" /></Link>
        <Link href="/"><h1 className={styles.navTitle}>Web.Dev</h1></Link>
        </div>
        <div className={styles.right}>
          <ul className={styles.navList}>
          <Link href="/skills/frontenddevelopment"><li className={styles.navItem}>Front End Development</li></Link>
          <Link href="/skills/design"><li className={styles.navItem}>UI/UX Design</li></Link>
          <Link href="/skills/backenddevelopment"><li className={styles.navItem}>Back End Development</li></Link>
          <Link href="/contact"><li className={styles.navItem}>Contact</li></Link>
          </ul>
        </div>
      </div>

      <div className={styles.gradientBox}>
      <div className={styles.contactBox}>
        <h1 className={styles.title}>CONTACT ME:</h1>
        <div className={styles.contactForm}>
          <input className={styles.contactInput} type="text" placeholder='Name' />
          <input className={styles.contactInput} type="text" placeholder='Email' />
          <input className={styles.contactInput} type="text" placeholder='Subject' />
          <textarea className={styles.contactMessage} placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
          <button className={styles.contactBtn}>Submit</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default contact
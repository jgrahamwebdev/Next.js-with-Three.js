import React from 'react'

import styles from '../styles/Footer.module.css';

import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { FaGithub} from 'react-icons/fa';

import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.cardL}>
      <Link href="/"><img className={styles.logo} src="/img/logo.png" alt="" /></Link>
        <h1 className={styles.title}>Web.Dev</h1>
      </div>
      <div className={styles.cardC}>
        <div className={styles.cardItem}>
          1234 WebDev St. Somewhere, U.S.
        </div>
        <div className={styles.cardItem}>
          contact@web.dev.com
          <br/> 
          888-888-8888
        </div>   
        <Link href="/contact"><button className={styles.btn}>Contact Me</button></Link>    
      </div>
      <div className={styles.cardR}>
        <div className={styles.cardItem}>
          Follow Me:
        </div> 
        <div className={styles.cardIcons}>
            <FaTwitter size={30} className={styles.icons}/>
            <AiFillInstagram size={30} className={styles.icons}/>
            <FaGithub size={30} className={styles.icons}/>
          </div>
        <div className={styles.cardItem}>
          © 2022 Web.Dev Interactive
          <br/>
          All Rights Reserved
        </div> 
      </div>
    </div>
  )
}

export default Footer
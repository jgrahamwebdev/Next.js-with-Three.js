import React from 'react'

import styles from '../../styles/Skills.module.css';

import Link from 'next/link';

import { data } from '../../data'
import { projects } from '../../data';

import Project from '../../components/Project';

function Skill ({skill}) {
  return (
    <div className={styles.container}>

      <div className={styles.navbar}>
        <div className={styles.left}>
        <Link href="/"><img className={styles.logo} src="/img/logo.png" alt="" /></Link>
        <Link href="/"><h1 className={styles.title}>Web.Dev</h1></Link>
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

      <div className={styles.mainBox}>
        <div className={styles.introBox}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>{skill.title}</h1>
            <p className={styles.introInfo}>{skill.info}</p>
            <Link href="/contact"><button className={styles.contactBtn}>Contact Me</button></Link>
          </div>
        </div>
        <div className={styles.projectsBox}>
          {skill.images.map(function (item) {
            return <Project key={item.id} img={item.img} imgTwo={item.imgTwo} title={item.title}/>
          })}
        </div>
      </div>

    </div>
  )
}

export const getStaticPaths = async () => {
  const skills = data;
  const paths = skills.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const skill = data.filter((item) => item.name === name)[0];
  return {
    props: { skill },
  }
}

export default Skill
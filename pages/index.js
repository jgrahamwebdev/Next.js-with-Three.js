import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Info from '../components/Info.jsx';
import Intro from '../components/Intro.jsx';
import ThreeComp from '../components/ThreeComp.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Portfolio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThreeComp />
      <Intro />
      <Info />
      
    </div>
  )
}

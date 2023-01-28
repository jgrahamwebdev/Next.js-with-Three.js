import React from 'react'

import styles from '../styles/Works.module.css';

function Works() {
  return (
    <div className={styles.container}>
      <div className={styles.progressBars}>
      <div className={styles.gradientBox}>
        <div className={styles.barsContainer}>
          <h1 className={styles.skills}>SKILLS:</h1>
          <div className={styles.progress}>
            <div className={styles.html}>HTML</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.css}>CSS</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.js}>JavaScript</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.react}>React</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.next}>NextJS</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.three}>Three.JS</div>
          </div>
          <div className={styles.progress}>
            <div className={styles.python}>Python</div>
          </div>
        </div>
      </div>
      </div>

      <div className={styles.works}>
      <div className={styles.slidergradientBox}>
          <div className={styles.introSlider}>
            <h1 className={styles.sliderTitle}>I'm A:</h1>
            <div className={styles.wrapper}>
              <div className={styles.sliderItems}>Web Developer</div>
              <div className={styles.sliderItems}>UI/UX Designer</div>
              <div className={styles.sliderItems}>Artist</div>
              <div className={styles.sliderItems}>Writer</div>
              <div className={styles.sliderItems}>" "</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
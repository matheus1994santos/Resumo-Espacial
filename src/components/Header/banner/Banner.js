import React from 'react'
import styles from './Banner.module.css'
import NightSky from '../../../images/NightSky.jpeg'

const Banner = () => {
  return (
      <div className={styles.Banner}>
        <a>&#10094;</a>
        <div className={styles.mySlides}>
          <div>1 / 3</div>
          <img src={NightSky}/>
          <div>Nome</div>
        </div>
        <a>&#10095;</a>
      </div>
  )
}

export default Banner;
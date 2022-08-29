import React from 'react'
import styles from './Banner.module.css'
import NightSky from '../../../images/Banner/NightSky.jpeg'
import Hubble from '../../../images/Banner/Hubble.jpg'
import HubbleJupiter from '../../../images/Banner/HubbleJupiter.jpg'

const Banner = () => {
  return (
      <div className={styles.Banner}>
        <div className={styles.mySlides}>
          <div>1 / 3</div>
          <img src={NightSky}/>
          <div>Nome</div>
        </div>

        <div className={styles.mySlides}>
          <div>2 / 3</div>
          <img src={Hubble}/>
          <div>Nome</div>
        </div>

        <div className={styles.mySlides}>
          <div>3 / 3</div>
          <img src={HubbleJupiter}/>
          <div>Nome</div>
        </div>

        <a className={styles.Ant}>&#10094;</a>
        <a className={styles.Next}>&#10095;</a>
      </div>
  )
}

export default Banner;
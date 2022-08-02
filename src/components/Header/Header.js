import React from 'react'
import styles from './Header.module.css'
import LogoSite from '../../images/LogoSite.png'

const Header = () => {
  return (
    <section>
      <header>
        <img src={LogoSite}/>
        <nav>
          <a>Home |</a>
          <a>
            <label>Telescopios Espaciais |</label>
            {/* <select>
              <option value="hubble">Hubble</option>
              <option value="james webb">James Webb</option>
              <option value="chandra">Chandra</option>
              <option value="Kepler">Kepler</option>
              <option value="Spitzer">Spitzer</option>
              <option value="Fermi">Fermi</option>
            </select> */}
          </a>

          <a>R.E News |</a>
          <a>Sobre |</a>
        </nav>
      </header>
      <div className={styles.Banner}>
        <div className={styles.ima}>
            <h1>As belas imagens do espaço</h1>
        </div>
      </div>
    </section>
  )
}

export default Header;

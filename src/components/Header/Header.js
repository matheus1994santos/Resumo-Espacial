import React from 'react'
import Banner from './banner/Banner';
import styles from './Header.module.css'
import Marca from './Logo/Marca';
import Menu from './menu/Menu';

const Header = () => {
  return (
    <section>
      <header>
        <Marca/>
        <Menu/>
      </header>
      <Banner/>
    </section>
  )
}

export default Header;

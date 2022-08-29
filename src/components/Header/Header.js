import React from 'react'
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
    </section>
  )
}

export default Header;

import React from 'react'
import styles from './Header.module.css'
import Marca from './Logo/Marca';
import Menu from './menu/Menu';
import { HeaderContainer } from './StylesHeader';

const Header = () => {
  return (
    <section className={styles.Container}>
      <HeaderContainer>
        <Marca/>
        <Menu/>
      </HeaderContainer>
    </section>
  )
}

export default Header;

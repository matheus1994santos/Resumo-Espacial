import React from 'react'
import Banner from './Banner/Banner';
import Marca from './Logo/Marca';
import Menu from './menu/Menu';
import { HeaderBanner, HeaderContainer } from './StylesHeader';

const Header = () => {
  return (
    <HeaderBanner>
      <HeaderContainer>
        <Marca/>
        <Menu/>
      </HeaderContainer>
      <Banner/>
    </HeaderBanner>
  )
}

export default Header;

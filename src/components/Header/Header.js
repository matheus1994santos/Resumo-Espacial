import React from 'react'
import Marca from './Logo/Marca';
import Menu from './menu/Menu';
import { HeaderBanner, HeaderContainer } from './StylesHeader';
import Banner from './Banner';

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

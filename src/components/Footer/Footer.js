import React from 'react'
import { FooterContainer } from './FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h1>Resumo Espacial</h1>
      </div>
      <section>
        <div>
          <h1>R.E Comunicação e Audio Visual</h1>
        </div>
        <div>
          <ul>
            <li><a>Twitter</a></li>
            <li><a>Instagram</a></li>
            <li><a>Facebook</a></li>
          </ul>
        </div>
      </section>
    </FooterContainer>
  )
}

export default Footer

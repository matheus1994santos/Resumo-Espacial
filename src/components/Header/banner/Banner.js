import React from 'react'
import { BanneR } from './BannerStyled'

function OBserv(event){
  console.log(event)
}

const Banner = () => {
  return (
    <BanneR onClick={OBserv}>
        <h1>BEM VINDO AO RESUMO ESPACIAL</h1>
        <span>
            Seu portal de noticias sobre conteudos referentes ao espaço. Aqui mostramos as manchetes dos pricipais portais de noticias do mundo. Aprecie-e sem moderação!
        </span>
    </BanneR>
  )
}

export default Banner

import React from 'react'
import styles from './Main.module.css';
import CrewNews from '../../images/00.main/CrewNews.jpg'

const Main = () => {
  return (
    <main>
      <section className={styles.sec1}>
        <h2>NASA convida mídia para o lançamento da A missão SpaceX Crew-5</h2>
        <div>
          <img src={CrewNews}/>
          <h5>
          A missão SpaceX Crew-5 da NASA levará dois astronautas da NASA, Nicole Mann e
          o piloto Josh Cassada, juntamente com o astronauta koichi Wakata, da JAXA
          (Agência de Exploração Aeroespacial do Japão), e a cosmonauta da Roscosmos,
          Anna Kikina. Na foto da esquerda estão Anna Kikina, Josh Cassada, Nicole Mann
          e Koichi Wakata.
          <i> Créditos: NASA</i>
          </h5>
        </div>

        <article>
          <p>A acreditação da mídia está agora aberta para o lançamento da quinta
             espaçonave SpaceX Dragon e do foguete Falcon 9 que levarão astronautas 
             à Estação Espacial Internacional para uma missão de expedição científica
            como parte do Programa de Tripulação Comercial da NASA.</p>
          <p>A data de lançamento mais antiga da missão é quinta-feira, 29 de
             setembro, do Complexo de Lançamento 39A no Centro Espacial Kennedy da 
             NASA, na Flórida.</p>
          <p>
          O lançamento da Crew-5 levará dois astronautas da NASA, Nicole Mann e o 
          piloto Josh Cassada, juntamente com o astronauta Koichi Wakata e a
          cosmonauta da Roscosmos Anna Kikina, que servirão como especialistas da 
          missão. Este é o primeiro voo espacial para Mann, Cassada e Kikina. É a 
          quinta viagem para Wakata.
          </p>
          <p>
          Após um período de entrega da tripulação, astronautas da missão SpaceX Crew-4 da NASA estão programados para retornar à Terra em outubro a bordo de sua SpaceX Dragon Freedom.
          </p>
        </article>
      </section>
      <h1>Main</h1>
    </main>
  )
}

export default Main;

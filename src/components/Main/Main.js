import React from 'react'
import styles from './Main.module.css';
import CrewNews from '../../images/00.main/CrewNews.jpg'
import Perseverance from '../../images/00.main/Perseverance.jpg'
import China from '../../images/00.main/China.jpg'

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

      <section className={styles.sec1}>
          <h2>O Rover Perseverance Agora Consegue Escolher Seus Próprios Alvos</h2>
          <div>
            <img src={Perseverance}/>
            <h5>
              <b>Fonte: </b>
              <a>https://spacetoday.com.br/o-rover-perseverance-agora-consegue-escolher-seus-proprios-alvos/</a>
            </h5>
          </div> 
        <article>
          <p>Para fazer isso, o Perseverance usa um pacote de software que permite a
            seleção de alvos e que é chamado de Autonomous Exploration for Gathering
            Increased Science, ou AEGIS, e foi desenvolvido pelo pessoal do JPL para
           missões de rovers anteriores e que foi adaptado para a SuperCam do Perseverance. O AEGIS precisa de imagens feitas pela NavCam, então, ele
           analisa as imagens para encontrar rochas e priorizá-las para análises, isso 
          é feito com base no tamanho, brilho e em outras características. Depois disso
           se inicia uma sequência de processos onde a SuperCam atira seu laser para 
           determinar a composição química de um ou de dois alvos mais prioritários 
           selecionados com base nas imagens da NavCam.

            </p>
          <p>
            O teste do AEGIS começou em março onde foram usadas imagens coletadas pelo SuperCam 
            Remote Micro-Imager, ou RMI, mas nesses testes iniciais não foi atirado o laser para as
            análises químicas. Depois de pesquisar por alguns parâmetros em testes sucessivos, o 
            laser foi usado pelo AEGIS com sucesso, na última semana. As imagens de acompanhamento 
            mostram que as rochas foram selecionadas e atiradas. As imagens com o RMI foram então 
            feitas depois do laser ter sido usado para comprovar onde o laser acertou as rochas. 
            Com esse teste bem sucedido, a equipe do Perseverance pretende agora usar o AEGIS com 
            mais frequência, para agilizar todo o processo realizado pelo rover em Marte, 
            adquirindo dados de forma mais veloz e tomando decisões mais ágeis. Vamos
              acompanhando, esse verdadeiro robô que temos hoje em Marte.

          </p>
        </article>
      </section>

      <section className={styles.sec1}>
          <h2>China Lança Trio de Satélites Espiões Pela Terceira Vez Em 2021</h2>
          <div>
            <img src={China}/>
            <h5>
              <b>Fonte: </b>
              <a>https://spacetoday.com.br/china-lanca-trio-de-satelites-espioes-pela-terceira-vez-em-2021/</a>
            </h5>
          </div> 
        <article>
          <p>Três satélites militares da China foram lançados na sexta-feira, dia 12 de março de 2021 (hora de Brasília), a bordo de um foguete Long March 4C, se juntando a outros seis que a China já tinha lançado anteriormente.

Os três satélites da série Yaogan 31 foram lançados 23:19, hora de Brasília, da sexta-feira, dia 12 de março de 2021 desde a base de lançamento de Jiuquan no deserto de Gobi no noroeste da China, de acordo com o que foi repassado pela China Aerospace Science and Technology Corp. ou CASC a principal empresa estatal que presta serviço para o programa espacial chinês.

O foguete Long March 4C de 3 estágios movido a combustível líquido colocou o trio de satélites Yaogan 31 em uma órbita de aproximadamente 1100 km de altura com uma inclinação de 63.4 graus com relação ao equador. As circunstâncias de lançamento foram bem parecidas com as anteriores do Long March 4C, um que foi lançado em 29 de janeiro de 2021 e outro em 24 de fevereiro de 2021, que também levaram 3 satélites Yaogan 31 cada um para o espaço.

            </p>
          <p>
          O nome Yaogan é usado para os satélites militares chineses. Os satélites Yaogan carregam um radar, um sistema óptico de alta resolução, e instrumentos de sinais de inteligência, e coletam informações que são posteriormente analisadas pelas agências militares e de inteligência da China.

Especialistas no programa espacial chinês acreditam que os satélites Yaogan 31 são desenhados para detectar sinais de rádio para ajudar a localizar forças navais estrangeiras. Antes dos 3 lançamentos dos satélites Yaogan 31 desse ano, a China tinha lançado um trio similar desses satélites em abril de 2018, também a bordo do foguete Long March 4C.

Antes de 2018, a China lançou cinco foguetes Long March 4C com trios de satélites Yaogan na mesma órbita de 1100 km de altura usada pelos satélites Yaogan 31. Esses lançamentos podem ter entregue na órbita uma geração anterior de satélites de vigilância marinha.

O lançamento do dia 12 de março de 2021, do foguete Long March 4C foi a sétima tentativa de lançamento orbital da China em 2021. Seis missões foram realizadas com sucesso.
c

          </p>
        </article>
      </section>
      <h1>Main</h1>
    </main>
  )
}

export default Main;

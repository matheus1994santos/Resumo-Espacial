import React from 'react'
import { Article, MainA } from './StyleMain';


const Main = () => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
   fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
   .then(promisse => promisse.json())
   .then(json => setDados(json))

  },[dados]
  
  )
  
  return (
      <MainA>
        { dados && dados.map( ({id, imageUrl, newsSite, publisheAt, summary, title, updateAt, url }) => (
          // <section className={(id) % 2 != 0 ? styles.container0 : styles.container1}>
            <Article  key={id}>
              <div className={ `cont ${newsSite}` } >
                <h1>{title}</h1>
                <p className='Report'>Reportagem do <span><b>{newsSite}</b></span></p>
                <div>
                  <p>{'-'} {summary} <a href={url}> {'>> Continue a leitura.'}</a></p>
                  <img src={imageUrl} />
                </div>
              </div>

            </Article>
          // </section>
        ) ) }
      </MainA>
  )
}

export default Main;

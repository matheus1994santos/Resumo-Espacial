import React from 'react'
import styles from './Main.module.css';
import { Article, MainA } from './StyleMain';

const Main = () => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
   fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
   .then(promisse => promisse.json())
   .then(json => setDados(json))

  },[dados])

  React.useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles`)
    .then(promisse => promisse.json())
    .then(json => console.log(json))
 
   },[])

  return (
    <MainA>
      { dados && dados.map( ({id, imageUrl, newsSite, publisheAt, summary, title, updateAt, url }) => (
        // <section className={(id) % 2 != 0 ? styles.container0 : styles.container1}>
          <Article  key={id}>
            <div className={`cont`} >
              <h1>{title}</h1>
              <p className='Report'>Reportagem do <span><b>{newsSite}</b></span></p>
              <div>
                <p>{'-'} {summary}</p>
                <img src={imageUrl} />
              </div>
              <p className="LinkP">
                Link da fonte: <a href={url}>{url}</a>
              </p>
            </div>

          </Article>
        // </section>
      ) ) }
    </MainA>
  )
}

export default Main;

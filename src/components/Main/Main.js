import React from 'react'
import styles from './Main.module.css';

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
    <main>
      { dados && dados.map( ({id, imageUrl, newsSite, publisheAt, summary, title, updateAt, url }) => (
        <section key={id} className={id % 2 != 0 ? styles.container0 : styles.container1}>
          <div className={styles.cont}>
            <h1>{title}</h1>
            <p>Reportagem do <span><b>{newsSite}</b></span></p>
            <p>{updateAt}</p>
            <div>
              <p>{'-'} {summary}</p>
              <img src={imageUrl} />
            </div>
          </div>
          <p>
            Link da fonte: <a href={url}>{url}</a>
          </p>
        </section>
      ) ) }
    </main>
  )
}

export default Main;

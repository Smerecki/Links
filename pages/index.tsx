import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>João Vitor A. Smerecki.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
      </Head>
          

      <main className={styles.main}>
      
            
  
      <div className={styles.image}/>
        <h1 className={styles.title}>
          João Vitor A. Smerecki.
        </h1>

        <p className={styles.description}>
          Motion Designer e estudante de Engenharia de Software.
        </p>

        <div className={styles.grid}>
          <a 
            href="https://vimeo.com/user172868514" 
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Portifólio <i className="icon-suitcase"></i></h2>
            <p>Veja alguns dos meus trabalhos como Motion Designer.</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-alves-smerecki-81a56b237/" 
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Linkedin <i className="icon-linkedin-sign"></i></h2>
            <p> conheça um pouco mais sobre mim.</p>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5565999315855&text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Meu Whatsapp <i className="icon-comment"></i></h2>
            <p>Entre em contato comigo.  </p>
          </a>

          <a
            href="https://github.com/Smerecki"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Meu GitHub <i className='icon-github'></i> </h2>
            <p>
              Me acompanhe no GitHub.
            </p>
          </a>
        </div>
        
      </main>

    </div>
  )
}

export default Home

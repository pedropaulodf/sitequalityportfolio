import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Quality Systems</title>
        <meta name="description" content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias." />
      </Head>

      <main>
        <section>
          <h1>Quality Automação de Clubes</h1>
          <p>Desde 1990 oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias.</p>
          <button type="button">Clique e saiba mais</button>
        </section>
      </main>

      <footer>
        <p>
          © 2021 Quality Systems LTDA • Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Quality Systems</title>
        <meta name="description" content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias." />
      </Head>

      <main className={styles.container}>
        <section className={styles.wrapperBanner}>
          <div className={styles.banner}>
            <div className={styles.info}>
              <h1>Quality Automação de Clubes</h1>
              <p><strong>Desde 1990</strong> oferecendo <strong>soluções inovadoras</strong> para gestão e automação de <strong>clubes, agremiações, sindicatos</strong> e <strong>academias</strong>.</p>
              <button type="button">Clique e saiba mais</button>
            </div>
            <div className={styles.sliderWrapper}>
              <div className={styles.bgSlider}></div>
              <div className={styles.slider}>

                <div className={styles.btnPrevNext}>
                  <FiArrowLeft />
                </div>
                <div className={styles.btnPrevNext}>
                  <FiArrowRight />
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className={styles.wrapperCustomers}>
          <div className={styles.content}>
            <h3>Clientes que contam a Quality!</h3>
          </div>
        </section>
      </main>
      
      <Footer/>
    </>
  )
}

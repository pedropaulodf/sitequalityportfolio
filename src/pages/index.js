import Head from 'next/head'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight, FiSliders, FiThumbsUp } from 'react-icons/fi';
import { BoxIconLeft } from '../components/BoxIconLeft';
import { BoxNumber } from '../components/BoxNumber';

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
        {/* BANNER */}
        <section className={styles.wrapperBanner}>
          <div className={styles.banner}>
            <div className={styles.info}>
              <h1>Quality Automação de Clubes</h1>
              <p><strong>Desde 1990</strong> oferecendo <strong>soluções inovadoras</strong> para gestão e automação de <strong>clubes, agremiações, sindicatos</strong> e <strong>academias</strong>.</p>
              <button type="button">Clique e saiba mais</button>
            </div>
            <div className={styles.sliderWrapper}>
              <div className={styles.bgSliderCircle}></div>
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

        {/* CLIENTES QUALITY */}
        <section className={styles.wrapperCustomers}>
          <div className={styles.content}>
            <h3>Clientes que contam a Quality!</h3>
            <div className={styles.sliderWrapper}>
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
        
        {/* POR QUE A QUALITY */}
        <section className={styles.wrapperWhyQuality}>
          <div className={styles.content}>
            <h3>Por quê o Quality Automação de Clubes?</h3>
            <div className={styles.gridBoxes}>
              <BoxNumber topBox="1" title="Flexível" content="A sua flexibilidade, resultado de um alto nível de parametrização, permite que ele se adapte às características de cada clube, atendendo a todas as exigências do estatuto."/>
              <BoxNumber topBox="2" title="Completo" content="Em todos os seus relatórios, o sistema oferece diversas opções para seleção de registros, seqüências de ordenações e formas de totalização."/>
              <BoxNumber topBox="3" title="Confiável" content="Anos de experiência de atuação no mercado inseridos em um software robusto e confiável usado por mais de 200 clientes únicos espalhados pelo país."/>
            </div>
          </div>
        </section>
        
        {/* DIFERENCIAIS */}
        <section className={styles.wrapperDiferentials}>
          <div className={styles.content}>
            <h3>Diferenciais</h3>
            <div className={styles.gridBoxes}>
              <BoxIconLeft icon={<FiThumbsUp />} title="Suporte garantido!" content="Conte com nosso suporte com anos de experiência e treinamento completo para utilização do sistema."/>
              <BoxIconLeft icon={<FiSliders />} title="Alta Parametrização" content="O sistema foi desenvolvido para se adaptar à todas as necessidades, com um alto nível de parametrização, atendendo a todas as exigências."/>
            </div>
          </div>
        </section>

      </main>
      
      <Footer/>
    </>
  )
}

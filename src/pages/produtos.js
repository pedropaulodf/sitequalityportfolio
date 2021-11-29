import Head from "next/head";
import { useState } from "react";
import { Footer } from "../components/Footer";

import styles from "../styles/Produtos.module.scss";

export default function Produtos(){

  const [boxShow, setBoxShow] = useState(false);

  return (
    <>
      <Head>
        <title>Produtos | Quality Systems</title>
        <meta
          name="description"
          content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias."
        />
      </Head>
      
      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Produtos</h2>
          <div className={styles.content}>
            <button type="button" onClick={() => setBoxShow(true)}>mostrar</button>
            <button type="button" onClick={() => setBoxShow(false)}>ocultar</button>

            {boxShow ? <div className={`${styles.animated } ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>produto</div> : null}
          </div>
        </section>
      </main>
      
      <Footer/>
    </>
  )
}
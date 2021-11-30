import Head from "next/head";
import { useState } from "react";
import { Footer } from "../components/Footer";

import styles from "../styles/Produtos.module.scss";

export default function Produtos() {
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
            {boxShow ? (
              <div
                className={`${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}
              >
                produto
              </div>
            ) : null}

            <div className={styles.menuCategories}>
              <div className={styles.boxTopTitles}>
                <h3>Filtros</h3>
                <p>Selecione uma categoria</p>
              </div>
              <ul>
                <li className={styles.categoryActive}>Cartões & Suprimentos</li>
                <li>Catracas</li>
                <li>Extensões</li>
                <li>Impressoras</li>
                <li>Laminadoras</li>
                <li>Leitores Biométricos</li>
                <li>Leitores de Códigos de Barras</li>
              </ul>
            </div>

            <div className={styles.boxProducts}>
              <div className={styles.boxProduct}>
                <div className={styles.boxProductName}>
                  <p>LaserNex</p>
                </div>
                <img src="/images/products/lasernex.png" alt="LaserNex" />
              </div>

              <div className={styles.boxProduct}>
                <div className={styles.boxProductName}>
                  <p>Polaseal</p>
                </div>
                <img src="/images/products/polaseal.png" alt="Polaseal" />
              </div>

              <div className={styles.boxProduct}>
                <div className={styles.boxProductName}>
                  <p>Cartões PVC</p>
                </div>
                <img src="/images/products/cartoes-pvc.png" alt="Cartões PVC" />
              </div>

              <div className={styles.boxProduct}>
                <div className={styles.boxProductName}>
                  <p>Ribbons para Impressoras PVC</p>
                </div>
                <img
                  src="/images/products/ribbons-impressora-pvc.png"
                  alt="Ribbons para Impressoras PVC"
                />
              </div>

              <div className={styles.boxProduct}>
                <div className={styles.boxProductName}>
                  <p>Kit de Limpeza Impressoras PVC</p>
                </div>
                <img
                  src="/images/products/kit-limpeza-impressora-pvc.png"
                  alt="Kit de Limpeza Impressoras PVC"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

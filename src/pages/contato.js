import Head from "next/head";
import { Footer } from "../components/Footer";

import styles from "../styles/Contato.module.scss";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato | Quality Systems</title>
        <meta
          name="description"
          content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias."
        />
      </Head>

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Contato</h2>
          <div className={styles.content}>
            <div className={styles.form}>
              <h3>Enviar mensagem</h3>
            </div>
            <div className={styles.contact}>
              <h3>Endereço</h3>
              <p>
                <strong>Quality Systems LTDA</strong>
              </p>
              <p>Rua Carajás, 604, Lídice</p>
              <p>Uberlândia - MG</p>
              <p>CEP: 38400-076</p>
              <p>Telefone: <a href="tel:3432924700">(34) 3292-4700</a></p>
              <br/>
              <h3>Horário Comercial</h3>
              <p><strong>Segunda à Sexta:</strong> 08:00 à 18:00</p>
              <p><strong>Sábado:</strong> 08:00 ao 12:00</p>
              <p><strong>Domingo:</strong> Fechado</p>
            </div>
          </div>

          <div className={styles.map}>
            <img src="/images/map-placeholder.png" alt="Mapa temporário" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

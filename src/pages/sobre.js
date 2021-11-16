import Head from "next/head";
import { Footer } from "../components/Footer";

import styles from "../styles/Sobre.module.scss";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Quality Systems</title>
        <meta
          name="description"
          content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias."
        />
      </Head>

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Sobre</h2>
          <div className={styles.content}>
            <div className={styles.about}>
              <h3>A Quality Systems</h3>
              <p>
                Desde a sua fundação em 1990, a Quality Systems vem oferecendo
                soluções inovadoras para gestão e automação de clubes,
                agremiações, sindicatos e academias.
              </p>
              <p>
                A empresa possui mais de 200 clientes nos estados de São Paulo,
                Minas Gerais, Goiás, Paraná e Distrito Federal.
              </p>
              <p>
                Seu diferencial é a parceria criada com cada cliente, oferecendo
                soluções customizadas com atendimento personalizado.
              </p>
            </div>
            <div className={styles.focus}>
              <h3>Nosso Foco:</h3>
              <h4>Suporte & Qualidade</h4>
              <p>
                A Quality Systems tem como compromisso o suporte total de todos
                os produtos e serviços oferecidos.
              </p>
              <p>
                Nossa equipe é treinada e preparada para atender qualquer
                solicitação de suporte.
              </p>
            </div>
          </div>
          <div className={styles.technologies}>
            <h3>Tecnologias</h3>
            <div className={styles.techLogoBox}>
              <img src="/images/techLogos/logo-csharp.png" alt="Logo C#" />
              <img
                src="/images/techLogos/logo-sqlserver.png"
                alt="Logo SQL Server"
              />
              <img src="/images/techLogos/logo-aspnet.png" alt="Logo ASP.net" />
              <img src="/images/techLogos/logo-dotnet.png" alt="Logo Dot.net" />
              <img src="/images/techLogos/logo-react.png" alt="Logo ReactJS" />
              <img
                src="/images/techLogos/logo-rn.png"
                alt="Logo React Native"
              />
              <img src="/images/techLogos/logo-html.png" alt="Logo HTML" />
              <img src="/images/techLogos/logo-css.png" alt="Logo CSS" />
              <img src="/images/techLogos/logo-php.png" alt="Logo PHP" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

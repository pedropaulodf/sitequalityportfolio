import Head from "next/head";
import { BoxIconLeft } from "../components/BoxIconLeft";
import { BoxNumber } from "../components/BoxNumber";
import { AccordionRA } from "../components/AccordionRA";
import { Footer } from "../components/Footer";
import { ButtonOutlined } from "../components/ButtonOutlined";
import { ButtonGreen } from "../components/ButtonGreen";
import { Carousel } from "../components/Carousel";
import SlideShow from "../components/SlideShow";
import {
  FiSliders,
  FiThumbsUp,
} from "react-icons/fi";

import styles from "../styles/Index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Quality Systems</title>
        <meta
          name="description"
          content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias."
        />
      </Head>

      <main className={styles.container}>
        {/* BANNER */}
        <section className={styles.wrapperBanner}>
          <div className={styles.banner}>
            <div className={styles.info}>
              <h1>Quality Automação de Clubes</h1>
              <p>
                <strong>Desde 1990</strong> oferecendo <strong>soluções inovadoras</strong><br/>
                para gestão e automação de <strong>clubes,<br/>agremiações, sindicatos</strong> e <strong>academias</strong><br/>para mais de <strong>200 clientes</strong><br/>
                em todo o Brasil.
              </p>
              <a href="#saibamais">
                <button type="button">Clique e saiba mais</button>
              </a>
            </div>
            <div className={styles.sliderWrapper}>
              <div className={styles.bgSliderCircle}></div>
              <div className={styles.slider}>
                <SlideShow/>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTES QUALITY */}
        <section className={styles.wrapperCustomers}>
          <div className={styles.content}>
            <h3>Clientes que confiam na Quality!</h3>
            <div className={styles.sliderWrapper}>
              <div className={styles.slider}>
                <Carousel interval={2500}/>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUE A QUALITY */}
        <section className={styles.wrapperWhyQuality} id="saibamais">
          <div className={styles.content}>
            <h3>Por quê o Quality Automação de Clubes?</h3>
            <div className={styles.gridBoxes}>
              <BoxNumber
                topBox="1"
                title="Flexível"
                content="A sua flexibilidade, resultado de um alto nível de parametrização, permite que ele se adapte às características de cada clube, atendendo a todas as exigências do estatuto."
              />
              <BoxNumber
                topBox="2"
                title="Completo"
                content="Em todos os seus relatórios, o sistema oferece diversas opções para seleção de registros, seqüências de ordenações e formas de totalização."
              />
              <BoxNumber
                topBox="3"
                title="Confiável"
                content="Anos de experiência de atuação no mercado inseridos em um software robusto e confiável usado por mais de 200 clientes únicos espalhados pelo país."
              />
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className={styles.wrapperDiferentials}>
          <div className={styles.content}>
            <h3>Diferenciais</h3>
            <div className={styles.gridBoxes}>
              <BoxIconLeft
                icon={<FiThumbsUp />}
                title="Suporte garantido!"
                content="Conte com nosso suporte com anos de experiência e treinamento completo para utilização do sistema."
              />
              <BoxIconLeft
                icon={<FiSliders />}
                title="Alta Parametrização"
                content="O sistema foi desenvolvido para se adaptar à todas as necessidades, com um alto nível de parametrização, atendendo a todas as exigências."
              />
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section className={styles.wrapperResources}>
          <div className={styles.content}>
            <h3>Conheça os Recursos</h3>
            <div className={styles.grid}>
              <div className={styles.imgResources}>
                <img src="/images/recursos.webp" alt="Recursos" />
                <ButtonOutlined href="/produtos" text="Veja todos os produtos" />
              </div>
              <div>
                <AccordionRA />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Botão */}
      <div className={styles.btnGreenContact}>
        <ButtonGreen href="/contato" text="Clique aqui para agendar uma conversa"/>
      </div>

      <Footer />
    </>
  );
}

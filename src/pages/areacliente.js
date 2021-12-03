import Head from "next/head";
import { Footer } from "../components/Footer";
import { FiLogOut } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import styles from "../styles/AreaCliente.module.scss";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Área do Cliente | Quality Systems</title>
        <meta
          name="description"
          content="Desde a sua fundação em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias."
        />
      </Head>

      <div className={styles.bgTitle}>
        <p>Área do Cliente</p>
      </div>

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.topSection}>
              <h3>
                Bem-vindo, <span>Caiçaras Country Clube</span>!
              </h3>
              <button type="button">
                <div>
                  <FiLogOut />
                </div>
                Sair
              </button>
            </div>

            <div className={styles.tabContainer}>
              <Tabs className={styles.tabs}>
                <TabList className={styles.tabList}>
                  <Tab
                    className={styles.tab}
                    selectedClassName={styles.tabSelected}
                  >
                    Minha Licença
                  </Tab>
                  <Tab
                    className={styles.tab}
                    selectedClassName={styles.tabSelected}
                  >
                    Meus Arquivos
                  </Tab>
                  <Tab
                    className={styles.tab}
                    selectedClassName={styles.tabSelected}
                  >
                    Meus Dados
                  </Tab>
                </TabList>

                <TabPanel className={styles.tabPanel}>
                  <div className={styles.boxTabContainer}>
                    <div className={styles.tabContent}>
                      <div className={styles.boxInputButtonCopy}>
                        <label>Sua chave de licença:</label>
                        <div>
                          <textarea>AAAA-BBBB-CCCC-DDDD-X</textarea>
                          <button type="button">Copiar Chave</button>
                        </div>
                      </div>
                      <div className={styles.boxInput}>
                        <label>Data de Vencimento da Chave:</label>
                        <div>
                          <input type="text" value="03/12/2021" />
                          <div className={styles.expirationMessage}>A chave expira em 53 dias</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel className={styles.tabPanel}>
                  <div className={styles.boxTabContainer}>Any content 2</div>
                </TabPanel>

                <TabPanel className={styles.tabPanel}>
                  <div className={styles.boxTabContainer}>
                    <div className={styles.tabContent}>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>Razão Social:</label>
                        <div>
                          <textarea>Caiçaras Country Clube</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>Endereço:</label>
                        <div>
                          <textarea>R. Major Gote, 1199</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>Bairro:</label>
                        <div>
                          <textarea>Alto Caiçaras</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>Cidade - UF:</label>
                        <div>
                          <textarea>Patos De Minas - MG</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>CEP:</label>
                        <div>
                          <textarea>38702-054</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>Telefone:</label>
                        <div>
                          <textarea>(34) 3818-7400</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                      <div className={styles.boxInputButtonCopyTabData}>
                        <label>E-mail de contato:</label>
                        <div>
                          <textarea>financeirocaicaras@clubecaicaras.com.br</textarea>
                          <button type="button">Copiar</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

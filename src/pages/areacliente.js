import Head from "next/head";
import { Footer } from "../components/Footer";
import { FiLogOut } from "react-icons/fi";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ToastContainer } from "react-toastify";

import { copyText } from "../utils/utils";
import styles from "../styles/AreaCliente.module.scss";
import { differenceInCalendarDays, format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

// Objeto com os dados do cliente
const CLIENT_DATA = {
  nome: "Caiçaras Country Clube",
  licenca: {
    chave: "AAAA-BBBB-CCCC-DDDD-X",
    dataVencimentoChave: "2022-02-15T00:00:00",
  },
  arquivos: [],
  clienteDados: [
    { label: "Razão Social", value: "Caiçaras Country Clube" },
    { label: "Endereço", value: "R. Major Gote, 1199" },
    { label: "Bairro", value: "Alto Caiçaras" },
    { label: "Cidade - UF", value: "Patos de Minas - MG" },
    { label: "CEP", value: "38702-054" },
    { label: "Telefone", value: "(34) 3818-7400" },
    {
      label: "E-mail de contato",
      value: "financeirocaicaras@clubecaicaras.com.br",
    },
  ],
};

export default function Sobre() {
  const [diasRestantesValidadeChave, setDiasRestantesValidadeChave] =
    useState(0);

  useEffect(() => {
    // Seta os dias restantes da validade da chave
    setDiasRestantesValidadeChave(
      differenceInCalendarDays(
        parseISO(CLIENT_DATA?.licenca?.dataVencimentoChave),
        new Date()
      )
    );
  }, []);

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
                Bem-vindo, <span>{CLIENT_DATA?.nome}</span>!
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
                          <textarea
                            value={CLIENT_DATA?.licenca?.chave}
                            readOnly
                          ></textarea>
                          <button
                            type="button"
                            onClick={() =>
                              copyText(CLIENT_DATA?.licenca?.chave)
                            }
                          >
                            Copiar Chave
                          </button>
                        </div>
                      </div>
                      <div className={styles.boxInput}>
                        <label>Data de Vencimento da Chave:</label>
                        <div>
                          <input
                            type="text"
                            value={format(
                              parseISO(
                                CLIENT_DATA?.licenca?.dataVencimentoChave
                              ),
                              "dd/MM/yyyy"
                            )}
                            readOnly
                          />
                          <div
                            className={`${
                              diasRestantesValidadeChave <= 10
                                ? styles.expirationMessageRed
                                : styles.expirationMessage
                            }`}
                          >
                            {diasRestantesValidadeChave > 0
                              ? `A chave expira em ${diasRestantesValidadeChave} dias!`
                              : diasRestantesValidadeChave === 0
                              ? `A chave expira hoje!`
                              : `A chave expirou a ${
                                  diasRestantesValidadeChave * -1
                                } dias!`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>





                <TabPanel className={styles.tabPanel}>
                  <div className={styles.boxTabContainer}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th scope="col" style={{width: "40%"}}>Nome do Arquivo</th>
                          <th scope="col">Tamanho</th>
                          <th scope="col">Tipo de Arquivo</th>
                          <th scope="col">Última Modificação</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Nome do arquivo">Mysql-connector-odbc-5.1.5-win32</td>
                          <td data-label="Tamanho">4.1 MB</td>
                          <td data-label="Tipo de Arquivo">.msi</td>
                          <td data-label="Última Modificação">04/01/2016 20:43</td>
                          <td data-label=""><button>baixar</button></td>
                        </tr>
                        <tr>
                          <td data-label="Nome do arquivo">FS USB Driver Ver4015 Setup</td>
                          <td data-label="Tamanho">198.0 KB</td>
                          <td data-label="Tipo de Arquivo">.msi</td>
                          <td data-label="Última Modificação">04/01/2016 20:43</td>
                          <td data-label=""><button>baixar</button></td>
                        </tr>
                        <tr>
                          <td data-label="Nome do arquivo">Ethernet Discoverer</td>
                          <td data-label="Tamanho">4.1 MB</td>
                          <td data-label="Tipo de Arquivo">.msi</td>
                          <td data-label="Última Modificação">04/01/2016 20:43</td>
                          <td data-label=""><button>baixar</button></td>
                        </tr>
                        <tr>
                          <td data-label="Nome do arquivo">Hamachi</td>
                          <td data-label="Tamanho">4.1 MB</td>
                          <td data-label="Tipo de Arquivo">.msi</td>
                          <td data-label="Última Modificação">04/01/2016 20:43</td>
                          <td data-label=""><button>baixar</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPanel>




                <TabPanel className={styles.tabPanel}>
                  <div className={styles.boxTabContainer}>
                    <div className={styles.tabContent}>
                      {CLIENT_DATA.clienteDados.map((dado, index) => (
                        <div
                          key={index}
                          className={styles.boxInputButtonCopyTabData}
                        >
                          <label>{dado.label}:</label>
                          <div>
                            <textarea value={dado.value} readOnly></textarea>
                            <button
                              type="button"
                              onClick={() => copyText(dado.value)}
                            >
                              Copiar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer />
    </>
  );
}

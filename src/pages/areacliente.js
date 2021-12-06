import Head from "next/head";
import { Footer } from "../components/Footer";
import { FiLogOut } from "react-icons/fi";
import { differenceInCalendarDays, format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { ButtonDownload } from "../components/ButtonDownload";
import { useRouter } from "next/router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { copyText } from "../utils/utils";
import styles from "../styles/AreaCliente.module.scss";

// Arquivo .json com todas os icones dos tipos de arquivos informados
import fileIcons from "../utils/fileIcons.json";

// Objeto com os dados do cliente
const CLIENT_DATA = {
  nome: "Caiçaras Country Clube",
  licenca: {
    chave: "AAAA-BBBB-CCCC-DDDD-X",
    dataVencimentoChave: "2022-02-15T00:00:00",
  },
  arquivos: [
    {
      nome: "Mysql-connector-odbc-5.1.5-win32",
      tamanho: "4.1 MB",
      tipo: ".msi",
      ultimaModificacao: "04/01/2016 20:43",
      linkDownload: "#",
    },
    {
      nome: "FS USB Driver Ver4015 Setup",
      tamanho: "198.0 KB",
      tipo: ".zip",
      ultimaModificacao: "05/02/2016 12:25",
      linkDownload: "#",
    },
    {
      nome: "Ethernet Discoverer",
      tamanho: "9.0 MB",
      tipo: ".exe",
      ultimaModificacao: "10/03/2016 06:35",
      linkDownload: "#",
    },
    {
      nome: "Hamachi",
      tamanho: "4.1 MB",
      tipo: ".msi",
      ultimaModificacao: "12/06/2016 11:56",
      linkDownload: "#",
    },
    {
      nome: "GESTAO",
      tamanho: "54.6 MB",
      tipo: ".rar",
      ultimaModificacao: "12/07/2017 08:02",
      linkDownload: "#",
    },
    {
      nome: "Atualizacao Quality v50",
      tamanho: "54.6 MB",
      tipo: ".exe",
      ultimaModificacao: "25/10/2021 18:19",
      linkDownload: "#",
    },
    {
      nome: "Atualizacao Quality v50",
      tamanho: "54.6 MB",
      tipo: ".ai",
      ultimaModificacao: "25/10/2021 18:19",
      linkDownload: "#",
    },
  ],
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

  const router = useRouter();

  const [diasRestantesValidadeChave, setDiasRestantesValidadeChave] =
    useState(0);
  const [clientData, setClientData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Seta os dias restantes da validade da chave
    setDiasRestantesValidadeChave(
      differenceInCalendarDays(
        parseISO(CLIENT_DATA?.licenca?.dataVencimentoChave),
        new Date()
      )
    );

    // Adiciona o caminho do icone do tipo de arquivo
    const objArquivosComIconeTipoArquivo = CLIENT_DATA.arquivos.map(
      (arquivo) => {
        return {
          ...arquivo,
          iconPath: fileIcons.find((file) => file.fileType === arquivo.tipo)?.iconPath,
        };
      }
    );

    // Monta o novo objeto com o iconPath
    const NEW_CLIENT_DATA = {
      ...CLIENT_DATA,
      arquivos: objArquivosComIconeTipoArquivo,
    };

    // Seta o objeto com os dados do cliente
    setClientData(NEW_CLIENT_DATA);

    // Retira o loading depois de carregado os dados
    setLoading(false);
  }, []);

  const handleClickButtonExit = () => {
    router.push('/');
  }

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

      {loading ? (
        <p className={styles.loading}>Carregando dados...</p>
      ) : (
        <main className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.topSection}>
                <h3>
                  Bem-vindo, <span>{clientData?.nome}</span>!
                </h3>
                <button type="button" onClick={() => handleClickButtonExit()}>
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
                              defaultValue={clientData?.licenca?.chave}
                            ></textarea>
                            <button
                              type="button"
                              onClick={() =>
                                copyText(clientData?.licenca?.chave)
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
                                  clientData?.licenca?.dataVencimentoChave
                                ),
                                "dd/MM/yyyy"
                              )}
                              disabled
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
                            <th scope="col" style={{ width: "50px" }}></th>
                            <th scope="col" style={{ width: "40%" }}>
                              Nome do Arquivo
                            </th>
                            <th scope="col">Tamanho</th>
                            <th scope="col">Tipo de Arquivo</th>
                            <th scope="col">Última Modificação</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {clientData.arquivos.map((arquivo, index) => (
                            <tr key={index}>
                              <td data-label="">
                                <img src={arquivo.iconPath} />
                              </td>
                              <td data-label="Nome do arquivo:">
                                {arquivo.nome}
                              </td>
                              <td data-label="Tamanho:">{arquivo.tamanho}</td>
                              <td data-label="Tipo de Arquivo:">
                                {arquivo.tipo}
                              </td>
                              <td data-label="Última Modificação:">
                                {arquivo.ultimaModificacao}
                              </td>
                              <td data-label="">
                                <ButtonDownload
                                  href={arquivo.linkDownload}
                                  text="Baixar"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabPanel>

                  <TabPanel className={styles.tabPanel}>
                    <div className={styles.boxTabContainer}>
                      <div className={styles.tabContent}>
                        {clientData.clienteDados.map((dado, index) => (
                          <div
                            key={index}
                            className={styles.boxInputButtonCopyTabData}
                          >
                            <label>{dado.label}:</label>
                            <div>
                              <textarea
                                defaultValue={dado.value}
                                disabled
                              ></textarea>
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
      )}

      <Footer />
    </>
  );
}

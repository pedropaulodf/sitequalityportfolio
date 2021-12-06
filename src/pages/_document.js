import Document, { Head, Html, Main, NextScript } from "next/document";

// O _document RODA APENAS UMA VEZ AO CARREGAR O PROJETO
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta
            name="description"
            content="Desde a sua fundação, em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias. A empresa possui mais de 200 clientes nos estados de São Paulo, Minas Gerais, Goiás, Paraná e Distrito Federal."
          />
          <meta charset="utf-8" />
          <meta name="robots" content="index" />
          <meta
            name="keywords"
            content="sistema, gestao, clubes, academias, automacao, web, quality, systems, desenvolvimento, agremiacoes"
          /> 
          <meta name="author" content="pedropaulo.dev" />
          <meta property="og:type" content="page" />
          <meta property="og:url" content="http://www.qualitysys.com.br/" />
          <meta property="og:title" content="Quality Systems" />
          <meta
            property="og:image"
            content="https://quality-site.vercel.app/images/metaogimage.jpg"
          /> 
          <meta
            property="og:description"
            content="Desde a sua fundação, em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias. A empresa possui mais de 200 clientes nos estados de São Paulo, Minas Gerais, Goiás, Paraná e Distrito Federal."
          />
          <meta property="article:author" content="Quality Systems" />
          <meta
            name="twitter:description"
            content="Desde a sua fundação, em 1990, a Quality Systems vem oferecendo soluções inovadoras para gestão e automação de clubes, agremiações, sindicatos e academias. A empresa possui mais de 200 clientes nos estados de São Paulo, Minas Gerais, Goiás, Paraná e Distrito Federal."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import { Header } from "../components/Header";
import "../styles/globals.scss";

// o _app RODA TODA VEZ QUE ALGUÉM CLICA NUMA ROTA
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.bgLogo}>
        <Link href="/">
          <a className={styles.navLink}>
            <img src="/images/logoWhite.webp" alt="Logo Quality Systems" />
          </a>
        </Link>
      </div>
      <div className={styles.bgRights}>
        <p>
          © Quality Systems LTDA • {new Date().getFullYear()} • Todos os direitos
          reservados <br/> 
          <Link href="/novo/privacidade.html">
            <a> Política de privacidade </a>
          </Link>
          • 
          <Link href="https://pedropaulo.dev">
            <a> Criado por: pedropaulo.dev</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

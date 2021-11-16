import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.bgLogo}>
        <Link href="/">
          <a className={styles.navLink}>
            <img src="/images/logoWhite.png" alt="Logo Quality Systems" />
          </a>
        </Link>
      </div>
      <div className={styles.bgRights}>
        <p>© {new Date().getFullYear()} Quality Systems LTDA • Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

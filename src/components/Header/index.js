import Link from 'next/link';
import { FiUser } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img src="/images/logo.png" alt="Logo Quality Systems" />
        <nav>
          <Link href="/" ><a className={styles.navLink}>Início</a></Link>
          <Link href="/sobre" ><a className={styles.navLink}>Sobre a Quality</a></Link>
          <Link href="/produtos" ><a className={styles.navLink}>Produtos</a></Link>
          <Link href="/contato" ><a className={styles.navLink}>Contato</a></Link>
        </nav>
        {/* <SignInButton/> */}
        <button type="button">
          <FiUser color="#FFFFFF" className={styles.userIcon} />
          Área do Cliente
        </button>
      </div>
    </header>
  );
}

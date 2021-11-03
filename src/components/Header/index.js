import Link from 'next/link';
import { FiUser } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img src="/images/logo.png" alt="Logo Quality Systems" />
        <nav>
          <Link href="/" ><a className={styles.active}>Início</a></Link>
          <Link href="/sobre" ><a>Sobre a Quality</a></Link>
          <Link href="/produtos" ><a>Produtos</a></Link>
          <Link href="/contato" ><a>Contato</a></Link>
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

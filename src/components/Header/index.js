import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonModalClientArea from '../ButtonModalClientArea';

import styles from "./styles.module.scss";

export function Header() {
  
  const router = useRouter();

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img src="/images/logo.png" alt="Logo Quality Systems" />
        <nav>
          <Link href="/" ><a className={router.pathname === '/' ? styles.active : ''}>Início</a></Link>
          <Link href="/sobre" ><a className={router.pathname === '/sobre' ? styles.active : ''}>Sobre a Quality</a></Link>
          <Link href="/produtos" ><a className={router.pathname === '/produtos' ? styles.active : ''}>Produtos</a></Link>
          <Link href="/contato" ><a className={router.pathname === '/contato' ? styles.active : ''}>Contato</a></Link>
        </nav>
        <ButtonModalClientArea/>
      </div>
    </header>
  );
}

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiUser } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Header() {
  
  const [menuSelecionado, setMenuSelecionado] = useState({
    inicio: true,
    sobre: false,
    produtos: false,
    contato: false,
  });

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setMenuSelecionado({...menuSelecionado, inicio: true});
        break;
    
      case '/sobre':
        setMenuSelecionado({...menuSelecionado, sobre: true});
        break;
    
      case '/produtos':
        setMenuSelecionado({...menuSelecionado, produtos: true});
        break;
    
      case '/contato':
        setMenuSelecionado({...menuSelecionado, contato: true});
        break;
    
      default:
        setMenuSelecionado({...menuSelecionado, inicio: true});
        break;
    }
  },[])

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <img src="/images/logo.png" alt="Logo Quality Systems" />
        <nav>
          <Link href="/" ><a className={menuSelecionado.inicio && styles.active}>Início</a></Link>
          <Link href="/sobre" ><a className={menuSelecionado.sobre && styles.active}>Sobre a Quality</a></Link>
          <Link href="/produtos" ><a className={menuSelecionado.produtos && styles.active}>Produtos</a></Link>
          <Link href="/contato" ><a className={menuSelecionado.contato && styles.active}>Contato</a></Link>
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

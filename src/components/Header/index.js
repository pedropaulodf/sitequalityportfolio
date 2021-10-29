import { FiUser } from 'react-icons/fi';
import styles from './styles.module.scss';

export function Header(){

  return (
    
    <header className={styles.container}>
      <div>
        <img src="/images/logo.png" alt="Logo Quality Systems" />
        <nav>
          <a href="">Início</a>
          <a href="">Sobre a Quality</a>
          <a href="">Contato</a>
        </nav>
        {/* <SignInButton/> */}
      </div>
      <button type="button">
      <FiUser color="#FFFFFF" className={styles.userIcon}/>
      Área do Cliente
      </button>
    </header>
  )
}
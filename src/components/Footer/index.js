import styles from './styles.module.scss'

export function Footer(){

  return (
    <footer className={styles.container}>
      <div className={styles.bgLogo}>
        <img src="/images/logoWhite.png" alt="Logo Quality Systems" />
      </div>
      <div className={styles.bgRights}>
        <p>
          © 2021 Quality Systems LTDA • Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
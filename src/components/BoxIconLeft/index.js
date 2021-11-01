import styles from './styles.module.scss'

export function BoxIconLeft({icon, title, content}){

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  )
}
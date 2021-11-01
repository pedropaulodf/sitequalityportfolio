import styles from './styles.module.scss'

export function BoxNumber({topBox, title, content}){

  return (
    <div className={styles.container}>
      <p>{topBox}</p>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}
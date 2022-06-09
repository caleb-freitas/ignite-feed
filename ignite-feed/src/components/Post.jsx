import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/caleb-freitas.png" />
          <div className={styles.authorInfo}>
            <strong>Caleb Freitas</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time
          title='09 de junho de 2022 às 3:16pm' dateTime='2022-06-09'>Posted 1h ago
        </time>
      </header>
      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href='#'>jane.design/doctorcare</a></p>
          <p>
            <a href='#'>#novoprojeto </a>{'  '}
            <a href='#'>#nlw </a>{'  '}
            <a href='#'>#rocketseat </a>
          </p>
        </p>
      </div>
    </article>
  )
}

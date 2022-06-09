import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/caleb-freitas.png"></img>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caleb Freitas</strong>
              <time
                title='09 de junho de 2022 às 3:16pm' dateTime='2022-06-09'>Posted 1h ago
              </time>
            </div>
            <button title="delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Comment content</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
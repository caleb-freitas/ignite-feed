import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from "date-fns"

export function Post(props) {
  const { author, content, publishedAt } = props
  const publishedDateFormatted = format(publishedAt, "LLL d 'at' h:mm aaa")
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted} dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        <p>
          {content.map(line => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>
            }
            if (line.type === "link") {
              return <p><a href='#'>{line.content}</a></p>
            }
          })}
          <p>
            <a href='#'>#novoprojeto </a>{'  '}
            <a href='#'>#nlw </a>{'  '}
            <a href='#'>#rocketseat </a>
          </p>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Leave your feedback!</strong>
        <textarea placeholder='Leave your comment'></textarea>
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

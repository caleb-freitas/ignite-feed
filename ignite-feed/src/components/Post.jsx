import { useState } from 'react'
import { format, formatDistanceToNow } from "date-fns"

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
  const [comments, setComments] = useState(["Post muito massa"])

  const [newCommentText, setNewCommentText] = useState('')

  const { author, content, publishedAt } = props

  const publishedDateFormatted = format(publishedAt, "LLL d 'at' h:mm aaa")

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

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
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback!</strong>
        <textarea name='comment' placeholder='Leave your comment' onChange={handleNewCommentChange} value={newCommentText}></textarea>
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}

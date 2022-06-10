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
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewInvalidComment() {
    event.target.setCustomValidity('Required field')
  }

  const whenCommentIsEmpty = newCommentText.length === 0

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
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          }
          if (line.type === "link") {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback!</strong>
        <textarea
          name='comment'
          placeholder='Leave your comment'
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewInvalidComment}
          required
        >
        </textarea>
        <footer>
          <button type='submit' disabled={whenCommentIsEmpty}>Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}

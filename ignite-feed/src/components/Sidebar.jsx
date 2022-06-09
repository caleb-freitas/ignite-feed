import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react"
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/caleb-freitas.png" />
        <strong>Caleb Freitas</strong>
        <span>Software Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  )
}

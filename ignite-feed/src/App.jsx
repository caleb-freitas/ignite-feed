import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/caleb-freitas.png",
      name: "Caleb Freitas",
      role: "Software Developer"
    },
    content: [
      { type: "paragraph", content: "Fala, galera!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto para o meu portifólio. É um projeto que fiz no NLW." },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-09 22:15:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala, galera!" },
      { type: "paragraph", content: "Acabei de subir mais um projeto para o meu portifólio. É um projeto que fiz no NLW." },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-08 22:15:00")
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

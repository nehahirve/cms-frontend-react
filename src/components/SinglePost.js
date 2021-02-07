import React, { useContext, useEffect, useState } from "react"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import ReactMarkdown from "react-markdown"
import styles from "../styles/SinglePost.module.scss"

export default function SinglePost(props) {
  const state = useContext(GlobalStateContext)
  const posts = state.value || state.posts
  const [post, setPost] = useState({
    title: "",
    body: "",
    created_at: "",
    url: "",
  })

  useEffect(() => {
    setPost(posts.filter(post => post.id === props.id)[0])
  }, [props.id])

  return post ? (
    <main className={styles.main}>
      <h1>{post.created_at.slice(0, 10)}</h1>
      <hr />
      <article>
        <h2>{post.title}</h2>
        <ReactMarkdown children={post.body} />
        <img src={post.url} alt="" />
      </article>
    </main>
  ) : (
    <div>404 NOT FOUND</div>
  )
}

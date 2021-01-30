import React, { useState, useEffect } from "react"
import AddPostButton from "./AddPostButton"
import PostList from "./PostList"

import styles from "./dashboard.module.scss"

const url = "https://vast-fortress-99756.herokuapp.com/api"

export default function Dashboard(props) {
  const [mode, setMode] = useState("posts")
  const [posts, setPosts] = useState([])
  const [pages, setPages] = useState([])

  const toggleMode = () => setMode(mode === "posts" ? "pages" : "posts")

  async function fetchData() {
    const postsData = await fetch(`${url}/posts`, {
      method: "GET",
    })
      .then(data => data.json())
      .catch(error => console.log(error))
    setPosts(postsData.posts)

    const pagesData = await fetch(`${url}/pages`, {
      method: "GET",
    })
      .then(data => data.json())
      .catch(error => console.log(error))
    setPages(pagesData.pages)
  }

  const deletePost = id => {
    fetch(`${url}/${mode}/${id}`, { method: "DELETE" }).then(post =>
      post.json()
    )
    mode === "posts"
      ? setPosts(posts => posts.filter(post => post.id !== id))
      : setPages(posts => posts.filter(post => post.id !== id))
  }

  async function createPost(post) {
    let createdPost = await fetch(`${url}/${mode}`, {
      method: "POST",
      body: JSON.stringify(post),
    }).then(post => post.json())
    mode === "posts"
      ? setPosts(posts => [].concat(createdPost).concat(posts))
      : setPages(posts => [].concat(createdPost).concat(posts))
  }

  const updatePost = post => {
    const { title, body, id } = post
    fetch(`${url}/${mode}/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
    }).then(post => post.json())

    mode === "posts"
      ? setPosts(posts =>
          posts.map(oldPost => {
            return oldPost.id === post.id
              ? Object.assign({}, oldPost, {
                  title: post.title,
                  body: post.body,
                })
              : oldPost
          })
        )
      : setPages(posts =>
          posts.map(oldPost => {
            return oldPost.id === post.id
              ? Object.assign({}, oldPost, {
                  title: post.title,
                  body: post.body,
                })
              : oldPost
          })
        )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          <li
            className={mode === "posts" ? styles.selected : null}
            onClick={toggleMode}
          >
            Posts.
          </li>
          <li
            className={mode === "pages" ? styles.selected : null}
            onClick={toggleMode}
          >
            Pages.
          </li>
        </ul>
      </nav>
      <PostList
        posts={mode === "posts" ? posts : pages}
        updatePost={updatePost}
        deletePost={deletePost}
      />
      <AddPostButton createPost={createPost} />
    </main>
  )
}

import React, { useState, useEffect } from "react"
import Nav from "./Nav"

import styles from "../styles/SinglePost.module.scss"

export default function SinglePost(props) {
  const { id, title, body, createdAt } = props.post
  return (
    <main className={styles.main}>
      <h1>{createdAt.slice(0, 10)}</h1>
      <hr />
      <article>
        <h2>{title}</h2>
        <p>{body}</p>
      </article>
      <Nav pages={props.pages}></Nav>
    </main>
  )
}

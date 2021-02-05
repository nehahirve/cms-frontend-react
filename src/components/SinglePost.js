import React, { useState, useEffect } from "react"
import Nav from "./Nav"

import styles from "../styles/SinglePost.module.scss"

export default function SinglePost(props) {
  const { id, title, body, createdAt, image } = props.post
  return (
    <main className={styles.main}>
      <h1>{createdAt.slice(0, 10)}</h1>
      <hr />
      <article>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={image} alt="" />
      </article>
    </main>
  )
}

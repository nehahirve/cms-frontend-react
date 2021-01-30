import React, { useState, useEffect } from "react"

import styles from "./singlepost.module.scss"

export default function SinglePost(props) {
  const { id, title, body, createdAt } = props.post
  return (
    <main className={styles.main}>
      <h1>{createdAt}</h1>
      <hr />
      <article>
        <h2>{title}</h2>
        <h3>{body}</h3>
      </article>
      <nav>
        <ul></ul>
      </nav>
      <button>
        <svg
          width="279"
          viewBox="0 0 279 189"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 169C28.3333 186.834 83.1 208 87.5 150C93 77.5002 181 37.0002 200 80.0002C219 123 291.5 168.5 275.5 115C259.5 61.5001 238 -16.4999 275.5 5.00006"
            stroke="black"
            stroke-width="4"
          />
        </svg>
      </button>
    </main>
  )
}

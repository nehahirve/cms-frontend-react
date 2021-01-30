import React, { useState, useEffect } from "react"
import styles from "./blog.module.scss"

export default function Blog(props) {
  return (
    <main className={styles.main}>
      <h1>It Wiggles.</h1>
      <hr />
      <section>
        <ul>
          {props.posts.map(post => {
            return (
              <li className={styles.blogpost} key={post.id}>
                <h2>{post.title}</h2>
                <h3>{post.created_at.slice(0, 10)}</h3>
                <p>{post.body}</p>
              </li>
            )
          })}
        </ul>
      </section>
      <nav>
        <ul>
          {props.pages.map(page => {
            return <li key={page.id}>{page.title}</li>
          })}
        </ul>
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

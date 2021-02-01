import * as React from "react"
import Masonry from "react-masonry-component"
import { Link } from "gatsby"
import Nav from "./Nav"

import styles from "../styles/Blog.module.scss"

const masonryOptions = {
  transitionDuration: 0,
  gutter: 10,
  // columnWidth: ".blogpost",
  fitWidth: true,
  // percentPosition: true,
  // horizontalOrder: true,
}

export default function Blog(props) {
  return (
    <main className={styles.main}>
      <h1>It Wiggles.</h1>
      <hr />
      <section>
        <Masonry
          elementType={"ul"} // default 'div'
          options={masonryOptions}
        >
          {props.posts.map(post => {
            return (
              <li className={styles.blogpost} key={post.id}>
                <Link
                  to={`/posts/${post.id}`}
                  state={{
                    post: {
                      title: post.title,
                      body: post.body,
                      createdAt: post.created_at,
                    },
                    pages: props.pages,
                  }}
                >
                  <h2>{post.title}</h2>
                </Link>
                <h3>{post.created_at.slice(0, 10) + ". "}</h3>
                <p>{post.body}</p>
              </li>
            )
          })}
        </Masonry>
      </section>
    </main>
  )
}

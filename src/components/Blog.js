import * as React from "react"
import { useContext } from "react"
import Masonry from "react-masonry-component"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import ReactMarkdown from "react-markdown"

import styles from "../styles/Blog.module.scss"

const masonryOptions = {
  transitionDuration: 0,
  gutter: 10,
  fitWidth: true,
}

export default function Blog() {
  const state = useContext(GlobalStateContext)

  return (
    <main className={styles.main}>
      <h1>It Wiggles.</h1>
      <hr />
      <section>
        <Masonry
          elementType={"ul"} // default 'div'
          options={masonryOptions}
        >
          {state.posts.map(post => {
            return (
              <li className={styles.blogpost} key={post.id}>
                <Link
                  to={`/posts/${post.id}`}
                  state={{
                    post: {
                      title: post.title,
                      body: post.body,
                      createdAt: post.created_at,
                      image: post.url,
                    },
                    pages: state.pages,
                  }}
                >
                  <h2>{post.title}</h2>

                  <h3>{post.created_at.slice(0, 10) + ". "}</h3>
                  <ReactMarkdown children={post.body} />

                  <img src={post.url} alt="" />
                </Link>
              </li>
            )
          })}
        </Masonry>
      </section>
    </main>
  )
}

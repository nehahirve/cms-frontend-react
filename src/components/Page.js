import React, { useState, useEffect, useContext } from "react"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import styles from "../styles/Page.module.scss"
import ReactMarkdown from "react-markdown"

export default function Page(props) {
  const state = useContext(GlobalStateContext)
  const pages = state.value || state.pages
  const [page, setPage] = useState({ title: "", body: "" })

  useEffect(() => {
    setPage(pages.filter(page => page.slug === props.slug)[0])
  }, [props.slug])

  return page ? (
    <main className={styles.main}>
      <h1>{page.title}</h1>
      <hr />
      <article>
        <ReactMarkdown children={page.body} />
      </article>
    </main>
  ) : (
    <div>404 NOT FOUND</div>
  )
}

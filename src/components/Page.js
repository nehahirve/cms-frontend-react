import React, { useState, useEffect } from "react"
import Nav from "./Nav"

import styles from "../styles/Page.module.scss"

export default function Page(props) {
  const { title, body } = props.page
  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <hr />
      <article>
        <p>{body}</p>
      </article>
      <Nav pages={props.pages} />
    </main>
  )
}

import React, { useState, useEffect, useContext } from "react"
import styles from "../styles/Page.module.scss"

export default function Four04(props) {
  return (
    <main className={styles.main}>
      <h1>Stop it.</h1>
      <hr />
      <article>
        <p style={{ fontSize: "4rem" }}>
          Go home, this resource doesn't exist. Stop trying to mess w/ my API.
        </p>
      </article>
    </main>
  )
}

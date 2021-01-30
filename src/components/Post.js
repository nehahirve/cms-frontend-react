import React, { useState, useEffect } from "react"

import styles from "./post.module.scss"

export default function Post(props) {
  return (
    <li className={styles.li} onClick={props.toggleForm}>
      <h2>{props.title}</h2>
      <h3>{`${props.createdAt.slice(0, 10)}.`}</h3>
    </li>
  )
}

import React, { useState, useEffect } from "react"

import styles from "../styles/PostForm.module.scss"

export default function PostForm(props) {
  const [title, setTitle] = useState(props.title || "")
  const [body, setBody] = useState(props.body || "")

  const updateTitle = e => setTitle(e.target.value)
  const updateBody = e => setBody(e.target.value)

  const updatePost = e => {
    e.preventDefault()
    title && body ? props.updatePost({ title, body, id: props.id }) : void 0
    props.toggleForm()
  }

  const createPost = e => {
    e.preventDefault()
    title && body ? props.createPost({ title, body }) : void 0
    props.toggleForm()
  }

  const deletePost = () => props.deletePost(props.id)

  return (
    <form onSubmit={props.id ? updatePost : createPost} className={styles.form}>
      <input
        name="title"
        type="text"
        className={styles.title}
        value={title}
        onChange={updateTitle}
      />
      <textarea
        name="body"
        className={styles.body}
        value={body}
        onChange={updateBody}
      />
      <div className={styles.buttons}>
        <button type="button" onClick={props.toggleForm}>
          cancel
        </button>
        <button type="submit">{props.id ? "update" : "create"}</button>
        {props.id && (
          <button type="button" onClick={deletePost}>
            delete
          </button>
        )}
      </div>
    </form>
  )
}

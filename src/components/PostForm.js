import React, { useEffect, useMemo, useState } from "react"
import RTE from "./RTE"
import styles from "../styles/PostForm.module.scss"

export default function PostForm(props) {
  const [title, setTitle] = useState(props.title || "")
  const [body, setBody] = useState(props.body || "start typing")
  const [imageUrl, setImageUrl] = useState(props.imageUrl || "")

  const updateTitle = e => setTitle(e.target.value)
  const updateBody = value => {
    setBody(value)
    console.log(body)
  }
  const updateUrl = e => setImageUrl(e.target.value)

  const updatePost = e => {
    console.log(props.imageUrl)
    e.preventDefault()
    title && body
      ? props.updatePost({ title, body, imageUrl, id: props.id })
      : void 0
    props.toggleForm()
  }

  const createPost = e => {
    e.preventDefault()

    title && body ? props.createPost({ title, body, imageUrl }) : void 0
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
      {/* <textarea
        name="body"
        className={styles.body}
        value={body}
        // onChange={updateBody}
      /> */}
      <RTE onChange={updateBody} body={body} />

      <input
        name="url"
        type="text"
        className={styles.title}
        value={imageUrl}
        onChange={updateUrl}
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

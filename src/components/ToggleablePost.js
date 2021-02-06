import React, { useState, useEffect } from "react"
import Post from "./Post"
import PostForm from "./PostForm"

export default function ToggleablePost(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleForm = () => setIsOpen(!isOpen)

  return (
    <>
      {!isOpen && (
        <Post
          title={props.title}
          createdAt={props.createdAt}
          toggleForm={toggleForm}
        />
      )}
      {isOpen && (
        <PostForm
          id={props.id}
          title={props.title}
          body={props.body}
          imageUrl={props.imageUrl}
          toggleForm={toggleForm}
          updatePost={props.updatePost}
          deletePost={props.deletePost}
        />
      )}
    </>
  )
}

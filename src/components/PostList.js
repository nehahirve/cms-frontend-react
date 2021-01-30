import React, { useState, useEffect } from "react"
import ToggleablePost from "./ToggleablePost"

export default function PostList(props) {
  return (
    <ul>
      {props.posts.map(post => {
        return (
          <ToggleablePost
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            createdAt={post.created_at}
            updatePost={props.updatePost}
            deletePost={props.deletePost}
          />
        )
      })}
    </ul>
  )
}

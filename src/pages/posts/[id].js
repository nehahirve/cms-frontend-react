import React, { useState, useEffect } from "react"
import SinglePost from "../../components/SinglePost"

export default function Id(props) {
  console.log(props.params)
  console.log(props.location.state)

  const { title, body, createdAt } = props.location.state.post

  return <SinglePost post={{ id: props.params.id, title, body, createdAt }} />
}

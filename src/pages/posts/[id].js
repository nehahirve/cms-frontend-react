import React, { useState, useEffect } from "react"
import SinglePost from "../../components/SinglePost"
import Nav from "../../components/Nav"
import axios from "axios"

const url = "https://vast-fortress-99756.herokuapp.com/api"

export default function Id(props) {
  const [post, setPost] = useState({
    title: "",
    body: "",
    createdAt: "",
    image: "",
  })
  const [pages, setPages] = useState([])

  const id = props.location.pathname.split("/")[2]

  async function fetchData() {
    const postData = await axios({
      url: url + props.location.pathname,
      method: "GET",
    }).then(response => response.data)
    setPost(
      postData
        ? {
            body: postData.body,
            title: postData.title,
            createdAt: postData.created_at,
            image: postData.url,
          }
        : null
    )
    const pagesData = await axios({
      url: url + "/pages",
      method: "GET",
    }).then(response => response.data)
    setPages(pagesData.pages)
  }

  useEffect(() => {
    if (props.location.state) {
      const { title, body, createdAt, image } = props.location.state.post
      setPost({ title, body, createdAt, image })
      setPages(props.location.state.pages)
    } else {
      fetchData()
    }
  }, [])

  if (post === null) return <div>404 resource not found</div>
  else
    return (
      <>
        <SinglePost
          post={{
            id: id,
            title: post.title,
            body: post.body,
            createdAt: post.createdAt,
            image: post.image,
          }}
          pages={pages}
        />
        <Nav pages={pages} />
      </>
    )
}

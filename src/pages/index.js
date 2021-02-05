import React, { useState, useEffect } from "react"
import axios from "axios"
import Blog from "../components/Blog"
import Nav from "../components/Nav"

const url = "https://vast-fortress-99756.herokuapp.com/api"

export default function Home() {
  const [posts, setPosts] = useState([])
  const [pages, setPages] = useState([])

  async function fetchData() {
    const postsData = await axios({
      url: url + "/posts",
      method: "GET",
    }).then(response => response.data)
    setPosts(postsData.posts)
    const pagesData = await axios({
      url: url + "/pages",
      method: "GET",
    }).then(response => response.data)
    setPages(pagesData.pages)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Blog posts={posts} pages={pages} />
      <Nav pages={pages} />
    </>
  )
}

import React, { useState, useEffect } from "react"

import Blog from "../components/Blog"
import Nav from "../components/Nav"

const url = "https://vast-fortress-99756.herokuapp.com/api"

export default function Home() {
  const [posts, setPosts] = useState([])
  const [pages, setPages] = useState([])

  async function fetchData() {
    const postsData = await fetch(url + "/posts", {
      method: "GET",
    }).then(data => data.json())
    setPosts(postsData.posts)
    const pagesData = await fetch(url + "/pages", {
      method: "GET",
    }).then(data => data.json())
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

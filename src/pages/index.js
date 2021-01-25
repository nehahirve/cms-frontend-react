import React, { useState, useEffect } from "react"

const url = "http://localhost:8080/api/posts.php"

export default function Home() {
  const [posts, setPosts] = useState([])

  async function fetchData() {
    const data = await fetch(url, { method: "GET" }).then(data => data.json())
    setPosts(data.posts)
    console.log(posts)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <h1>What's poppin'</h1>

      {posts.map(post => (
        <article>
          <h2>{post.title}</h2>
          <h3>{post.created_at}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  )
}

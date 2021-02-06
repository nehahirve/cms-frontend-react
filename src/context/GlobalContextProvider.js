import React, { useState, useEffect } from "react"
import axios from "axios"

export const GlobalStateContext = React.createContext()

const url = "https://vast-fortress-99756.herokuapp.com/api"

export default function GlobalContextProvider({ children }) {
  const [data, setData] = useState({ value: { posts: [], pages: [] } })

  async function fetchData() {
    const postsData = await axios({
      url: url + "/posts",
      method: "GET",
    }).then(response => response.data)
    const pagesData = await axios({
      url: url + "/pages",
      method: "GET",
    }).then(response => response.data)
    setData(
      Object.assign(data.value, {
        pages: pagesData.pages,
        posts: postsData.posts,
      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  )
}

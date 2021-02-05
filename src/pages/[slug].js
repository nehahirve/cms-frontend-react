import React, { useState, useEffect } from "react"
import Page from "../components/Page"
import Nav from "../components/Nav"
import axios from "axios"

const url = "https://vast-fortress-99756.herokuapp.com/api"

export default function Slug(props) {
  const [page, setPage] = useState({
    title: "",
    body: "",
    createdAt: "",
  })

  const [pages, setPages] = useState([])

  const slug = props.location.pathname.split("/")[2]

  async function fetchData() {
    const pageData = await axios({
      url: url + "/pages" + props.location.pathname,
      method: "GET",
    }).then(response => response.data)
    setPage(
      pageData
        ? {
            body: pageData.body,
            title: pageData.title,
            createdAt: pageData.created_at,
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
    console.log(props.location.state)
    if (props.location.state) {
      const { title, body, createdAt } = props.location.state.page
      setPage({ title, body, createdAt })
      setPages(props.location.state.pages)
    } else {
      fetchData()
    }
  }, [props.location.state])

  if (page === null) return <div>404 resource not found</div>
  else
    return (
      <>
        <Page page={{ title: page.title, body: page.body }} />
        <Nav pages={pages} />
      </>
    )
}

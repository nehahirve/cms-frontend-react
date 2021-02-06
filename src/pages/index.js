import React, { useState, useEffect, useContext } from "react"
import Blog from "../components/Blog"
import Nav from "../components/Nav"
import Loading from "../components/Loading"
import { GlobalStateContext } from "../context/GlobalContextProvider"

export default function Home() {
  const state = useContext(GlobalStateContext)

  return (
    <>
      {state.posts && (
        <>
          <Blog posts={state.posts} pages={state.pages} />
          <Nav />
        </>
      )}
      {!state.posts && <Loading />}
    </>
  )
}

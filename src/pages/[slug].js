import React, { useContext } from "react"
import Page from "../components/Page"
import Nav from "../components/Nav"
import Loading from "../components/Loading"
import { GlobalStateContext } from "../context/GlobalContextProvider"

export default function Slug({ location }) {
  const state = useContext(GlobalStateContext)

  return state.pages ? (
    <>
      <Page slug={location.pathname.slice(1)} />
      <Nav />
    </>
  ) : (
    <Loading />
  )
}

import React, { useContext } from "react"
import SinglePost from "../../components/SinglePost"
import Nav from "../../components/Nav"
import Loading from "../../components/Loading"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

export default function Id({ location }) {
  const state = useContext(GlobalStateContext)

  return state.pages ? (
    <>
      <SinglePost id={+location.pathname.slice(1).split("/")[1]} />
      <Nav />
    </>
  ) : (
    <Loading />
  )
}

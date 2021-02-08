import "./src/styles/reset.scss"
import "./src/styles/global.scss"

import React from "react"
import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider> {element} </GlobalContextProvider>
}

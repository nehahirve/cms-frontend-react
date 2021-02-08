import React, { useState, useEffect } from "react"
import Loader from "react-loader-spinner"

import styles from "../styles/Loading.module.scss"

export default function Loading(props) {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Loader type="ThreeDots" color="#000" height={100} width={100} />
      </div>
    </main>
  )
}

import React, { useState, useEffect } from "react"
import Page from "../components/Page"

export default function Slug(props) {
  const { title, body } = props.location.state.page
  return <Page page={{ title, body }} pages={props.location.state.pages} />
}

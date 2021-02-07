import React, { useEffect, useMemo, useState } from "react"
import RichTextEditor from "react-rte"
import styles from "../styles/RTE.module.scss"

const toolbarConfig = {
  display: ["INLINE_STYLE_BUTTONS"],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: styles.custom },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
    { label: "Strikethrough", style: "STRIKETHROUGH" },
  ],
}

export default function RTE(props) {
  const [value, setValue] = useState(
    RichTextEditor.createValueFromString(props.body, "markdown")
  )

  const onChange = value => {
    setValue(value)
    props.onChange(value.toString("markdown"))
  }

  return (
    <RichTextEditor
      toolbarConfig={toolbarConfig}
      className={styles.rte}
      value={value}
      onChange={onChange}
    />
  )
}

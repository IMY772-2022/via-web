import React from "react"
import CSS from "csstype"

import "./label.scss"

interface LabelProps {
  value: string
  style?: CSS.Properties
  editable: boolean
}
const Label = ({ value, style, editable }: LabelProps) => {
  if (editable) {
    return <input defaultValue={value}></input>
  } else {
    return (
      <span className="tag is-white" style={style}>
        {value}
      </span>
    )
  }
}
export { Label }

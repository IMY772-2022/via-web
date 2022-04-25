import React from "react"
import CSS from "csstype"

import "./label.scss"

interface LabelProps {
  value: string
  style?: CSS.Properties
}
const Label = ({ value, style }: LabelProps) => {
  return (
    <span className="tag is-white" style={style}>
      {value}
    </span>
  )
}
export { Label }

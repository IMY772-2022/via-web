import React from "react"

import "./label.scss"

interface LabelProps {
  value: string
}
const Label = ({ value }: LabelProps) => {
  return <span className="tag is-white"> {value} </span>
}
export { Label }

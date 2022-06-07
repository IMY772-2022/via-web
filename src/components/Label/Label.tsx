import React from "react"
import CSS from "csstype"

import "./label.scss"
import { LabelType } from "../PhotoAnalysis/PhotoAnalysis"

interface LabelProps {
  label: LabelType
  labelsArray: LabelType[]
  style?: CSS.Properties
  editable?: boolean
}

// const saveItem = () => {

// }

// const updateItem = (label: LabelType, labelArray: LabelType[]) => {
//   const updatedLabelArray = labelArray.filter(item => {
//     if (item.name === label.name) {
//       //item.name = new value
//       //return
//     }
//   })
//   return updatedLabelArray
// }

const Label = ({ label, style, editable }: LabelProps) => {
  if (editable) {
    return (
      <input
        //onChange={updateItem}
        className="input"
        type="text"
        defaultValue={label.name}
      />
    )
  } else {
    return (
      <span className="tag is-white" style={style}>
        {label}
      </span>
    )
  }
}
export { Label }

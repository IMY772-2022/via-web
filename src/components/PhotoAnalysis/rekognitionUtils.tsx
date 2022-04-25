import React from "react"
import { BoundingBox } from "@aws-amplify/predictions"
import CSS from "csstype"

import { LabelType } from "./PhotoAnalysis"
import { Label } from "../Label/Label"

export const labelImage = (labelData: LabelType[], imageSrc: string) => {
  const img = new Image()
  img.src = imageSrc
  const height = img.height
  const width = img.width
  return labelData.map(label => {
    if (label.boundingBoxes.length > 0) {
      let style
      label.boundingBoxes.forEach((boundingBox: BoundingBox) => {
        style = defineBoundingBox(boundingBox, height, width)
      })
      return <Label value={label.name} style={style} key={label.name} />
    } else return <Label value={label.name} key={label.name} />
  })
}

const defineBoundingBox = (
  boundingBox: BoundingBox,
  height: number,
  width: number
) => {
  const boundingBoxWidth = (boundingBox.width ? boundingBox.width : 0) as number
  const xPosition = boundingBoxWidth * width
  const boundingBoxHeight = (
    boundingBox.height ? boundingBox.height : 0
  ) as number
  const yPosition = boundingBoxHeight * height
  const styles: CSS.Properties = {
    position: "relative",
    top: xPosition.toString(),
    left: yPosition.toString(),
  }
  return styles
}

export const isValidFileType = (image: File) => {
  if (
    image.type === "image/png" ||
    image.type === "image/jpeg" ||
    image.type === "image/jpg"
  )
    return true
  else return false
}

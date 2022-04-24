import { BoundingBox } from "@aws-amplify/predictions"
import { LabelType } from "./PhotoAnalysis"

export const labelImage = (labelData: LabelType[], imageSrc: string) => {
  const img = new Image()
  img.src = imageSrc

  const height = img.height
  const width = img.width
  labelData.forEach(label => {
    if (label.boundingBoxes != []) {
      label.boundingBoxes.forEach((boundingBox: BoundingBox) => {
        defineBoundingBox(boundingBox, height, width)
      })
    }
  })
}

const defineBoundingBox = (
  boundingBox: BoundingBox,
  height: number,
  width: number
) => {
  const top = (boundingBox.top ? boundingBox.top : 0) as number
  const xPosition = top * width
  return xPosition
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

import React from "react"
import { BoundingBox } from "@aws-amplify/predictions"
import { API, Storage } from "aws-amplify"
import CSS from "csstype"

import { ImageData, LabelType } from "./PhotoAnalysis"
import { Label } from "../Label/Label"
import { createImageRecord, deleteImageRecord } from "../../graphql/mutations"
import Alert from "../Alert/Alert"

export const labelImage = (labelData: LabelType[], imageData: ImageData) => {
  const { height, width } = imageData

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

export const uploadToS3 = (image: File) => {
  try {
    const response = Storage.put(image.name, image, {
      contentType: image.type,
    })
    return response
  } catch (error) {
    ;<Alert error={error as string} />
  }
}

export const getFilePathFromS3 = (fileName: string) => {
  try {
    const response = Storage.get(fileName)
    return response
  } catch (error) {
    ;<Alert error={error as string} />
  }
}

export const writeToDynamo = (filepath: string, labels: LabelType[]) => {
  try {
    API.graphql({
      query: createImageRecord,
      variables: {
        input: {
          filepath: filepath,
          labels: labels,
        },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })
    return "Successfully saved to your album"
  } catch (error) {
    return error as string
  }
}

export const deleteFromDynamo = async (itemId: string) => {
  try {
    await API.graphql({
      query: deleteImageRecord,
      variables: {
        input: {
          id: itemId,
        },
      },
    })
  } catch (error) {
    return error as string
  }
}

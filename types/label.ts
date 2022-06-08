import { BoundingBox } from "@aws-amplify/predictions"
import { LabelMetaData } from "./label-metadata"

export type LabelType = {
  name: string
  boundingBoxes: BoundingBox[]
  metadata: LabelMetaData
}

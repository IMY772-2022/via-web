/* eslint-disable  */
import React, { useState } from "react"
import {
  Predictions,
  IdentifyLabelsOutput,
  BoundingBox,
} from "@aws-amplify/predictions"
import TextToSpeech from "./TextToSpeech/TextToSpeech"
import { isValidFileType } from "./rekognitionUtils"

export interface Label {
  name: string
  boundingBoxes: BoundingBox[]
}

interface ParentLabel {
  name: string
}
interface Metadata {
  confidence: number
  parents: ParentLabel[]
}
const Analysis: React.FC = () => {
  const [rekognitionResponse, setRekognitionResponse] = useState<
    IdentifyLabelsOutput | string
  >("")
  const [imageSrc, setImageSrc] = useState<string>()
  let labels: string[] = [""]
  let labelData: Label[]
  const [isLoading, setIsLoading] = useState(false)

  const identifyImageResponse = async (event: any) => {
    const files = (event.target as HTMLInputElement).files
    const file = files![0]
    if (isValidFileType(file)) {
      setIsLoading(true)
      setImageSrc(URL.createObjectURL(file))
      console.log("test")
      await Predictions.identify({
        labels: {
          source: {
            file,
          },
          type: "ALL",
        },
      })
        .then(response => {
          setRekognitionResponse(response)
          setIsLoading(false)
        })
        .catch(err => setRekognitionResponse(JSON.stringify(err, null, 2)))
    } else return <div> Please upload a jpg or png image</div>
  }

  const processRekognitionLabels = (
    rekognitionResponse: IdentifyLabelsOutput
  ) => {
    let labelsArray: Label[] = []
    if (rekognitionResponse != "") {
      if (rekognitionResponse.labels) {
        rekognitionResponse.labels!.forEach(label => {
          const metadata = label.metadata as Metadata

          const { confidence, parents } = metadata
          if (confidence > 85 && parents.length >= 1) {
            labelsArray.push(label)
          }
        })
      }
    }
    labelData = labelsArray
    const labelValues = labelsArray.map(label => {
      return label.name
    })
    labels = labelValues
    // labelImage(labelData, imageSrc as string)
  }

  const pageData = (
    <div>
      <div className="file is-flex-direction-column is-justify-content-center is-align-items-center">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            onChange={identifyImageResponse}
          ></input>
          <span className="file-cta">
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
      <br />
      <img src={imageSrc} />
      {processRekognitionLabels(rekognitionResponse as IdentifyLabelsOutput)}
      <p>{labels.join(", ")}</p>
      <TextToSpeech disabled={isLoading} labels={labels} />
    </div>
  )
  return pageData
}

export default Analysis

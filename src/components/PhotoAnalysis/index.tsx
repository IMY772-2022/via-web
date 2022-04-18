/* eslint-disable  */
import React, { useState } from "react"
import {
  Predictions,
  IdentifyLabelsOutput,
  BoundingBox,
} from "@aws-amplify/predictions"
import TextToSpeech from "./TextToSpeech"

interface Label {
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

  const identifyImageLabels = async (event: any) => {
    setIsLoading(true)

    const files = (event.target as HTMLInputElement).files
    const file = files![0]
    setImageSrc(URL.createObjectURL(file))

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
  }

  const processRekognitionLabels = (
    rekognitionResponse: IdentifyLabelsOutput
  ) => {
    let labelsArray: Label[] = []
    if (rekognitionResponse != "") {
      rekognitionResponse.labels!.forEach(label => {
        const metadata = label.metadata as Metadata

        const { confidence, parents } = metadata
        if (confidence > 85 && parents.length >= 1) {
          labelsArray.push(label)
        }
      })
    }
    labelData = labelsArray
    const labelValues = labelsArray.map(label => {
      return label.name
    })
    labels = labelValues
  }
  const pageData = (
    <div>
      <div className="file is-flex-direction-column is-justify-content-center is-align-items-center">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            onChange={identifyImageLabels}
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

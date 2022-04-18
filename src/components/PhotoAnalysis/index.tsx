/* eslint-disable  */
import React, { useState } from "react"
import {
  Predictions,
  IdentifyLabelsOutput,
  BoundingBox,
} from "@aws-amplify/predictions"
import TextToSpeech from "./TextToSpeech"
import { label } from "aws-amplify"

import { useIdentifyImageLabels } from "./hooks/useIdentifyImageLabels"
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
  const [rekognitionLabels, setRekognitionLabels] = useState<string[]>([""])

  const [isLoading, setIsLoading] = useState(false)

  const identifyImageLabels = async (event: any) => {
    setIsLoading(true)

    const files = (event.target as HTMLInputElement).files
    const file = files![0]

    await Predictions.identify({
      labels: {
        source: {
          file,
        },
        type: "ALL",
      },
    })
      .then(response => {
        const { labels } = response
        // labels?.forEach(object => {
        //   const { name, boundingBoxes } = object
        // })

        const labelValues = labels!.map(label => {
          return label.name
        })
        setRekognitionResponse(response)
        setRekognitionLabels(labelValues)
        setIsLoading(false)
        //console.log(rekognitionResponse)
        // processRekognitionLabels(rekognitionResponse as IdentifyLabelsOutput)
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
    console.log(labelsArray)
  }
  /* tslint:disable-next-line */
  console.log(JSON.stringify(rekognitionResponse)) // this is just to allow the build to pass currently; we will likely use this value at a later stage to process the bounding box
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
      {/* <button className="button is-dark" onClick={indentifyImageLabels}>
        Analyse photo
      </button> */}
      <p>
        {" "}
        {processRekognitionLabels(
          rekognitionResponse as IdentifyLabelsOutput
        )}{" "}
      </p>
      <p>{rekognitionLabels.join(", ")}</p>

      <TextToSpeech disabled={isLoading} labels={rekognitionLabels} />
    </div>
  )
  return pageData
}

export default Analysis

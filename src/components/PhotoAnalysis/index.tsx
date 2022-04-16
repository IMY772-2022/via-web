/* eslint-disable  */
import React, { useState } from "react"
import { Predictions } from "@aws-amplify/predictions"
import TextToSpeech from "./TextToSpeech"
import Slider from "../Slider"

const Analysis: React.FC = () => {
  const [rekognitionResponse, setRekognitionResponse] = useState<
    string | string[]
  >("Click upload for test")
  const [rekognitionLabels, setRekognitionLabels] = useState<string[]>([""])

  const [isLoading, setIsLoading] = useState(false)

  const sayHello = () => {
    console.log(`Hello`)
  }

  const indentifyImageLabels = (event: any) => {
    setIsLoading(true)
    setRekognitionResponse("searching...")

    const files = (event.target as HTMLInputElement).files
    const file = files![0]

    Predictions.identify({
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

        const labelValues = labels!.map(object => {
          return object.name
        })
        setRekognitionResponse(JSON.stringify(response, null, 2))
        setRekognitionLabels(labelValues)
        setIsLoading(false)
      })
      .catch(err => setRekognitionResponse(JSON.stringify(err, null, 2)))
  }

  /* tslint:disable-next-line */
  console.log(rekognitionResponse) // this is just to allow the build to pass currently; we will likely use this value at a later stage to process the bounding box
  const pageData = (
    <div>
      <div className="file is-flex-direction-column is-justify-content-center is-align-items-center">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            onChange={indentifyImageLabels}
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
      <p>{rekognitionLabels.join(", ")}</p>

      <TextToSpeech disabled={isLoading} labels={rekognitionLabels} />

      <br />

      <Slider label="Font Size" onSliderClicked={sayHello} />
    </div>
  )
  return pageData
}

export default Analysis

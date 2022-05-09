import React, { useState } from "react"
import {
  Predictions,
  IdentifyLabelsOutput,
  BoundingBox,
} from "@aws-amplify/predictions"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./photoAnalysis.scss"
import TextToSpeech from "./TextToSpeech/TextToSpeech"
import { isValidFileType, labelImage } from "./rekognitionUtils"

export interface LabelType {
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

export interface ImageData {
  imageSrc: string
  height: number
  width: number
}

const Analysis: React.FC = () => {
  const [rekognitionResponse, setRekognitionResponse] = useState<
    IdentifyLabelsOutput | string
  >("")
  const [imageData, setImageData] = useState<ImageData | undefined>(undefined)
  let labels: string[] = [""]
  let labelData: LabelType[] = []
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setError] = useState(false)

  const identifyImageLabels = async (event: any) => {
    const files = (event.target as HTMLInputElement).files
    const file = files![0]
    if (isValidFileType(file)) {
      setIsLoading(true)

      const img = new Image()
      img.src = URL.createObjectURL(file)

      const imageData: ImageData = {
        imageSrc: img.src,
        height: img.height,
        width: img.width,
      }

      setImageData(imageData)

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
    } else setError(true)
  }

  const processRekognitionLabels = (
    rekognitionResponse: IdentifyLabelsOutput
  ) => {
    const labelsArray: LabelType[] = []
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
  }

  const displayUploadButton = () => {
    if (!isLoading && rekognitionResponse === "")
      return (
        <div>
          <p className="instructions">Take or upload photo</p>
          <div className="cameraButton">
            <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <label className="file-label">
                <input
                  className="file-input"
                  type="file"
                  onChange={identifyImageLabels}
                />
                <span className="file-cta">
                  <span className="file-label">
                    <FontAwesomeIcon icon={faCamera} fontSize="25" />
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      )
    else return null
  }

  const displayError = (error: string) => {
    const dismissError = () => {
      setError(false)
    }
    return (
      <div className="notification is-danger is-light">
        <button className="delete" onClick={dismissError}></button>
        {error}
      </div>
    )
  }

  const renderImageLabels = () => {
    if (isLoading) return <span className="loader"></span>
    else if (imageData) return labelImage(labelData, imageData)
    else return null
  }

  const pageData = (
    <div>
      {imageData !== undefined ? (
        <div className="card-image">
          <img src={imageData.imageSrc} alt="Uploaded preview" />
        </div>
      ) : null}
      <div className="card-content">
        <div className="content">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            {displayUploadButton()}
            {isError ? displayError("Please upload a jpeg or png file") : null}
          </div>

          {processRekognitionLabels(
            rekognitionResponse as IdentifyLabelsOutput
          )}
          <div className="tags are-medium">{renderImageLabels()}</div>
          {labels.length > 0 ? (
            <TextToSpeech disabled={isLoading} labels={labels} />
          ) : null}
        </div>
      </div>
    </div>
  )
  return pageData
}

export default Analysis

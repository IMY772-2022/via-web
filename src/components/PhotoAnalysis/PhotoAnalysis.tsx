import React, { useContext, useState } from "react"
import {
  Predictions,
  IdentifyLabelsOutput,
  BoundingBox,
} from "@aws-amplify/predictions"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./photoAnalysis.scss"
import TextToSpeech from "./TextToSpeech/TextToSpeech"
import { isValidFileType, labelImage, uploadToS3, writeToDynamo } from "./utils"
import Alert, { NotificationType } from "../Alert/Alert"
import { AuthContext } from "../../context/store"

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
  file: File
}

const Analysis: React.FC = () => {
  const authContext = useContext(AuthContext)
  const [rekognitionResponse, setRekognitionResponse] = useState<
    IdentifyLabelsOutput | string
  >("")
  const [imageData, setImageData] = useState<ImageData | undefined>(undefined)
  let labels: string[] = [""]
  let labelData: LabelType[] = []
  const [isLoading, setIsLoading] = useState({
    image: false,
    saveButton: false,
  })
  const [isError, setError] = useState(false)
  const [dynamoDBResponse, setDynamoDBReponse] = useState("")

  const identifyImageLabels = async (event: any) => {
    setDynamoDBReponse("")
    const files = (event.target as HTMLInputElement).files
    const file = files![0]
    if (isValidFileType(file)) {
      setIsLoading({ ...isLoading, image: true })

      const img = new Image()
      img.src = URL.createObjectURL(file)

      const imageData: ImageData = {
        imageSrc: img.src,
        height: img.height,
        width: img.width,
        file: file,
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
          setIsLoading({ ...isLoading, image: false })
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
    if (!isLoading.image && rekognitionResponse === "")
      return (
        <div>
          <p className="instructions">Take or upload a photo</p>
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

  const saveImageRecord = async () => {
    setIsLoading({ ...isLoading, saveButton: true })
    const filepath = await uploadToS3(imageData!.file)
    const response = await writeToDynamo(filepath!.key, labelData)
    setDynamoDBReponse(response)
    setIsLoading({ ...isLoading, saveButton: false })
  }

  const renderImageLabels = () => {
    if (isLoading.image) return <span className="loader"></span>
    else if (labelData.length === 0 && imageData)
      return (
        <p>
          {" "}
          Sorry, we couldn&apos;t process this image, please try another one
        </p>
      )
    else if (imageData) return labelImage(labelData, imageData)
    else return null
  }

  const pageData = (
    <div>
      {dynamoDBResponse != "" ? (
        dynamoDBResponse.includes("album") ? (
          <Alert
            message={dynamoDBResponse}
            notificationType={NotificationType.isSuccess}
          />
        ) : (
          <Alert
            message={dynamoDBResponse}
            notificationType={NotificationType.isError}
          />
        )
      ) : null}
      <div className="rightControls">
        <div className="controls">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              onChange={identifyImageLabels}
            />
            <span className="file-cta">
              <span className="file-label">
                <FontAwesomeIcon
                  className="iconCam"
                  icon={faCamera}
                  fontSize="18"
                />
              </span>
            </span>
          </label>
        </div>
      </div>
      <div className="card analysis-card has-text-light">
        <div className="media-content">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <div className="media">
              <div className="block">
                <div className="content">
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

                          {isError ? (
                            <Alert
                              message={"Please upload a jpeg or png file"}
                              notificationType={NotificationType.isError}
                            />
                          ) : null}
                        </div>

                        {processRekognitionLabels(
                          rekognitionResponse as IdentifyLabelsOutput
                        )}
                        <div className="tags are-medium">
                          {renderImageLabels()}
                        </div>
                        {labels.length > 0 ? (
                          <TextToSpeech
                            disabled={isLoading.image}
                            labels={labels}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {authContext.userId !== null && !isLoading.image && imageData ? (
            <button className="button is-danger" onClick={saveImageRecord}>
              {isLoading.saveButton ? (
                <span className="loader"></span>
              ) : (
                "Save results"
              )}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
  return pageData
}

export default Analysis

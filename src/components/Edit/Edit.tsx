import React, { useEffect, useState } from "react"
import { deleteFromDynamo, updateDynamo } from "../PhotoAnalysis/utils"
import { useGetFilePath } from "../Album/useGetFilePath"
import { LabelType } from "../PhotoAnalysis/PhotoAnalysis"

import "./edit.scss"
import { navigate } from "gatsby"
import Alert, { NotificationType } from "../Alert/Alert"
import ConfirmModal from "../ConfirmModal/ConfirmModal"

type Props = {
  recordData: any
}

const Edit: React.FC<Props> = ({ recordData }) => {
  const [labelsArray, setLabelsArray] = useState<LabelType[]>([])
  const [updateDynamoResponse, setUpdateDynamoResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dynamoRecord = recordData.state
  const stateData = dynamoRecord ? dynamoRecord.item.labels : JSON.stringify("")
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  useEffect(() => {
    setLabelsArray(JSON.parse(stateData))
  }, [stateData])

  const updateLabel =
    (index: number) => (e: React.FormEvent<HTMLInputElement>) => {
      const newArr = [...labelsArray]
      newArr[index].name = e.currentTarget.value
      setLabelsArray(newArr)
    }

  const UpdateDynamoRecord = async () => {
    setUpdateDynamoResponse("")
    setIsLoading(true)
    const response = await updateDynamo(recordData.state.item.id, labelsArray)
    setUpdateDynamoResponse(response as string)
    setIsLoading(false)
  }

  const deleteItem = () => {
    setModalOpen(true)
  }

  const confirmDelete = () => {
    deleteFromDynamo(recordData.state.item.id)
    navigate("/album")
  }

  const filepath = dynamoRecord ? recordData.state.item.filepath : ""
  return (
    <div>
      {updateDynamoResponse != "" ? (
        updateDynamoResponse.includes("labels") ? (
          <Alert
            message={updateDynamoResponse}
            notificationType={NotificationType.isSuccess}
          />
        ) : (
          <Alert
            message={updateDynamoResponse}
            notificationType={NotificationType.isError}
          />
        )
      ) : null}
      <div className="card analysis-card">
        <div className="media-content">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <div className="media">
              <div className="block">
                <div className="content">
                  <div className="card-image">
                    <img
                      src={useGetFilePath(filepath)}
                      alt="Uploaded preview"
                    />
                  </div>
                  <div className="px-5 my-4">
                    <p className="has-text-white has-text-weight-medium">
                      Click in the boxes below to edit the labels
                    </p>
                    <div className="grid-sm gap-4">
                      {labelsArray.map((label: LabelType, index: number) => {
                        return (
                          <span key={index}>
                            <input
                              className="input"
                              key={index}
                              type="text"
                              value={label.name}
                              onChange={updateLabel(index)}
                            />
                          </span>
                        )
                      })}
                    </div>
                    <div className="is-flex my-4 gap-4">
                      <button
                        className="button is-danger save-button is-align-items-center"
                        onClick={UpdateDynamoRecord}
                      >
                        {isLoading ? <span className="loader"></span> : "Save"}
                      </button>
                      <button
                        className="button is-danger is-align-items-center"
                        onClick={deleteItem}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfirmModal
          open={modalOpen}
          setOpen={setModalOpen}
          action={confirmDelete}
          confirmationMessage={"Are you sure you want to delete this image?"}
        />
      </div>
    </div>
  )
}

export default Edit

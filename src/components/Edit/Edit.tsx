import React, { useEffect, useState } from "react"
import { deleteFromDynamo, updateDynamo } from "../PhotoAnalysis/utils"
import { useGetFilePath } from "../Album/useGetFilePath"
import { LabelType } from "../PhotoAnalysis/PhotoAnalysis"

import "./edit.scss"
import { navigate } from "gatsby"
import ConfirmModal from "../ConfirmModal/ConfirmModal"

type Props = {
  recordData: any
}

const Edit: React.FC<Props> = ({ recordData }) => {
  const [labelsArray, setLabelsArray] = useState<LabelType[]>([])
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

  const UpdateDynamoRecord = () => {
    updateDynamo(recordData.state.item.id, labelsArray)
  }

  const deleteItem = () => {
    // eslint-disable-next-line no-console
    console.log("delete the image")
    setModalOpen(true)
    deleteFromDynamo(recordData.state.item.id)
    navigate("/album")
  }

  const filepath = dynamoRecord ? recordData.state.item.filepath : ""
  return (
    <div className="card analysis-card">
      <div className="media-content">
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <div className="media">
            <div className="block">
              <div className="content">
                <div className="card-image">
                  <img src={useGetFilePath(filepath)} alt="Uploaded preview" />
                </div>
                <div className="labels">
                  <p>Click in the boxes below to edit the labels</p>
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
                <div className="is-flex is-align-self-auto">
                  <button
                    className="button is-danger save-button is-align-items-center"
                    onClick={UpdateDynamoRecord}
                  >
                    Save
                  </button>
                  <br />
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
      <ConfirmModal
        open={modalOpen}
        setOpen={setModalOpen}
        action={deleteItem}
        confirmationMessage={"Are you sure you want to delete this image?"}
      />
    </div>
  )
}

export default Edit

import React, { useEffect, useState } from "react"
import { updateDynamo } from "../PhotoAnalysis/utils"
import { useGetFilePath } from "../Album/useGetFilePath"
import { LabelType } from "../PhotoAnalysis/PhotoAnalysis"

import "./edit.scss"

type Props = {
  recordData: any
}

const Edit: React.FC<Props> = ({ recordData }) => {
  const [labelsArray, setLabelsArray] = useState<LabelType[]>([])
  const dynamoRecord = recordData.state
  const stateData = dynamoRecord ? dynamoRecord.item.labels : JSON.stringify("")
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
                <button
                  className="button is-danger save-button"
                  onClick={UpdateDynamoRecord}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit

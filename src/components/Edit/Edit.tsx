import React, { useEffect, useState } from "react"
import { updateDynamo } from "../PhotoAnalysis/utils"
import { LabelType } from "../../../types/label"
import "./edit.scss"
import { useGetFilePath } from "../Album/useGetFilePath"

type Props = {
  recordData: any
}

const Edit: React.FC<Props> = ({ recordData }) => {
  const [labelsArray, setLabelsArray] = useState<LabelType[]>([])
  const item = recordData.state.item

  useEffect(() => {
    setLabelsArray(JSON.parse(item.labels))
  }, [])

  const updateLabel =
    (index: number) => (e: React.FormEvent<HTMLInputElement>) => {
      const newArr = [...labelsArray]
      newArr[index].name = e.currentTarget.value
      setLabelsArray(newArr)
    }

  const UpdateDynamoRecord = () => {
    updateDynamo(recordData.state.item.id, labelsArray)
  }

  return (
    <div className="card analysis-card">
      <div className="media-content">
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <div className="media">
            <div className="block">
              <div className="content">
                <div className="card-image">
                  <img
                    src={useGetFilePath(item.filepath)}
                    alt="Uploaded preview"
                  />
                </div>
                <div className="labels">
                  {labelsArray.map((label: LabelType, index: number) => {
                    return (
                      <span key={index}>
                        <input
                          className="input"
                          key={index}
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

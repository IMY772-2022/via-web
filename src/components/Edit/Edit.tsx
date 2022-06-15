import React, { useEffect, useState } from "react"
import { updateDynamo } from "../PhotoAnalysis/utils"
import { LabelType } from "../../../types/label"
import "./edit.scss"

type Props = {
  recordData: any
}

const Edit: React.FC<Props> = ({ recordData }) => {
  const [labelsArray, setLabelsArray] = useState<LabelType[]>([])

  useEffect(() => {
    setLabelsArray(JSON.parse(recordData.state.item.labels))
  }, [])

  const updateLabel =
    (index: number) => (e: React.FormEvent<HTMLInputElement>) => {
      const newArr = [...labelsArray]
      newArr[index].name = e.currentTarget.value
      setLabelsArray(newArr)
    }

  const commitChanges = () => {
    updateDynamo(recordData.state.item.id, labelsArray)
  }

  return (
    <div className="card analysis-card">
      <div className="tags">
        {labelsArray.map((label: LabelType, index: number) => {
          return (
            <span key={index} className="tag">
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
      <button className="button" onClick={commitChanges}>
        Save
      </button>
    </div>
  )
}

export default Edit

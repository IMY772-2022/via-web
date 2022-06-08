import React, { useEffect, useState } from "react"
import { updateDynamo } from "../PhotoAnalysis/utils"
import { LabelType } from "../../../types/label"

type Props = {
  recordData: any
}

const Edit: React.FC<Props> = ({ recordData }) => {
  const [labelsArray, setLabelsArray] = useState<LabelType[]>([])
  // TODO store labels in a state
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
    <>
      {labelsArray.map((label: LabelType, index: number) => {
        return (
          <div key={index} className="flex is-flex-direction-row">
            {/* TODO add onchange to update label array */}
            <input
              className="input"
              key={index}
              value={label.name}
              onChange={updateLabel(index)}
            />
          </div>
        )
      })}

      <button className="button" onClick={commitChanges}>
        Save
      </button>
    </>
  )
}

export default Edit

import { navigate } from "gatsby"
import React from "react"

import { deleteFromDynamo } from "../PhotoAnalysis/utils"
import { ImageRecord } from "./Album"
import { useGetFilePath } from "./useGetFilePath"
import "./Item.scss"

interface ItemProps {
  imageRecord: ImageRecord
  dynamoDbItems: ImageRecord[]
  setDynamoDBItems: React.Dispatch<React.SetStateAction<ImageRecord[]>>
}

const Item: React.FC<ItemProps> = props => {
  const item = props.imageRecord
  const { dynamoDbItems, setDynamoDBItems } = props

  const { filepath } = item

  const deleteItem = () => {
    deleteFromDynamo(item.id)
    const updatedItemArray = dynamoDbItems.filter(dynamoDbItem => {
      return dynamoDbItem.id != item.id
    })
    setDynamoDBItems(updatedItemArray)
  }
  return (
    <div>
      <div className="card small-card">
        <div className="card-image">
          <img src={useGetFilePath(filepath)} alt="Stored file from database" />
        </div>

        <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <button className="button is-danger"> Edit</button>
          <button className="button is-danger" onClick={deleteItem}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item

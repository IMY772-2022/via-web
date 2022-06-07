import { navigate } from "gatsby"
import React from "react"

import { deleteFromDynamo } from "../PhotoAnalysis/utils"
import { ImageRecord } from "./Album"

interface ItemProps {
  imageRecord: ImageRecord
  dynamoDbItems: ImageRecord[]
  setDynamoDBItems: React.Dispatch<React.SetStateAction<ImageRecord[]>>
}

const Item: React.FC<ItemProps> = props => {
  const item = props.imageRecord
  const { setDynamoDBItems, dynamoDbItems } = props
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
      <div className="card">
        <div className="card-image">
          <img src={filepath} alt="Stored file from database" />
        </div>
        <div className="card-content">
          <button
            onClick={() => {
              navigate("/edit", { state: { item } })
            }}
            className="button is-light"
          >
            Edit
          </button>
        </div>
        <div className="card-content">
          <button className="button is-light" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item

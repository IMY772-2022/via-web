import { navigate } from "gatsby"
import React from "react"

import { deleteFromDynamo } from "../PhotoAnalysis/utils"
import { ImageRecord } from "./Album"
import "./Item.scss"
import { useGetFilePath } from "./useGetFilePath"

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
    <>
      <div className="card rounded-lg">
        <div className="card-image">
          <img
            className="rounded-md"
            src={useGetFilePath(filepath)}
            alt="Stored file from the database"
          />
        </div>
        <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <button className="button button-sm is-danger">Edit</button>
          <button className="button button-sm is-danger" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </>
  )
}

export default Item

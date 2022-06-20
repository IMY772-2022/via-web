import { navigate } from "gatsby"
import React, { useState } from "react"
import "./item.scss"

import { deleteFromDynamo } from "../PhotoAnalysis/utils"
import { ImageRecord } from "./Album"
import { useGetFilePath } from "./useGetFilePath"
import ConfirmModal from "../ConfirmModal/ConfirmModal"

interface ItemProps {
  imageRecord: ImageRecord
  dynamoDbItems: ImageRecord[]
  setDynamoDBItems: React.Dispatch<React.SetStateAction<ImageRecord[]>>
}

const Item: React.FC<ItemProps> = props => {
  const item = props.imageRecord
  const { dynamoDbItems, setDynamoDBItems } = props
  const { filepath } = item
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const deleteItem = () => {
    setConfirmModalOpen(false)
    setConfirmModalOpen(true)
    deleteFromDynamo(item.id)
    const updatedItemArray = dynamoDbItems.filter(dynamoDbItem => {
      return dynamoDbItem.id != item.id
    })
    setDynamoDBItems(updatedItemArray)
  }
  return (
    <div className="album-card-container">
      <div className="card">
        {confirmModalOpen && (
          <ConfirmModal
            open={confirmModalOpen}
            setOpen={setConfirmModalOpen}
            confirmationMessage={"Are you sure you want to delete this image?"}
            action={deleteItem}
          />
        )}
        <div className="card-image">
          <img src={useGetFilePath(filepath)} alt="Stored file from database" />
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
          <button
            className="button is-light"
            onClick={() => setConfirmModalOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
